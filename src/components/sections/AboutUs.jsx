/**
 * AboutUs Section Component
 * 
 * TEMPLATE GUIDE:
 * "Über Uns" Sektion mit Bild der Geschäftsführer und Firmenphilosophie.
 * 
 * Texte aus data/content.js (aboutUsContent)
 */
import { motion } from 'framer-motion';
import Button from '../ui/Button';
import { useContactModal } from '../../contexts/ContactModalContext';
import { aboutUsContent } from '../../data/content';
import styles from './AboutUs.module.css';

export default function AboutUs() {
  const { openModal } = useContactModal();

  return (
    <section id="about-us" className={styles.section}>
      <div className={styles.container}>
        <motion.div
          className={styles.content}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Header */}
          <div className={styles.header}>
            <h2 className={styles.title}>{aboutUsContent.title}</h2>
            <p className={styles.description}>{aboutUsContent.description}</p>
          </div>

          {/* Main Content with Image */}
          <div className={styles.mainContent}>
            {/* Image Section */}
            <motion.div
              className={styles.imageWrapper}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <img
                src={aboutUsContent.image}
                alt={aboutUsContent.imageAlt}
                className={styles.image}
              />
              <div className={styles.imageOverlay} />
            </motion.div>

            {/* Text Content */}
            <motion.div
              className={styles.textContent}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className={styles.founders}>
                <h3 className={styles.foundersTitle}>{aboutUsContent.foundersTitle}</h3>
                <div className={styles.foundersList}>
                  {aboutUsContent.founders.map((founder, index) => (
                    <div key={index} className={styles.founder}>
                      <h4 className={styles.founderName}>{founder.name}</h4>
                      <p className={styles.founderRole}>{founder.role}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className={styles.ctaWrapper}>
                <Button onClick={openModal} size="lg">
                  {aboutUsContent.cta}
                </Button>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

