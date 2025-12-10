import { Button } from "@/components/ui/Button";
import Link from "next/link";

interface SlabCardProps {
    id: number;
    species?: string;
    dimensions?: string;
    price?: string;
    imageUrl?: string; // Placeholder for now
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
        <div className="group bg-white rounded-lg border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col">
            <div className="aspect-[3/4] bg-slate-200 relative">
                {imageUrl ? (
                    <img src={imageUrl} alt={species} className="w-full h-full object-cover" />
                ) : (
                    <div className="absolute inset-0 flex items-center justify-center text-slate-400 font-light">Slab Image</div>
                )}
                {isAvailable && (
                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-2 py-1 text-xs font-semibold rounded uppercase tracking-wide shadow-sm z-10">
                        Available
                    </div>
                )}
            </div>
            <div className="p-4 flex flex-col flex-grow">
                <h3 className="font-bold text-lg mb-1 group-hover:text-amber-700 transition-colors">
                    {species} #{id}
                </h3>
                <p className="text-sm text-slate-500 mb-4">{dimensions}</p>
                <div className="mt-auto">
                    <Link href={`/slabs/${id}`} passHref>
                        <Button className="w-full" size="sm" variant="secondary">View Slab</Button>
                    </Link>
                </div>
            </div>
        </div>
    );
}
