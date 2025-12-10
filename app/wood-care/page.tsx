export default function WoodCare() {
    return (
        <div className="bg-white min-h-screen pb-20">
            <section className="bg-slate-50 py-20 border-b border-slate-200">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-4xl font-bold mb-4">Wood Care & Maintenance</h1>
                    <p className="text-lg text-slate-600">How to keep your live edge table looking pristine for generations.</p>
                </div>
            </section>

            <div className="container mx-auto px-4 py-16 max-w-3xl space-y-12">
                <section>
                    <h2 className="text-2xl font-bold mb-4">Daily Cleaning</h2>
                    <p className="text-slate-700 leading-relaxed mb-4">
                        For everyday cleaning, use a damp microfiber cloth with warm water. Avoid harsh chemicals, bleach, or ammonia-based cleaners (like Windex), as these can break down practically any finish over time. If a deeper clean is needed, a mild mixture of soap and water is sufficient.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-bold mb-4">Environmental Control</h2>
                    <p className="text-slate-700 leading-relaxed mb-4">
                        Wood is a living material that expands and contracts with changes in humidity. Ideally, keep your home's humidity between 35-50%. Avoid placing your table directly over a heating vent or in direct sunlight for extended periods, as this can cause checking (cracking) or fading.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-bold mb-4">Refinishing</h2>
                    <p className="text-slate-700 leading-relaxed">
                        Most of our tables are finished with a commercial-grade conversion varnish or hardwax oil like Rubio Monocoat. If your table gets scratched, many oil finishes can be spot-repaired. For lacquered tables, a full refinish might be required every 10-15 years depending on wear.
                    </p>
                </section>
            </div>
        </div>
    );
}
