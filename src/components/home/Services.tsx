"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Zap,
  Factory,
  Wrench,
  AlertTriangle,
  Network,
  Car,
  ArrowRight,
  LucideIcon,
} from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { HOME_SERVICES } from "@/lib/constants";

const iconMap: Record<string, LucideIcon> = {
  Zap,
  Factory,
  Wrench,
  AlertTriangle,
  Network,
  Car,
};

export default function Services() {
  return (
    <section className="section-padding">
      <div className="container-custom mx-auto px-6 lg:px-8">
        <SectionHeading
          title="Usluge"
          subtitle="Širok spektar profesionalnih usluga iz područja elektroinstalacija, prilagođenih vašim potrebama."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {HOME_SERVICES.map((service, i) => {
            const Icon = iconMap[service.icon];
            return (
              <AnimatedSection key={service.href} delay={i * 0.08}>
                <Link href={service.href} className="group block h-full">
                  <motion.div
                    whileHover={{ y: -6 }}
                    transition={{ duration: 0.3 }}
                    className="h-full p-8 rounded-2xl bg-card border border-secondary/20 glow-hover flex flex-col"
                  >
                    <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-secondary/30 mb-6 group-hover:bg-accent/20 transition-all duration-300">
                      <Icon
                        size={28}
                        className="text-accent group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-accent transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-gray text-sm leading-relaxed flex-grow">
                      {service.description}
                    </p>
                    <div className="flex items-center gap-2 text-accent/70 group-hover:text-accent font-medium text-sm mt-6 group-hover:gap-3 transition-all duration-300">
                      Detaljnije
                      <ArrowRight size={16} />
                    </div>
                  </motion.div>
                </Link>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}
