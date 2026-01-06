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
import { ContactModalProvider } from './contexts/ContactModalContext';
import { ThemeProvider } from './contexts/ThemeContext';
import {
  Hero,
  TrustedBy,
  FeaturesComparison,
  FeatureShowcase,
  ROICalculator,
  WhyUs,
  AboutUs,
  Testimonials,
  FAQ,
  ContactForm,
  CTASection,
} from './components/sections';

function App() {
  return (
    <ThemeProvider>
      <ContactModalProvider>
        <Layout>
        {/* 1. Hero Section - Hauptüberschrift mit rotierendem Text */}
        <Hero />

        {/* 2. Trusted By - Logo-Marquee mit Partnerlogos */}
        <TrustedBy />

        {/* 3. Features Comparison - "Outperforms..." 3 Vergleichskarten */}
        <FeaturesComparison />

        {/* 4. ROI Calculator - Interaktiver Rechner */}
        <ROICalculator />

        {/* 5. Feature Showcase - 3x Feature mit alternierenden Layouts */}
        <FeatureShowcase />

        {/* 7. Why Us - "Why [Brand] Is the Go-To" Feature-Icons */}
        <WhyUs />

        {/* 8. About Us - Über uns Sektion mit Geschäftsführern */}
        <AboutUs />

        {/* 9. Testimonials - Carousel mit mehreren Testimonials */}
        <Testimonials />

        {/* 10. FAQ - Akkordeon */}
        <FAQ />

        {/* 11. CTA - Finaler Call-to-Action */}
        <CTASection />
      </Layout>

        {/* Contact Form Modal - Wird als Popup angezeigt */}
        <ContactForm />
      </ContactModalProvider>
    </ThemeProvider>
  );
}

export default App;
