import { getPages, getProjets } from "@/sanity/sanity-utils";
import responsive from "../../public/assets/responsive-website.png";
import Service from "../components/Service";
import Image from "next/image";

export default async function Home() {
  const projects = await getProjets();
  const pages = await getPages();
  return (
    <div className="bg-white text-black pt-12">
      {/* hero section */}
      <div className="w-full h-full flex flex-col md:flex-row items-center text-black py-16 px-5 gap-4">
        <div className="w-full px-8 flex flex-col items-center justify-center gap-4 text-center">
          <h1 className=" text-5xl font-bold">
            Find out your{" "}
            <span className=" font-normal text-indigo-600">
              Website Accessibility
            </span>
          </h1>
          <p className=" text-md">
            By assessing your websites level of conformance with globally
            recognized digital accessibility standards the Website Accessibility
            Health Score ensures barrier free access to technology for all users
            including those with disabilities
          </p>
          <a
            href="#"
            className="rounded-md bg-indigo-600 shadow-sm px-6 py-2 text-lg font-semibold text-white hover:bg-indigo-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Scan Now
          </a>
        </div>
        <div className="w-full flex justify-center">
          <Image
            src={responsive}
            alt="accessibility checked image"
            className="w-min"
            width={512}
            height={512}

          />
        </div>
      </div>
      {/* accessinor intro */}
      <div className="px-6 lg:px-8">
        <div className="mx-auto max-w-2xl py-12 sm:py-16 lg:py-12">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              AccessiNor AS
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              AccessiNor is proud to introduce our primary offering, a
              comprehensive web accessibility checker. This innovative product
              has been carefully designed to assist website owners and
              developers in ensuring compliance with both web accessibility
              standards and the stringent regulations set by the Norwegian
              government. Our web accessibility checker goes beyond standard
              compliance checks by incorporating user experience and design
              considerations, with the ultimate aim of making the web more
              inclusive for all users
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="#"
                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Get started
              </a>
              <a
                href="#"
                className="text-sm font-semibold leading-6 text-gray-900"
              >
                Learn more <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
        {/* <div
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div> */}
      </div>
      {/* services section */}
      <Service />
    </div>
  );
}
