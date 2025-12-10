import { Button } from "@/components/ui/Button";
import { SlabCard } from "@/components/slabs/SlabCard";
import { getAllSlabs } from "@/lib/products";
import { Filter, ChevronDown } from "lucide-react";

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
                <div className="flex flex-col lg:flex-row gap-12">

                    {/* 2. Sidebar Filters (Wireframe) */}
                    <aside className="w-full lg:w-64 flex-shrink-0 space-y-8">
                        <div className="flex items-center justify-between lg:hidden mb-4">
                            <span className="font-bold text-lg">Filters</span>
                            <Button variant="outline" size="sm">
                                <Filter className="w-4 h-4 mr-2" /> Filters
                            </Button>
                        </div>

                        <div className="hidden lg:block space-y-8">
                            {/* Filter Group: Species */}
                            <div className="space-y-3">
                                <h3 className="font-semibold text-slate-900 flex justify-between items-center">
                                    Wood Species <ChevronDown className="w-4 h-4 text-slate-400" />
                                </h3>
                                <div className="space-y-2">
                                    {['Parota (Guanacaste)', 'Black Walnut', 'Teak', 'Monkey Pod'].map((item) => (
                                        <label key={item} className="flex items-center gap-2 text-sm text-slate-600 hover:text-slate-900 cursor-pointer">
                                            <input type="checkbox" className="rounded border-slate-300 text-amber-600 focus:ring-amber-500" />
                                            {item}
                                        </label>
                                    ))}
                                </div>
                            </div>

                            {/* Filter Group: Dimensions */}
                            <div className="space-y-3">
                                <h3 className="font-semibold text-slate-900 flex justify-between items-center">
                                    Length <ChevronDown className="w-4 h-4 text-slate-400" />
                                </h3>
                                <div className="space-y-2">
                                    {['< 6 ft', '6 - 8 ft', '8 - 10 ft', '10 ft +'].map((item) => (
                                        <label key={item} className="flex items-center gap-2 text-sm text-slate-600 hover:text-slate-900 cursor-pointer">
                                            <input type="checkbox" className="rounded border-slate-300 text-amber-600 focus:ring-amber-500" />
                                            {item}
                                        </label>
                                    ))}
                                </div>
                            </div>

                            <div className="space-y-3">
                                <h3 className="font-semibold text-slate-900 flex justify-between items-center">
                                    Width <ChevronDown className="w-4 h-4 text-slate-400" />
                                </h3>
                                {/* Mock Range Slider */}
                                <Button variant="outline" size="sm">8</Button>
                                <Button variant="outline" size="sm">Next</Button>
                            </div>
                        </div>
                    </aside>

                    {/* Main Grid */}
                    <div className="flex-1">
                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {slabs.map((slab) => (
                                <SlabCard
                                    key={slab.id}
                                    id={slab.id}
                                    species={slab.species}
                                    dimensions={slab.dimensions}
                                    imageUrl={slab.images[0]}
                                    isAvailable={slab.isAvailable}
                                />
                            ))}
                            {slabs.length === 0 && (
                                <div className="col-span-full py-20 text-center">
                                    <p className="text-slate-500">No slabs found matching your criteria.</p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
