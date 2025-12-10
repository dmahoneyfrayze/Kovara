import { Button } from "@/components/ui/Button";
import { Video, MapPin, Calendar } from "lucide-react";

export default function DesignConsult() {
    return (
        <div className="bg-white min-h-screen pb-20">
            <section className="bg-slate-900 text-white py-20">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-3xl md:text-5xl font-bold mb-4">Book a Design Consultation</h1>
                    <p className="text-lg text-slate-300 max-w-2xl mx-auto">
                        Connect with our expert designers to find the perfect slab for your space.
                    </p>
                </div>
            </section>

            <div className="container mx-auto px-4 py-16">
                <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">

                    {/* Options */}
                    <div className="space-y-6">
                        <h2 className="text-2xl font-bold mb-6">Choose Your Experience</h2>

                        <div className="p-6 border rounded-xl hover:border-amber-600 cursor-pointer transition-colors group">
                            <div className="flex items-start gap-4">
                                <div className="bg-amber-100 p-3 rounded-full text-amber-700">
                                    <Video className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg group-hover:text-amber-700">Virtual Consultation</h3>
                                    <p className="text-slate-600 text-sm mt-1">
                                        30-minute video call. We'll walk through our inventory via FaceTime or Zoom and show you specific slabs in detail.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="p-6 border rounded-xl hover:border-amber-600 cursor-pointer transition-colors group">
                            <div className="flex items-start gap-4">
                                <div className="bg-amber-100 p-3 rounded-full text-amber-700">
                                    <MapPin className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg group-hover:text-amber-700">Showroom Visit</h3>
                                    <p className="text-slate-600 text-sm mt-1">
                                        Visit our Arlington, TX gallery. See, touch, and feel the wood. Bring your measurements and samples.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-slate-50 p-6 rounded-xl">
                            <h4 className="font-bold mb-2 flex items-center gap-2"><Calendar className="w-4 h-4 text-slate-500" /> Availability</h4>
                            <p className="text-sm text-slate-600">
                                We generally have availability Monday - Saturday, 9am - 5pm CST.
                            </p>
                        </div>
                    </div>

                    {/* Booking Form */}
                    <div className="bg-white p-8 border rounded-xl shadow-lg">
                        <h2 className="text-2xl font-bold mb-6">Request a Time</h2>
                        <form className="space-y-4">
                            <div className="space-y-2">
                                <label className="text-sm font-medium">Full Name</label>
                                <input type="text" className="w-full h-10 px-3 border rounded focus:ring-2 focus:ring-amber-600 outline-none" placeholder="Enter your name" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium">Email Address</label>
                                <input type="email" className="w-full h-10 px-3 border rounded focus:ring-2 focus:ring-amber-600 outline-none" placeholder="Enter your email" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium">Preferred Date & Time</label>
                                <input type="text" className="w-full h-10 px-3 border rounded focus:ring-2 focus:ring-amber-600 outline-none" placeholder="e.g. Next Tuesday morning" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium">Consultation Type</label>
                                <select className="w-full h-10 px-3 border rounded focus:ring-2 focus:ring-amber-600 outline-none">
                                    <option>Virtual Video Call</option>
                                    <option>Showroom Visit (Arlington, TX)</option>
                                </select>
                            </div>
                            <Button size="lg" className="w-full bg-slate-900 text-white hover:bg-slate-800">
                                Confirm Request
                            </Button>
                            <p className="text-xs text-center text-slate-500">
                                We'll confirm your appointment via email within 2 hours during business days.
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
