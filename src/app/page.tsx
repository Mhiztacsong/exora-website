import { Enquire } from "@/components/home/Enquire";
import { Hero } from "@/components/home/Hero";
import { HowItWorks } from "@/components/home/HowItWorks";
import { Pricing } from "@/components/home/Pricing";
import { Services } from "@/components/home/Services";

export default function Home() {
  return (
    <main id="main-content" className="flex-1">
      <Hero />
      <Services />
      <HowItWorks />
      <Pricing />
      <Enquire />
    </main>
  );
}
