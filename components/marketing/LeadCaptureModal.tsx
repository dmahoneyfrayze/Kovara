"use client";

import { useState, useEffect } from "react";
import { X } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { usePathname } from "next/navigation";

export function LeadCaptureModal() {
    const [isOpen, setIsOpen] = useState(false);
    const [hasSeen, setHasSeen] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        // Check local storage
        const seen = localStorage.getItem("kovara_lead_seen");
        if (seen) {
            setHasSeen(true);
            return;
        }

        // Trigger 1: Timer (12 seconds)
        const timer = setTimeout(() => {
            if (!hasSeen && !isOpen) {
                setIsOpen(true);
            }
        }, 12000);

        // Trigger 2: Exit Intent
        const handleExit = (e: MouseEvent) => {
            if (e.clientY <= 0 && !hasSeen && !isOpen) {
                setIsOpen(true);
            }
        };

        document.addEventListener("mouseleave", handleExit);

        return () => {
            clearTimeout(timer);
            document.removeEventListener("mouseleave", handleExit);
        };
    }, [hasSeen, isOpen]);

    // Close handler
    const handleClose = () => {
        setIsOpen(false);
        setHasSeen(true);
        localStorage.setItem("kovara_lead_seen", "true");
    };

    // Don't show on admin or login pages if they existed
    if (hasSeen || pathname.includes("/admin")) return null;

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-300">
            <div className="bg-white rounded-xl shadow-2xl max-w-lg w-full overflow-hidden relative animate-in zoom-in-95 duration-300">
                <button
                    onClick={handleClose}
                    className="absolute top-4 right-4 text-slate-400 hover:text-slate-900 transition-colors z-10"
                >
                    <X className="w-6 h-6" />
                </button>

                <div className="grid md:grid-cols-2">
                    <div className="hidden md:block bg-slate-900 relative">
                        <img
                            src="https://shopkovara.com/cdn/shop/files/144-Parota-Slab-with-Custom-Base_540x.jpg"
                            alt="Live Edge Slab"
                            className="absolute inset-0 w-full h-full object-cover opacity-80"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                        <div className="absolute bottom-6 left-6 text-white">
                            <p className="font-bold text-lg leading-tight">Join the Inner Circle</p>
                        </div>
                    </div>

                    <div className="p-8">
                        <span className="text-amber-600 font-bold uppercase tracking-wider text-xs mb-2 block">Exclusive Offer</span>
                        <h2 className="text-2xl font-bold text-slate-900 mb-2">Unlock Trade Pricing</h2>
                        <p className="text-slate-600 text-sm mb-6">
                            Sign up to get our **Slab Selection Guide** and access to wholesale pricing tiers on your first order.
                        </p>

                        <form className="space-y-3" onSubmit={(e) => { e.preventDefault(); handleClose(); alert("Thanks! (Mock Submit)"); }}>
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="w-full h-10 px-3 rounded border border-slate-300 focus:outline-none focus:ring-2 focus:ring-amber-500 text-sm"
                                required
                            />
                            <Button className="w-full bg-slate-900 hover:bg-slate-800 text-white">
                                Get Access
                            </Button>
                        </form>
                        <p className="text-[10px] text-slate-400 mt-4 text-center">
                            No spam. Unsubscribe anytime.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
