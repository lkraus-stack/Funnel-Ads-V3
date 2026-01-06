/**
 * Content Data - Zentrale Textdatei
 * 
 * TEMPLATE GUIDE:
 * Alle Texte der Landingpage sind hier zentral gespeichert.
 * Ändere die Texte hier, um den Inhalt der Seite anzupassen.
 * Die Struktur bleibt gleich, nur die Werte werden angepasst.
 */

// ========================================
// NAVIGATION
// ========================================
export const navContent = {
  logo: "Franco Consulting",
  links: [
    { label: "Leistungen", href: "#features" },
    { label: "Ergebnisse", href: "#results" },
    { label: "Über uns", href: "#about-us" },
    { label: "Kontakt", href: "#contact" },
  ],
  cta: "Kostenlose Beratung",
  ctaHref: "#contact",
};

// ========================================
// HERO SECTION
// ========================================
export const heroContent = {
  badge: "200+ Hotels betreut",
  title: "Die #1 Agentur für Hotel Mehr Buchungen mit Ads",
  rotatingWords: ["Direktbuchungen", "Bessere Margen", "Mehr Kontrolle"],
  subtitle: "Wir steigern Ihre Direktbuchungsquote und reduzieren Abhängigkeiten von Buchungsportalen – durch strategische Performance-Kampagnen mit nachweisbaren Ergebnissen",
  primaryCta: "Kostenlose Beratung",
  secondaryCta: "Mehr erfahren",
  stats: [
    { value: "+300", label: "Hotels betreut" },
    { value: "+10M", label: "Mio." },
    { value: "+8", label: "Jahre Erfahrung" },
  ],
};

// ========================================
// TRUSTED BY SECTION
// ========================================
export const trustedByContent = {
  title: "Performance-Partner der größten Tourismus- und Hotelagenturen",
  subtitle: "Echte Ergebnisse von unseren Hotel-Partnern",
  hotels: [
    {
      id: "hotel-alpine-resort",
      name: "Alpine Resort Zermatt",
      category: "★ HAUPTBRANCHE",
      location: "Zermatt, Schweiz",
      image: "/images/hotels/alpine-resort.jpg",
      stats: {
        directBookings: "+50%",
        occupancy: "87%",
        independence: "72%",
        revenue: "+50%"
      },
      description: "Luxus-Resort mit 120 Zimmern",
      caseStudy: {
        challenge: "Das Alpine Resort war zu 78% abhängig von Booking.com und Expedia. Hohe Provisionskosten und wenig Kontrolle über die Gäste-Kommunikation schmälerten die Margen erheblich.",
        strategy: [
          "Google Hotel Ads und Search Ads für maximale Sichtbarkeit",
          "Meta-Kampagnen für Inspiration und Retargeting",
          "Saisonale Angebotskampagnen mit Buchungsanreizen",
          "Regionales Targeting für Schweizer und deutsche Gäste",
          "Conversion-optimierte Buchungsstrecken"
        ],
        results: [
          { metric: "Direktbuchungen", before: "22%", after: "72%", change: "+50%" },
          { metric: "Auslastung", before: "71%", after: "87%", change: "+16%" },
          { metric: "Durchschnittlicher Zimmerpreis", before: "€280", after: "€340", change: "+21%" },
          { metric: "Gesteigerte Eigenanteilsquote", before: "22%", after: "72%", change: "+50%" }
        ],
        timeline: "6 Monate"
      }
    },
    {
      id: "hotel-stadthotel-munich",
      name: "Boutique Hotel München",
      category: "BUSINESS HOTEL",
      location: "München, Deutschland",
      image: "/images/hotels/boutique-munich.jpg",
      stats: {
        directBookings: "+37%",
        occupancy: "82%",
        independence: "65%",
        revenue: "+37%"
      },
      description: "Modernes Business-Hotel mit 85 Zimmern",
      caseStudy: {
        challenge: "Starke Konkurrenz in München und hohe Abhängigkeit von OTA-Plattformen. Geschäftsreisende buchten hauptsächlich über Firmen-Portale mit hohen Provisionen.",
        strategy: [
          "Gezielte B2B-Kampagnen für Geschäftsreisende",
          "Local SEA für München-spezifische Suchanfragen",
          "LinkedIn-Ads für Unternehmenskunden",
          "Remarketing für Website-Besucher",
          "Mobile-optimierte Buchungsstrecke"
        ],
        results: [
          { metric: "Direktbuchungen", before: "28%", after: "65%", change: "+37%" },
          { metric: "Business-Gäste direkt", before: "15%", after: "41%", change: "+173%" },
          { metric: "Auslastung", before: "74%", after: "82%", change: "+11%" },
          { metric: "Gesteigerte Eigenanteilsquote", before: "28%", after: "65%", change: "+37%" }
        ],
        timeline: "8 Monate"
      }
    },
    {
      id: "hotel-seaside-croatia",
      name: "Seaside Resort Dubrovnik",
      category: "RESORT & SPA",
      location: "Dubrovnik, Kroatien",
      image: "/images/hotels/seaside-dubrovnik.jpg",
      stats: {
        directBookings: "+47%",
        occupancy: "91%",
        independence: "78%",
        revenue: "+47%"
      },
      description: "Luxus-Resort mit 200 Zimmern und Spa",
      caseStudy: {
        challenge: "Saisonales Geschäft mit extremer OTA-Abhängigkeit in der Hauptsaison. Niedrige Margen durch hohe Provisionen bei gleichzeitig steigenden Marketingkosten der OTAs.",
        strategy: [
          "Internationale SEA-Kampagnen (DE, UK, IT, FR)",
          "Instagram und Facebook Ads für Inspiration",
          "Frühbucher-Kampagnen mit Direktbuchungsrabatten",
          "Influencer-Kooperationen für organische Reichweite",
          "Mehrsprachige Landing Pages"
        ],
        results: [
          { metric: "Direktbuchungen", before: "31%", after: "78%", change: "+47%" },
          { metric: "Internationale Gäste direkt", before: "18%", after: "49%", change: "+172%" },
          { metric: "Auslastung Hauptsaison", before: "84%", after: "91%", change: "+8%" },
          { metric: "Gesteigerte Eigenanteilsquote", before: "31%", after: "78%", change: "+47%" }
        ],
        timeline: "12 Monate"
      }
    }
  ]
};

