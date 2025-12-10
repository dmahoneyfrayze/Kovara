import { Button } from "@/components/ui/Button";
import { Check, Truck, ShieldCheck, ArrowLeft, Info, HelpCircle, ChevronDown, MapPin, Package } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getSlabById, getRelatedSlabs } from "@/lib/products";
import { SlabCard } from "@/components/slabs/SlabCard";
import { JsonLd } from "@/components/seo/JsonLd";
import { CountdownTimer } from "@/components/marketing/CountdownTimer";

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const slab = getSlabById(decodeURIComponent(id));
    if (!slab) return { title: "Slab Not Found" };

    const cleanDesc = slab.description?.replace(/<[^>]*>?/gm, '');

    return {
        title: `${slab.title} | Kovara`,
        description: `Buy ${slab.species} live edge slab ${slab.dimensions}. ${cleanDesc ? cleanDesc.substring(0, 100) : ''}...`,
    }
}

export default async function SlabDetail({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const slabId = decodeURIComponent(id);
    const slab = getSlabById(slabId);

    if (!slab) return notFound();

    const relatedSlabs = getRelatedSlabs(slabId, 3);

    // Calculate regular price derived from "sale" price (assuming 30% off)
    // Price / 0.7 = Regular Price
    const regularPrice = Math.round(slab.price / 0.7);
    const savings = regularPrice - slab.price;
    const monthlyPrice = (slab.price / 12).toFixed(2); // Mock monthly

    // Parse dim string "120"L x 40"W x 2"H" -> objects if needed, or manual display
    // Current dim format: "130\" x 45\" x 2.5\""
    const dims = slab.dimensions.replace(/"/g, '').split('x').map(s => s.trim());
    const [length, width, thickness] = dims.length === 3 ? dims : ["?", "?", "?"];

    const productSchema = {
        "@context": "https://schema.org/",
        "@type": "Product",
        "name": slab.title,
        "image": slab.images,
        "description": slab.description?.replace(/<[^>]*>?/gm, '').substring(0, 300),
        "sku": slab.sku,
        "brand": {
            "@type": "Brand",
            "name": "Kovara"
        },
        "offers": {
            "@type": "Offer",
            "url": `https://kovara.com/slabs/${slab.id}`,
            "priceCurrency": "USD",
            "price": slab.price,
            "availability": slab.isAvailable ? "https://schema.org/InStock" : "https://schema.org/SoldOut",
            "itemCondition": "https://schema.org/NewCondition"
        }
    };

    return (
        <div className="bg-white min-h-screen pb-20 font-sans">
            <JsonLd data={productSchema} />

            <div className="container mx-auto px-4 py-6 md:py-12">
                <Link href="/slab-gallery" className="inline-flex items-center text-sm text-slate-500 hover:text-slate-900 mb-6 group">
                    <ArrowLeft className="w-4 h-4 mr-2 transition-transform group-hover:-translate-x-1" /> Back to Gallery
                </Link>

                <div className="grid lg:grid-cols-12 gap-12">
                    {/* Gallery Section (Left - 7 cols) */}
                    <div className="lg:col-span-7 space-y-4">
                        <div className="aspect-[4/3] bg-slate-100 rounded-lg overflow-hidden border border-slate-200 relative">
                            {slab.images[0] ? (
                                <img src={slab.images[0]} alt={slab.title} className="w-full h-full object-cover" />
                            ) : (
                                <div className="flex items-center justify-center h-full text-slate-400">No Image Available</div>
                            )}
                            <div className="absolute top-4 left-4 bg-white/95 backdrop-blur px-3 py-1 text-xs font-bold rounded uppercase tracking-wide shadow-sm">
                                {slab.species}
                            </div>
                        </div>
                        {slab.images.length > 1 && (
                            <div className="grid grid-cols-5 gap-3">
                                {slab.images.map((img, i) => (
                                    <div key={i} className="aspect-square bg-slate-100 rounded cursor-pointer border hover:border-amber-600 transition-colors overflow-hidden">
                                        <img src={img} alt={`View ${i + 1}`} className="w-full h-full object-cover" />
                                    </div>
                                ))}
                            </div>
                        )}

                        {/* Detailed Description Block (Moved to left for better layout balance on desktop) */}
                        <div className="mt-12 prose prose-slate max-w-none hidden lg:block">
                            <h3 className="font-serif text-2xl mb-4">About this {slab.species} Component</h3>
                            <p className="leading-relaxed text-slate-600">{slab.description}</p>
                            <p className="text-slate-600 mt-4">
                                Experience the natural beauty of this authentic {slab.species} live edge slab. Each piece is one-of-a-kind, showcasing distinct grain patterns and rich colors, making it a perfect centerpiece for your dining room or conference area.
                            </p>
                        </div>
                    </div>

                    {/* Product Info (Right - 5 cols) */}
                    <div className="lg:col-span-5">
                        <div className="sticky top-24">
                            <h1 className="text-2xl font-serif font-bold text-slate-900 mb-1">{slab.title}</h1>
                            <div className="text-sm text-slate-500 mb-4">SKU: {slab.sku}</div>

                            {/* Price Block */}
                            <div className="bg-slate-50 p-5 rounded-lg border border-slate-200 mb-6">
                                <div className="flex items-center gap-2 mb-1">
                                    <span className="bg-red-100 text-red-700 text-xs font-bold px-2 py-0.5 rounded">30% OFF</span>
                                </div>
                                <div className="flex items-baseline gap-3 mb-1">
                                    <span className="text-3xl font-bold text-slate-900">${slab.price.toLocaleString()}</span>
                                    <span className="text-lg text-slate-400 line-through">${regularPrice.toLocaleString()}</span>
                                </div>
                                <div className="text-sm text-green-600 font-medium mb-4">
                                    You save ${savings.toLocaleString()}
                                </div>

                                <div className="text-xs text-slate-500 flex items-center gap-1 border-t border-slate-200 pt-3">
                                    <span>From <strong>${monthlyPrice}/mo</strong> with</span>
                                    <span className="font-bold text-slate-700">ShopPay</span>
                                    <a href="#" className="underline decoration-slate-300 ml-auto">See plans</a>
                                </div>
                            </div>

                            <p className="text-slate-600 text-sm mb-6 leading-relaxed">
                                {slab.dimensions} • {slab.species.toUpperCase()} <br />
                                <span className="text-slate-400">Weight: 243.0 lbs • Seating: 10-12 Persons</span>
                            </p>

                            {/* Dimensions Box */}
                            <div className="grid grid-cols-2 gap-px bg-slate-200 border border-slate-200 rounded-lg overflow-hidden mb-6 text-sm">
                                <div className="bg-white p-3">
                                    <span className="block text-xs text-slate-500 uppercase font-bold">Length</span>
                                    {length} Inches
                                </div>
                                <div className="bg-white p-3">
                                    <span className="block text-xs text-slate-500 uppercase font-bold">Width</span>
                                    {width} Inches
                                </div>
                                <div className="bg-white p-3">
                                    <span className="block text-xs text-slate-500 uppercase font-bold">Thickness</span>
                                    {thickness} Inches
                                </div>
                                <div className="bg-white p-3">
                                    <span className="block text-xs text-slate-500 uppercase font-bold">Species</span>
                                    {slab.species}
                                </div>
                            </div>

                            {/* Action Buttons */}
                            <div className="space-y-3 mb-6">
                                <Button size="lg" className="w-full bg-slate-900 hover:bg-slate-800 text-white h-14 text-lg shadow-xl shadow-slate-200">
                                    Add to cart
                                </Button>
                                <Button variant="outline" className="w-full h-12 border-slate-300">
                                    Buy with <span className="font-bold ml-1">PayPal</span>
                                </Button>
                            </div>

                            <CountdownTimer />

                            {/* Stock Status */}
                            <div className="space-y-3 py-4 border-t border-b border-slate-100 mb-8 text-sm">
                                <div className="flex items-center gap-2 text-green-700 font-medium">
                                    <span className="relative flex h-2.5 w-2.5 mr-1">
                                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                        <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-600"></span>
                                    </span>
                                    In stock, ready to ship
                                </div>
                                <div className="flex items-start gap-2 text-slate-600">
                                    <MapPin className="w-4 h-4 mt-0.5 text-slate-400" />
                                    <div>
                                        <span className="block text-slate-900 font-medium">Pickup available at Arlington</span>
                                        <span className="text-xs">Usually ready in 24 hours</span>
                                    </div>
                                </div>
                            </div>

                            {/* Accordions */}
                            <div className="space-y-4">
                                <details className="group border-b border-slate-200 pb-4">
                                    <summary className="flex justify-between items-center cursor-pointer font-bold text-slate-900 list-none">
                                        Natural Cracks vs. Unnatural
                                        <ChevronDown className="w-4 h-4 transition-transform group-open:rotate-180" />
                                    </summary>
                                    <p className="text-sm text-slate-600 mt-3 leading-relaxed">
                                        Small surface cracks, long thin cracks, and movement around knots are natural characteristics of solid wood, developing over time as the wood adjusts to its environment. These are not imperfections, but rather part of what makes your piece unique. Please note: tables with natural cracks cannot be returned outside of our 14-day return policy.
                                    </p>
                                </details>

                                <details className="group border-b border-slate-200 pb-4">
                                    <summary className="flex justify-between items-center cursor-pointer font-bold text-slate-900 list-none">
                                        Preventing Natural Cracks
                                        <ChevronDown className="w-4 h-4 transition-transform group-open:rotate-180" />
                                    </summary>
                                    <p className="text-sm text-slate-600 mt-3 leading-relaxed">
                                        To help minimize cracks, apply wood-specific mineral oil every 3 months. This helps maintain the wood is moisture content, which can reduce the likelihood of cracking. However, this is not a complete solution, and moisture balance must be monitored.
                                    </p>
                                </details>

                                <details className="group border-b border-slate-200 pb-4">
                                    <summary className="flex justify-between items-center cursor-pointer font-bold text-slate-900 list-none">
                                        General Care Tips
                                        <ChevronDown className="w-4 h-4 transition-transform group-open:rotate-180" />
                                    </summary>
                                    <ul className="text-sm text-slate-600 mt-3 list-disc pl-5 space-y-2 leading-relaxed">
                                        <li>Dust regularly with a microfiber cloth to prevent dust buildup.</li>
                                        <li>Clean using a soft cloth with a mild soap solution or wood oil.</li>
                                        <li>Oil your table with mineral oil every few months to maintain moisture.</li>
                                    </ul>
                                </details>

                                <details className="group border-b border-slate-200 pb-4">
                                    <summary className="flex justify-between items-center cursor-pointer font-bold text-slate-900 list-none">
                                        Avoid High-Heat Areas
                                        <ChevronDown className="w-4 h-4 transition-transform group-open:rotate-180" />
                                    </summary>
                                    <p className="text-sm text-slate-600 mt-3 leading-relaxed">
                                        Extreme temperatures can be very damaging. Do not place your table near radiators, heaters, or in direct sunlight. Wood exposed to high heat can dry out, warp, and crack.
                                    </p>
                                </details>

                                <details className="group border-b border-slate-200 pb-4">
                                    <summary className="flex justify-between items-center cursor-pointer font-bold text-slate-900 list-none">
                                        Shipping & Delivery
                                        <ChevronDown className="w-4 h-4 transition-transform group-open:rotate-180" />
                                    </summary>
                                    <div className="text-sm text-slate-600 mt-3 space-y-2 leading-relaxed">
                                        <p><strong>Delivery Timeframes:</strong> In-stock items in DFW: 3-5 business days. Nationwide: Contact for quote.</p>
                                        <p><strong>White Glove:</strong> Available for larger shipments, may require longer delivery times.</p>
                                    </div>
                                </details>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Related Slabs */}
                {relatedSlabs.length > 0 && (
                    <div className="mt-24 pt-12 border-t border-slate-200">
                        <h2 className="text-2xl font-serif font-bold mb-8">You Might Also Like</h2>
                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {relatedSlabs.map((s) => (
                                <SlabCard
                                    key={s.id}
                                    id={s.id}
                                    species={s.species}
                                    dimensions={s.dimensions}
                                    imageUrl={s.images[0]}
                                    isAvailable={s.isAvailable}
                                />
                            ))}
                        </div>
                    </div>
                )}
            </div>

            {/* Mobile Sticky CTA */}
            <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-slate-200 p-4 lg:hidden z-50 flex items-center justify-between shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)]">
                <div>
                    <span className="block text-xs text-slate-500 uppercase">Total</span>
                    <span className="font-bold text-xl text-slate-900">${slab.price.toLocaleString()}</span>
                </div>
                <Button className="bg-slate-900 text-white px-8">
                    Add to Cart
                </Button>
            </div>
        </div>
    );
}

