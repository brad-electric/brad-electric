"use client";

import { CheckCircle } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";

interface ServiceListProps {
  services: string[];
  columns?: 1 | 2;
}

export default function ServiceList({ services, columns = 2 }: ServiceListProps) {
  return (
    <section className="section-padding">
      <div className="container-custom mx-auto px-6 lg:px-8">
        <div
          className={`grid gap-4 ${
            columns === 2 ? "sm:grid-cols-2" : "grid-cols-1"
          }`}
        >
          {services.map((service, i) => (
            <AnimatedSection key={service} delay={i * 0.05}>
              <div className="flex items-center gap-4 p-5 rounded-xl bg-card border border-secondary/20 glow-hover">
                <CheckCircle size={22} className="text-accent shrink-0" />
                <span className="text-white font-medium">{service}</span>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
