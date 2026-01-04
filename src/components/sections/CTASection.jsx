/**
 * CTASection Component
 * 
 * TEMPLATE GUIDE:
 * Finale Call-to-Action Section mit:
 * - Großer Headline
 * - Gradient-Hintergrund mit Glow
 * - Zentrierter Button
 * 
 * Texte aus data/content.js (ctaContent)
 */
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Button from '../ui/Button';
import { ctaContent } from '../../data/content';
import styles from './CTASection.module.css';

export default function CTASection() {
  return (
    <section className={styles.section} id="contact">
      {/* Background Effects */}
      <div className={styles.bgGlow} />
      <div className={styles.bgGlow2} />

      <motion.div
        className={styles.container}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <motion.h2
          className={styles.title}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          {ctaContent.title}
        </motion.h2>

        <motion.p
          className={styles.subtitle}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          {ctaContent.subtitle}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <Button size="lg" href={ctaContent.ctaHref} iconRight={ArrowRight}>
            {ctaContent.cta}
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
}

