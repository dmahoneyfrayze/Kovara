import { Button } from "@/components/ui/Button";
import { SlabCard } from "@/components/slabs/SlabCard";
import { Filter, ChevronDown } from "lucide-react";

export default function SlabGallery() {
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
                                <div className="h-6 bg-slate-100 rounded relative">
                                    <div className="absolute left-0 top-1/2 -translate-y-1/2 w-full h-1 bg-slate-300 rounded"></div>
                                    <div className="absolute left-1/4 right-1/4 top-1/2 -translate-y-1/2 h-1 bg-amber-600 rounded"></div>
                                    <div className="absolute left-1/4 top-1/2 -translate-y-1/2 w-3 h-3 bg-white border-2 border-amber-600 rounded-full shadow cursor-pointer"></div>
                                    <div className="absolute right-1/4 top-1/2 -translate-y-1/2 w-3 h-3 bg-white border-2 border-amber-600 rounded-full shadow cursor-pointer"></div>
                                </div>
                                <div className="flex justify-between text-xs text-slate-500">
                                    <span>24"</span>
                                    <span>60"</span>
                                </div>
                            </div>
                        </div>
                    </aside>

                    {/* 3. Main Grid */}
                    <div className="flex-1">
                        <div className="flex items-center justify-between mb-6">
                            <span className="text-slate-500 text-sm">Showing 12 of 48 Slabs</span>
                            <div className="flex items-center gap-2">
                                <span className="text-sm font-medium text-slate-700">Sort by:</span>
                                <select className="text-sm border-none bg-transparent font-semibold text-slate-900 focus:ring-0 cursor-pointer">
                                    <option>Newest Arrivals</option>
                                    <option>Price: Low to High</option>
                                    <option>Price: High to Low</option>
                                    <option>Length: Longest First</option>
                                </select>
                            </div>
                        </div>

                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {[
                                "https://shopkovara.com/cdn/shop/products/5FT-Parota-Live-Edge-Dining-Table_540x.jpg",
                                "https://shopkovara.com/cdn/shop/products/6FT-Parota-Live-Edge-Dining-Table_540x.jpg",
                                "https://shopkovara.com/cdn/shop/products/7FT-Parota-Live-Edge-Dining-Table_540x.jpg",
                                "https://shopkovara.com/cdn/shop/products/CHIRICANO-J22977CHI_540x.jpg",
                                "https://shopkovara.com/cdn/shop/products/5FT-Parota-Live-Edge-Dining-Table_540x.jpg",
                                "https://shopkovara.com/cdn/shop/products/6FT-Parota-Live-Edge-Dining-Table_540x.jpg",
                                "https://shopkovara.com/cdn/shop/products/7FT-Parota-Live-Edge-Dining-Table_540x.jpg",
                                "https://shopkovara.com/cdn/shop/products/CHIRICANO-J22977CHI_540x.jpg",
                                "https://shopkovara.com/cdn/shop/products/5FT-Parota-Live-Edge-Dining-Table_540x.jpg",
                            ].map((img, i) => (
                                <SlabCard
                                    key={i}
                                    id={300 + i}
                                    species={i % 3 === 0 ? "Black Walnut" : "Parota Slab"}
                                    dimensions='96" x 38" x 2"'
                                    imageUrl={img}
                                />
                            ))}
                        </div>

                        {/* Pagination Wireframe */}
                        <div className="mt-12 flex justify-center gap-2">
                            <Button variant="outline" size="sm" disabled>Previous</Button>
                            <Button variant="secondary" size="sm" className="bg-slate-900 text-white hover:bg-slate-800">1</Button>
                            <Button variant="outline" size="sm">2</Button>
                            <Button variant="outline" size="sm">3</Button>
                            <span className="flex items-end px-2 text-slate-400">...</span>
                            <Button variant="outline" size="sm">8</Button>
                            <Button variant="outline" size="sm">Next</Button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}
