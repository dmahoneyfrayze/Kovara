"use client";

import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Menu, Search, X } from "lucide-react";
import { useState } from "react";
import { usePathname } from "next/navigation";

export function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const pathname = usePathname();

    const navLinks = [
        { href: "/", label: "Home" },
        { href: "/slab-gallery", label: "Slab Gallery" },
        { href: "/design-your-table", label: "Design Your Table" },
        { href: "/finished-projects", label: "Finished Projects" },
        { href: "/for-trade", label: "For Trade" },
        { href: "/locations", label: "Locations" },
        { href: "/contact", label: "Contact" },
    ];

    return (
        <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
            <div className="container mx-auto flex h-16 items-center justify-between px-4">
                {/* Logo */}
                <Link href="/" className="flex items-center space-x-2 z-50">
                    <img src="/logo.jpg" alt="Kovara" className="h-10 w-auto object-contain" />
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden lg:flex items-center gap-6 text-sm font-medium">
                    {navLinks.map(link => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className={`transition-colors hover:text-slate-600 ${pathname === link.href ? 'text-amber-600 font-bold' : 'text-slate-900'}`}
                        >
                            {link.label}
                        </Link>
                    ))}
                </nav>

                {/* Actions */}
                <div className="flex items-center gap-4">
                    <button className="text-slate-500 hover:text-slate-900">
                        <Search className="h-5 w-5" />
                        <span className="sr-only">Search</span>
                    </button>

                    <Link href="/design-consult" className="hidden md:flex">
                        <Button variant="default" className="bg-black text-white hover:bg-slate-800">
                            Book a Design Consult
                        </Button>
                    </Link>

                    {/* Mobile Menu Toggle */}
                    <button
                        className="lg:hidden text-slate-500 hover:text-slate-900 z-50"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                        <span className="sr-only">Menu</span>
                    </button>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            {isMenuOpen && (
                <div className="fixed inset-0 top-16 bg-white z-40 lg:hidden p-4 border-t border-slate-100 flex flex-col h-[calc(100vh-4rem)]">
                    <nav className="flex flex-col space-y-4 text-lg font-medium p-4">
                        {navLinks.map(link => (
                            <Link
                                key={link.href}
                                href={link.href}
                                onClick={() => setIsMenuOpen(false)}
                                className="py-2 border-b border-slate-50"
                            >
                                {link.label}
                            </Link>
                        ))}
                        <Link href="/design-consult" onClick={() => setIsMenuOpen(false)}>
                            <Button className="w-full mt-4 bg-slate-900 text-white">Book a Design Consult</Button>
                        </Link>
                    </nav>
                </div>
            )}
        </header>
    );
}
