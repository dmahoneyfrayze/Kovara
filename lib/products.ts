import fs from 'fs';
import path from 'path';
import { parse } from 'csv-parse/sync';

export interface Slab {
    id: string; // Using Handle or Variant SKU as ID
    title: string;
    species: string;
    dimensions: string;
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
                // Initial setup for this product
                const dimStr = `${row['Length (product.metafields.custom.length)'] || '?'} x ${row['Width (product.metafields.custom.width)'] || '?'} x ${row['Thickness (product.metafields.custom.thickness)'] || '?'}`;

                // Clean description: remove HTML tags for simple view, or keep if rendering HTML
                // For now, let's keep a simplified version or the raw HTML needed
                const desc = row['Body (HTML)']
                    ? row['Body (HTML)'].replace(/<[^>]*>?/gm, ' ').substring(0, 300).trim() + "..."
                    : "";

                productMap.set(handle, {
                    id: handle,
                    title: row.Title || "Untitled Slab",
                    species: row['Wood Species (product.metafields.custom.wood_species)'] || "Live Edge Slab",
                    dimensions: dimStr.replace(/inch|"/g, '').trim() + '"', // Normalize dims
                    price: parseFloat(row['Variant Price'] || "0"),
                    description: desc,
                    images: [],
                    sku: row['Variant SKU'] || "",
                    isAvailable: parseInt(row['Variant Inventory Qty'] || "0") > 0 || true, // Default true if tracking off
                    features: ["Kiln Dried", "Flattened", "Sustainably Sourced"], // Defaults
                });
            }

            // Add image if present in this row
            const slab = productMap.get(handle)!;
            if (row['Image Src']) {
                slab.images.push(row['Image Src']);
            }
        });

        return Array.from(productMap.values()).filter(s => s.price > 0); // Filter out empty/dummy rows if any
    } catch (error) {
        console.error("Error parsing CSV:", error);
        return [];
    }
}

export function getSlabById(handle: string): Slab | undefined {
    const slabs = getAllSlabs();
    return slabs.find(s => s.id === handle);
}
