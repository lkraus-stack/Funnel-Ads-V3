/**
 * App.jsx - Main Application Component
 * 
 * TEMPLATE GUIDE:
 * Diese Datei enthält alle Sektionen der Landingpage.
 * Die Reihenfolge entspricht dem Appointwise.io Design.
 * 
 * SEKTIONEN AKTIVIEREN/DEAKTIVIEREN:
 * Um eine Sektion zu deaktivieren, kommentiere sie einfach aus.
 * 
 * REIHENFOLGE ÄNDERN:
 * Ändere einfach die Reihenfolge der Komponenten hier.
 */
import { Layout } from './components/layout';
import {
  Hero,
  TrustedBy,
  FeaturesComparison,
  FeaturedQuote,
  FeatureShowcase,
  ROICalculator,
  ROIBenefits,
  BenefitsGrid,
  WhyUs,
  Testimonials,
  FAQ,
  CTASection,
} from './components/sections';

function App() {
  return (
    <Layout>
      {/* 1. Hero Section - Hauptüberschrift mit rotierendem Text */}
      <Hero />

      {/* 2. Trusted By - Logo-Marquee mit Partnerlogos */}
      <TrustedBy />

      {/* 3. Features Comparison - "Outperforms..." 3 Vergleichskarten */}
      <FeaturesComparison />

      {/* 4. ROI Calculator - Interaktiver Rechner */}
      <ROICalculator />

      {/* 4.5. ROI Benefits - Berechne deine ROI mit animierten Grafiken */}
      <ROIBenefits />

      {/* 5. Featured Quote - Großes Testimonial-Zitat */}
      <FeaturedQuote />

      {/* 6. Feature Showcase - 3x Feature mit alternierenden Layouts */}
      <FeatureShowcase />

      {/* 7. Benefits Grid - "Put Your Pipeline on Autopilot" */}
      <BenefitsGrid />

      {/* 8. Why Us - "Why [Brand] Is the Go-To" Feature-Icons */}
      <WhyUs />

      {/* 9. Testimonials - Carousel mit mehreren Testimonials */}
      <Testimonials />

      {/* 10. FAQ - Akkordeon */}
      <FAQ />

      {/* 11. CTA - Finaler Call-to-Action */}
      <CTASection />
    </Layout>
  );
}

export default App;
