import dynamic from "next/dynamic";
import { IoCartOutline } from "react-icons/io5";

const WidgetsGrid = dynamic(() => import('@/app/components/shopping-cart/components/dashboard/WidgetGrid'), {
    ssr: false,
    loading: () =>
        <div className="flex flex-wrap p-2 items-center justify-center">
            <div className="bg-white shadow-xl p-3 sm:min-w-[25%] min-w-full  rounded-2xl border-1 border-gray-50 mx-2 my-2">
                <div className="flex flex-col">
                    <div>
                        <h2 className="font-bold text-gray-600 text-center"></h2>
                    </div>
                    <div className="my-3">
                        <div className="flex flex-row items-center justify-center space-x-1 ">
                            <IoCartOutline size={70} className="text-blue-600" />
                        </div>
                    </div>

                    <div className="w-full place-items-end text-right border-t-2 border-gray-100 mt-2">
                    </div>

                </div>
            </div>
        </div>
})


export const metadata = {
    title: 'Admin Dashboard',
    description: 'Admin Dashboard',
};

export default function MainPage() {
    return (
        <div className="text-black p-2">
            <h1 className="text-3xl mt-2">Dashboard</h1>
            <span className="text-xl">Información general</span>

            <WidgetsGrid />
        </div>
    );
}