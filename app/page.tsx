import About from "@/components/About";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import Project from "@/components/Project";
import ReactLenis from "lenis/react";
import Image from "next/image";
import ToolsThatIUse from "@/components/ToolsThatIUse";
import { MyTimeline } from "@/components/MyTimeline";
import ProjectSection from "@/components/ProjectSection";

export default function Home() {
  return (
    <main className="dark bg-background w-screen flex min-h-screen flex-col items-center justify-between overflow-hidden gap-10">
      <ReactLenis
        root
        options={{
          lerp: 0.05,
        }}
      >
        <Navbar />
        <HeroSection />
        <About />
        <MyTimeline />

        <ToolsThatIUse />
        <ProjectSection />
      </ReactLenis>
    </main>
  );
}
