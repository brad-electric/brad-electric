import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import AnimatedSection from "@/components/ui/AnimatedSection";
import CTA from "@/components/home/CTA";
import { Award, BadgeCheck, Shield, Users } from "lucide-react";

export const metadata: Metadata = {
  title: "O nama",
  description:
    "B-RAD Electric — više od 11 godina iskustva u elektro struci. Majstorski ispit, profesionalan pristup svakom projektu. Rijeka.",
};

const values = [
  {
    icon: Award,
    title: "11+ godina iskustva",
    description: "Dugogodišnje iskustvo u elektroinstalacijama — od stambenih do industrijskih projekata.",
  },
  {
    icon: BadgeCheck,
    title: "Majstorski ispit",
    description: "Certificirani majstor elektroinstalater s položenim majstorskim ispitom.",
  },
  {
    icon: Shield,
    title: "Garancija kvalitete",
    description: "Svi radovi izvedeni prema važećim standardima s garancijom na izvedbu.",
  },
  {
    icon: Users,
    title: "Profesionalan pristup",
    description: "Transparentna komunikacija, poštivanje rokova i čist rad na lokaciji.",
  },
];

export default function ONamaPage() {
  return (
    <>
      <PageHero
        title="O nama"
        subtitle="B-RAD Electric — vaš pouzdan partner za sve potrebe u području elektroinstalacija u Rijeci i okolici."
      />

      <section className="section-padding">
        <div className="container-custom mx-auto px-6 lg:px-8 max-w-4xl">
          <div className="prose prose-invert prose-lg max-w-none">
            <p className="text-gray text-xl leading-relaxed mb-8">
              B-RAD Electric specijaliziran je za elektroinstalacije, industrijske instalacije, održavanje postrojenja i hitne intervencije.
            </p>
            <p className="text-gray text-lg leading-relaxed mb-8">
              Više od 11 godina iskustva u elektro struci omogućuje nam da pristupimo svakom projektu — bilo da se radi o adaptaciji stana ili održavanju industrijskog postrojenja — s istom razinom profesionalnosti i pažnje prema detaljima.
            </p>
            <p className="text-gray text-lg leading-relaxed">
              Na radovima je certificirani majstor elektroinstalater s položenim majstorskim ispitom. Profesionalan pristup, transparentne ponude i poštivanje rokova temelj su našeg poslovanja.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-card/50">
        <div className="container-custom mx-auto px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((item, i) => (
              <AnimatedSection key={item.title} delay={i * 0.1}>
                <div className="text-center p-8 rounded-2xl bg-card border border-secondary/20 glow-hover">
                  <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center rounded-xl bg-secondary/30">
                    <item.icon size={32} className="text-accent" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">
                    {item.title}
                  </h3>
                  <p className="text-gray text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
