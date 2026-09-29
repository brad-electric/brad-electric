"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Phone } from "lucide-react";
import Button from "@/components/ui/Button";
import ElectricLines from "@/components/effects/ElectricLines";
import { SITE } from "@/lib/constants";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-secondary/20" />
      <ElectricLines />

      <div className="absolute top-1/4 -right-32 w-96 h-96 bg-secondary/20 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 -left-32 w-80 h-80 bg-accent/5 rounded-full blur-[100px]" />

      <div className="container-custom mx-auto px-6 lg:px-8 relative z-10 pt-28 sm:pt-36 lg:pt-52 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              <span className="inline-block px-4 py-1.5 mb-6 text-sm font-semibold text-accent bg-accent/10 rounded-full border border-accent/20">
                Profesionalne elektroinstalacije
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6"
            >
              <span className="text-white">B-RAD</span>{" "}
              <span className="accent-gradient">Electric</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="text-xl md:text-2xl text-white/90 font-medium mb-4 leading-relaxed"
            >
              Profesionalne elektroinstalacije za kućanstva, poslovne i industrijske objekte.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="text-gray text-lg mb-10 max-w-xl leading-relaxed"
            >
              Pouzdana i kvalitetna elektro rješenja na području Rijeke i Primorsko-goranske županije.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button href="/kontakt" variant="primary">
                Zatražite ponudu
              </Button>
              <Button href={SITE.phoneHref} variant="outline">
                <Phone size={18} />
                Nazovite odmah
              </Button>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="hidden lg:flex justify-center items-center"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-accent/10 rounded-full blur-[80px] scale-75" />
              <div className="absolute inset-0 bg-secondary/30 rounded-full blur-[60px] scale-90 animate-pulse" />
              <Image
                src="/logo.png"
                alt={`${SITE.name} logo`}
                width={500}
                height={342}
                priority
                className="relative w-full max-w-md h-auto drop-shadow-2xl"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
