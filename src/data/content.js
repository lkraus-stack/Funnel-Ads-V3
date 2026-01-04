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
  logo: "FunnelAds",
  links: [
    { label: "Features", href: "#features" },
    { label: "Preise", href: "#pricing" },
    { label: "Ergebnisse", href: "#results" },
    { label: "Kontakt", href: "#contact" },
  ],
  cta: "Jetzt starten",
  ctaHref: "#contact",
};

// ========================================
// HERO SECTION
// ========================================
export const heroContent = {
  badge: "500+ zufriedene Kunden",
  title: "Die #1 Agentur für Hotels",
  rotatingWords: ["Google Ads", "Meta Ads", "Performance Marketing"],
  subtitle: "Mehr Buchungen für weniger Marketingkosten",
  primaryCta: "Kostenlose Beratung",
  secondaryCta: "Mehr erfahren",
  stats: [
    { value: "500+", label: "Zufriedene Kunden" },
    { value: "10M+", label: "Werbebudget verwaltet" },
    { value: "3.5x", label: "Durchschnittlicher ROAS" },
  ],
};

// ========================================
// TRUSTED BY SECTION
// ========================================
export const trustedByContent = {
  title: "Vertraut von führenden Unternehmen",
  logos: [
    { name: "Kunde 1", src: "/logos/logo1.svg" },
    { name: "Kunde 2", src: "/logos/logo2.svg" },
    { name: "Kunde 3", src: "/logos/logo3.svg" },
    { name: "Kunde 4", src: "/logos/logo4.svg" },
    { name: "Kunde 5", src: "/logos/logo5.svg" },
    { name: "Kunde 6", src: "/logos/logo6.svg" },
  ],
};

