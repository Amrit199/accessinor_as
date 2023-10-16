import { pages } from "@/constants";
import Image from "next/image";
import Button from "./Button";
import { FaArrowRight } from "react-icons/fa";

export default async function Intro() {
  const data = pages.home;
  return (
    <div className="hero-component">
      <div className="flex-center flex-col gap-4 text-center padding-x">
        <h1 className="heading1 flex items-center justify-center flex-wrap">
          {data.home_intor}
          <span className="text-4xl text-primary mx-2 animate-pulse">
            <FaArrowRight />
          </span>
          <span className="text-primary font-bold">{data.title}</span>
        </h1>
        <p className="description1">{data.home_desc}</p>
        <Button
        link="/"
          title="start now"
          styles="bg-primary hover:bg-p-hover text-white"
          ariaLabel="Navigate to demo product"
        />
      </div>
      <div className="flex-center">
        <Image
          src={data.img}
          alt="accessibility checked image"
          className="w-min"
          width={512}
          height={512}
        />
      </div>
    </div>
  );
}
