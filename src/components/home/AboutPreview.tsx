"use client";

import { CheckCircle } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";
import Button from "@/components/ui/Button";

const highlights = [
  "Više od 11 godina iskustva u elektro struci",
  "Majstorski ispit",
  "Profesionalan pristup svakom projektu",
];

export default function AboutPreview() {
  return (
    <section className="section-padding bg-card/50">
      <div className="container-custom mx-auto px-6 lg:px-8 max-w-3xl">
        <AnimatedSection>
          <span className="text-accent font-semibold text-sm tracking-wider uppercase mb-4 block">
            O nama
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 tracking-tight">
            Stručnjaci za elektroinstalacije
          </h2>
          <p className="text-gray text-lg leading-relaxed mb-8">
            B-RAD Electric specijaliziran je za elektroinstalacije, industrijske instalacije, održavanje postrojenja i hitne intervencije.
          </p>
          <ul className="space-y-4 mb-10">
            {highlights.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <CheckCircle
                  size={22}
                  className="text-accent shrink-0 mt-0.5"
                />
                <span className="text-white/90">{item}</span>
              </li>
            ))}
          </ul>
          <Button href="/o-nama" variant="secondary">
            Saznajte više o nama
          </Button>
        </AnimatedSection>
      </div>
    </section>
  );
}
