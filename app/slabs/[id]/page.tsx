import { Button } from "@/components/ui/Button";
import { Check, Truck, ShieldCheck, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getSlabById, getRelatedSlabs } from "@/lib/products";
import { SlabCard } from "@/components/slabs/SlabCard";

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const slab = getSlabById(decodeURIComponent(id));
    if (!slab) return { title: "Slab Not Found" };

    // remove html from desc for meta
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

    return (
        <div className="bg-white min-h-screen pb-20">
            <div className="container mx-auto px-4 py-6 md:py-12">
                {/* Breadcrumb / Back */}
                <Link href="/slab-gallery" className="inline-flex items-center text-sm text-slate-500 hover:text-slate-900 mb-6 group">
                    <ArrowLeft className="w-4 h-4 mr-2 transition-transform group-hover:-translate-x-1" /> Back to Gallery
                </Link>

                <div className="grid lg:grid-cols-2 gap-12">
                    {/* Gallery Section */}
                    <div className="space-y-4">
                        <div className="aspect-[4/3] bg-slate-100 rounded-lg overflow-hidden border border-slate-200 relative">
                            {slab.images[0] ? (
                                <img src={slab.images[0]} alt={slab.title} className="w-full h-full object-cover" />
                            ) : (
                                <div className="flex items-center justify-center h-full text-slate-400">No Image Available</div>
                            )}

                            <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 text-xs font-bold rounded uppercase tracking-wide">
                                Available
                            </div>
                        </div>
                        {slab.images.length > 1 && (
                            <div className="grid grid-cols-4 gap-4">
                                {slab.images.map((img, i) => (
                                    <div key={i} className="aspect-square bg-slate-100 rounded cursor-pointer border hover:border-amber-600 transition-colors overflow-hidden">
                                        <img src={img} alt={`View ${i + 1}`} className="w-full h-full object-cover" />
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Product Info */}
                    <div>
                        <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-2">{slab.title}</h1>
                        <div className="flex items-center gap-4 text-sm text-slate-500 mb-6">
                            <span className="bg-slate-100 px-2 py-1 rounded">SKU: {slab.sku}</span>
                            <span>{slab.species}</span>
                        </div>

                        <div className="text-3xl font-bold text-amber-700 mb-8">${slab.price.toLocaleString()}</div>

                        <div className="prose prose-slate mb-8 text-slate-600 leading-relaxed">
                            <p>{slab.description}</p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                            <div className="bg-slate-50 p-4 rounded border border-slate-100">
                                <span className="block text-xs uppercase tracking-wider text-slate-500 font-bold mb-1">Dimensions</span>
                                <span className="font-semibold text-slate-900">{slab.dimensions}</span>
                            </div>
                            <div className="bg-slate-50 p-4 rounded border border-slate-100">
                                <span className="block text-xs uppercase tracking-wider text-slate-500 font-bold mb-1">Moisture</span>
                                <span className="font-semibold text-slate-900">Kiln Dried 6-8%</span>
                            </div>
                        </div>

                        <div className="space-y-4 mb-8">
                            {slab.features.map((feat, i) => (
                                <div key={i} className="flex items-center gap-3 text-slate-700">
                                    <Check className="w-5 h-5 text-green-600 flex-shrink-0" />
                                    <span>{feat}</span>
                                </div>
                            ))}
                        </div>

                        {/* Actions */}
                        <div className="flex flex-col gap-3 p-6 bg-slate-50 rounded-xl border border-slate-200">
                            <Button size="lg" className="w-full bg-slate-900 text-white hover:bg-slate-800 h-12 text-lg">
                                Request Quote / Reserve
                            </Button>
                            <p className="text-xs text-center text-slate-500">
                                No payment required to reserve for 48 hours for design consultation.
                            </p>
                        </div>

                        {/* Trust Badges */}
                        <div className="grid grid-cols-2 gap-4 mt-8 pt-8 border-t border-slate-200">
                            <div className="flex items-start gap-3">
                                <Truck className="w-5 h-5 text-amber-600 mt-1" />
                                <div>
                                    <span className="font-bold text-slate-900 block text-sm">Nationwide Shipping</span>
                                    <span className="text-xs text-slate-500">Crated & Insured Delivery</span>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <ShieldCheck className="w-5 h-5 text-amber-600 mt-1" />
                                <div>
                                    <span className="font-bold text-slate-900 block text-sm">Evaluation Guarantee</span>
                                    <span className="text-xs text-slate-500">Return if not as described</span>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <Check className="w-5 h-5 text-amber-600 mt-1" />
                                <div>
                                    <span className="font-bold text-slate-900 block text-sm">Kiln Dried</span>
                                    <span className="text-xs text-slate-500">To 6-8% moisture content</span>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <Check className="w-5 h-5 text-amber-600 mt-1" />
                                <div>
                                    <span className="font-bold text-slate-900 block text-sm">Sustainably Sourced</span>
                                    <span className="text-xs text-slate-500">Ethical harvesting practices</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Related Slabs */}
                {relatedSlabs.length > 0 && (
                    <div className="mt-24 pt-12 border-t border-slate-200">
                        <h2 className="text-2xl font-bold mb-8">You Might Also Like</h2>
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
            <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-slate-200 p-4 lg:hidden z-50 flex items-center justify-between shadow-lg">
                <div>
                    <span className="block text-xs text-slate-500 uppercase">Price</span>
                    <span className="font-bold text-xl text-slate-900">${slab.price.toLocaleString()}</span>
                </div>
                <Button className="bg-amber-600 hover:bg-amber-700 text-white shadow-md">
                    Request Quote
                </Button>
            </div>
        </div>
    );
}
