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
    const handleScroll = () => setScrolled(window.scrollY > 24);
    handleScroll();
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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-primary/95 backdrop-blur-xl border-b border-secondary/40 shadow-lg shadow-black/20"
          : "bg-primary/85 backdrop-blur-md border-b border-secondary/20 xl:bg-transparent xl:border-transparent xl:shadow-none"
      }`}
    >
      <div className="container-custom mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`flex items-center justify-between transition-all duration-300 ${
            scrolled ? "h-16 lg:h-44" : "h-20 sm:h-24 lg:h-44"
          }`}
        >
          <Link href="/" className="relative z-10 shrink-0">
            <Image
              src="/logo.png"
              alt={`${SITE.name} logo`}
              width={640}
              height={438}
              priority
              className={`w-auto transition-all duration-300 ${
                scrolled
                  ? "h-12 sm:h-14 lg:h-40"
                  : "h-16 sm:h-20 lg:h-40"
              }`}
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

          <div className="xl:hidden flex items-center gap-2 relative z-10">
            <a
              href={SITE.phoneHref}
              className="flex items-center justify-center w-11 h-11 rounded-lg bg-accent text-primary glow-button"
              aria-label="Nazovite odmah"
            >
              <Phone size={20} />
            </a>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="p-2.5 rounded-lg bg-secondary/50 border border-secondary/40 text-white"
              aria-label={mobileOpen ? "Zatvori izbornik" : "Otvori izbornik"}
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="xl:hidden fixed inset-0 top-0 bg-primary/98 backdrop-blur-xl pt-20 sm:pt-24 px-6 pb-8 overflow-y-auto z-40"
          >
            <nav className="flex flex-col gap-2 max-h-[calc(100dvh-6rem)] overflow-y-auto">
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
