import dynamic from "next/dynamic";
import Hero from "@/components/main/Hero";
import Projects from "@/components/main/Projects";
import Skills from "@/components/main/Skills";
import Experiences from "@/components/main/Experience";

// Dynamically import RotateScreenPrompt to ensure it's only used on the client side
const RotateScreenPrompt = dynamic(
  () => import("@/components/main/RotateScreenPrompt "),
  { ssr: false }
);

export default function Home() {
  return (
    <RotateScreenPrompt>
      <main className="h-full w-full">
        <div className="flex flex-col gap-20">
          <Hero />
          <Skills />
          <Experiences />
          <Projects />
        </div>
      </main>
    </RotateScreenPrompt>
  );
}
