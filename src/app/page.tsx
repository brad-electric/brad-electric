import Hero from "@/components/home/Hero";
import CategoryCards from "@/components/home/CategoryCards";
import WhyUs from "@/components/home/WhyUs";
import Services from "@/components/home/Services";
import AboutPreview from "@/components/home/AboutPreview";
import Process from "@/components/home/Process";
import CTA from "@/components/home/CTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <CategoryCards />
      <WhyUs />
      <Services />
      <AboutPreview />
      <Process />
      <CTA />
    </>
  );
}
