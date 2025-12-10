import { TableConfigurator } from "@/components/modules/TableConfigurator";

export default function DesignPage() {
    return (
        <div className="bg-slate-50 min-h-screen pb-20">
            <section className="bg-white border-b border-slate-200 py-12 md:py-20">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-slate-900 mb-4">
                        Design Your Custom Table
                    </h1>
                    <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                        Visualize your perfect dining table. Choose from our real-time slab inventory and match it with a handcrafted base.
                    </p>
                </div>
            </section>

            <div className="container mx-auto px-4 py-12 -mt-8 relative z-10">
                <TableConfigurator />
            </div>
        </div>
    );
}
