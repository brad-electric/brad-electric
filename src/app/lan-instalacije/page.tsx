import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import ServiceList from "@/components/ui/ServiceList";
import CTA from "@/components/home/CTA";

export const metadata: Metadata = {
  title: "LAN instalacije",
  description:
    "Profesionalne mrežne instalacije — Cat6, Cat6A, mrežni ormari, patch paneli i poslovne mreže. B-RAD Electric Rijeka.",
};

const services = [
  "Mrežne instalacije",
  "Cat6",
  "Cat6A",
  "Mrežni ormari",
  "Patch paneli",
  "Poslovne mreže",
  "Priprema za optiku",
];

export default function LanInstalacijePage() {
  return (
    <>
      <PageHero
        title="LAN instalacije"
        subtitle="Profesionalne strukturirane kabelske instalacije za pouzdane poslovne mreže."
      />
      <ServiceList services={services} />
      <CTA />
    </>
  );
}
