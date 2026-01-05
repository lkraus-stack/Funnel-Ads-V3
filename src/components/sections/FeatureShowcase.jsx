/**
 * FeatureShowcase Section Component
 * 
 * TEMPLATE GUIDE:
 * Feature-Präsentation als Prozess-Schritte:
 * - 3 Features nebeneinander angeordnet
 * - Titel, Beschreibung, Bullet-Points
 * - CTA-Button
 * 
 * Texte aus data/content.js (featureShowcaseContent)
 */
import { motion } from 'framer-motion';
import * as Icons from 'lucide-react';
import Button from '../ui/Button';
import { useContactModal } from '../../contexts/ContactModalContext';
import { featureShowcaseContent } from '../../data/content';
import styles from './FeatureShowcase.module.css';

export default function FeatureShowcase() {
  const { openModal } = useContactModal();
  // Dynamic Icon Component
  const DynamicIcon = ({ name, ...props }) => {
    const IconComponent = Icons[name];
    return IconComponent ? <IconComponent {...props} /> : null;
  };

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.featuresGrid}>
          {featureShowcaseContent.map((feature, index) => (
            <motion.div
              key={feature.id}
              className={styles.feature}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              {/* Feature Number */}
              <div className={styles.featureNumber}>
                {String(index + 1).padStart(2, '0')}
              </div>

              {/* Content */}
              <div className={styles.content}>
                <h2 className={styles.title}>{feature.title}</h2>
                <p className={styles.subtitle}>{feature.subtitle}</p>
                <p className={styles.description}>{feature.description}</p>

                {/* Points */}
                <ul className={styles.points}>
                  {feature.points.map((point, idx) => (
                    <motion.li
                      key={idx}
                      className={styles.point}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + idx * 0.1 }}
                    >
                      <span className={styles.pointIcon}>
                        <DynamicIcon name={point.icon} size={20} />
                      </span>
                      <span className={styles.pointText}>{point.text}</span>
                    </motion.li>
                  ))}
                </ul>

                <Button variant="secondary" onClick={openModal}>
                  {feature.cta}
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
