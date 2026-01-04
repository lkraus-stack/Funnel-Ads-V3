/**
 * FeaturedQuote Section Component
 * 
 * TEMPLATE GUIDE:
 * Großes einzelnes Testimonial-Zitat zwischen ROI Calculator und Feature Showcases.
 * Entspricht dem Appointwise-Design.
 */
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import { testimonialsContent } from '../../data/content';
import styles from './FeaturedQuote.module.css';

export default function FeaturedQuote() {
  return (
    <section className={styles.section}>
      {/* Background Glow */}
      <div className={styles.bgGlow} />
      
      <motion.div
        className={styles.container}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <motion.div
          className={styles.quoteCard}
          initial={{ scale: 0.95 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {/* Quote Icon */}
          <div className={styles.quoteIcon}>
            <Quote size={48} />
          </div>

          {/* Quote Text */}
          <blockquote className={styles.quote}>
            {testimonialsContent.featured.quote}
          </blockquote>

          {/* Author */}
          <div className={styles.author}>
            <div className={styles.avatar}>
              {testimonialsContent.featured.author.charAt(0)}
            </div>
            <div className={styles.authorInfo}>
              <span className={styles.authorName}>
                {testimonialsContent.featured.author}
              </span>
              <span className={styles.authorRole}>
                {testimonialsContent.featured.role}
              </span>
              <span className={styles.authorCompany}>
                {testimonialsContent.featured.company}
              </span>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}

