import { Button } from "@/components/ui/Button";

export default function FinishedProjects() {
    const projects = [
        { title: "Dallas Modern Dining", desc: "10' Parota on Spider Base", loc: "Dallas, TX", img: "https://shopkovara.com/cdn/shop/files/144-Parota-Slab-with-Custom-Base_540x.jpg" },
        { title: "Austin Tech Office", desc: "14' Walnut Conference Table", loc: "Austin, TX", img: "https://shopkovara.com/cdn/shop/files/Root-Console-Table_540x.jpg" },
        { title: "Lakeside Coffee Table", desc: "Round Cookie Slab", loc: "Plano, TX", img: "https://shopkovara.com/cdn/shop/files/2X-96-Parota-Slabs_540x.jpg" },
        { title: "Executive Desk", desc: "L-Shape Walnut with Epoxy", loc: "Frisco, TX", img: "https://shopkovara.com/cdn/shop/files/132-Parota-Drip-Slab_540x.jpg" },
        { title: "Restaurant Bar Top", desc: "20' Live Edge Bar", loc: "Fort Worth, TX", img: "https://shopkovara.com/cdn/shop/files/Kovara-Gallery-Page-Hero-1-2.jpg?v=1691508287&width=800" },
        { title: "Entryway Console", desc: "Floating Shelf Style", loc: "Southlake, TX", img: "https://shopkovara.com/cdn/shop/files/kovara-live-edge-tables-in-situ-1.jpg?v=1691170000&width=800" },
    ];

    return (
        <div className="bg-white min-h-screen pb-20">
            <section className="bg-slate-900 text-white py-20">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-3xl md:text-5xl font-bold mb-4">Finished Projects</h1>
                    <p className="text-slate-400 max-w-2xl mx-auto text-lg">
                        A diverse collection of custom tables living in real homes and offices across Texas.
                    </p>
                </div>
            </section>

            <div className="container mx-auto px-4 py-16">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((p, i) => (
                        <div key={i} className="group cursor-pointer">
                            <div className="aspect-[4/3] bg-slate-200 rounded-lg overflow-hidden mb-4 relative">
                                <img src={p.img} alt={p.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold group-hover:text-amber-700 transition-colors">{p.title}</h3>
                                <p className="text-slate-600">{p.desc}</p>
                                <p className="text-xs text-slate-400 mt-1 uppercase tracking-wider">{p.loc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
