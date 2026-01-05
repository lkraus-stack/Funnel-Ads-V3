# Archivierte Sektionen

Dieser Ordner enthält Sektionen, die aus dem aktiven Funnel entfernt wurden, aber für zukünftige Verwendung erhalten bleiben.

## Archivierte Sektionen

### ROIBenefits
- **Titel**: "Ihre ROI-Vorteile im Überblick"
- **Beschreibung**: Zeigt 3 animierte Karten mit ROI-Vorteilen (Direktbuchungsquote steigern, Marketingkosten optimieren, Markterschließung maximieren)
- **Dateien**: 
  - `ROIBenefits.jsx`
  - `ROIBenefits.module.css`

### BenefitsGrid
- **Titel**: "So steigern Sie Direktbuchungen, verbessern Margen und reduzieren Abhängigkeiten"
- **Beschreibung**: Grid mit Benefit-Karten (Icon, Titel, Beschreibung, Hover-Animation)
- **Dateien**: 
  - `BenefitsGrid.jsx`
  - `BenefitsGrid.module.css`

### FeaturedQuote
- **Titel**: "Unsere Direktbuchungsquote ist innerhalb von 6 Monaten um 40% gestiegen..." (Michael Hoffmann)
- **Beschreibung**: Großes einzelnes Testimonial-Zitat zwischen ROI Calculator und Feature Showcases
- **Dateien**: 
  - `FeaturedQuote.jsx`
  - `FeaturedQuote.module.css`

## Sektionen wieder aktivieren

Um eine archivierte Sektion wieder zu aktivieren:

1. **Dateien zurückverschieben**: Verschiebe die Sektions-Dateien (`.jsx` und `.module.css`) aus `archived/` zurück in den `sections/` Ordner

2. **Export hinzufügen**: Füge den Export in `src/components/sections/index.js` hinzu:
   ```js
   export { default as ROIBenefits } from './ROIBenefits';
   export { default as BenefitsGrid } from './BenefitsGrid';
   export { default as FeaturedQuote } from './FeaturedQuote';
   ```

3. **Import in App.jsx hinzufügen**: Füge die Komponenten zum Import-Statement hinzu:
   ```js
   import {
     // ... andere Imports
     ROIBenefits,
     BenefitsGrid,
     FeaturedQuote,
     // ... weitere Imports
   } from './components/sections';
   ```

4. **Komponente in App.jsx einfügen**: Füge die Komponente an der gewünschten Stelle im JSX ein:
   ```jsx
   <ROIBenefits />
   <BenefitsGrid />
   <FeaturedQuote />
   ```

## Hinweis

Die relativen Import-Pfade in den archivierten Dateien sind so angepasst, dass sie beim Zurückverschieben in den `sections/` Ordner weiterhin funktionieren sollten.

