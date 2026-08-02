export const SITE = {
  name: "B-RAD Electric",
  tagline: "Profesionalne elektroinstalacije",
  url: "https://brad-electric.com",
  phone: "+385 99 575 8574",
  phoneHref: "tel:+385995758574",
  email: "info@brad-electric.com",
  emailHref: "mailto:info@brad-electric.com",
  address: "Rijeka, Primorsko-goranska županija",
  workingHours: "Pon – Pet: 07:00 – 17:00 | Hitne intervencije: 24/7",
  facebook: "https://facebook.com/bradelectric",
  instagram: "https://instagram.com/bradelectric",
} as const;

export const NAV_LINKS = [
  { href: "/", label: "Početna" },
  { href: "/kucanstvo", label: "Kućanstvo" },
  { href: "/industrija", label: "Industrija" },
  { href: "/odrzavanje", label: "Održavanje" },
  { href: "/hitne-intervencije", label: "Hitne intervencije 24/7" },
  { href: "/o-nama", label: "O nama" },
  { href: "/kontakt", label: "Kontakt" },
] as const;

export const HOME_SERVICES = [
  {
    title: "Elektroinstalacije",
    description: "Kompletne instalacije za kuće, stanove i poslovne prostore.",
    href: "/kucanstvo",
    icon: "Zap",
  },
  {
    title: "Industrijske instalacije",
    description: "Profesionalna rješenja za industrijska postrojenja i tvornice.",
    href: "/industrija",
    icon: "Factory",
  },
  {
    title: "Održavanje postrojenja",
    description: "Preventivno i korektivno održavanje elektro sustava.",
    href: "/odrzavanje",
    icon: "Wrench",
  },
  {
    title: "Hitne intervencije",
    description: "Brz izlazak na teren — dostupni 24 sata dnevno.",
    href: "/hitne-intervencije",
    icon: "AlertTriangle",
  },
  {
    title: "LAN instalacije",
    description: "Profesionalne mrežne instalacije za poslovne objekte.",
    href: "/lan-instalacije",
    icon: "Network",
  },
  {
    title: "Punjači za električna vozila",
    description: "Projektiranje, montaža i puštanje u rad EV punjača.",
    href: "/punjaci",
    icon: "Car",
  },
] as const;

export const WHY_US = [
  {
    title: "11+ godina iskustva",
    description: "Više od jednog desetljeća u elektro struci s brojnim uspješnim projektima.",
    icon: "Award",
  },
  {
    title: "Majstor elektroinstalater",
    description: "Certificirani majstor s položenim majstorskim ispitom.",
    icon: "BadgeCheck",
  },
  {
    title: "Industrijske instalacije",
    description: "Iskustvo u radu s kompleksnim industrijskim postrojenjima.",
    icon: "Building2",
  },
  {
    title: "Hitne intervencije 24/7",
    description: "Uvijek dostupni za hitne slučajeve — dan i noć.",
    icon: "Clock",
  },
] as const;

export const PROCESS_STEPS = [
  { title: "Kontakt", description: "Javite nam se telefonom ili putem obrasca." },
  { title: "Dolazak na teren", description: "Besplatan pregled i procjena stanja." },
  { title: "Izrada ponude", description: "Detaljna i transparentna ponuda bez skrivenih troškova." },
  { title: "Izvođenje radova", description: "Profesionalna izvedba prema standardima." },
  { title: "Garancija", description: "Garancija na sve izvedene radove." },
] as const;
