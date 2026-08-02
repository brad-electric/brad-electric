"use client";

import {
  Award,
  BadgeCheck,
  Building2,
  Clock,
  LucideIcon,
} from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { WHY_US } from "@/lib/constants";

const iconMap: Record<string, LucideIcon> = {
  Award,
  BadgeCheck,
  Building2,
  Clock,
};

export default function WhyUs() {
  return (
    <section className="section-padding bg-card/50">
      <div className="container-custom mx-auto px-6 lg:px-8">
        <SectionHeading
          title="Zašto B-RAD Electric"
          subtitle="Vaš pouzdan partner za sve vaše potrebe u području elektroinstalacija — od adaptacije stana do održavanja industrijskog postrojenja."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {WHY_US.map((item, i) => {
            const Icon = iconMap[item.icon];
            return (
              <AnimatedSection key={item.title} delay={i * 0.1}>
                <div className="group h-full p-8 rounded-2xl bg-card border border-secondary/20 glow-hover">
                  <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-secondary/30 mb-6 group-hover:bg-accent/20 transition-colors duration-300">
                    <Icon
                      size={28}
                      className="text-accent"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">
                    {item.title}
                  </h3>
                  <p className="text-gray text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}
