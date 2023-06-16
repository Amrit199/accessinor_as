// import Image from "next/image";
"use client";
import Link from "next/link";
import logo from "../../public/assets/checked.png";
import Image from "next/image";
import { BiPlayCircle } from "react-icons/bi";
import { useEffect, useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

export default function Navbar() {
  const [mobile, setMobile] = useState(false);
  const [shadow, setShadow] = useState(false);
  const handleMenu = () => {
    setMobile(!mobile);
  };
  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener("scroll", handleShadow);
  }, []);
  return (
      <div className="w-full">
        <div
          className={
            shadow
              ? "w-full shadow-lg shadow-gray-600 h-20 bg-[#ecf0f3] fixed z-[40] px-7 py-6 flex items-center justify-between"
              : "w-full h-20 bg-white border-b-2 border-stone-500 fixed z-[40] px-7 py-6 flex items-center justify-between"
          }
        >
          <div className="w-full">
            <Link className="flex items-center gap-1 cursor-pointer" href="#">
              <Image src={logo} alt="logo" className="w-8 h-8 rounded-full" />
              <h1 className="font-bold text-3xl">AccessiNor</h1>
            </Link>
          </div>
          {/* Nav link for < 800px screen */}
          <div className="w-full hidden md:flex items-center justify-between gap-3 text-xl">
            <Link href="#" className="hover:text-[#206e61] cursor-pointer">
              Product
            </Link>
            <Link href="#" className="hover:text-[#206e61] cursor-pointer">
              Services
            </Link>
            <Link href="#" className="hover:text-[#206e61] cursor-pointer">
              Pricing
            </Link>
            <Link href="#" className="hover:text-[#206e61] cursor-pointer">
              Blogs
            </Link>
          </div>
          {/* mobile menu icon > 800 screen*/}
          <div className="w-full flex justify-end md:hidden">
            {!mobile ? (
              <AiOutlineMenu
                onClick={handleMenu}
                size={40}
                color="black"
                className="cursor-pointer bg-white p-2 rounded-full transition-transform hover:scale-110 active:bg-slate-300"
              />
            ) : (
              <AiOutlineClose
                onClick={handleMenu}
                size={40}
                color="black"
                className="cursor-pointer bg-white p-2 rounded-full transition-transform hover:scale-110 active:bg-slate-300"
              />
            )}
          </div>
          <div className="hidden w-full md:flex justify-end gap-8 text-lg">
            <div className="flex items-center gap-1 text-black hover:text-[#206e61] cursor-pointer">
              <BiPlayCircle size={35} title="Play button icon" />
              <p className="text-md font-normal">Get Demo</p>
            </div>

            <button className="uppercase bg-[#389f8e] text-white hover:bg-[#206e61] text-sm px-4 py-2 font-semibold rounded-md transition-all duration-300 active:bg-yellow-600">
              LOGIN
            </button>
          </div>
        </div>
        {/* mobile menu list */}
        <div
          className={
            !mobile
              ? "fixed top-0 right-[-100%] w-full transition-all ease-in duration-500"
              : " fixed z-30 top-0 right-0 w-full md:hidden bg-white transition-all ease-in duration-500"
          }
        >
          <div className="flex flex-col justify-center gap-6">
            <div className="flex flex-col items-center pt-20 justify-center gap-3 text-xl">
              <Link
                href="#"
                className="hover:text-[#206e61] cursor-pointer"
                onClick={handleMenu}
              >
                Product
              </Link>
              <Link
                href="#"
                className="hover:text-[#206e61] cursor-pointer"
                onClick={handleMenu}
              >
                Services
              </Link>
              <Link
                href="#"
                className="hover:text-[#206e61] cursor-pointer"
                onClick={handleMenu}
              >
                Pricing
              </Link>
              <Link
                href="#"
                className="hover:text-[#206e61] cursor-pointer"
                onClick={handleMenu}
              >
                Blogs
              </Link>
            </div>
            <div className="flex flex-col gap-2 text-lg">
            <div className="flex items-center justify-center gap-1 text-black hover:text-[#206e61] cursor-pointer">
              <BiPlayCircle size={35} title="Play button icon" />
              <p className="text-md font-normal">Get Demo</p>
            </div>

            <button className="uppercase bg-[#389f8e] text-white hover:bg-[#206e61] text-sm px-3 py-3 font-semibold rounded-md transition-all duration-300 active:bg-yellow-600">
              LOGIN
            </button>
          </div>
          </div>
        </div>
      </div>
  );
}
