"use client";

import { useState, useMemo } from "react";
import { Slab } from "@/lib/products";
import { SlabCard } from "@/components/slabs/SlabCard";
import { Button } from "@/components/ui/Button";
import { Filter, ChevronDown, Check } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface SlabGalleryClientProps {
    initialSlabs: Slab[];
}

type FilterState = {
    species: string[];
    shape: string[];
    seating: string[];
    length: string[];
};

export function SlabGalleryClient({ initialSlabs }: SlabGalleryClientProps) {
    const [filters, setFilters] = useState<FilterState>({
        species: [],
        shape: [],
        seating: [],
        length: [],
    });
    const [isMobileFiltersOpen, setIsMobileFiltersOpen] = useState(false);

    // Filter Logic
    const filteredSlabs = useMemo(() => {
        return initialSlabs.filter(slab => {
            // Species Filter
            if (filters.species.length > 0) {
                // Normalize for looser matching if needed, but exact matches preferred from checkboxes
                const matches = filters.species.includes(slab.species);
                if (!matches) return false;
            }

            // Shape Filter
            if (filters.shape.length > 0) {
                if (!filters.shape.includes(slab.shape)) return false;
            }

            // Seating Filter
            if (filters.seating.length > 0) {
                if (!slab.seating || !filters.seating.includes(slab.seating)) return false;
            }

            // Length Filter
            if (filters.length.length > 0) {
                const l = slab.length;
                const matchesLength = filters.length.some(range => {
                    if (range === '< 6 ft') return l < 72;
                    if (range === '6 - 8 ft') return l >= 72 && l < 96;
                    if (range === '8 - 10 ft') return l >= 96 && l < 120;
                    if (range === '10 ft +') return l >= 120;
                    return false;
                });
                if (!matchesLength) return false;
            }

            return true;
        });
    }, [initialSlabs, filters]);

    // Metadata extraction for sidebar options
    const uniqueSpecies = useMemo(() => Array.from(new Set(initialSlabs.map(s => s.species))).sort(), [initialSlabs]);
    const uniqueShapes = ['Rectangular', 'Round', 'Other']; // Fixed set usually
    const uniqueSeating = ['4-6', '6-8', '8-10', '10-12', '12+']; // Fixed set
    const lengthRanges = ['< 6 ft', '6 - 8 ft', '8 - 10 ft', '10 ft +'];

    const toggleFilter = (category: keyof FilterState, value: string) => {
        setFilters(prev => {
            const current = prev[category];
            const updated = current.includes(value)
                ? current.filter(item => item !== value)
                : [...current, value];
            return { ...prev, [category]: updated };
        });
    };

    return (
        <div className="flex flex-col lg:flex-row gap-12">

            {/* Mobile Filter Toggle */}
            <div className="flex items-center justify-between lg:hidden mb-4">
                <span className="font-bold text-lg">Filters ({filteredSlabs.length} Slabs)</span>
                <Button variant="outline" size="sm" onClick={() => setIsMobileFiltersOpen(!isMobileFiltersOpen)}>
                    <Filter className="w-4 h-4 mr-2" /> Filters
                </Button>
            </div>

            {/* Sidebar */}
            <aside className={`w-full lg:w-64 flex-shrink-0 space-y-8 ${isMobileFiltersOpen ? 'block' : 'hidden lg:block'}`}>

                {/* Species */}
                <div className="space-y-3 pb-6 border-b border-slate-100">
                    <h3 className="font-semibold text-slate-900 text-sm uppercase tracking-wider">Wood Species</h3>
                    <div className="space-y-2">
                        {uniqueSpecies.map(item => (
                            <label key={item} className="flex items-center gap-3 text-sm text-slate-600 hover:text-slate-900 cursor-pointer group">
                                <div className={`w-4 h-4 rounded border flex items-center justify-center transition-colors ${filters.species.includes(item) ? 'bg-amber-600 border-amber-600' : 'border-slate-300 group-hover:border-slate-400'}`}>
                                    {filters.species.includes(item) && <Check className="w-3 h-3 text-white" />}
                                </div>
                                <input
                                    type="checkbox"
                                    className="hidden"
                                    checked={filters.species.includes(item)}
                                    onChange={() => toggleFilter('species', item)}
                                />
                                {item}
                            </label>
                        ))}
                    </div>
                </div>

                {/* Seating */}
                <div className="space-y-3 pb-6 border-b border-slate-100">
                    <h3 className="font-semibold text-slate-900 text-sm uppercase tracking-wider">Seating Capacity</h3>
                    <div className="flex flex-wrap gap-2">
                        {uniqueSeating.map(item => (
                            <button
                                key={item}
                                onClick={() => toggleFilter('seating', item)}
                                className={`px-3 py-1 text-xs border rounded-full transition-all ${filters.seating.includes(item)
                                        ? 'bg-amber-600 border-amber-600 text-white'
                                        : 'border-slate-200 text-slate-600 hover:border-slate-300'
                                    }`}
                            >
                                {item} Person
                            </button>
                        ))}
                    </div>
                </div>

                {/* Shape */}
                <div className="space-y-3 pb-6 border-b border-slate-100">
                    <h3 className="font-semibold text-slate-900 text-sm uppercase tracking-wider">Shape</h3>
                    <div className="space-y-2">
                        {uniqueShapes.map(item => (
                            <label key={item} className="flex items-center gap-3 text-sm text-slate-600 hover:text-slate-900 cursor-pointer group">
                                <div className={`w-4 h-4 rounded-full border flex items-center justify-center transition-colors ${filters.shape.includes(item) ? 'bg-amber-600 border-amber-600' : 'border-slate-300 group-hover:border-slate-400'}`}>
                                    {filters.shape.includes(item) && <div className="w-2 h-2 rounded-full bg-white" />}
                                </div>
                                <input
                                    type="checkbox"
                                    className="hidden"
                                    checked={filters.shape.includes(item)}
                                    onChange={() => toggleFilter('shape', item)}
                                />
                                {item}
                            </label>
                        ))}
                    </div>
                </div>

                {/* Length */}
                <div className="space-y-3">
                    <h3 className="font-semibold text-slate-900 text-sm uppercase tracking-wider">Length</h3>
                    <div className="space-y-2">
                        {lengthRanges.map(item => (
                            <label key={item} className="flex items-center gap-3 text-sm text-slate-600 hover:text-slate-900 cursor-pointer group">
                                <div className={`w-4 h-4 rounded border flex items-center justify-center transition-colors ${filters.length.includes(item) ? 'bg-amber-600 border-amber-600' : 'border-slate-300 group-hover:border-slate-400'}`}>
                                    {filters.length.includes(item) && <Check className="w-3 h-3 text-white" />}
                                </div>
                                <input
                                    type="checkbox"
                                    className="hidden"
                                    checked={filters.length.includes(item)}
                                    onChange={() => toggleFilter('length', item)}
                                />
                                {item}
                            </label>
                        ))}
                    </div>
                </div>

            </aside>

            {/* Grid */}
            <div className="flex-1">
                <div className="mb-6 flex justify-between items-center">
                    <p className="text-slate-500 text-sm">Showing {filteredSlabs.length} results</p>
                    {/* Could add Sort Select here */}
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    <AnimatePresence mode="popLayout">
                        {filteredSlabs.map((slab) => (
                            <motion.div
                                key={slab.id}
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.2 }}
                            >
                                <SlabCard
                                    id={slab.id}
                                    species={slab.species}
                                    dimensions={slab.dimensions}
                                    imageUrl={slab.images[0]}
                                    isAvailable={slab.isAvailable}
                                    price={slab.price}
                                />
                            </motion.div>
                        ))}
                    </AnimatePresence>

                    {filteredSlabs.length === 0 && (
                        <div className="col-span-full py-20 text-center bg-slate-50 rounded-lg">
                            <p className="text-slate-500 mb-4">No slabs found matching your criteria.</p>
                            <Button
                                variant="outline"
                                onClick={() => setFilters({ species: [], shape: [], seating: [], length: [] })}
                            >
                                Clear All Filters
                            </Button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
