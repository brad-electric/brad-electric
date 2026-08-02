import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import ServiceList from "@/components/ui/ServiceList";
import FloatingCallButton from "@/components/ui/FloatingCallButton";
import Button from "@/components/ui/Button";
import { SITE } from "@/lib/constants";
import { Phone } from "lucide-react";

export const metadata: Metadata = {
  title: "Hitne intervencije 24/7",
  description:
    "Hitne elektrointervencije 24 sata dnevno. Nestanak struje, kratki spoj, kvarovi — brzi izlazak na teren. B-RAD Electric Rijeka.",
};

const services = [
  "Nestanak električne energije",
  "Kratki spoj",
  "Kvarovi",
  "Brz izlazak na teren",
];

export default function HitneIntervencijePage() {
  return (
    <>
      <PageHero
        title="Hitne intervencije 24/7"
        subtitle="Kvar ne čeka radno vrijeme. Mi smo dostupni dan i noć — brz odgovor, stručno rješenje."
      >
        <div className="mt-8">
          <Button href={SITE.phoneHref} variant="primary" className="text-lg">
            <Phone size={22} />
            {SITE.phone}
          </Button>
        </div>
      </PageHero>
      <ServiceList services={services} columns={1} />
      <FloatingCallButton />
    </>
  );
}
