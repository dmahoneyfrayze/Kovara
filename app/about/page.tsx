import { Button } from "@/components/ui/Button";

export default function About() {
    return (
        <div className="bg-white min-h-screen pb-20">
            <section className="bg-slate-900 text-white py-24">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-4xl md:text-6xl font-bold mb-6">Our Story</h1>
                    <p className="text-xl text-slate-300 max-w-2xl mx-auto">
                        Crafting heirlooms from nature's masterpieces in the heart of Texas.
                    </p>
                </div>
            </section>

            <section className="py-20 container mx-auto px-4 max-w-4xl">
                <div className="prose prose-lg mx-auto">
                    <p>
                        Kovara was born from a simple belief: that a table is more than just furniture. It is the gathering place for families, the boardroom for big ideas, and the centerpiece of a home. We specialize in sourcing the finest ethically harvested Parota and Black Walnut slabs from Central and South America.
                    </p>
                    <h2>Ethical Sourcing</h2>
                    <p>
                        We work directly with mills that practice sustainable forestry. Every slab we import is properly permitted and harvested in accordance with local regulations to ensure the longevity of these majestic species.
                    </p>
                    <h2>The Process</h2>
                    <p>
                        From the moment a log is cut, it begins a years-long journey. Our slabs are air-dried for up to 2 years before entering a vacuum kiln to reach the optimal 6-8% moisture content required for furniture stability. Once cured, our team in Arlington, TX flattens, sands, and finishes each piece by hand.
                    </p>
                </div>
            </section>
        </div>
    );
}
