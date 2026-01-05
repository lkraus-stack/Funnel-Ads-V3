/**
 * TrustedBy Section Component
 * 
 * TEMPLATE GUIDE:
 * Hotel-Partner mit Kennzahlen und Case Study Popups.
 * Zeigt echte Hotel-Beispiele mit Performance-Daten.
 * 
 * Texte und Daten aus data/content.js (trustedByContent)
 */
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowRight, TrendingUp, Building2, MapPin, Star } from 'lucide-react';
import { trustedByContent } from '../../data/content';
import Button from '../ui/Button';
import Card from '../ui/Card';
import styles from './TrustedBy.module.css';

export default function TrustedBy() {
  const [selectedHotel, setSelectedHotel] = useState(null);

  const openModal = (hotel) => {
    setSelectedHotel(hotel);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedHotel(null);
    document.body.style.overflow = 'unset';
  };

  return (
    <>
      <section className={styles.section}>
        <motion.div
          className={styles.container}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className={styles.header}>
            <h2 className={styles.title}>{trustedByContent.title}</h2>
            <p className={styles.subtitle}>{trustedByContent.subtitle}</p>
          </div>

          <div className={styles.hotelsGrid}>
            {trustedByContent.hotels.map((hotel, index) => (
              <motion.div
                key={hotel.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card variant="glass" className={styles.hotelCard}>
                  <div className={styles.cardHeader}>
                    <div className={styles.categoryBadge}>
                      {hotel.category.includes('★') ? (
                        <>
                          <Star className={styles.starIcon} />
                          {hotel.category.replace('★ ', '')}
                        </>
                      ) : (
                        hotel.category
                      )}
                    </div>
                    <div className={styles.statsPreview}>
                      <div className={styles.mainStat}>
                        <span className={styles.statValue}>{hotel.stats.directBookings}</span>
                        <span className={styles.statLabel}>DIREKTBUCHUNGEN</span>
                      </div>
                    </div>
                  </div>

                  <div className={styles.cardContent}>
                    <div className={styles.hotelInfo}>
                      <Building2 className={styles.hotelIcon} />
                      <div>
                        <h3 className={styles.hotelName}>{hotel.name}</h3>
                        <p className={styles.hotelDescription}>{hotel.description}</p>
                        <div className={styles.location}>
                          <MapPin className={styles.locationIcon} />
                          {hotel.location}
                        </div>
                      </div>
                    </div>

                    <div className={styles.quickStats}>
                      <div className={styles.statItem}>
                        <span className={styles.statLabel}>Auslastung</span>
                        <span className={styles.statValue}>{hotel.stats.occupancy}</span>
                      </div>
                      <div className={styles.statItem}>
                        <span className={styles.statLabel}>Eigenanteil</span>
                        <span className={styles.statValue}>{hotel.stats.independence}</span>
                      </div>
                      <div className={styles.statItem}>
                        <span className={styles.statLabel}>Steigerung</span>
                        <span className={styles.statValue}>{hotel.stats.revenue}</span>
                      </div>
                    </div>

                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => openModal(hotel)}
                      iconRight={ArrowRight}
                      className={styles.caseStudyButton}
                    >
                      CASE STUDY ANSEHEN
                    </Button>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Case Study Modal */}
      <AnimatePresence>
        {selectedHotel && (
          <motion.div
            className={styles.modalOverlay}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
          >
            <motion.div
              className={styles.modal}
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className={styles.modalHeader}>
                <div>
                  <h2 className={styles.modalTitle}>{selectedHotel.name}</h2>
                  <p className={styles.modalSubtitle}>{selectedHotel.location}</p>
                </div>
                <button className={styles.closeButton} onClick={closeModal}>
                  <X />
                </button>
              </div>

              <div className={styles.modalContent}>
                <div className={styles.challenge}>
                  <h3 className={styles.sectionTitle}>DIE HERAUSFORDERUNG</h3>
                  <p className={styles.challengeText}>{selectedHotel.caseStudy.challenge}</p>
                </div>

                <div className={styles.strategy}>
                  <h3 className={styles.sectionTitle}>UNSERE STRATEGIE</h3>
                  <ul className={styles.strategyList}>
                    {selectedHotel.caseStudy.strategy.map((item, index) => (
                      <li key={index} className={styles.strategyItem}>
                        <TrendingUp className={styles.strategyIcon} />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className={styles.results}>
                  <h3 className={styles.sectionTitle}>ERGEBNISSE NACH {selectedHotel.caseStudy.timeline}</h3>
                  <div className={styles.resultsGrid}>
                    {selectedHotel.caseStudy.results.map((result, index) => (
                      <div key={index} className={styles.resultItem}>
                        <div className={styles.resultMetric}>{result.metric}</div>
                        <div className={styles.resultComparison}>
                          <span className={styles.beforeValue}>Vorher: {result.before}</span>
                          <ArrowRight className={styles.arrowIcon} />
                          <span className={styles.afterValue}>Nachher: {result.after}</span>
                        </div>
                        <div className={styles.resultChange}>{result.change}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

