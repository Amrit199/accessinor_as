"use client";

import Link from "next/link";
import Image from "next/image";
import logo from "../../public/assets/checked.png";
import { BiPlayCircle } from "react-icons/bi";

export default function Header() {
    return (
        <div className="w-full bg-white px-16 py-10 flex items-center justify-between text-black">
            <div className="w-full">
            <Link className="flex items-center gap-1 cursor-pointer" href="#">
              <Image src={logo} alt="logo" className="w-8 h-8 rounded-full" />
              <h1 className="font-bold text-3xl">AccessiNor</h1>
            </Link>
            </div>
            <div className="w-full flex justify-end gap-8 text-lg">
            <div className="flex items-center gap-1 text-black hover:text-[#206e61] cursor-pointer">
              <BiPlayCircle size={35} title="Play button icon" />
              <p className="text-md font-normal">Get Demo</p>
            </div>

            <button className="uppercase bg-[#389f8e] text-white hover:bg-[#206e61] text-sm px-4 py-2 font-semibold rounded-md transition-all duration-300 active:bg-yellow-600">
              LOGIN
            </button>
          </div>
        </div>
    )
}