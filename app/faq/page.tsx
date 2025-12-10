export default function FAQ() {
    return (
        <div className="bg-white min-h-screen pb-20">
            <section className="bg-slate-50 py-20 border-b border-slate-200">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-4xl font-bold mb-4">Frequently Asked Questions</h1>
                </div>
            </section>

            <div className="container mx-auto px-4 py-12 max-w-3xl space-y-6">
                <details className="group border border-slate-200 rounded-lg p-6 open:bg-slate-50">
                    <summary className="flex justify-between items-center font-bold text-lg cursor-pointer list-none text-slate-900">
                        What is the lead time?
                        <span className="transition group-open:rotate-180">▼</span>
                    </summary>
                    <p className="mt-4 text-slate-600 leading-relaxed">
                        Our standard lead time for custom tables is 4-6 weeks. This allows time for base fabrication, final sanding, and multiple coats of finish to cure properly.
                    </p>
                </details>

                <details className="group border border-slate-200 rounded-lg p-6 open:bg-slate-50">
                    <summary className="flex justify-between items-center font-bold text-lg cursor-pointer list-none text-slate-900">
                        can I pick my own slab?
                        <span className="transition group-open:rotate-180">▼</span>
                    </summary>
                    <p className="mt-4 text-slate-600 leading-relaxed">
                        Yes! Every table we build starts with you selecting the specific slab. You can browse our online gallery or visit our showroom.
                    </p>
                </details>

                <details className="group border border-slate-200 rounded-lg p-6 open:bg-slate-50">
                    <summary className="flex justify-between items-center font-bold text-lg cursor-pointer list-none text-slate-900">
                        Do you offer trade discounts?
                        <span className="transition group-open:rotate-180">▼</span>
                    </summary>
                    <p className="mt-4 text-slate-600 leading-relaxed">
                        We do. Please apply for our Trade Program to unlock exclusive pricing for designers, architects, and builders.
                    </p>
                </details>
            </div>
        </div>
    );
}
