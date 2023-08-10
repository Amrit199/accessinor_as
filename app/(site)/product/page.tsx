import Image from "next/image";
import responsive from "../../../public/assets/webchecker.png";
import codel from "../../../public/assets/pexels-markus-spiske-4439901.jpg";
import coder from "../../../public/assets/pexels-thisisengineering-3861976.jpg";
import Button from "@/components/Button";

export default function Product() {
  return (
    <div className="w-full h-full bg-white text-black py-36 md:py-48 px-5">
      <div className="w-full h-full flex flex-col lg:flex-row items-center gap-20 lg:gap-8">
        <div className="w-full px-8 flex flex-col items-start justify-center gap-4">
          <h1 className=" text-4xl font-bold">
            AssessiNor: Automated
            <span className=" font-normal text-primary px-2">
              Website Accessibility
            </span>
            Checker Powered by AI
          </h1>
          <p className=" text-md">
            AccessiNor is a game-changer in web accessibility, simplifying and
            streamlining the process of becoming accessible and compliant using
            AI, machine learning, and computer vision.
          </p>
          <Button title="qucik demo" styles="bg-primary hover:bg-p-hover text-white"/>
        </div>
        <div className="w-full flex items-center justify-center relative py-6">
          <Image
            src={responsive}
            alt="accessibility checked image"
            className="min-w-0 z-10"
            width={512}
            height={512}
          />
          <Image
            src={codel}
            alt="accessibility checked image"
            className="w-72 absolute left-7 blur-sm"
            width={512}
            height={512}
          />
          <Image
            src={coder}
            alt="accessibility checked image"
            className="w-72 absolute right-7 blur-sm"
            width={512}
            height={512}
          />
        </div>
      </div>
    </div>
  );
}
