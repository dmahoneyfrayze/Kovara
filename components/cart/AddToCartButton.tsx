"use client";

import { Button } from "@/components/ui/Button";
import { useCart } from "@/context/CartContext";
import { ShoppingCart } from "lucide-react";

interface AddToCartProps {
    id: string;
    title: string;
    price: number;
    image: string;
    sku: string;
    slug: string; // Used for linking back from cart
}

export function AddToCartButton({ id, title, price, image, sku, slug }: AddToCartProps) {
    const { addItem, openCart } = useCart();

    const handleAddToCart = () => {
        addItem({
            id,
            title,
            price,
            image,
            sku,
            slug
        });
        openCart();
    };

    return (
        <Button
            size="lg"
            onClick={handleAddToCart}
            className="w-full bg-slate-900 text-white hover:bg-slate-800 h-14 text-lg shadow-xl shadow-slate-200 flex items-center justify-center gap-2"
        >
            <ShoppingCart className="w-5 h-5" />
            Add to Cart
        </Button>
    );
}

export function MobileAddToCartButton({ id, title, price, image, sku, slug }: AddToCartProps) {
    const { addItem, openCart } = useCart();

    const handleAddToCart = () => {
        addItem({
            id,
            title,
            price,
            image,
            sku,
            slug
        });
        openCart();
    };

    return (
        <Button
            onClick={handleAddToCart}
            className="bg-slate-900 text-white px-8 h-10 shadow-md"
        >
            Add to Cart
        </Button>
    );
}
