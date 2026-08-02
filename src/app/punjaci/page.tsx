import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import ServiceList from "@/components/ui/ServiceList";
import CTA from "@/components/home/CTA";

export const metadata: Metadata = {
  title: "Punjači za električna vozila",
  description:
    "Kućni i poslovni EV punjači — projektiranje, montaža, konfiguracija i puštanje u rad. B-RAD Electric Rijeka.",
};

const services = [
  "Kućni punjači",
  "Poslovni punjači",
  "Projektiranje",
  "Montaža",
  "Konfiguracija",
  "Puštanje u rad",
];

export default function PunjaciPage() {
  return (
    <>
      <PageHero
        title="Punjači za električna vozila"
        subtitle="Kompletna rješenja za punjenje električnih vozila — od projektiranja do puštanja u rad."
      />
      <ServiceList services={services} />
      <CTA />
    </>
  );
}
