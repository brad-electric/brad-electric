"use client";

import { Phone } from "lucide-react";
import { SITE } from "@/lib/constants";

export default function FloatingCallButton() {
  return (
    <a
      href={SITE.phoneHref}
      className="fixed z-[90] lg:hidden flex items-center gap-3 px-5 py-4 bg-accent text-primary font-bold rounded-full shadow-[0_4px_24px_rgba(0,0,0,0.45)] glow-button border-2 border-primary/20 right-4 bottom-[max(1rem,env(safe-area-inset-bottom))]"
      aria-label="Nazovite odmah"
    >
      <Phone size={22} className="shrink-0" />
      <span className="text-sm">Nazovite</span>
    </a>
  );
}
