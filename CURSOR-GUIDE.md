# Cursor Template Guide

Diese Datei erklärt Cursor (AI), wie dieses Template strukturiert ist und wie Änderungen vorgenommen werden.

---

## Schnellstart für neues Projekt

1. **Ordner duplizieren** und umbenennen
2. `npm install` ausführen
3. Texte in `src/data/content.js` anpassen
4. Farben in `src/styles/variables.css` anpassen
5. `npm run dev` starten

---

## Dateistruktur

```
src/
├── data/content.js          ← ALLE TEXTE HIER
├── styles/variables.css     ← ALLE FARBEN HIER
├── styles/globals.css       ← Base Styles (nicht ändern)
├── styles/responsive.css    ← Responsive (nicht ändern)
├── components/
│   ├── ui/                  ← Wiederverwendbare Komponenten
│   ├── layout/              ← Header, Footer, Layout
│   └── sections/            ← Alle Sektionen
└── App.jsx                  ← Sektionen-Reihenfolge
```

---

## Texte ändern

**Datei:** `src/data/content.js`

Jede Sektion hat ein eigenes Content-Objekt:

| Object | Sektion |
|--------|---------|
| `navContent` | Header Navigation |
| `heroContent` | Hero mit rotierendem Text |
| `trustedByContent` | Partner-Logos |
| `featuresComparisonContent` | 3 Vergleichskarten |
| `roiCalculatorContent` | ROI-Rechner |
| `featureShowcaseContent` | 3 Feature-Blöcke |
| `benefitsGridContent` | Benefits-Grid |
| `whyUsContent` | "Warum uns wählen" |
| `testimonialsContent` | Testimonials |
| `faqContent` | FAQ-Akkordeon |
| `ctaContent` | Finale CTA |
| `footerContent` | Footer |

---

## Farben ändern

**Datei:** `src/styles/variables.css`

```css
/* Hauptfarbe (Buttons, Links, Akzente) */
--primary: #6366f1;
--primary-light: #818cf8;
--primary-dark: #4f46e5;
--primary-rgb: 99, 102, 241;

/* Sekundärfarbe (Erfolg, positive Elemente) */
--secondary: #10b981;

/* Akzentfarbe (Sterne, Highlights) */
--accent: #f59e0b;
```

**Wichtig:** Bei Farbänderung auch die `*-rgb` Werte anpassen!

---

## Sektionen aktivieren/deaktivieren

**Datei:** `src/App.jsx`

```jsx
<Layout>
  <Hero />              {/* Auskommentieren zum Deaktivieren */}
  <TrustedBy />
  {/* <FeaturesComparison /> */}  {/* Deaktiviert */}
  ...
</Layout>
```

---

## Neue Sektion hinzufügen

1. Erstelle `src/components/sections/MeineSektion.jsx`
2. Erstelle `src/components/sections/MeineSektion.module.css`
3. Exportiere in `src/components/sections/index.js`:
   ```js
   export { default as MeineSektion } from './MeineSektion';
   ```
4. Füge in `src/App.jsx` hinzu:
   ```jsx
   import { MeineSektion } from './components/sections';
   // ...
   <MeineSektion />
   ```

---

## UI-Komponenten

### Button
```jsx
import Button from '../ui/Button';

<Button 
  variant="primary"    // primary | secondary | outline | ghost
  size="lg"            // sm | md | lg
  href="#contact"      // macht Link
  iconRight={ArrowRight}
>
  Text
</Button>
```

### Card
```jsx
import Card from '../ui/Card';

<Card 
  variant="glass"      // default | glass | gradient | bordered
  padding="lg"         // none | sm | md | lg
  glow                 // Glow-Effekt
>
  Inhalt
</Card>
```

### AnimatedCounter
```jsx
<AnimatedCounter value={500} prefix="€" suffix="+" />
```

### RotatingText
```jsx
<RotatingText words={["Wort1", "Wort2", "Wort3"]} interval={3000} />
```

### Accordion
```jsx
<Accordion items={[{ question: "?", answer: "!" }]} />
```

---

## Icons

Alle Icons von [Lucide](https://lucide.dev/icons/):

```jsx
import { ArrowRight, Star, Check } from 'lucide-react';
```

Dynamisch laden:
```jsx
import * as Icons from 'lucide-react';
const Icon = Icons["ArrowRight"];
```

---

## Responsive Breakpoints

| Name | Größe |
|------|-------|
| Mobile | < 640px |
| Tablet | 768px |
| Desktop | 1024px |
| Large | 1280px |

---

## Build & Deploy

```bash
npm run dev      # Development
npm run build    # Production Build
npm run preview  # Preview Build
```

Build-Output: `dist/` Ordner

---

## Wichtige Hinweise für Cursor

1. **Texte immer in `content.js` ändern**, nicht in Komponenten
2. **Farben immer in `variables.css` ändern**, CSS-Variablen nutzen
3. **Neue Komponenten** im gleichen Pattern erstellen (JSX + module.css)
4. **Icons** von Lucide React verwenden
5. **Animationen** mit Framer Motion

