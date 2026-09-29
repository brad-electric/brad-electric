"use client";

import { Download } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";
import Button from "@/components/ui/Button";
import {
  CJENIK,
  CJENIK_CSV_FILENAME,
  CJENIK_CSV_URL,
  CJENIK_NAPOMENA,
  SIDRENA_CJENA_DATUM,
} from "@/lib/cjenik";

const sidrenaLabel = `Sidrena cjena (cjena na dan ${SIDRENA_CJENA_DATUM})`;

export default function CjenikTable() {
  return (
    <section className="section-padding">
      <div className="container-custom mx-auto px-6 lg:px-8">
        <AnimatedSection className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 mb-12">
          <div>
            <p className="text-gray text-sm md:text-base max-w-xl leading-relaxed">
              Cjene su informativnog karaktera. Za točnu ponudu pošaljite upit
              ili nas nazovite — procjena ovisi o opsegu radova i uvjetima na
              terenu.
            </p>
          </div>
          <a
            href={CJENIK_CSV_URL}
            download={CJENIK_CSV_FILENAME}
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-secondary text-white font-semibold rounded-lg glow-hover shrink-0"
          >
            <Download size={20} />
            Preuzmi CSV cjenik
          </a>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <div className="hidden md:block overflow-hidden rounded-2xl border border-secondary/30 bg-card">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-secondary/40 border-b border-secondary/30">
                  <th className="px-6 py-5 text-sm font-bold text-white uppercase tracking-wide">
                    Usluga
                  </th>
                  <th className="px-6 py-5 text-sm font-bold text-white uppercase tracking-wide text-right whitespace-nowrap">
                    Aktualna cjena
                  </th>
                  <th className="px-6 py-5 text-sm font-bold text-white text-right max-w-[220px]">
                    <span className="uppercase tracking-wide">Sidrena cjena</span>
                    <span className="block normal-case font-medium text-gray text-xs mt-1 tracking-normal">
                      (cjena na dan {SIDRENA_CJENA_DATUM})
                    </span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {CJENIK.map((stavka) => (
                  <tr
                    key={stavka.usluga}
                    className="border-b border-secondary/20 last:border-0 transition-colors hover:bg-secondary/10"
                  >
                    <td className="px-6 py-4 text-white">{stavka.usluga}</td>
                    <td className="px-6 py-4 text-right whitespace-nowrap text-gray">
                      {stavka.aktualnaCijena}
                    </td>
                    <td className="px-6 py-4 text-right whitespace-nowrap text-gray">
                      {stavka.sidrenaCijena}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="md:hidden space-y-4">
            {CJENIK.map((stavka) => (
              <div
                key={stavka.usluga}
                className="p-5 rounded-xl bg-card border border-secondary/20"
              >
                <p className="text-white font-medium mb-4 leading-snug">
                  {stavka.usluga}
                </p>
                <div className="grid grid-cols-2 gap-3 text-sm">
                  <div>
                    <p className="text-gray/70 mb-1">Aktualna cjena</p>
                    <p className="text-white">{stavka.aktualnaCijena}</p>
                  </div>
                  <div>
                    <p className="text-gray/70 mb-1 leading-snug">{sidrenaLabel}</p>
                    <p className="text-white">{stavka.sidrenaCijena}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 p-6 rounded-xl bg-card/80 border border-secondary/20">
            <p className="text-sm font-semibold text-accent mb-3">Napomena</p>
            <p className="text-gray text-sm leading-relaxed">{CJENIK_NAPOMENA}</p>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.2} className="mt-12 text-center">
          <Button href="/kontakt" variant="primary">
            Zatražite ponudu
          </Button>
        </AnimatedSection>
      </div>
    </section>
  );
}
