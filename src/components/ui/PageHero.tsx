"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";

interface PageHeroProps {
  title: string;
  subtitle?: string;
  children?: ReactNode;
}

export default function PageHero({ title, subtitle, children }: PageHeroProps) {
  return (
    <section className="relative pt-28 sm:pt-36 pb-20 lg:pt-52 lg:pb-28 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-secondary/30" />
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-[120px]" />

      <div className="container-custom mx-auto px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-4xl"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight">
            {title}
          </h1>
          {subtitle && (
            <p className="text-xl md:text-2xl text-gray leading-relaxed max-w-2xl">
              {subtitle}
            </p>
          )}
          {children}
        </motion.div>
      </div>
    </section>
  );
}
