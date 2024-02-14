import { Metadata } from "next";
import dynamic from "next/dynamic";

const CartCounter = dynamic(
    () => import("@/app/components/shopping-cart/components/CartCounter"),
    {
        ssr: false,
        loading: () => <div>
            <div className="flex skeleton animate-pulse">
                <button className="flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-[100px] mr-2">+</button>
                <button className="flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-[100px] mr-2">-</button>
            </div>
        </div>,
    }
);


export const metadata: Metadata = {
    title: 'Shopping Cart',
    description: 'Simple contador',
};

export default function CounterPage() {
    return (
        <div className="flex flex-col items-center justify-center w-full h-full">
            <CartCounter value={15} />
        </div>
    );
}