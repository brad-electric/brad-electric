import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import CijenikTable from "@/components/cijenik/CijenikTable";
import CTA from "@/components/home/CTA";

export const metadata: Metadata = {
  title: "Cijenik",
  description:
    "Cijenik usluga B-RAD Electric — elektroinstalacije, montaže, servis i hitne intervencije. Preuzmite cijenik u CSV formatu.",
};

export default function CijenikPage() {
  return (
    <>
      <PageHero
        title="Cijenik"
        subtitle="Transparentne cijene usluga — pregled na stranici ili preuzimanje u CSV formatu."
      />
      <CijenikTable />
      <CTA />
    </>
  );
}
