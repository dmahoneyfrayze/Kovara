import { Button } from "@/components/ui/Button";

export default function Blog() {
    return (
        <div className="bg-white min-h-screen pb-20">
            <section className="bg-slate-50 py-20 border-b border-slate-200">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-4xl font-bold mb-4">The Live Edge Journal</h1>
                    <p className="text-lg text-slate-600">News, design guides, and workshop updates.</p>
                </div>
            </section>

            <div className="container mx-auto px-4 py-16 text-center">
                <div className="max-w-md mx-auto p-12 bg-slate-50 rounded-xl border border-slate-200">
                    <h3 className="text-xl font-bold mb-4">Coming Soon</h3>
                    <p className="text-slate-600 mb-6">
                        We are currently curating articles on slab selection, interior design trends, and woodworking techniques. Check back soon!
                    </p>
                    <Button disabled variant="outline">Articles Coming Soon</Button>
                </div>
            </div>
        </div>
    );
}
