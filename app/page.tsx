import { About } from "@/components/about";
import { Elevate } from "@/components/elevate";
import Footer from "@/components/footer";
import { WelcomeHero } from "@/components/welcome-hero";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-normal font-bold">
      <WelcomeHero />
      <About />
      <Elevate />
      <Footer />
    </main>
  );
}
