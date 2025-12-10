import Link from "next/link";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

export function Footer() {
    return (
        <footer className="bg-slate-950 text-slate-50 text-sm">
            <div className="container mx-auto px-4 py-12 md:py-16">
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
                    {/* Brand & Address */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-bold uppercase tracking-tight text-white">Kovara</h3>
                        <p className="text-slate-400">
                            Premium live edge tables, custom designed and built for real homes.
                        </p>
                        <address className="not-italic text-slate-400">
                            <p>400 North Bowen Rd, Unit 112</p>
                            <p>Arlington, TX 76012</p>
                        </address>
                    </div>

                    {/* Navigation */}
                    <div className="space-y-4">
                        <h4 className="font-semibold text-white">Navigate</h4>
                        <ul className="space-y-2">
                            <li><Link href="/about" className="hover:text-white transition-colors">About Kovara / Urbis</Link></li>
                            <li><Link href="/slab-gallery" className="hover:text-white transition-colors">Slab Gallery</Link></li>
                            <li><Link href="/design-your-table" className="hover:text-white transition-colors">Design Your Table</Link></li>
                            <li><Link href="/locations" className="hover:text-white transition-colors">Locations & Showrooms</Link></li>
                        </ul>
                    </div>

                    {/* Resources */}
                    <div className="space-y-4">
                        <h4 className="font-semibold text-white">Resources</h4>
                        <ul className="space-y-2">
                            <li><Link href="/wood-care" className="hover:text-white transition-colors">Wood Species & Care</Link></li>
                            <li><Link href="/delivery" className="hover:text-white transition-colors">Delivery & White-Glove</Link></li>
                            <li><Link href="/faq" className="hover:text-white transition-colors">FAQ</Link></li>
                            <li><Link href="/blog" className="hover:text-white transition-colors">Blog / Guides</Link></li>
                        </ul>
                    </div>

                    {/* Legal & Social */}
                    <div className="space-y-4">
                        <h4 className="font-semibold text-white">Connect</h4>
                        <div className="flex space-x-4">
                            <Link href="#" className="text-slate-400 hover:text-white transition-colors"><Instagram className="h-5 w-5" /></Link>
                            <Link href="#" className="text-slate-400 hover:text-white transition-colors"><Facebook className="h-5 w-5" /></Link>
                            <Link href="#" className="text-slate-400 hover:text-white transition-colors"><Linkedin className="h-5 w-5" /></Link>
                        </div>
                        <div className="pt-4 text-xs text-slate-500">
                            <p><Link href="/privacy" className="hover:text-white">Privacy Policy</Link></p>
                            <p><Link href="/terms" className="hover:text-white">Terms of Service</Link></p>
                            <p className="mt-2">&copy; {new Date().getFullYear()} Kovara. All rights reserved.</p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
