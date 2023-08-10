import { pages } from "@/constants";
import Button from "./Button";

export default function About() {
  const data = pages.home;
  return (
    <div className="hero-component">
      <div className="flex-center flex-col gap-6">
        <h1 className="heading1">{data.title}</h1>
        <p className="description1 w-full md:max-w-2xl text-center">
          {data.about_desc}
        </p>
        <div className="flex-center flex-wrap gap-4">
          <Button
            title="Get Started"
            styles="bg-primary hover:bg-p-hover text-white"
          />
          <Button
            title="Learn more ..."
            styles="bg-white hover:outline-black text-black"
          />
        </div>
      </div>
    </div>
  );
}