// ========================================
// FEATURES COMPARISON SECTION
// ========================================
export const featuresComparisonContent = {
  title: "So übertrifft Direktmarketing die Drittanbieter-Plattformen",
  subtitle: "Konkrete Ergebnisse für Ihre Hotel-Website:",
  features: [
    {
      number: "01",
      title: "Direktbuchungsquote steigern",
      comparison: {
        before: { label: "Buchungsportale:", value: "Abhängigkeit" },
        after: { label: "Mit uns:", value: "Mehr Direktbuchungen" },
      },
    },
    {
      number: "02",
      title: "Margen verbessern",
      comparison: {
        before: { label: "Booking.com & Co.:", value: "15-25% Provisionen" },
        after: { label: "Eigene Ads:", value: "Mehr Gewinn pro Buchung" },
      },
    },
    {
      number: "03",
      title: "Marketingkosten optimieren",
      comparison: {
        before: { label: "Ohne Strategie:", value: "Hohe Streuverluste" },
        after: { label: "Mit uns:", value: "Gezielte Steuerung" },
      },
    },
  ],
};

// ========================================
// ROI CALCULATOR SECTION
// ========================================
export const roiCalculatorContent = {
  title: "Berechne deinen ROI",
  subtitle: "Sehe wie viel du mit uns sparen und verdienen kannst",
  inputs: [
    { id: "leads", label: "Monatliche Leads", min: 100, max: 10000, default: 1000, step: 100 },
    { id: "budget", label: "Aktuelles Werbebudget (€)", min: 1000, max: 100000, default: 5000, step: 500 },
    { id: "value", label: "Durchschnittlicher Kundenwert (€)", min: 100, max: 10000, default: 1000, step: 100 },
  ],
  results: {
    savings: "Jährliche Ersparnis",
    appointments: "Zusätzliche Termine/Monat",
    revenue: "Zusätzlicher Umsatz/Monat",
  },
  comparison: {
    before: { label: "Ohne Optimierung", conversionRate: "15%", cost: "Hoch" },
    after: { label: "Mit FunnelAds", conversionRate: "40%", cost: "Optimiert" },
  },
  cta: "Jetzt ROI sichern",
};

