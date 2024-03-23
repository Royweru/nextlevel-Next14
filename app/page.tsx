import { WelcomeHero } from "@/components/welcome-hero";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-normal p-2 font-bold">
      <WelcomeHero />
    </main>
  );
}
