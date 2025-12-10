import fs from 'fs';
import path from 'path';
import { parse } from 'csv-parse/sync';

export interface Slab {
    id: string; // Using Handle or Variant SKU as ID
    title: string;
    species: string;
    length: number;
    width: number;
    thickness: number;
    dimensions: string; // Restored for UI compatibility
    seating: string | null;
    shape: 'Rectangular' | 'Round' | 'Other';
    price: number;
    description: string;
    images: string[];
    isAvailable: boolean;
    sku: string;
    features: string[];
}

const CSV_PATH = path.join(process.cwd(), 'products_export_1 (8).csv');

interface ShopifyProductRow {
    Handle: string;
    Title: string;
    'Body (HTML)': string;
    'Variant Price': string;
    'Variant SKU': string;
    'Image Src': string;
    'Wood Species (product.metafields.custom.wood_species)': string;
    'Length (product.metafields.custom.length)': string;
    'Width (product.metafields.custom.width)': string;
    'Thickness (product.metafields.custom.thickness)': string;
    'Variant Inventory Qty': string;
    'Tags': string;
}

export function getAllSlabs(): Slab[] {
    try {
        const fileContent = fs.readFileSync(CSV_PATH, 'utf-8');
        const records = parse(fileContent, {
            columns: true,
            skip_empty_lines: true,
            relax_quotes: true, // Handle potential messy quotes in HTML
        }) as ShopifyProductRow[];

        // Group records by Handle since Shopify exports have multiple rows per product (images, variants)
        const productMap = new Map<string, Slab>();

        records.forEach(row => {
            const handle = row.Handle;
            if (!handle) return;

            if (!productMap.has(handle)) {

                // Parse Dimensions (Handle '120 Inches', '120', etc)
                const parseDim = (val: string) => {
                    if (!val) return 0;
                    return parseFloat(val.toLowerCase().replace('inches', '').replace('"', '').trim()) || 0;
                };

                const length = parseDim(row['Length (product.metafields.custom.length)']);
                const width = parseDim(row['Width (product.metafields.custom.width)']);
                const thickness = parseDim(row['Thickness (product.metafields.custom.thickness)']);

                // Parse Tags for Seating and Shape
                const tags = row.Tags || '';

                // Seating
                let seating: string | null = null;
                const seatingMatch = tags.match(/Seating Capacity:\s*([\w\d\-\+]+)/i);
                if (seatingMatch) {
                    seating = seatingMatch[1].replace('Person', '').trim();
                } else if (length > 0) {
                    // Fallback heuristic if not tagged
                    const feet = length / 12;
                    if (feet < 6) seating = "4-6";
                    else if (feet < 8) seating = "6-8";
                    else if (feet < 10) seating = "8-10";
                    else if (feet < 12) seating = "10-12";
                    else seating = "12+";
                }

                // Shape
                let shape: 'Rectangular' | 'Round' | 'Other' = 'Rectangular';
                if (tags.toLowerCase().includes('type: round') || tags.toLowerCase().includes('round')) {
                    shape = 'Round';
                }

                // Clean description
                const desc = row['Body (HTML)']
                    ? row['Body (HTML)'].replace(/<[^>]*>?/gm, ' ').substring(0, 300).trim() + "..."
                    : "";

                productMap.set(handle, {
                    id: handle,
                    title: row.Title || "Untitled Slab",
                    species: row['Wood Species (product.metafields.custom.wood_species)'] || "Live Edge Slab",
                    length,
                    width,
                    thickness,
                    dimensions: `${length}" x ${width}" x ${thickness}"`, // Derived for display
                    seating,
                    shape,
                    price: parseFloat(row['Variant Price'] || "0"),
                    description: desc,
                    images: [],
                    sku: row['Variant SKU'] || "",
                    isAvailable: parseInt(row['Variant Inventory Qty'] || "0") > 0 || true,
                    features: ["Kiln Dried", "Flattened", "Sustainably Sourced"],
                });
            }

            // Add image if present in this row
            const slab = productMap.get(handle)!;
            if (row['Image Src']) {
                slab.images.push(row['Image Src']);
            }
        });

        return Array.from(productMap.values()).filter(s => s.price > 0);
    } catch (error) {
        console.error("Error parsing CSV:", error);
        return [];
    }
}

export function getSlabById(handle: string): Slab | undefined {
    const slabs = getAllSlabs();
    return slabs.find(s => s.id === handle);
}

export function getRelatedSlabs(currentId: string, limit: number = 3): Slab[] {
    const slabs = getAllSlabs();
    return slabs.filter(s => s.id !== currentId).slice(0, limit);
}
