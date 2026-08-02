"use client";

import { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, Clock, MapPin, Star, Loader2 } from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { SITE } from "@/lib/constants";

export default function KontaktClient() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const form = e.currentTarget;
    const formData = new FormData(form);
    formData.append(
      "access_key",
      process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY ?? ""
    );
    formData.append("subject", "Novi upit s brad-electric.com");
    formData.append("from_name", "B-RAD Electric web stranica");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      const data = await response.json();

      if (data.success) {
        setSubmitted(true);
        form.reset();
      } else {
        setError("Došlo je do greške. Pokušajte ponovno ili nas nazovite.");
      }
    } catch {
      setError("Došlo je do greške. Pokušajte ponovno ili nas nazovite.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <PageHero
        title="Kontakt"
        subtitle="Javite nam se — odgovaramo u najkraćem mogućem roku."
      />

      <section className="section-padding">
        <div className="container-custom mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            <AnimatedSection>
              <h2 className="text-2xl font-bold text-white mb-8">
                Pošaljite upit
              </h2>

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="p-8 rounded-2xl bg-card border border-accent/30 text-center"
                >
                  <p className="text-accent font-semibold text-lg mb-2">
                    Hvala na upitu!
                  </p>
                  <p className="text-gray">
                    Javit ćemo vam se u najkraćem mogućem roku.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <input
                    type="checkbox"
                    name="botcheck"
                    className="hidden"
                    style={{ display: "none" }}
                  />

                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray mb-2">
                      Ime i prezime
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      disabled={loading}
                      className="w-full px-4 py-3 rounded-lg bg-card border border-secondary/30 text-white placeholder:text-gray/50 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors disabled:opacity-50"
                      placeholder="Vaše ime"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      disabled={loading}
                      className="w-full px-4 py-3 rounded-lg bg-card border border-secondary/30 text-white placeholder:text-gray/50 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors disabled:opacity-50"
                      placeholder="vas@email.hr"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray mb-2">
                      Telefon
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      disabled={loading}
                      className="w-full px-4 py-3 rounded-lg bg-card border border-secondary/30 text-white placeholder:text-gray/50 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors disabled:opacity-50"
                      placeholder="+385 ..."
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray mb-2">
                      Poruka
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      disabled={loading}
                      className="w-full px-4 py-3 rounded-lg bg-card border border-secondary/30 text-white placeholder:text-gray/50 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors resize-none disabled:opacity-50"
                      placeholder="Opišite vaš upit..."
                    />
                  </div>

                  {error && (
                    <p className="text-red-400 text-sm">{error}</p>
                  )}

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full px-8 py-4 bg-accent text-primary font-bold rounded-lg glow-button hover:bg-accent/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    {loading ? (
                      <>
                        <Loader2 size={20} className="animate-spin" />
                        Slanje...
                      </>
                    ) : (
                      "Pošalji upit"
                    )}
                  </button>
                </form>
              )}
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <h2 className="text-2xl font-bold text-white mb-8">
                Kontakt informacije
              </h2>
              <div className="space-y-6 mb-10">
                <a
                  href={SITE.phoneHref}
                  className="flex items-center gap-4 p-5 rounded-xl bg-card border border-secondary/20 glow-hover group"
                >
                  <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-secondary/30 group-hover:bg-accent/20 transition-colors">
                    <Phone size={22} className="text-accent" />
                  </div>
                  <div>
                    <p className="text-gray text-sm">Telefon</p>
                    <p className="text-white font-semibold">{SITE.phone}</p>
                  </div>
                </a>
                <a
                  href={SITE.emailHref}
                  className="flex items-center gap-4 p-5 rounded-xl bg-card border border-secondary/20 glow-hover group"
                >
                  <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-secondary/30 group-hover:bg-accent/20 transition-colors">
                    <Mail size={22} className="text-accent" />
                  </div>
                  <div>
                    <p className="text-gray text-sm">Email</p>
                    <p className="text-white font-semibold">{SITE.email}</p>
                  </div>
                </a>
                <div className="flex items-center gap-4 p-5 rounded-xl bg-card border border-secondary/20">
                  <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-secondary/30">
                    <MapPin size={22} className="text-accent" />
                  </div>
                  <div>
                    <p className="text-gray text-sm">Lokacija</p>
                    <p className="text-white font-semibold">{SITE.address}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-5 rounded-xl bg-card border border-secondary/20">
                  <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-secondary/30">
                    <Clock size={22} className="text-accent" />
                  </div>
                  <div>
                    <p className="text-gray text-sm">Radno vrijeme</p>
                    <p className="text-white font-semibold">{SITE.workingHours}</p>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl overflow-hidden border border-secondary/20 h-64 lg:h-80">
                <iframe
                  title="Lokacija B-RAD Electric — Rijeka"
                  src="https://maps.google.com/maps?q=Rijeka,Croatia&z=13&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section className="section-padding bg-card/50">
        <div className="container-custom mx-auto px-6 lg:px-8">
          <AnimatedSection className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-4">
              Google recenzije
            </h2>
            <p className="text-gray mb-8">
              Uskoro — recenzije naših zadovoljnih klijenata.
            </p>
            <div className="flex justify-center gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={28} className="text-accent fill-accent" />
              ))}
            </div>
            <p className="text-gray/60 text-sm italic">
              Placeholder za Google recenzije
            </p>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
