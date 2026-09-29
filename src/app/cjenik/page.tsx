import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import CjenikTable from "@/components/cjenik/CjenikTable";
import CTA from "@/components/home/CTA";

export const metadata: Metadata = {
  title: "Cjenik",
  description:
    "Cjenik usluga B-RAD Electric — elektroinstalacije, montaže, servis i hitne intervencije. Preuzmite cjenik u CSV formatu.",
};

export default function CjenikPage() {
  return (
    <>
      <PageHero
        title="Cjenik"
        subtitle="Transparentne cjene usluga — pregled na stranici ili preuzimanje u CSV formatu."
      />
      <CjenikTable />
      <CTA />
    </>
  );
}
