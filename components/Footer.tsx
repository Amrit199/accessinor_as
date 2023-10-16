// import Image from "next/image";
// import {
//   BsFacebook,
//   BsTwitter,
//   BsYoutube,
//   BsLinkedin,
//   BsGithub,
// } from "react-icons/bs";
// import { AiOutlineCopyrightCircle } from "react-icons/ai";

import logo from "/public/assets/checked.png";
import React from "react";
import { AiOutlineCopyrightCircle } from "react-icons/ai";
import { BsFacebook, BsTwitter, BsLinkedin, BsGithub } from "react-icons/bs";
import Link from "next/link";
import Image from "next/image";

const website = [
  { name: "Privacy statement", url: "/" },
  { name: "Guidelines for cookies", url: "/" },
  { name: "About Us", url: "/" },
  { name: "Contact Us", url: "/" },
];

const follow = [
  { name: "Facebook", icon: BsFacebook },
  { name: "Twitter", icon: BsTwitter },
  { name: "Github", icon: BsGithub },
  { name: "LinkedIn", icon: BsLinkedin },
];

const Footer = () => {
  return (
    // <div className="w-full py-6 bg-[#ecf0f3] px-4 text-black">
    //   <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-4 justify-center items-center md:justify-between">
    //     <div className="flex items-center gap-3">
    //     <Image src={logo} alt="logo" className="w-8 h-8 rounded-full" />
    //       <p className="flex items-center text-sm font-titleFont gap-1">
    //         <AiOutlineCopyrightCircle className="mt-[1px]" />
    //         AccessiNor || all rights reserved
    //       </p>
    //     </div>

    //     <div className="flex gap-6">
    //       <BsYoutube size={35} className=" hover:text-[#206e61] duration-300 cursor-pointer" />
    //       <BsFacebook size={35} className=" hover:text-[#206e61] duration-300 cursor-pointer" />
    //       <BsGithub size={35} className=" hover:text-[#206e61] duration-300 cursor-pointer" />
    //       <BsLinkedin size={35} className=" hover:text-[#206e61] duration-300 cursor-pointer" />
    //       <BsTwitter size={35} className=" hover:text-[#206e61] duration-300 cursor-pointer" />
    //     </div>
    //   </div>
    // </div>

    <div className="w-full p-12 bg-gray-900 text-white flex flex-col gap-12">
      <div className="flex flex-col md:flex-row items-start gap-12 md:gap-6">
        <div className="basis-2/4 my-auto flex items-center justify-start gap-2">
          <Image src={logo} alt="logo" className="w-8 h-8 rounded-full" />
          <span className="font-bold text-3xl">AccessiNor</span>
        </div>
        <div className="basis-1/4 px-3 flex flex-col gap-6">
          <h4 className="text-[#7fafb1] text-xl">follow us</h4>
          <div className="flex flex-col items-start gap-2">
            {follow.map((item, index) => (
              <Link href="/" className="group">
                <div
                  key={index}
                  className="flex items-center space-x-2 text-base"
                >
                  <item.icon className="group-hover:scale-125 group-hover:text-blue-600 transition-all delay-150 duration-300" />
                  <span className="relative z-10">{item.name}</span>
                </div>
                <div className="bottom-0 h-1 bg-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-all duration-500"></div>
              </Link>
            ))}
          </div>
        </div>
        <div className="basis-1/4 px-3 flex flex-col gap-6">
          <h4 className="text-[#7fafb1] text-xl">Website</h4>
          <div className="flex flex-col items-start gap-2">
            {website.map((item, index) => (
              <Link href={item.url} key={index} className="group">
                {item.name}
                <div className="bottom-0 h-1 bg-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-all duration-500"></div>
              </Link>
            ))}
          </div>
        </div>
      </div>
      <p className="flex items-center text-sm font-titleFont gap-1 self-center">
        <AiOutlineCopyrightCircle className="mt-[1px]" />
        AccessiNor || all rights reserved
      </p>
    </div>
  );
};

export default Footer;
