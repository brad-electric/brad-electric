"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { PROCESS_STEPS } from "@/lib/constants";

export default function Process() {
  return (
    <section className="section-padding">
      <div className="container-custom mx-auto px-6 lg:px-8">
        <SectionHeading
          title="Kako radimo"
          subtitle="Jednostavan i transparentan proces — od prvog kontakta do garancije."
        />

        <div className="relative">
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-secondary/30 -translate-y-1/2" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-4">
            {PROCESS_STEPS.map((step, i) => (
              <AnimatedSection key={step.title} delay={i * 0.1}>
                <div className="relative text-center lg:text-center">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="relative z-10 w-16 h-16 mx-auto mb-6 flex items-center justify-center rounded-full bg-secondary border-2 border-accent text-accent font-bold text-xl glow-hover"
                  >
                    {i + 1}
                  </motion.div>
                  {i < PROCESS_STEPS.length - 1 && (
                    <div className="lg:hidden flex justify-center my-2">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        className="text-secondary"
                        aria-hidden="true"
                      >
                        <path
                          d="M12 5v14M5 12l7 7 7-7"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                        />
                      </svg>
                    </div>
                  )}
                  <h3 className="text-lg font-bold text-white mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
