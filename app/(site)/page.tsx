import Service from "../../components/Service";
import Intro from "@/components/Intro";
import About from "@/components/About";

export default async function Home() {
  return (
    <div className="max-width bg-white text-black pt-12">
      {/* hero section */}
      <Intro />
      {/* accessinor intro */}
      <About />
      {/* services section */}
      <Service />
    </div>
  );
}
