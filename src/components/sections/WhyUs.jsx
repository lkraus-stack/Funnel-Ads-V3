/**
 * WhyUs Section Component
 * 
 * TEMPLATE GUIDE:
 * "Why [Brand] Is the Go-To" Section mit Feature-Icons.
 * Entspricht dem Appointwise "Why Appointwise Is the Go-To For AI Setting" Design.
 * 
 * Texte aus data/content.js (whyUsContent)
 */
import { motion } from 'framer-motion';
import * as Icons from 'lucide-react';
import Button from '../ui/Button';
import { whyUsContent } from '../../data/content';
import styles from './WhyUs.module.css';

export default function WhyUs() {
  // Dynamic Icon Component
  const DynamicIcon = ({ name, ...props }) => {
    const IconComponent = Icons[name];
    return IconComponent ? <IconComponent {...props} /> : null;
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
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
          <h2 className={styles.title}>{whyUsContent.title}</h2>
          <Button href="#contact">{whyUsContent.cta}</Button>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          className={styles.grid}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {whyUsContent.features.map((feature, index) => (
            <motion.div
              key={index}
              className={styles.feature}
              variants={itemVariants}
            >
              <div className={styles.iconWrapper}>
                <DynamicIcon name={feature.icon} size={24} />
              </div>
              <div className={styles.content}>
                <h3 className={styles.featureTitle}>{feature.title}</h3>
                <p className={styles.featureDescription}>{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