// ========================================
// FEATURES COMPARISON SECTION
// ========================================
export const featuresComparisonContent = {
  title: "Übertrifft traditionelle Methoden",
  subtitle: "Wir werden:",
  features: [
    {
      number: "01",
      title: "Conversions steigern",
      comparison: {
        before: { label: "Traditionell:", value: "10-20%" },
        after: { label: "Mit uns:", value: "30-40%" },
      },
    },
    {
      number: "02",
      title: "Kosten reduzieren",
      comparison: {
        before: { label: "Andere Agenturen:", value: "5.000€/Monat" },
        after: { label: "Unsere Lösung:", value: "ab 1.500€/Monat" },
      },
    },
    {
      number: "03",
      title: "Kapazität maximieren",
      comparison: {
        before: { label: "Intern:", value: "50 Leads/Tag" },
        after: { label: "Mit uns:", value: "500+ Leads/Tag" },
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
    title: "Leads sofort qualifizieren",
    subtitle: "Sofortige Antworten über jeden Kanal. Kein Lead geht verloren.",
    description: "Qualifiziere Leads automatisch nach deinen Kriterien. Keine Zeitverschwender mehr.",
    points: [
      { icon: "Zap", text: "24/7 Reaktionszeit in Sekunden" },
      { icon: "Target", text: "Automatische Qualifizierung" },
      { icon: "Shield", text: "Deine Regeln, automatisiert" },
    ],
    cta: "Mehr erfahren",
    imagePosition: "right",
  },
  {
    id: "feature-2",
    title: "Direkt in deinen Kalender buchen",
    subtitle: "Verabschiede dich von Buchungslinks – begrüße Conversational Booking.",
    description: "Von 'interessiert' zu 'gebucht' in einem Gespräch.",
    points: [
      { icon: "Calendar", text: "Menschliche Terminplanung" },
      { icon: "Clock", text: "Echtzeit-Kalender-Sync" },
      { icon: "CheckCircle", text: "Zero Friction Booking" },
    ],
    cta: "Demo anfordern",
    imagePosition: "left",
  },
  {
    id: "feature-3",
    title: "Alle Plattformen integriert",
    subtitle: "SMS, WhatsApp, Instagram und Facebook Messenger an einem Ort.",
    description: "Direkte Integration bedeutet Setup in Minuten, nicht Stunden.",
    points: [
      { icon: "MessageSquare", text: "Alle Kanäle verbunden" },
      { icon: "Plug", text: "Native CRM-Integration" },
      { icon: "Rocket", text: "Neue Integrationen kommen bald" },
    ],
    cta: "Integrationen ansehen",
    imagePosition: "right",
  },
];

// ========================================
// BENEFITS GRID SECTION
// ========================================
export const benefitsGridContent = {
  title: "Setze deine Pipeline auf Autopilot",
  subtitle: "Alles was du brauchst, um mehr Kunden zu gewinnen",
  benefits: [
    {
      icon: "TrendingUp",
      title: "ROI Maximierung",
      description: "Investiere in Wachstum, nicht in Overhead.",
    },
    {
      icon: "Clock",
      title: "Zeit sparen",
      description: "Wache mit vollem Kalender auf statt mit verpassten Leads.",
    },
    {
      icon: "Users",
      title: "Kontext-aware",
      description: "Deine Agenten arbeiten als Team mit perfekt koordinierten Gesprächen.",
    },
    {
      icon: "Headphones",
      title: "24/7 Support",
      description: "Dedizierter Support von einem Team, das sich um deinen Erfolg kümmert.",
    },
    {
      icon: "BarChart",
      title: "Advanced Analytics",
      description: "Sofort umsetzbare Daten und Insights.",
    },
    {
      icon: "RefreshCw",
      title: "A/B Split Testing",
      description: "Teste und optimiere für maximale Conversion.",
    },
  ],
};

// ========================================
// TESTIMONIALS SECTION
// ========================================
export const testimonialsContent = {
  title: "Was unsere Kunden sagen",
  subtitle: "Ergebnisse die für sich sprechen",
  featured: {
    quote: "Wir buchen konstant über 350 Termine pro Monat mit FunnelAds. Game Changer!",
    author: "Max Mustermann",
    role: "CEO @ MusterAgentur",
    company: "6-stellige Agentur",
  },
  testimonials: [
    {
      quote: "Unglaubliche Ergebnisse. Die Qualifizierung funktioniert hervorragend und die Termine sind hochqualitativ.",
      author: "Anna Schmidt",
      role: "Marketing Director",
      company: "TechStartup GmbH",
    },
    {
      quote: "Hat unser Geschäft komplett verändert. Die Close-Rate ist um 40% gestiegen.",
      author: "Thomas Weber",
      role: "Gründer",
      company: "Weber Consulting",
    },
    {
      quote: "Der beste Service seiner Art. 10/5 Sterne!",
      author: "Lisa Müller",
      role: "CEO",
      company: "Digital Agency",
    },
    {
      quote: "Wir haben auf 100k/Monat skaliert dank FunnelAds. Finde die Diamanten ohne manuellen Aufwand.",
      author: "Daniel Braun",
      role: "Private Investor",
      company: "Braun Investments",
    },
    {
      quote: "Brillante Software. Einfaches Setup, super Team. Absolut empfehlenswert!",
      author: "Sarah König",
      role: "Founder",
      company: "König Marketing",
    },
    {
      quote: "Hat unser größtes Problem gelöst. 70-80% Buchungsrate von den Leads.",
      author: "Michael Schwarz",
      role: "Founder",
      company: "SchwarzMedia",
    },
  ],
};

// ========================================
// FAQ SECTION
// ========================================
export const faqContent = {
  title: "Häufig gestellte Fragen",
  subtitle: "Fragen? Wir haben Antworten.",
  faqs: [
    {
      question: "Wie schnell kann ich starten?",
      answer: "Das Setup dauert nur wenige Minuten. Du kannst sofort nach der Anmeldung loslegen.",
    },
    {
      question: "Welche Plattformen werden unterstützt?",
      answer: "Wir unterstützen Google Ads, Meta Ads (Facebook & Instagram), sowie alle gängigen CRM-Systeme.",
    },
    {
      question: "Gibt es versteckte Kosten?",
      answer: "Nein, unsere Preise sind transparent. Was du siehst, ist was du zahlst.",
    },
    {
      question: "Kann ich die Lösung an mein Branding anpassen?",
      answer: "Ja, alles ist vollständig an deine Marke und deinen Stil anpassbar.",
    },
    {
      question: "Wie funktioniert der Support?",
      answer: "Wir bieten 24/7 Support über Chat, E-Mail und Telefon. Unser Team steht dir immer zur Seite.",
    },
    {
      question: "Gibt es eine Geld-zurück-Garantie?",
      answer: "Ja, du kannst innerhalb von 14 Tagen ohne Angabe von Gründen kündigen.",
    },
  ],
};

// ========================================
// CTA SECTION
// ========================================
export const ctaContent = {
  title: "Starte deine 14-tägige kostenlose Testphase",
  subtitle: "Erlebe risikofrei, wie einfach Lead-Conversion sein kann.",
  cta: "Jetzt kostenlos testen",
  ctaHref: "#contact",
};

// ========================================
// WHY US SECTION
// ========================================
export const whyUsContent = {
  title: "Warum FunnelAds die erste Wahl ist",
  cta: "Jetzt starten",
  features: [
    {
      icon: "BarChart3",
      title: "Advanced Analytics",
      description: "Sofort umsetzbare Daten und Insights.",
    },
    {
      icon: "GitBranch",
      title: "A/B Split Testing",
      description: "Teste und optimiere für maximale Conversion.",
    },
    {
      icon: "CalendarCheck",
      title: "Automatisierte Buchung",
      description: "Streamline dein Setting durch Conversational AI.",
    },
    {
      icon: "RefreshCw",
      title: "Built-in Follow-up",
      description: "Gewinne Leads zurück ohne einen Finger zu rühren.",
    },
  ],
};

// ========================================
// FOOTER
// ========================================
export const footerContent = {
  logo: "FunnelAds",
  description: "Die #1 Lösung für Google & Meta Ads Performance Marketing.",
  links: [
    {
      title: "Navigation",
      items: [
        { label: "Home", href: "/" },
        { label: "Features", href: "#features" },
        { label: "Preise", href: "#pricing" },
        { label: "Ergebnisse", href: "#results" },
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
  copyright: "© 2026 FunnelAds. Alle Rechte vorbehalten.",
};

