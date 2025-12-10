"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { Check, ChevronRight, ChevronLeft } from "lucide-react";
import Image from "next/image"; // Though we are using placeholders for now

const STEPS = [
    { id: 1, name: "Choose Slab" },
    { id: 2, name: "Select Base" },
    { id: 3, name: "Finish & Review" },
];

const MOCK_SLABS = [
    { id: 1, name: "Parota Slab #402", price: 2800, dims: '96" x 40"' },
    { id: 2, name: "Black Walnut #118", price: 4200, dims: '84" x 38"' },
    { id: 3, name: "Parota Slab #405", price: 3100, dims: '108" x 42"' },
];

const MOCK_BASES = [
    { id: 'spider', name: "Spider Base", price: 800 },
    { id: 'u-shape', name: "U-Shape Legs", price: 600 },
    { id: 'wood', name: "Box Wood Base", price: 1200 },
];

export function TableConfigurator() {
    const [step, setStep] = useState(1);
    const [config, setConfig] = useState<{
        slab: typeof MOCK_SLABS[0] | null;
        base: typeof MOCK_BASES[0] | null;
    }>({
        slab: null,
        base: null,
    });

    const nextStep = () => setStep((s) => Math.min(s + 1, 3));
    const prevStep = () => setStep((s) => Math.max(s - 1, 1));

    const totalPrice = (config.slab?.price || 0) + (config.base?.price || 0);

    return (
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">
            {/* Main Configurator Area */}
            <div className="flex-1 bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm">
                {/* Progress Bar */}
                <div className="bg-slate-50 border-b border-slate-200 p-4">
                    <div className="flex items-center justify-between max-w-lg mx-auto">
                        {STEPS.map((s, idx) => (
                            <div key={s.id} className="flex items-center gap-2">
                                <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm ${step === s.id ? "bg-amber-600 text-white" :
                                        step > s.id ? "bg-green-600 text-white" : "bg-slate-200 text-slate-500"
                                    }`}>
                                    {step > s.id ? <Check className="w-4 h-4" /> : s.id}
                                </div>
                                <span className={`text-sm font-medium hidden sm:inline ${step === s.id ? "text-slate-900" : "text-slate-500"}`}>
                                    {s.name}
                                </span>
                                {idx < STEPS.length - 1 && <div className="w-8 h-px bg-slate-300 hidden sm:block"></div>}
                            </div>
                        ))}
                    </div>
                </div>

                <div className="p-6 md:p-8 min-h-[400px]">

                    {/* STEP 1: Choose Slab */}
                    {step === 1 && (
                        <div className="space-y-6">
                            <h2 className="text-2xl font-bold">Select Your Slab</h2>
                            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                                {MOCK_SLABS.map((slab) => (
                                    <div
                                        key={slab.id}
                                        onClick={() => setConfig({ ...config, slab })}
                                        className={`cursor-pointer border-2 rounded-lg p-4 transition-all hover:shadow-md ${config.slab?.id === slab.id ? "border-amber-600 bg-amber-50" : "border-slate-200 hover:border-slate-300"
                                            }`}
                                    >
                                        <div className="aspect-video bg-slate-200 rounded mb-3 flex items-center justify-center text-slate-400 text-xs">Slab Img</div>
                                        <div className="font-bold">{slab.name}</div>
                                        <div className="text-sm text-slate-500">{slab.dims}</div>
                                        <div className="mt-2 font-medium text-amber-700">${slab.price.toLocaleString()}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* STEP 2: Choose Base */}
                    {step === 2 && (
                        <div className="space-y-6">
                            <h2 className="text-2xl font-bold">Choose a Base Style</h2>
                            <div className="grid sm:grid-cols-3 gap-4">
                                {MOCK_BASES.map((base) => (
                                    <div
                                        key={base.id}
                                        onClick={() => setConfig({ ...config, base })}
                                        className={`cursor-pointer border-2 rounded-lg p-4 transition-all hover:shadow-md ${config.base?.id === base.id ? "border-amber-600 bg-amber-50" : "border-slate-200 hover:border-slate-300"
                                            }`}
                                    >
                                        <div className="aspect-square bg-slate-200 rounded mb-3 flex items-center justify-center text-slate-400 text-xs">Base Img</div>
                                        <div className="font-bold">{base.name}</div>
                                        <div className="mt-2 font-medium text-amber-700">+${base.price}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* STEP 3: Review */}
                    {step === 3 && (
                        <div className="space-y-6">
                            <h2 className="text-2xl font-bold">Review Your Design</h2>
                            <div className="bg-slate-50 p-6 rounded-lg border border-slate-200 space-y-4">
                                <div className="flex items-start gap-4">
                                    <div className="w-24 h-24 bg-slate-200 rounded flex-shrink-0"></div>
                                    <div>
                                        <h3 className="font-bold text-lg">{config.slab?.name}</h3>
                                        <p className="text-slate-600">{config.slab?.dims}</p>
                                        <p className="text-amber-700 font-medium mt-1">Slab Price: ${config.slab?.price.toLocaleString()}</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4 pt-4 border-t border-slate-200">
                                    <div className="w-24 h-24 bg-slate-200 rounded flex-shrink-0"></div>
                                    <div>
                                        <h3 className="font-bold text-lg">{config.base?.name}</h3>
                                        <p className="text-amber-700 font-medium mt-1">Base Price: ${config.base?.price.toLocaleString()}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                </div>

                {/* Footer Actions */}
                <div className="bg-slate-50 border-t border-slate-200 p-4 flex justify-between items-center">
                    {step > 1 ? (
                        <Button variant="outline" onClick={prevStep}><ChevronLeft className="w-4 h-4 mr-2" /> Back</Button>
                    ) : (
                        <div></div>
                    )}

                    {step < 3 ? (
                        <Button
                            onClick={nextStep}
                            disabled={step === 1 && !config.slab || step === 2 && !config.base}
                        >
                            Next Step <ChevronRight className="w-4 h-4 ml-2" />
                        </Button>
                    ) : (
                        <Button className="bg-amber-600 hover:bg-amber-700 text-white">
                            Request Quote & Design Review
                        </Button>
                    )}
                </div>
            </div>

            {/* Sidebar Summary */}
            <div className="w-full lg:w-80 bg-slate-900 text-white p-6 rounded-xl shadow-lg sticky top-24">
                <h3 className="text-xl font-bold mb-6 border-b border-slate-700 pb-4">Your Build</h3>

                <div className="space-y-4 mb-8">
                    <div className="flex justify-between">
                        <span className="text-slate-400">Selected Slab</span>
                        <span className="font-medium">{config.slab ? `$${config.slab.price.toLocaleString()}` : '—'}</span>
                    </div>
                    <div className="flex justify-between">
                        <span className="text-slate-400">Base</span>
                        <span className="font-medium">{config.base ? `$${config.base.price}` : '—'}</span>
                    </div>
                    <div className="flex justify-between">
                        <span className="text-slate-400">Finishing</span>
                        <span className="font-medium line-through decoration-amber-500 text-slate-500">Included</span>
                    </div>
                </div>

                <div className="border-t border-slate-700 pt-6">
                    <div className="flex justify-between items-end mb-2">
                        <span className="text-lg">Total Estimate</span>
                        <span className="text-2xl font-bold text-amber-400">${totalPrice.toLocaleString()}</span>
                    </div>
                    <p className="text-xs text-slate-500 mb-6">*Shipping calculated at checkout</p>
                    <Button className="w-full bg-white text-slate-900 hover:bg-slate-200">
                        Book Consultation
                    </Button>
                </div>
            </div>
        </div>
    );
}
