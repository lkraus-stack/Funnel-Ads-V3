/**
 * FAQ Section Component
 * 
 * TEMPLATE GUIDE:
 * FAQ-Bereich mit Akkordeon-Elementen.
 * Nutzt die Accordion-UI-Komponente.
 * 
 * Texte aus data/content.js (faqContent)
 */
import { motion } from 'framer-motion';
import Accordion from '../ui/Accordion';
import { faqContent } from '../../data/content';
import styles from './FAQ.module.css';

export default function FAQ() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {/* Header */}
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className={styles.title}>{faqContent.title}</h2>
          <p className={styles.subtitle}>{faqContent.subtitle}</p>
        </motion.div>

        {/* Accordion */}
        <div className={styles.accordionWrapper}>
          <Accordion items={faqContent.faqs} />
        </div>
      </div>
    </section>
  );
}

