"use client";

import { Download } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";
import Button from "@/components/ui/Button";
import {
  CIJENIK,
  CIJENIK_CSV_FILENAME,
  CIJENIK_CSV_URL,
} from "@/lib/cijenik";

export default function CijenikTable() {
  return (
    <section className="section-padding">
      <div className="container-custom mx-auto px-6 lg:px-8">
        <AnimatedSection className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 mb-12">
          <div>
            <p className="text-gray text-sm md:text-base max-w-xl leading-relaxed">
              Cijene su informativnog karaktera. Za točnu ponudu pošaljite upit
              ili nas nazovite — procjena ovisi o opsegu radova i uvjetima na
              terenu.
            </p>
          </div>
          <a
            href={CIJENIK_CSV_URL}
            download={CIJENIK_CSV_FILENAME}
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-secondary text-white font-semibold rounded-lg glow-hover shrink-0"
          >
            <Download size={20} />
            Preuzmi CSV cijenik
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
                    Aktualna cijena
                  </th>
                  <th className="px-6 py-5 text-sm font-bold text-white uppercase tracking-wide text-right whitespace-nowrap">
                    Sidrena cijena
                  </th>
                </tr>
              </thead>
              <tbody>
                {CIJENIK.map((stavka, i) => (
                  <tr
                    key={stavka.usluga}
                    className={`border-b border-secondary/20 last:border-0 transition-colors hover:bg-secondary/10 ${
                      stavka.istaknuto ? "bg-accent/5" : ""
                    }`}
                  >
                    <td
                      className={`px-6 py-4 text-white ${
                        stavka.istaknuto ? "font-bold" : ""
                      }`}
                    >
                      {stavka.usluga}
                    </td>
                    <td
                      className={`px-6 py-4 text-right whitespace-nowrap ${
                        stavka.istaknuto
                          ? "font-bold text-accent"
                          : "text-gray"
                      }`}
                    >
                      {stavka.aktualnaCijena}
                    </td>
                    <td
                      className={`px-6 py-4 text-right whitespace-nowrap ${
                        stavka.istaknuto
                          ? "font-bold text-accent"
                          : "text-gray"
                      }`}
                    >
                      {stavka.sidrenaCijena}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="md:hidden space-y-4">
            {CIJENIK.map((stavka) => (
              <div
                key={stavka.usluga}
                className={`p-5 rounded-xl bg-card border border-secondary/20 ${
                  stavka.istaknuto ? "border-accent/30 bg-accent/5" : ""
                }`}
              >
                <p
                  className={`text-white mb-4 leading-snug ${
                    stavka.istaknuto ? "font-bold" : "font-medium"
                  }`}
                >
                  {stavka.usluga}
                </p>
                <div className="grid grid-cols-2 gap-3 text-sm">
                  <div>
                    <p className="text-gray/70 mb-1">Aktualna cijena</p>
                    <p
                      className={
                        stavka.istaknuto
                          ? "font-bold text-accent"
                          : "text-white"
                      }
                    >
                      {stavka.aktualnaCijena}
                    </p>
                  </div>
                  <div>
                    <p className="text-gray/70 mb-1">Sidrena cijena</p>
                    <p
                      className={
                        stavka.istaknuto
                          ? "font-bold text-accent"
                          : "text-white"
                      }
                    >
                      {stavka.sidrenaCijena}
                    </p>
                  </div>
                </div>
              </div>
            ))}
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
