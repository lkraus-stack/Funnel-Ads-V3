/**
 * TrustedBy Section Component
 * 
 * TEMPLATE GUIDE:
 * Logo-Marquee mit automatischem Scroll.
 * Zeigt Partnerlogos in einer endlosen Animation.
 * 
 * Wenn keine echten Logos vorhanden sind, werden Platzhalter angezeigt.
 * Texte aus data/content.js (trustedByContent)
 */
import { motion } from 'framer-motion';
import { trustedByContent } from '../../data/content';
import styles from './TrustedBy.module.css';

export default function TrustedBy() {
  // Dupliziere Logos für nahtlose Animation
  const duplicatedLogos = [...trustedByContent.logos, ...trustedByContent.logos];

  return (
    <section className={styles.section}>
      <motion.div
        className={styles.container}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <p className={styles.title}>{trustedByContent.title}</p>

        <div className={styles.marqueeWrapper}>
          <div className={styles.marquee}>
            {duplicatedLogos.map((logo, index) => (
              <div key={index} className={styles.logoItem}>
                {/* Platzhalter-Logo wenn keine Bilder vorhanden */}
                <div className={styles.logoPlaceholder}>
                  {logo.name}
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}

