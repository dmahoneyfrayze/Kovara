import { Button } from "@/components/ui/Button";
import { CheckCircle2 } from "lucide-react";

export default function TradeProgram() {
    return (
        <div className="bg-white min-h-screen pb-20">
            {/* Hero */}
            <section className="relative bg-slate-900 text-white py-24 overflow-hidden">
                <div className="absolute inset-0 bg-black/50 z-0"></div> {/* Placeholder for bg image */}
                <div className="container mx-auto px-4 relative z-10 text-center">
                    <span className="uppercase tracking-widest text-amber-500 font-bold text-sm mb-4 block">Kovara Trade</span>
                    <h1 className="text-3xl md:text-6xl font-bold mb-6">Partner with the Source.</h1>
                    <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto mb-8">
                        Exclusive pricing, priority production, and dedicated project management for interior designers, architects, and builders.
                    </p>
                    <Button size="lg" className="bg-amber-600 hover:bg-amber-700 text-white border-none">
                        Apply for Trade Account
                    </Button>
                </div>
            </section>

            {/* Benefits */}
            <section className="py-20 bg-slate-50">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="bg-white p-8 rounded-xl border border-slate-200 shadow-sm">
                            <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mb-6">
                                <CheckCircle2 className="w-6 h-6 text-amber-700" />
                            </div>
                            <h3 className="text-xl font-bold mb-3">Trade Pricing</h3>
                            <p className="text-slate-600">
                                Unlock 15-20% off retail pricing on all slabs and custom builds, with volume tiers for larger commercial projects.
                            </p>
                        </div>
                        <div className="bg-white p-8 rounded-xl border border-slate-200 shadow-sm">
                            <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mb-6">
                                <CheckCircle2 className="w-6 h-6 text-amber-700" />
                            </div>
                            <h3 className="text-xl font-bold mb-3">Priority Access</h3>
                            <p className="text-slate-600">
                                Get first look at new slab shipments before they hit the site. Reserve inventory for client presentations for up to 72 hours.
                            </p>
                        </div>
                        <div className="bg-white p-8 rounded-xl border border-slate-200 shadow-sm">
                            <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mb-6">
                                <CheckCircle2 className="w-6 h-6 text-amber-700" />
                            </div>
                            <h3 className="text-xl font-bold mb-3">Technical Support</h3>
                            <p className="text-slate-600">
                                Detailed CAD drawings, finish samples, and dedicated support for complex installations and logistics.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Application Form */}
            <section className="py-20">
                <div className="container mx-auto px-4 max-w-3xl">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold mb-4">Join the Trade Program</h2>
                        <p className="text-slate-600">Fill out the form below to request access. We typically approve applications within 24 hours.</p>
                    </div>

                    <form className="space-y-6 bg-white p-8 md:p-12 rounded-2xl border border-slate-200 shadow-lg">
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-sm font-medium">First Name</label>
                                <input type="text" className="flex h-10 w-full rounded-md border border-slate-300 bg-transparent px-3 py-2" placeholder="Jane" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium">Last Name</label>
                                <input type="text" className="flex h-10 w-full rounded-md border border-slate-300 bg-transparent px-3 py-2" placeholder="Start" />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-medium">Company Name</label>
                            <input type="text" className="flex h-10 w-full rounded-md border border-slate-300 bg-transparent px-3 py-2" placeholder="Studio Design Inc." />
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-medium">Website / Portfolio URL</label>
                            <input type="url" className="flex h-10 w-full rounded-md border border-slate-300 bg-transparent px-3 py-2" placeholder="https://" />
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-medium">Email Address</label>
                            <input type="email" className="flex h-10 w-full rounded-md border border-slate-300 bg-transparent px-3 py-2" placeholder="jane@studio.com" />
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-medium">Business Type</label>
                            <select className="flex h-10 w-full rounded-md border border-slate-300 bg-transparent px-3 py-2">
                                <option>Interior Designer</option>
                                <option>Architect</option>
                                <option>Home Builder / Developer</option>
                                <option>Hospitality Procurement</option>
                            </select>
                        </div>

                        <Button size="lg" className="w-full bg-slate-900 text-white h-12">Submit Application</Button>
                    </form>
                </div>
            </section>
        </div>
    );
}
