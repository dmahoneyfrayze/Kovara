import { Button } from "@/components/ui/Button";
import Link from "next/link";

interface SlabCardProps {
    id: number | string;
    species?: string;
    dimensions?: string;
    imageUrl?: string;
    isAvailable?: boolean;
}

export function SlabCard({
    id,
    species = "Parota Slab",
    dimensions = "108\" x 40\" x 2.25\"",
    imageUrl,
    isAvailable = true
}: SlabCardProps) {
    return (
        <Link href={`/slabs/${id}`} className="group block cursor-pointer">
            <div className="aspect-[3/4] bg-slate-200 relative overflow-hidden rounded-lg">
                {imageUrl ? (
                    <img src={imageUrl} alt={species} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                ) : (
                    <div className="absolute inset-0 flex items-center justify-center text-slate-400 font-light">Slab Image</div>
                )}
                {isAvailable && (
                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-2 py-1 text-xs font-semibold rounded uppercase tracking-wide shadow-sm z-10">
                        Available
                    </div>
                )}

                {/* Hover Overlay */}
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <span className="text-white font-medium text-sm flex items-center justify-center border border-white/30 rounded py-2 hover:bg-white hover:text-black transition-colors">
                        View Details
                    </span>
                </div>
            </div>
            <div className="mt-3">
                <h3 className="font-bold text-slate-900 group-hover:text-amber-700 transition-colors">{species} #{id}</h3>
                <p className="text-sm text-slate-500">{dimensions}</p>
            </div>
        </Link>
    );
}
