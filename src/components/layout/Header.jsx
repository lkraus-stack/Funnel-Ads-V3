/**
 * Header Component
 * 
 * TEMPLATE GUIDE:
 * Sticky Navigation mit Blur-Effekt.
 * - Logo links
 * - Navigation mittig
 * - CTA-Button rechts
 * - Mobile Hamburger-Menu
 * 
 * Die Texte kommen aus data/content.js (navContent)
 */
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import Button from '../ui/Button';
import { navContent } from '../../data/content';
import styles from './Header.module.css';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Scroll-Handler für Sticky-Effekt
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Body Scroll Lock bei Mobile Menu
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [isMobileMenuOpen]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
      <div className={styles.container}>
        {/* Logo */}
        <a href="/" className={styles.logo}>
          <span className={styles.logoText}>{navContent.logo}</span>
        </a>

        {/* Desktop Navigation */}
        <nav className={styles.nav}>
          {navContent.links.map((link, index) => (
            <motion.a
              key={link.href}
              href={link.href}
              className={styles.navLink}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ color: 'var(--primary)' }}
            >
              {link.label}
            </motion.a>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className={styles.cta}>
          <Button href={navContent.ctaHref} size="sm">
            {navContent.cta}
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className={styles.mobileMenuButton}
          onClick={toggleMobileMenu}
          aria-label="Menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className={styles.mobileMenu}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
          >
            <nav className={styles.mobileNav}>
              {navContent.links.map((link, index) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  className={styles.mobileNavLink}
                  onClick={closeMobileMenu}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  {link.label}
                </motion.a>
              ))}
            </nav>
            <Button href={navContent.ctaHref} onClick={closeMobileMenu} className={styles.mobileCta}>
              {navContent.cta}
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

