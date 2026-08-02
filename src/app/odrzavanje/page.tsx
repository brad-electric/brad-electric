import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import ServiceList from "@/components/ui/ServiceList";
import CTA from "@/components/home/CTA";

export const metadata: Metadata = {
  title: "Održavanje postrojenja",
  description:
    "Preventivno i korektivno održavanje elektroenergetskih postrojenja. Mjesečni ugovori za tvornice, poslovne objekte i industrijska postrojenja.",
};

const services = [
  "Preventivno održavanje",
  "Korektivno održavanje",
  "Mjesečni ugovori",
  "Tvornice",
  "Poslovni objekti",
  "Industrijska postrojenja",
  "Brza intervencija",
];

export default function OdrzavanjePage() {
  return (
    <>
      <PageHero
        title="Održavanje postrojenja"
        subtitle="Redovito održavanje sprječava skupe kvarove i osigurava neprekidni rad vašeg poslovanja."
      />
      <ServiceList services={services} />
      <CTA />
    </>
  );
}
