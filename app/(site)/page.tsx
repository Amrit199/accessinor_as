import Service from "../../components/ServiceCard";
import Intro from "@/components/Intro";
import About from "@/components/About";
import AIDemo from "@/components/AIDemo";
import GetStarted from "@/components/GetStarted";
import Solutions from "@/components/Solutions";

export default async function Home() {
  return (
    <div className="max-width bg-white text-black pt-12">
      {/* hero section */}
      <Intro />
      {/* accessinor intro */}
      <About />
      {/* services section */}
      <Solutions />
      {/* AI intergrated section */}
      <AIDemo />
      <GetStarted />
    </div>
  );
}
