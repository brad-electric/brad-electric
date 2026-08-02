import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import ServiceList from "@/components/ui/ServiceList";
import FAQ from "@/components/ui/FAQ";
import CTA from "@/components/home/CTA";

export const metadata: Metadata = {
  title: "Elektroinstalacije za kuće i stanove",
  description:
    "Kompletne elektroinstalacije, adaptacije stanova, LED rasvjeta, pametne instalacije i punjači za EV. B-RAD Electric — Rijeka.",
};

const services = [
  "Kompletne elektroinstalacije",
  "Adaptacije stanova",
  "Razvodni ormari",
  "LED rasvjeta",
  "Utičnice i prekidači",
  "Otklanjanje kvarova",
  "Pametne instalacije",
  "Punjači za električna vozila",
];

const faqItems = [
  {
    question: "Koliko traje adaptacija elektroinstalacije stana?",
    answer:
      "Trajanje ovisi o veličini stana i opsegu radova. Prosječna adaptacija stana od 60–80 m² traje 3–7 radnih dana. Nakon besplatnog pregleda dajemo preciznu procjenu roka.",
  },
  {
    question: "Trebam li dozvolu za elektroinstalaterske radove?",
    answer:
      "Za veće radove i promjene u razvodnom ormaru potrebna je suglasnost nadležnog tijela i ispit ispravnosti elektroinstalacije. Mi vodimo cijeli proces — od projekta do završnog ispitivanja.",
  },
  {
    question: "Radite li i na manjim popravcima?",
    answer:
      "Da, radimo sve — od zamjene utičnice do kompletne adaptacije. Za hitne slučajeve dostupni smo 24/7.",
  },
  {
    question: "Dajete li garanciju na radove?",
    answer:
      "Da, svi naši radovi dolaze s garancijom. Detalje garancije navodimo u ponudi za svaki projekt.",
  },
];

export default function KucanstvoPage() {
  return (
    <>
      <PageHero
        title="Elektroinstalacije za kuće i stanove"
        subtitle="Sigurna, moderna i estetski usklađena rješenja za vaš dom — od novogradnje do adaptacije."
      />
      <ServiceList services={services} />
      <FAQ items={faqItems} />
      <CTA />
    </>
  );
}
