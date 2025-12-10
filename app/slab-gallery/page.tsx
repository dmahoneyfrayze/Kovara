import { Button } from "@/components/ui/Button";
import { SlabCard } from "@/components/slabs/SlabCard";
import { getAllSlabs } from "@/lib/products";
import { SlabGalleryClient } from "@/components/gallery/SlabGalleryClient";

export default function SlabGallery() {
    const slabs = getAllSlabs();
    return (
        <div className="bg-white min-h-screen pb-20">
            {/* 1. Header Section */}
            <section className="bg-slate-50 border-b border-slate-200 py-12 md:py-20">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-slate-900 mb-4">
                        Live Edge Slab Gallery
                    </h1>
                    <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                        Browse our current inventory of premium Parota, Walnut, and Exotic slabs.
                        All slabs are kiln-dried and ready for customization.
                    </p>
                </div>
            </section>

            <div className="container mx-auto px-4 py-12">
                <SlabGalleryClient initialSlabs={slabs} />
            </div>
        </div>
    );
}
