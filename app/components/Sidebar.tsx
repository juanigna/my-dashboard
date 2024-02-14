import Image from 'next/image'
import React from 'react'
import { IoBrowsersOutline, IoCalculatorOutline, IoFootballOutline, IoHeartOutline, IoLogoReact } from 'react-icons/io5'
import SidebarMenuItem from './SidebarMenuItem'

const menuItems = [
    {
        path: '/dashboard/main',
        icon: <IoBrowsersOutline size={40} />,
        title: 'Dashboard',
        subtitle: 'Visualizacion'
    },
    {
        path: '/dashboard/counter',
        icon: <IoCalculatorOutline size={40} />,
        title: 'Counter',
        subtitle: 'Counter client side'
    },
    {
        path: '/dashboard/pokemons',
        icon: <IoFootballOutline size={40} />,
        title: 'Pokemons',
        subtitle: 'Generación Estática'
    },
    {
        path: '/dashboard/favorites',
        icon: <IoHeartOutline size={40} />,
        title: 'Favorites',
        subtitle: 'Global state'
    }
]

const Sidebar = () => {
    return (
        <div id="menu" className="bg-gray-900 min-h-screen z-10 text-slate-300 w-[400px]  left-0 overflow-y-scroll">
            <div id="logo" className=" my-4 px-6">
                <h1 className="flex items-center text-lg md:text-2xl font-bold text-white">
                    <IoLogoReact className='mr-2' />
                    My
                    <span className="text-blue-500">Dashboard</span>.
                </h1>
                <p className="text-slate-500 text-sm">Manage your actions and activities</p>
            </div>
            <div id="profile" className="px-6 py-10">
                <p className="text-slate-500">Welcome back,</p>
                <a href="#" className="inline-flex space-x-2 items-center">
                    <span>
                        <Image className="rounded-full w-8 h-8" src="https://avatars.githubusercontent.com/u/21323876?v=4" alt="user-image" width={50} height={50} />
                    </span>
                    <span className="text-sm md:text-base font-bold">
                        Juan Ignacio Bocchi
                    </span>
                </a>
            </div>
            <div id="nav" className="w-full px-6">
                {
                    menuItems.map(navItem => (
                        <SidebarMenuItem {...navItem} key={navItem.path} />
                    ))
                }
            </div>
        </div>
    )
}
export default Sidebar