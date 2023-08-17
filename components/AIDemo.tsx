import { pages } from "@/constants";
import Image from "next/image";
import Button from "./Button";

export default async function Intro() {
  const data = pages.AI_intro;
  return (
    <div className="hero-component padding-y">
      <div className="flex-center flex-col gap-4 px-2 lg:px-14">
        <div className="flex items-center flex-wrap">
        <h1 className="heading1">
          {data.title}
        </h1>
        <span className="text-primary heading1">{data.name}</span>

        </div>
        <p className="description1">{data.desc1}</p>
        <p className="description1">{data.desc2}</p>
        <div className="relative w-full mt-2 rounded-md shadow-sm">
          <input type="text" name="audit" placeholder="website.com" 
          className="w-full rounded-md px-4 py-[0.5rem] ring-1 ring-inset ring-black focus:ring-primary"/>
          <Button title="scan" styles="bg-primary hover:bg-p-hover text-white absolute right-0" />
        </div>
      </div>
      <div className="flex-center w-full h-full">
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
