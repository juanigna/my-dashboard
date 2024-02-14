"use client"
import { redirect } from "next/navigation";
import Spline from "@splinetool/react-spline"
import Link from "next/link";
import { IoLogoReact } from "react-icons/io5";

export default function Home() {

  return (
    <main className="bg-[#121827] flex flex-col items-center h-screen w-full">
      <div className="w-full flex justify-between p-2 items-center border-b border-[#fcfcfc]/10 border-solid ">
        <div className=" my-4 px-6">
          <h1 className="flex items-center text-lg md:text-2xl font-bold text-white">
            <IoLogoReact className='mr-2' />
            My
            <span className="text-blue-500">Dashboard</span>.
          </h1>
          <p className="text-slate-500 text-sm">Manage your actions and activities</p>
        </div>
        <button className="cursor-pointer bg-blue-500 h-fit p-2 z-40 rounded font-semibold w-fit">
          <Link href={'/dashboard/main'} >
            Go to the dashboard!
          </Link>
        </button>
      </div>
      <div className="h-full flex flex-col items-center gap-5 relative">
        <h1 className="text-4xl font-bold mb-8 mt-8 text-white">Welcome to my dashboard!</h1>
        <p className="font-semibold text-white text-pretty text-1xl mb-8">Dashboard project following the course of DevTalles🖥️</p>
        <Spline scene="https://prod.spline.design/ZC3YnjE8gh6BUY6P/scene.splinecode" style={{ "width": "400px", "height": "500px", "margin": "auto", "display": "flex", "alignItems": "center", "justifyContent": "center", "position": "absolute", "bottom": "100px" }} />

      </div>
      <p className="text-white">Made by Juan Ignacio😬</p>
    </main>
  )
}
