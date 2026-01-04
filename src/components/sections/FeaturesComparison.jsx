/**
 * FeaturesComparison Section Component
 * 
 * TEMPLATE GUIDE:
 * Drei Vergleichskarten mit:
 * - Nummer (01, 02, 03)
 * - Titel
 * - Vorher/Nachher Vergleich
 * 
 * Texte aus data/content.js (featuresComparisonContent)
 */
import { motion } from 'framer-motion';
import Card from '../ui/Card';
import { featuresComparisonContent } from '../../data/content';
import styles from './FeaturesComparison.module.css';

export default function FeaturesComparison() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section className={styles.section} id="features">
      <div className={styles.container}>
        {/* Header */}
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className={styles.title}>{featuresComparisonContent.title}</h2>
          <p className={styles.subtitle}>{featuresComparisonContent.subtitle}</p>
        </motion.div>

        {/* Cards Grid */}
        <motion.div
          className={styles.grid}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {featuresComparisonContent.features.map((feature, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card variant="glass" padding="lg" className={styles.card}>
                {/* Number Badge */}
                <span className={styles.number}>{feature.number}</span>

                {/* Title */}
                <h3 className={styles.cardTitle}>{feature.title}</h3>

                {/* Comparison */}
                <div className={styles.comparison}>
                  {/* Before */}
                  <div className={styles.comparisonItem}>
                    <span className={styles.comparisonLabel}>
                      {feature.comparison.before.label}
                    </span>
                    <span className={styles.comparisonValueBefore}>
                      {feature.comparison.before.value}
                    </span>
                  </div>

                  {/* Arrow */}
                  <div className={styles.arrow}>→</div>

                  {/* After */}
                  <div className={styles.comparisonItem}>
                    <span className={styles.comparisonLabel}>
                      {feature.comparison.after.label}
                    </span>
                    <span className={styles.comparisonValueAfter}>
                      {feature.comparison.after.value}
                    </span>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

