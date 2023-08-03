import { pages } from "@/constants";
import Image from "next/image";

export default async function Intro() {
  const data = pages.home;
  return (
    <div className="hero-component">
      <div className="flex-center flex-col gap-4 text-center padding-x">
        <h1 className="heading1">
            {data.home_intor}
            <span className="text-6xl text-primary mx-2 animate-pulse">&#8594;</span>
            <span>{data.title}</span>
        </h1>
        <p className="description1">{data.home_desc}</p>
        <a
          href="#"
          className="rounded-md bg-primary shadow-sm px-6 py-2 text-lg font-semibold text-white hover:bg-p-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Scan Now
        </a>
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
