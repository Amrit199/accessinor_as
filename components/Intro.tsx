import { pages } from "@/constants";
import Image from "next/image";
import Button from "./Button";

export default async function Intro() {
  const data = pages.home;
  return (
    <div className="hero-component">
      <div className="flex-center flex-col gap-4 text-center padding-x">
        <h1 className="heading1">
          {data.home_intor}
          <span className="text-6xl text-primary mx-2 animate-pulse">
            &#8594;
          </span>
          <span className="text-primary">{data.title}</span>
        </h1>
        <p className="description1">{data.home_desc}</p>
        <Button
          title="Scan Now"
          styles="bg-primary hover:bg-p-hover text-white"
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