// ========================================
// FEATURE SHOWCASE SECTIONS
// ========================================
export const featureShowcaseContent = [
  {
    id: "feature-1",
    title: "Strategische Jahres- und Saisonplanung",
    subtitle: "Maximieren Sie Ihre Auslastung durch datengetriebene Kampagnenplanung.",
    description: "Wir analysieren Ihre Zielmärkte, Saisonalitäten und Buchungsmuster – und entwickeln eine maßgeschneiderte Performance-Strategie für Ihr Hotel.",
    points: [
      { icon: "Calendar", text: "Saisonale Optimierung Ihrer Kampagnen" },
      { icon: "Target", text: "Zielmarkt-Identifikation und -Erschließung" },
      { icon: "TrendingUp", text: "Langfristige ROI-Maximierung" },
    ],
    cta: "Mehr erfahren",
    imagePosition: "right",
  },
  {
    id: "feature-2",
    title: "Funnel-Optimierung & Tracking-Setup",
    subtitle: "Saubere Buchungserfassung für präzise Analyse und Optimierung.",
    description: "Wir richten professionelles Tracking ein, optimieren Ihre Buchungsfunnel und stellen sicher, dass jede Buchung korrekt erfasst wird – für fundierte Entscheidungen.",
    points: [
      { icon: "BarChart", text: "Präzise Buchungserfassung und Attribution" },
      { icon: "Filter", text: "Funnel-Analyse und Optimierungspotenziale" },
      { icon: "Eye", text: "Vollständige Transparenz über Ihre Performance" },
    ],
    cta: "Kostenlose Analyse",
    imagePosition: "left",
  },
  {
    id: "feature-3",
    title: "Multi-Channel Kampagnen & Optimierung",
    subtitle: "Google Ads, Meta Ads, Bing, TikTok, LinkedIn – wir nutzen die richtigen Kanäle für Ihre Zielgruppe.",
    description: "Von der Kampagnenerstellung bis zur laufenden Optimierung: Wir schalten intelligente Ads auf allen relevanten Plattformen – je nach Zielgruppe, Region, Markt und Budget.",
    points: [
      { icon: "Globe", text: "Alle relevanten Werbeplattformen abgedeckt" },
      { icon: "Settings", text: "Laufende Optimierung für maximale Effizienz" },
      { icon: "Users", text: "Zielgruppenspezifische Ansprache" },
    ],
    cta: "Kampagnen ansehen",
    imagePosition: "right",
  },
];

// ========================================
// BENEFITS GRID SECTION
// ========================================
export const benefitsGridContent = {
  title: "Was Sie von unserer Performance-Marketing-Partnerschaft erhalten",
  subtitle: "Alles aus einer Hand für maximale Direktbuchungen",
  benefits: [
    {
      icon: "TrendingUp",
      title: "Höhere Direktbuchungsquote",
      description: "Mehr Gäste buchen direkt über Ihre Hotel-Website statt über Drittanbieter.",
    },
    {
      icon: "DollarSign",
      title: "Bessere Margen",
      description: "Weniger Provisionen an Booking.com, Check24 & Co. – mehr Gewinn pro Buchung.",
    },
    {
      icon: "Target",
      title: "Gezielte Markterschließung",
      description: "Wir erschließen profitabele Quell- und Zielmärkte je nach Region und Angebot.",
    },
    {
      icon: "BarChart",
      title: "Mehr Kontrolle, weniger Kosten",
      description: "Geringere Marketingkosten bei gleichzeitig vollständiger Transparenz und Steuerung.",
    },
    {
      icon: "Shield",
      title: "Weniger Abhängigkeit",
      description: "Reduzieren Sie Ihre Abhängigkeit von externen Buchungsportalen nachhaltig.",
    },
    {
      icon: "Settings",
      title: "Optimierte Auslastung",
      description: "Bessere Steuerung Ihrer Buchungsquote und Auslastung durch intelligente Kampagnen.",
    },
  ],
};

