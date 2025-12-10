import { Button } from "@/components/ui/Button";
import { SlabCard } from "@/components/slabs/SlabCard";
import { FadeIn } from "@/components/ui/FadeIn";
import Link from "next/link";
import { ArrowRight, Star, ShoppingCart, MessageSquare, MoveRight, Check } from "lucide-react";

import { getAllSlabs } from "@/lib/products";

export default function Home() {
  const slabs = getAllSlabs();
  // Take first 4 available slabs for feature
  const featuredSlabs = slabs.filter(s => s.isAvailable).slice(0, 4);

  return (
    <div className="flex flex-col min-h-screen">

      {/* 2. Hero Section */}
      <section className="relative bg-slate-50 py-20 lg:py-32 overflow-hidden">
        <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 relative z-10">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 leading-[1.1]">
              Live Edge Slabs, Designed for <span className="text-slate-500">Real Spaces.</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-600 max-w-lg">
              We take the guesswork out of custom furniture. Choose from unique Parota slabs in DFW, and let our team craft the perfect table for your home.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/slab-gallery">
                <Button size="lg" className="w-full sm:w-auto bg-slate-900 text-white hover:bg-slate-800">
                  Browse Slab Gallery
                </Button>
              </Link>
              <Link href="/book-consult">
                <Button variant="outline" size="lg" className="w-full sm:w-auto border-slate-300 text-slate-700 hover:bg-white hover:text-slate-900">
                  Book a Design Consult
                </Button>
              </Link>
            </div>
          </div>

          <div className="relative aspect-[4/3] lg:aspect-square bg-slate-200 rounded-lg overflow-hidden flex items-center justify-center border border-slate-300">
            <img
              src="https://shopkovara.com/cdn/shop/files/Kovara-Gallery-Page-Hero-1-2.jpg?v=1691508287&width=1500"
              alt="Kovara Live Edge Slab"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* 3. How It Works Snapshot */}
      <section className="py-20 bg-white border-b border-slate-100">
        <div className="container mx-auto px-4">
          <FadeIn delay={0.2} direction="up">
            <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
            <div className="grid md:grid-cols-3 gap-8 text-center max-w-5xl mx-auto">

              {/* Step 1 */}
              <div className="space-y-4">
                <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto text-xl font-bold text-amber-600">1</div>
                <h3 className="text-xl font-bold">Select Your Slab</h3>
                <p className="text-slate-600">Browse our real-time inventory of kiln-dried slabs. Filter by size, species, and character.</p>
              </div>

              {/* Step 2 */}
              <div className="space-y-4">
                <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto text-xl font-bold text-amber-600">2</div>
                <h3 className="text-xl font-bold">Customize Design</h3>
                <p className="text-slate-600">Choose your base style, finish options, and edge detailing to match your space.</p>
              </div>

              {/* Step 3 */}
              <div className="space-y-4">
                <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto text-xl font-bold text-amber-600">3</div>
                <h3 className="text-xl font-bold">Handcrafted & Delivered</h3>
                <p className="text-slate-600">Our artisans build your piece in Texas. We ship nationwide with white-glove service.</p>
              </div>
            </div>
          </FadeIn>

          <div className="mt-12 text-center">
            <Link href="/how-it-works">
              <Button variant="link" className="text-slate-600 font-semibold hover:text-slate-900">View Full Process <MoveRight className="ml-2 h-4 w-4" /></Button>
            </Link>
          </div>
        </div>
      </section>

      {/* 4. Featured Slabs Carousel */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl font-bold tracking-tight mb-2">Today’s Featured Slabs</h2>
              <p className="text-slate-600">Fresh from the kiln and ready for your custom build.</p>
            </div>
            <Link href="/slab-gallery" className="hidden sm:block">
              <Button variant="outline" className="border-slate-300">See All Slabs</Button>
            </Link>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredSlabs.map((slab) => (
              <SlabCard
                key={slab.id}
                id={slab.id}
                imageUrl={slab.images[0]}
                species={slab.species}
                dimensions={slab.dimensions}
                isAvailable={slab.isAvailable}
              />
            ))}
          </div>

          <div className="mt-8 text-center sm:hidden">
            <Link href="/slab-gallery">
              <Button variant="outline" className="w-full">See All Slabs</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* 5. Finished Project Highlights */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="mb-12">
            <h2 className="text-3xl font-bold tracking-tight">From Slab to Statement Piece</h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <div className="relative group rounded-xl overflow-hidden aspect-video bg-slate-200">
              <div className="absolute inset-0 flex items-center justify-center text-slate-400">Project Image (Dining)</div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent p-8 flex flex-col justify-end text-white">
                <h3 className="text-2xl font-bold mb-2">Dallas Modern Dining</h3>
                <p className="text-slate-200 mb-4 opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-4 group-hover:translate-y-0 duration-300">Featuring a 10’ Parota Live Edge on a Spider Base.</p>
                <span className="font-semibold underline decoration-white/50 underline-offset-4">View Project Details</span>
              </div>
            </div>
            <div className="grid gap-8">
              <div className="relative group rounded-xl overflow-hidden bg-slate-200 h-full min-h-[200px]">
                <div className="absolute inset-0 flex items-center justify-center text-slate-400">Project Image (Office)</div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent p-8 flex flex-col justify-end text-white">
                  <h3 className="text-xl font-bold">Executive Office Desk</h3>
                </div>
              </div>
              <div className="relative group rounded-xl overflow-hidden bg-slate-200 h-full min-h-[200px]">
                <div className="absolute inset-0 flex items-center justify-center text-slate-400">Project Image (Boardroom)</div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent p-8 flex flex-col justify-end text-white">
                  <h3 className="text-xl font-bold">Tech Boardroom Table</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Why Kovara - Trust & Positioning */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Built for permanence.</h2>
              <p className="text-lg text-slate-400 leading-relaxed mb-8">
                We believe furniture should be an investment that lasts generations. That starts with sustainably sourced wood and ends with a finish that can handle real life—spills, homework, and dinner parties included.
              </p>
              <Button variant="outline" className="text-white border-white/20 hover:bg-white hover:text-slate-900">
                Explore Our Craftsmanship
              </Button>
            </div>
            <ul className="space-y-6">
              {[
                { title: "Unique, One-of-One Slabs", desc: "No mass production. Every piece is hand-selected and unique." },
                { title: "In-House Finishing", desc: "We flatten, sand, and finish right here in our DFW studio." },
                { title: "Specialized Logistics", desc: "We focus on DFW & Thunder Bay to ensure safe, white-glove delivery." },
                { title: "Trade & Designer Support", desc: "Dedicated pricing and project management for industry pros." }
              ].map((item, idx) => (
                <li key={idx} className="flex gap-4">
                  <div className="bg-amber-500/10 p-2 rounded h-fit">
                    <Check className="h-5 w-5 text-amber-500" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">{item.title}</h4>
                    <p className="text-slate-400 text-sm md:text-base">{item.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* 7. Design Your Table Teaser */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto bg-slate-50 border border-slate-200 rounded-2xl p-8 md:p-12">
            <div className="mb-8">
              <span className="inline-block px-3 py-1 rounded-full bg-slate-200 text-slate-700 text-xs font-bold uppercase tracking-wider mb-4">Interactive Builder</span>
              <h2 className="text-3xl font-bold mb-4">Design your table in 3 steps</h2>
              <p className="text-slate-600 max-w-lg mx-auto">Visualize your custom piece before you buy. Choose your slab, select a base, and pick the perfect finish.</p>
            </div>

            {/* Simple visual mock of configurator steps */}
            <div className="flex justify-center gap-4 mb-8 opacity-50 grayscale">
              <div className="w-24 h-16 bg-slate-300 rounded"></div>
              <div className="w-24 h-16 bg-slate-300 rounded"></div>
              <div className="w-24 h-16 bg-slate-300 rounded"></div>
            </div>

            <Link href="/design-your-table">
              <Button size="lg" className="bg-amber-700 hover:bg-amber-800 text-white shadow-lg shadow-amber-900/20">
                Start Designing
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* 8. Lead Capture / Consult CTA */}
      <section className="py-20 bg-slate-100 border-t border-slate-200">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 bg-white rounded-2xl p-8 md:p-12 shadow-sm border border-slate-200/60">
            <div>
              <h2 className="text-3xl font-bold mb-4">Not sure where to start?</h2>
              <p className="text-slate-600 mb-8 text-lg">
                Send us your room dimensions and style preferences, and we’ll recommend the perfect slabs for your space from our current inventory.
              </p>
              <div className="flex items-center gap-2 text-slate-500 text-sm">
                <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
                <span>Response within 24 hours</span>
              </div>
            </div>

            <form className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">Name</label>
                  <input id="name" type="text" className="flex h-10 w-full rounded-md border border-slate-300 bg-transparent px-3 py-2 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-400 disabled:cursor-not-allowed disabled:opacity-50" placeholder="Jane Doe" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">Email</label>
                  <input id="email" type="email" className="flex h-10 w-full rounded-md border border-slate-300 bg-transparent px-3 py-2 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-400 disabled:cursor-not-allowed disabled:opacity-50" placeholder="jane@example.com" />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="room" className="text-sm font-medium">Room Type</label>
                  <select id="room" className="flex h-10 w-full rounded-md border border-slate-300 bg-transparent px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-slate-400">
                    <option>Dining Room</option>
                    <option>Office / Conference</option>
                    <option>Living Room</option>
                    <option>Other</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label htmlFor="city" className="text-sm font-medium">City/Region</label>
                  <input id="city" type="text" className="flex h-10 w-full rounded-md border border-slate-300 bg-transparent px-3 py-2 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-400" placeholder="Dallas, TX" />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">How can we help?</label>
                <textarea id="message" className="flex min-h-[80px] w-full rounded-md border border-slate-300 bg-transparent px-3 py-2 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-400" placeholder="I'm looking for a 8 person dining table..." />
              </div>

              <Button type="submit" size="lg" className="w-full bg-slate-900 text-white hover:bg-slate-800">
                Get Slab Recommendations
              </Button>
            </form>
          </div>
        </div>
      </section>

    </div>
  );
}
