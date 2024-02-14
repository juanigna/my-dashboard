"use client"
import { usePathname } from "next/navigation";

interface Props {
    path: string;
    icon: JSX.Element;
    title: string;
    subtitle: string;
}


const SidebarMenuItem = ({ icon, path, subtitle, title }: Props) => {
    const currentPath = usePathname()
    // bg-blue-800
    return (
        <a href={path} className={` w-full px-2 inline-flex rounded-md space-x-2 items-center border-b border-slate-700 py-3 hover:bg-white/5 transition ease-linear duration-150 ${currentPath === path && " bg-blue-800 "} `}>
            <div>
                {icon}
            </div>
            <div className="flex flex-col">
                <span className="text-lg text-slate-300 font-bold leading-5">{title}</span>
                <span className="text-sm text-slate-500 hidden md:block">{subtitle}</span>
            </div>
        </a>
    )
}

export default SidebarMenuItem