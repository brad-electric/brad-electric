"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";
import { NAV_LINKS, SITE } from "@/lib/constants";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-primary/80 backdrop-blur-xl border-b border-secondary/30 shadow-lg shadow-secondary/10"
          : "bg-transparent"
      }`}
    >
      <div className="container-custom mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-32 sm:h-36 lg:h-44">
          <Link href="/" className="relative z-10 shrink-0">
            <Image
              src="/logo.png"
              alt={`${SITE.name} logo`}
              width={640}
              height={438}
              priority
              className="h-28 sm:h-32 lg:h-40 w-auto"
            />
          </Link>

          <nav className="hidden xl:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-3 py-2 text-sm font-medium text-gray hover:text-white transition-colors duration-200 rounded-lg hover:bg-secondary/20"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <a
            href={SITE.phoneHref}
            className="hidden lg:flex items-center gap-2 px-5 py-2.5 bg-accent text-primary font-semibold text-sm rounded-lg glow-button"
          >
            <Phone size={16} />
            {SITE.phone}
          </a>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="xl:hidden relative z-10 p-2 text-white"
            aria-label={mobileOpen ? "Zatvori izbornik" : "Otvori izbornik"}
          >
            {mobileOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="xl:hidden fixed inset-0 top-0 bg-primary/95 backdrop-blur-xl pt-36 lg:pt-48 px-6 pb-8 overflow-y-auto"
          >
            <nav className="flex flex-col gap-2">
              {NAV_LINKS.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="block px-4 py-4 text-lg font-medium text-white border-b border-secondary/20 hover:text-accent transition-colors"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <a
                href={SITE.phoneHref}
                className="mt-6 flex items-center justify-center gap-2 px-6 py-4 bg-accent text-primary font-bold text-lg rounded-lg glow-button"
              >
                <Phone size={20} />
                {SITE.phone}
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
