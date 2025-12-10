import { Button } from "@/components/ui/Button";
import { MapPin, Phone, Clock, Mail } from "lucide-react";

export default function Locations() {
    return (
        <div className="min-h-screen bg-slate-50 pb-20">
            <section className="bg-white py-20 border-b border-slate-200">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-3xl md:text-5xl font-bold mb-4">Visit Our Showrooms</h1>
                    <p className="text-slate-600 max-w-2xl mx-auto">
                        Experience the wood in person. Touch the live edges and see the scale of our slabs at our DFW location.
                    </p>
                </div>
            </section>

            <div className="container mx-auto px-4 py-12">
                <div className="grid lg:grid-cols-2 gap-12 bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
                    {/* Map Side */}
                    <div className="bg-slate-200 min-h-[400px] flex items-center justify-center relative">
                        <div className="text-slate-500 font-medium">Map Placeholder (Google Maps Embed)</div>
                    </div>

                    {/* Info Side */}
                    <div className="p-8 md:p-12 flex flex-col justify-center">
                        <h2 className="text-2xl font-bold mb-6">Arlington, TX (HQ)</h2>

                        <div className="space-y-6">
                            <div className="flex items-start gap-4">
                                <MapPin className="w-6 h-6 text-amber-600 mt-1" />
                                <div>
                                    <p className="font-semibold text-slate-900">Kovara / Urbis Design</p>
                                    <p className="text-slate-600">400 North Bowen Rd, Unit 112</p>
                                    <p className="text-slate-600">Arlington, TX 76012</p>
                                    <Button variant="link" className="p-0 h-auto text-amber-600 mt-1">Get Directions</Button>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <Clock className="w-6 h-6 text-amber-600 mt-1" />
                                <div>
                                    <p className="font-semibold text-slate-900">Hours</p>
                                    <p className="text-slate-600">Mon - Fri: 9:00 AM - 5:00 PM</p>
                                    <p className="text-slate-600">Sat: By Appointment Only</p>
                                    <p className="text-slate-600">Sun: Closed</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <Phone className="w-6 h-6 text-amber-600 mt-1" />
                                <div>
                                    <p className="font-semibold text-slate-900">Phone</p>
                                    <p className="text-slate-600">(817) 555-0199</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <Mail className="w-6 h-6 text-amber-600 mt-1" />
                                <div>
                                    <p className="font-semibold text-slate-900">Email</p>
                                    <p className="text-slate-600">hello@kovara.com</p>
                                </div>
                            </div>
                        </div>

                        <div className="mt-8 pt-8 border-t border-slate-100">
                            <Button size="lg" className="w-full sm:w-auto bg-slate-900 text-white">
                                Book a Showroom Visit
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
