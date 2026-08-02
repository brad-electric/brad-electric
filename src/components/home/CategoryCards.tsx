"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Home, Factory, ArrowRight } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";

const categories = [
  {
    title: "Kućanstvo",
    description: "Elektroinstalacije za kuće, stanove i adaptacije.",
    href: "/kucanstvo",
    icon: Home,
    gradient: "from-secondary/40 to-secondary/10",
  },
  {
    title: "Industrija",
    description: "Industrijska postrojenja, tvornice i proizvodni pogoni.",
    href: "/industrija",
    icon: Factory,
    gradient: "from-accent/20 to-accent/5",
  },
];

export default function CategoryCards() {
  return (
    <section className="section-padding relative">
      <div className="container-custom mx-auto px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {categories.map((cat, i) => (
            <AnimatedSection key={cat.href} delay={i * 0.15}>
              <Link href={cat.href} className="group block">
                <motion.div
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.3 }}
                  className={`relative overflow-hidden rounded-2xl bg-card border border-secondary/20 p-10 lg:p-14 glow-hover min-h-[280px] flex flex-col justify-between`}
                >
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${cat.gradient} opacity-50 group-hover:opacity-80 transition-opacity duration-500`}
                  />
                  <div className="relative z-10">
                    <div className="w-16 h-16 flex items-center justify-center rounded-xl bg-secondary/30 mb-6 group-hover:bg-accent/20 transition-colors duration-300">
                      <cat.icon
                        size={32}
                        className="text-accent group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    <h3 className="text-3xl lg:text-4xl font-bold text-white mb-3">
                      {cat.title}
                    </h3>
                    <p className="text-gray text-lg leading-relaxed max-w-md">
                      {cat.description}
                    </p>
                  </div>
                  <div className="relative z-10 flex items-center gap-2 text-accent font-semibold mt-8 group-hover:gap-4 transition-all duration-300">
                    Saznajte više
                    <ArrowRight size={20} />
                  </div>
                </motion.div>
              </Link>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
