import { pages } from "@/constants";
import Image from "next/image";
import Readmore from "./Readmore";

export default async function Intro() {
  const data = pages.AI_intro;
  return (
    <div className=" w-[95%] lg:w-[95%] mx-auto flex flex-col lg:flex-row items-center px-5 gap-4 py-14 lg:py-24">
      <div className="w-full flex items-start justify-center flex-col gap-4 px-2 lg:px-14">
        <div className="flex items-center flex-wrap">
          <h1 className="heading1">{data.title}</h1>
          <span className="text-primary heading1">{data.name}</span>
        </div>
        <p className="description1">{data.desc1}</p>
        <Readmore item="Read more AI..." />
      </div>
      <div className="w-full flex items-center justify-center h-full">
        <Image
          src={data.img}
          alt="accessibility checked image"
          className="object-fill"
          width={512}
          height={512}
        />
      </div>
    </div>
  );
}
