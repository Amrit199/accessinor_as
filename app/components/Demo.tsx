import Image from "next/image";
import responsive from "../../public/assets/responsive-website.png";

export default function Demo() {
  return (
    <div className="w-full h-full flex items-center text-black py-40 px-5">
        <div className="w-full px-8 flex flex-col items-center justify-center gap-4 text-center">
          <h1 className=" text-5xl font-bold">Find out your <span className=" font-normal text-indigo-600">Website Accessibility</span></h1>
          <p className=" text-md">
            By assessing your website's level of conformance with globally
            recognized digital accessibility standards, the Website
            Accessibility Health Score ensures barrier-free access to technology
            for all users, including those with disabilities
          </p>
        </div>
        <div className="w-full flex justify-center">
          <Image
            src={responsive}
            alt="accessibility checked image"
            className=" w-96 h-96"
          />
        </div>
      </div>
  );
}
