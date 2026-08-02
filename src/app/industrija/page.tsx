import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import ServiceList from "@/components/ui/ServiceList";
import CTA from "@/components/home/CTA";

export const metadata: Metadata = {
  title: "Industrijske elektroinstalacije",
  description:
    "Industrijska postrojenja, kabelske trase, napajanje strojeva i održavanje proizvodnih pogona. B-RAD Electric — Rijeka.",
};

const services = [
  "Industrijska postrojenja",
  "Kabelske trase",
  "Napajanje strojeva",
  "Industrijski razvodni ormari",
  "Održavanje proizvodnih pogona",
  "Preventivno održavanje",
  "Otklanjanje kvarova",
  "Servis industrijskih sustava",
];

export default function IndustrijaPage() {
  return (
    <>
      <PageHero
        title="Industrijske elektroinstalacije"
        subtitle="Robusna rješenja za tvornice, proizvodne pogone i industrijska postrojenja — pouzdanost koja ne smije stati."
      />
      <ServiceList services={services} />
      <CTA />
    </>
  );
}
