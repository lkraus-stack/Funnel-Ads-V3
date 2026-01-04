/**
 * BenefitsGrid Section Component
 * 
 * TEMPLATE GUIDE:
 * Grid mit Benefit-Karten:
 * - Icon
 * - Titel
 * - Beschreibung
 * - Hover-Animation
 * 
 * Texte aus data/content.js (benefitsGridContent)
 */
import { motion } from 'framer-motion';
import * as Icons from 'lucide-react';
import Card from '../ui/Card';
import { benefitsGridContent } from '../../data/content';
import styles from './BenefitsGrid.module.css';

export default function BenefitsGrid() {
  // Dynamic Icon Component
  const DynamicIcon = ({ name, ...props }) => {
    const IconComponent = Icons[name];
    return IconComponent ? <IconComponent {...props} /> : null;
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4 },
    },
  };

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
          <h2 className={styles.title}>{benefitsGridContent.title}</h2>
          <p className={styles.subtitle}>{benefitsGridContent.subtitle}</p>
        </motion.div>

        {/* Benefits Grid */}
        <motion.div
          className={styles.grid}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {benefitsGridContent.benefits.map((benefit, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card variant="glass" padding="lg" className={styles.card}>
                <div className={styles.iconWrapper}>
                  <DynamicIcon name={benefit.icon} size={28} />
                </div>
                <h3 className={styles.cardTitle}>{benefit.title}</h3>
                <p className={styles.cardDescription}>{benefit.description}</p>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