// ========================================
// TESTIMONIALS SECTION
// ========================================
export const testimonialsContent = {
  title: "Was unsere Hotel-Partner sagen",
  subtitle: "Nachweisbare Ergebnisse aus echten Case Studies",
  featured: {
    quote: "Unsere Direktbuchungsquote ist innerhalb von 6 Monaten um 40% gestiegen. Gleichzeitig konnten wir unsere Marketingkosten um 25% reduzieren. Das Team von Franco Consulting versteht die Hotelbranche wirklich.",
    author: "Michael Hoffmann",
    role: "Geschäftsführer",
    company: "Boutique Hotel Gruppe",
  },
  testimonials: [
    {
      quote: "Endlich weniger Abhängigkeit von Booking.com. Wir haben jetzt die Kontrolle zurück und sehen genau, welche Kampagnen funktionieren. Die Margen sind deutlich besser geworden.",
      author: "Sarah Müller",
      role: "Marketing Director",
      company: "Wellness Resort",
    },
    {
      quote: "Die strategische Jahresplanung war ein Game Changer. Wir können jetzt gezielt unsere schwächeren Saisonen ausgleichen und profitieren in den Hauptsaisonen noch mehr.",
      author: "Thomas Schneider",
      role: "Hotel Manager",
      company: "Alpen Hotel",
    },
    {
      quote: "Professionelles Tracking, transparente Berichte und ein Team, das wirklich versteht, wie Hotels funktionieren. Seit der Zusammenarbeit sind unsere Direktbuchungen konstant gestiegen.",
      author: "Lisa Wagner",
      role: "CEO",
      company: "Stadt-Hotel Gruppe",
    },
    {
      quote: "Die Multi-Channel-Strategie hat uns geholfen, neue Zielmärkte zu erschließen, die wir vorher nicht erreicht haben. ROI ist messbar besser geworden.",
      author: "Daniel Klein",
      role: "Eigentümer",
      company: "Familienbetrieb",
    },
    {
      quote: "Einfach zu verstehen, transparent und effektiv. Wir sparen jetzt Tausende an Provisionen und haben trotzdem mehr Buchungen. Kann ich nur weiterempfehlen.",
      author: "Anna Becker",
      role: "Geschäftsführerin",
      company: "Boutique Hotel",
    },
    {
      quote: "Von der Kampagnenerstellung bis zur Optimierung – alles aus einer Hand. Das Team arbeitet proaktiv und bringt immer wieder neue Ideen, wie wir unsere Performance verbessern können.",
      author: "Markus Fischer",
      role: "Hotel Director",
      company: "Resort & Spa",
    },
  ],
};

// ========================================
// FAQ SECTION
// ========================================
export const faqContent = {
  title: "Häufig gestellte Fragen",
  subtitle: "Antworten auf die wichtigsten Fragen rund um Performance-Marketing für Hotels",
  faqs: [
    {
      question: "Wie unterscheidet sich Franco Consulting von anderen Performance-Marketing-Agenturen?",
      answer: "Wir kombinieren direkte Arbeit mit Hotels und die Rolle als Performance-Partner der größten Tourismus- und Hotelagenturen. Diese doppelte Perspektive gibt uns einen einzigartigen Blick auf das, was wirklich funktioniert. Mit über 200 betreuten Hotels und mehr als 10 Millionen verwaltetem Werbebudget haben wir die Branchenerfahrung, die zählt.",
    },
    {
      question: "Welche Plattformen nutzen Sie für Hotel-Kampagnen?",
      answer: "Wir arbeiten mit Google Ads, Meta Ads (Facebook & Instagram), Bing, TikTok, LinkedIn, Display-Netzwerken und weiteren Social-Media-Kanälen. Die Plattformauswahl erfolgt je nach Ihrer Zielgruppe, Region, Markt und Budget – immer datengetrieben.",
    },
    {
      question: "Wie können Sie garantieren, dass die Direktbuchungsquote steigt?",
      answer: "Durch strategische Funnel-Optimierung, professionelles Tracking-Setup und zielgerichtete Kampagnenführung erhöhen wir nachweislich die Direktbuchungen über Ihre Hotel-Website. Wir arbeiten mit konkreten KPIs und liefern transparente Berichte, die den Erfolg messbar machen.",
    },
    {
      question: "Was bedeutet 'weniger Abhängigkeit von Buchungsportalen' konkret?",
      answer: "Durch gezieltes Performance-Marketing gewinnen Sie mehr Gäste direkt über Ihre Website. Das bedeutet weniger Provisionen (15-25%) an Booking.com, Check24 & Co., bessere Margen pro Buchung und mehr Kontrolle über Ihre Preise und Verfügbarkeiten.",
    },
    {
      question: "Wie funktioniert die Zusammenarbeit und Betreuung?",
      answer: "Von strategischer Jahres- und Saisonplanung über Kampagnenerstellung bis zur laufenden Optimierung: Wir begleiten Sie als Performance-Partner auf Augenhöhe. Regelmäßige Reports, transparente Kommunikation und proaktive Optimierungsvorschläge sind selbstverständlich.",
    },
    {
      question: "Was kostet die Zusammenarbeit?",
      answer: "Unsere Preise sind transparent und projektbezogen. Kontaktieren Sie uns für eine individuelle Beratung und ein maßgeschneidertes Angebot, das zu Ihrem Budget und Ihren Zielen passt.",
    },
  ],
};

