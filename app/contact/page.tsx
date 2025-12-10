import { Button } from "@/components/ui/Button";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Contact() {
    return (
        <div className="bg-slate-50 min-h-screen pb-20">
            <section className="bg-white py-20 border-b border-slate-200">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-3xl md:text-5xl font-bold mb-4">Get in Touch</h1>
                    <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                        Have a question about a slab, or ready to start your custom build? We're here to help.
                    </p>
                </div>
            </section>

            <div className="container mx-auto px-4 py-12">
                <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
                    {/* Contact Info */}
                    <div className="space-y-8">
                        <div>
                            <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
                            <div className="space-y-4">
                                <div className="flex items-center gap-3">
                                    <Mail className="h-5 w-5 text-amber-600" />
                                    <a href="mailto:hello@kovara.com" className="text-slate-600 hover:text-slate-900">hello@kovara.com</a>
                                </div>
                                <div className="flex items-center gap-3">
                                    <Phone className="h-5 w-5 text-amber-600" />
                                    <span className="text-slate-600">(817) 555-0199</span>
                                </div>
                                <div className="flex items-start gap-3">
                                    <MapPin className="h-5 w-5 text-amber-600 mt-1" />
                                    <span className="text-slate-600">
                                        400 North Bowen Rd, Unit 112<br />
                                        Arlington, TX 76012
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
                            <div className="space-y-4">
                                <details className="group bg-white p-4 rounded-lg border border-slate-200">
                                    <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                                        <span>What is the lead time for a custom table?</span>
                                        <span className="transition group-open:rotate-180">
                                            <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
                                        </span>
                                    </summary>
                                    <p className="text-slate-600 mt-3 text-sm leading-relaxed">
                                        Our typical lead time is 4-6 weeks from the time you select your slab and finalize your design.
                                    </p>
                                </details>
                                <details className="group bg-white p-4 rounded-lg border border-slate-200">
                                    <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                                        <span>Do you ship outside of Texas?</span>
                                        <span className="transition group-open:rotate-180">
                                            <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
                                        </span>
                                    </summary>
                                    <p className="text-slate-600 mt-3 text-sm leading-relaxed">
                                        Yes! We ship nationwide. We crate our tables securely and use trusted freight carriers with lift-gate service.
                                    </p>
                                </details>
                                <details className="group bg-white p-4 rounded-lg border border-slate-200">
                                    <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                                        <span>Can I see the slab before I buy?</span>
                                        <span className="transition group-open:rotate-180">
                                            <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
                                        </span>
                                    </summary>
                                    <p className="text-slate-600 mt-3 text-sm leading-relaxed">
                                        Absolutely. If you are local to DFW, you can visit our showroom. If you are remote, we can do a FaceTime walkthrough or send high-res videos of specific slabs.
                                    </p>
                                </details>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="bg-white p-8 rounded-xl border border-slate-200 shadow-sm">
                        <h2 className="text-2xl font-bold mb-6">Send us a Message</h2>
                        <form className="space-y-4">
                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <label htmlFor="first-name" className="text-sm font-medium">First name</label>
                                    <input id="first-name" className="flex h-10 w-full rounded-md border border-slate-300 bg-transparent px-3 py-2 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-400" placeholder="Jane" />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="last-name" className="text-sm font-medium">Last name</label>
                                    <input id="last-name" className="flex h-10 w-full rounded-md border border-slate-300 bg-transparent px-3 py-2 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-400" placeholder="Doe" />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="email" className="text-sm font-medium">Email</label>
                                <input id="email" type="email" className="flex h-10 w-full rounded-md border border-slate-300 bg-transparent px-3 py-2 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-400" placeholder="jane@example.com" />
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="interest" className="text-sm font-medium">I'm interested in...</label>
                                <select id="interest" className="flex h-10 w-full rounded-md border border-slate-300 bg-transparent px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-slate-400">
                                    <option>Ordering a Custom Table</option>
                                    <option>Visiting the Showroom</option>
                                    <option>Trade / Wholesale Inquiry</option>
                                    <option>Other</option>
                                </select>
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="message" className="text-sm font-medium">Message</label>
                                <textarea id="message" className="flex min-h-[120px] w-full rounded-md border border-slate-300 bg-transparent px-3 py-2 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-400" placeholder="Tell us about your project..." />
                            </div>
                            <Button size="lg" className="w-full bg-slate-900 text-white hover:bg-slate-800">Send Message</Button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
