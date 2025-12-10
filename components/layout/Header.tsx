import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Menu, Search, ShoppingBag } from "lucide-react";

export function Header() {
    return (
        <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
            <div className="container mx-auto flex h-16 items-center justify-between px-4">
                {/* Logo */}
                <Link href="/" className="flex items-center space-x-2">
                    <span className="text-xl font-bold tracking-tight uppercase">Kovara</span>
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden lg:flex items-center gap-6 text-sm font-medium">
                    <Link href="/" className="transition-colors hover:text-slate-600">Home</Link>
                    <Link href="/slab-gallery" className="transition-colors hover:text-slate-600">Slab Gallery</Link>
                    <Link href="/design-your-table" className="transition-colors hover:text-slate-600">Design Your Table</Link>
                    <Link href="/finished-projects" className="transition-colors hover:text-slate-600">Finished Projects</Link>
                    <Link href="/for-trade" className="transition-colors hover:text-slate-600">For Trade</Link>
                    <Link href="/locations" className="transition-colors hover:text-slate-600">Locations</Link>
                    <Link href="/contact" className="transition-colors hover:text-slate-600">Contact</Link>
                </nav>

                {/* Actions */}
                <div className="flex items-center gap-4">
                    <button className="text-slate-500 hover:text-slate-900">
                        <Search className="h-5 w-5" />
                        <span className="sr-only">Search</span>
                    </button>

                    <Button variant="default" className="hidden md:flex bg-black text-white hover:bg-slate-800">
                        Book a Design Consult
                    </Button>

                    {/* Mobile Menu Toggle */}
                    <button className="lg:hidden text-slate-500 hover:text-slate-900">
                        <Menu className="h-6 w-6" />
                        <span className="sr-only">Menu</span>
                    </button>
                </div>
            </div>
        </header>
    );
}
