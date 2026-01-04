# FunnelAds Landing Page Template

Eine moderne, animierte Landing Page für Google & Meta Ads Dienstleistungen, basierend auf dem Appointwise.io Design.

## 🚀 Quick Start

```bash
# Dependencies installieren
npm install

# Development Server starten
npm run dev

# Für Production bauen
npm run build
```

## 📁 Projektstruktur

```
src/
├── components/
│   ├── layout/          # Header, Footer, Layout-Wrapper
│   ├── sections/        # Alle Sektionen der Landingpage
│   └── ui/              # Wiederverwendbare UI-Komponenten
├── styles/
│   ├── variables.css    # ALLE Farben & Design-Tokens
│   ├── globals.css      # Base Styles & Reset
│   └── responsive.css   # Responsive Utilities
├── data/
│   └── content.js       # ALLE Texte zentral
├── App.jsx              # Haupt-App mit allen Sektionen
└── main.jsx             # Entry Point
```

---

## 🎨 Farben anpassen

Alle Farben sind in `src/styles/variables.css` definiert. Ändere nur diese Werte:

```css
:root {
  /* Hauptfarbe (Buttons, Links, Akzente) */
  --primary: #6366f1;
  --primary-light: #818cf8;
  --primary-dark: #4f46e5;
  --primary-rgb: 99, 102, 241;

  /* Sekundärfarbe (Erfolg, positive Elemente) */
  --secondary: #10b981;
  --secondary-light: #34d399;
  --secondary-dark: #059669;

  /* Akzentfarbe (Highlights, Sterne) */
  --accent: #f59e0b;
}
```

### Beispiel: Blaues Theme

```css
--primary: #3b82f6;
--primary-light: #60a5fa;
--primary-dark: #2563eb;
--primary-rgb: 59, 130, 246;
```

---

## ✏️ Texte anpassen

Alle Texte sind in `src/data/content.js` zentral gespeichert:

```javascript
// Hero Section
export const heroContent = {
  badge: "500+ zufriedene Kunden",
  title: "Die #1 Agentur für",
  rotatingWords: ["Google Ads", "Meta Ads", "Performance Marketing"],
  subtitle: "Dein Subtitle hier...",
  primaryCta: "Kostenlose Beratung",
  // ...
};
```

### Verfügbare Content-Objekte:

| Object | Beschreibung |
|--------|-------------|
| `navContent` | Navigation & Logo |
| `heroContent` | Hero-Section mit rotierendem Text |
| `trustedByContent` | Partner-Logos (Marquee) |
| `featuresComparisonContent` | 3 Vergleichskarten (01, 02, 03) |
| `roiCalculatorContent` | ROI-Rechner mit Slidern |
| `featureShowcaseContent` | Feature-Sektionen mit Chat-Mockups |
| `benefitsGridContent` | Benefits-Grid (6 Karten) |
| `testimonialsContent` | Featured Quote + Carousel |
| `faqContent` | FAQ-Akkordeon |
| `ctaContent` | Finale CTA |
| `footerContent` | Footer |

---

## 📐 Sektionen aktivieren/deaktivieren

In `src/App.jsx` können Sektionen einfach aus-/einkommentiert werden:

```jsx
function App() {
  return (
    <Layout>
      <Hero />              {/* 1. Hero mit rotierendem Text */}
      <TrustedBy />         {/* 2. Logo-Marquee */}
      <FeaturesComparison /> {/* 3. 3 Vergleichskarten */}
      <ROICalculator />     {/* 4. Interaktiver Rechner */}
      <FeaturedQuote />     {/* 5. Großes Testimonial-Zitat */}
      <FeatureShowcase />   {/* 6. 3x Features mit Chat-Mockups */}
      <BenefitsGrid />      {/* 7. Benefits-Grid */}
      <WhyUs />             {/* 8. "Warum uns wählen" */}
      <Testimonials />      {/* 9. Testimonials-Carousel */}
      <FAQ />               {/* 10. FAQ-Akkordeon */}
      <CTASection />        {/* 11. Finale CTA */}
    </Layout>
  );
}
```

**Reihenfolge entspricht dem Appointwise.io Design.**

---

## 🧩 UI Komponenten

### Button

```jsx
import Button from './components/ui/Button';

<Button 
  variant="primary"    // 'primary' | 'secondary' | 'outline' | 'ghost'
  size="lg"            // 'sm' | 'md' | 'lg'
  href="#contact"      // Optional - macht Link
  iconRight={ArrowRight}  // Optional - Icon
>
  Jetzt starten
</Button>
```

### Card

```jsx
import Card from './components/ui/Card';

<Card 
  variant="glass"      // 'default' | 'glass' | 'gradient' | 'bordered'
  padding="lg"         // 'none' | 'sm' | 'md' | 'lg'
  glow                 // Optional - Glow-Effekt
>
  Inhalt
</Card>
```

### AnimatedCounter

```jsx
import AnimatedCounter from './components/ui/AnimatedCounter';

<AnimatedCounter
  value={500}
  prefix="€"
  suffix="+"
  duration={2}
/>
```

### RotatingText

```jsx
import RotatingText from './components/ui/RotatingText';

<RotatingText
  words={["Google Ads", "Meta Ads", "TikTok Ads"]}
  interval={3000}
/>
```

### Accordion

```jsx
import Accordion from './components/ui/Accordion';

<Accordion
  items={[
    { question: "Frage 1?", answer: "Antwort 1" },
    { question: "Frage 2?", answer: "Antwort 2" },
  ]}
  allowMultiple={false}
/>
```

---

## 📱 Responsive Breakpoints

| Breakpoint | Größe |
|------------|-------|
| Mobile | < 640px |
| Tablet | 768px |
| Desktop | 1024px |
| Large | 1280px |
| XL | 1536px |

---

## ⚡ Technologie-Stack

- **React 18** + **Vite**
- **Framer Motion** - Animationen
- **Lucide React** - Icons
- **CSS Modules** - Scoped Styling
- **CSS Variables** - Theming

---

## 📝 Wichtige Dateien für Cursor

| Datei | Zweck |
|-------|-------|
| `src/styles/variables.css` | Alle Design-Tokens (Farben, Spacing, etc.) |
| `src/data/content.js` | Alle Texte der Seite |
| `src/App.jsx` | Sektionen-Reihenfolge |
| `src/components/sections/` | Einzelne Sektionen |
| `src/components/ui/` | Wiederverwendbare Komponenten |

---

## 🔧 Entwicklung

```bash
# Dev Server
npm run dev

# Build
npm run build

# Preview Build
npm run preview

# Linting
npm run lint
```

---

## 📄 Lizenz

MIT License
