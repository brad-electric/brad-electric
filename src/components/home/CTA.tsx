"use client";

import { Phone } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";
import Button from "@/components/ui/Button";
import { SITE } from "@/lib/constants";

export default function CTA() {
  return (
    <section className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-secondary/40 via-secondary/20 to-primary" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[150px]" />

      <div className="container-custom mx-auto px-6 lg:px-8 relative z-10">
        <AnimatedSection className="text-center max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight">
            Trebate električara?
          </h2>
          <p className="text-xl md:text-2xl text-gray mb-10">
            Dostupni smo 24 sata dnevno.
          </p>
          <Button href={SITE.phoneHref} variant="primary" className="text-lg px-10 py-5">
            <Phone size={22} />
            Nazovite odmah
          </Button>
        </AnimatedSection>
      </div>
    </section>
  );
}