// ========================================
// CTA SECTION
// ========================================
export const ctaContent = {
  title: "Steigern Sie Ihre Direktbuchungen – mit nachweisbaren Ergebnissen",
  subtitle: "Lassen Sie uns gemeinsam Ihre Performance-Marketing-Strategie entwickeln und Ihre Hotel-Website zum stärksten Buchungskanal machen.",
  cta: "Kostenlose Beratung anfordern",
  ctaHref: "#contact",
};

// ========================================
// WHY US SECTION
// ========================================
export const whyUsContent = {
  title: "Warum Franco Consulting der richtige Performance-Partner für Ihr Hotel ist",
  cta: "Kostenlose Beratung",
  features: [
    {
      icon: "Building2",
      title: "Doppelte Branchenperspektive",
      description: "Wir arbeiten direkt mit Hotels UND sind Performance-Partner der größten Tourismus- und Hotelagenturen – das gibt uns einzigartige Einblicke.",
    },
    {
      icon: "TrendingUp",
      title: "200+ Hotels, 10M+ Budget",
      description: "Über 200 Hotels haben wir bereits betreut, über 10 Millionen Werbebudget verwaltet. Wir wissen, was funktioniert.",
    },
    {
      icon: "FileCheck",
      title: "Nachweisbare Case Studies",
      description: "Konkrete Ergebnisse: Höhere Direktbuchungsquoten, bessere Margen, geringere Marketingkosten – alles dokumentiert.",
    },
    {
      icon: "Target",
      title: "Full-Service Performance",
      description: "Von strategischer Planung über Kampagnenerstellung bis zur laufenden Optimierung – alles aus einer Hand, spezialisiert auf Hotels.",
    },
  ],
};

// ========================================
// ABOUT US SECTION
// ========================================
export const aboutUsContent = {
  title: "Wer steckt hinter Franco Consulting?",
  description: "Wir sind keine klassische Agentur, sondern strategische Partner. Unser Fokus liegt auf Substanz statt Buzzwords: fundierte Analysen, klare Entscheidungen und konsequente Umsetzung.",
  image: "/images/founders.jpg", // TODO: Bild der Geschäftsführer hinzufügen
  imageAlt: "Kilian Franco und Lukas Kraus - Geschäftsführer von Franco Consulting",
  foundersTitle: "Unsere Geschäftsführer",
  founders: [
    {
      name: "Kilian Franco",
      role: "Inhaber & Performance Marketing Spezialist",
    },
    {
      name: "Lukas Kraus",
      role: "Inhaber & Performance Marketing Spezialist",
    },
  ],
  cta: "Jetzt Anfragen",
};

// ========================================
// FOOTER
// ========================================
export const footerContent = {
  logo: "Franco Consulting",
  description: "Performance-Marketing spezialisiert auf Hotels. Direktbuchungen steigern, Margen verbessern, Abhängigkeiten reduzieren.",
  links: [
    {
      title: "Navigation",
      items: [
        { label: "Home", href: "/" },
        { label: "Leistungen", href: "#features" },
        { label: "Ergebnisse", href: "#results" },
        { label: "Über uns", href: "#about-us" },
      ],
    },
    {
      title: "Legal",
      items: [
        { label: "Impressum", href: "/impressum" },
        { label: "Datenschutz", href: "/datenschutz" },
        { label: "AGB", href: "/agb" },
      ],
    },
  ],
  social: [
    { name: "LinkedIn", href: "#", icon: "Linkedin" },
    { name: "Twitter", href: "#", icon: "Twitter" },
    { name: "Instagram", href: "#", icon: "Instagram" },
  ],
  copyright: "© 2026 Franco Consulting. Alle Rechte vorbehalten.",
};

