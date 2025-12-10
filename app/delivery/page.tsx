import { Truck, Box, Hammer } from "lucide-react";

export default function Delivery() {
    return (
        <div className="bg-white min-h-screen pb-20">
            <section className="bg-slate-900 text-white py-20">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-4xl font-bold mb-4">Delivery & Shipping</h1>
                    <p className="text-lg text-slate-300">We ship nationwide from our Arlington, TX workshop.</p>
                </div>
            </section>

            <div className="container mx-auto px-4 py-16">
                <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    <div className="p-8 border rounded-xl bg-slate-50">
                        <Truck className="w-10 h-10 text-amber-600 mb-4" />
                        <h3 className="text-xl font-bold mb-2">DFW Local Delivery</h3>
                        <p className="text-slate-600 mb-4">
                            For clients within the Dallas-Fort Worth metroplex, our in-house team delivers and installs your table personally.
                        </p>
                        <div className="font-bold text-slate-900">$199 Flat Rate</div>
                    </div>

                    <div className="p-8 border rounded-xl bg-slate-50">
                        <Box className="w-10 h-10 text-amber-600 mb-4" />
                        <h3 className="text-xl font-bold mb-2">Curbside Freight</h3>
                        <p className="text-slate-600 mb-4">
                            Your table is securely crated and shipped via LTL freight to your driveway. Lift-gate service included.
                        </p>
                        <div className="font-bold text-slate-900">$399 - $599 (Nationwide)</div>
                    </div>

                    <div className="p-8 border rounded-xl bg-slate-50">
                        <Hammer className="w-10 h-10 text-amber-600 mb-4" />
                        <h3 className="text-xl font-bold mb-2">White Glove</h3>
                        <p className="text-slate-600 mb-4">
                            Premium service where carriers uncrate, bring the table into your room of choice, assemble base, and remove debris.
                        </p>
                        <div className="font-bold text-slate-900">Custom Quote</div>
                    </div>
                </div>
            </div>
        </div>
    );
}
