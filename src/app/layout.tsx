import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FloatingCallButton from "@/components/ui/FloatingCallButton";
import { SITE } from "@/lib/constants";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.name} | Profesionalne elektroinstalacije Rijeka`,
    template: `%s | ${SITE.name}`,
  },
  description:
    "B-RAD Electric — profesionalne elektroinstalacije za kućanstva, poslovne i industrijske objekte. Rijeka i Primorsko-goranska županija. Hitne intervencije 24/7.",
  keywords: [
    "elektroinstalacije",
    "električar Rijeka",
    "industrijske instalacije",
    "hitne intervencije",
    "elektro obrt",
    "B-RAD Electric",
    "održavanje postrojenja",
    "LAN instalacije",
    "EV punjači",
  ],
  authors: [{ name: SITE.name }],
  creator: SITE.name,
  openGraph: {
    type: "website",
    locale: "hr_HR",
    url: SITE.url,
    siteName: SITE.name,
    title: `${SITE.name} | Profesionalne elektroinstalacije`,
    description:
      "Pouzdana i kvalitetna elektro rješenja na području Rijeke i Primorsko-goranske županije.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: `${SITE.name} — Profesionalne elektroinstalacije`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE.name} | Profesionalne elektroinstalacije`,
    description:
      "Pouzdana i kvalitetna elektro rješenja na području Rijeke i Primorsko-goranske županije.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: SITE.url,
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${SITE.url}/#organization`,
  name: SITE.name,
  description:
    "Profesionalne elektroinstalacije za kućanstva, poslovne i industrijske objekte.",
  url: SITE.url,
  telephone: SITE.phone,
  email: SITE.email,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Rijeka",
    addressRegion: "Primorsko-goranska županija",
    addressCountry: "HR",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 45.3271,
    longitude: 14.4422,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "07:00",
      closes: "17:00",
    },
  ],
  priceRange: "$$",
  image: `${SITE.url}/logo.png`,
  sameAs: [SITE.facebook, SITE.instagram],
  areaServed: {
    "@type": "GeoCircle",
    geoMidpoint: {
      "@type": "GeoCoordinates",
      latitude: 45.3271,
      longitude: 14.4422,
    },
    geoRadius: "100000",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Elektro usluge",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Elektroinstalacije" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Industrijske instalacije" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Održavanje postrojenja" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Hitne intervencije 24/7" } },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="hr" className={`${spaceGrotesk.variable} scroll-smooth`}>
      <head>
        <link rel="icon" href="/favicon.png" type="image/png" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema),
          }}
        />
      </head>
      <body className="min-h-screen antialiased font-sans bg-primary text-white">
        <Header />
        <main className="pb-24 lg:pb-0">{children}</main>
        <Footer />
        <FloatingCallButton />
      </body>
    </html>
  );
}
