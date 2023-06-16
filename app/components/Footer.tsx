import Image from "next/image";
import {
  BsFacebook,
  BsTwitter,
  BsYoutube,
  BsLinkedin,
  BsGithub,
} from "react-icons/bs";
import { AiOutlineCopyrightCircle } from "react-icons/ai";
import logo from "../../public/assets/checked.png";

const Footer = () => {
  return (
    <div className="w-full py-6 bg-[#ecf0f3] px-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-4 justify-center items-center md:justify-between">
        <div className="flex items-center gap-3">
        <Image src={logo} alt="logo" className="w-8 h-8 rounded-full" />
          <p className="flex items-center text-sm font-titleFont gap-1">
            <AiOutlineCopyrightCircle className="mt-[1px]" />
            AccessiNor || all rights reserved
          </p>
        </div>

        <div className="flex gap-6">
          <BsYoutube size={35} className=" hover:text-[#206e61] duration-300 cursor-pointer" />
          <BsFacebook size={35} className=" hover:text-[#206e61] duration-300 cursor-pointer" />
          <BsGithub size={35} className=" hover:text-[#206e61] duration-300 cursor-pointer" />
          <BsLinkedin size={35} className=" hover:text-[#206e61] duration-300 cursor-pointer" />
          <BsTwitter size={35} className=" hover:text-[#206e61] duration-300 cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default Footer;