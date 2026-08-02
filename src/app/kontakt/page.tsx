import type { Metadata } from "next";
import KontaktClient from "./KontaktClient";

export const metadata: Metadata = {
  title: "Kontakt",
  description:
    "Kontaktirajte B-RAD Electric — telefon, email, kontakt obrazac. Rijeka i Primorsko-goranska županija. Hitne intervencije 24/7.",
};

export default function KontaktPage() {
  return <KontaktClient />;
}
