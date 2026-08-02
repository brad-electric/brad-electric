"use client";

import { Phone } from "lucide-react";
import { SITE } from "@/lib/constants";

export default function FloatingCallButton() {
  return (
    <a
      href={SITE.phoneHref}
      className="fixed bottom-6 right-6 z-50 flex items-center gap-3 px-6 py-4 bg-accent text-primary font-bold rounded-full shadow-lg glow-button lg:hidden"
      aria-label="Nazovite odmah"
    >
      <Phone size={22} />
      <span className="text-sm">Nazovite</span>
    </a>
  );
}
