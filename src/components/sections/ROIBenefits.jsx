/**
 * ROIBenefits Section Component
 * 
 * TEMPLATE GUIDE:
 * Zeigt 3 animierte Karten mit ROI-Vorteilen:
 * 1. Increase conversions - Balkendiagramm
 * 2. Reduce expenses - Liniendiagramm
 * 3. Maximize capacity - Globe-Grafik
 * 
 * Alle mit Animationen und speziell für die Hotelbranche angepasst
 */
import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import Card from '../ui/Card';
import styles from './ROIBenefits.module.css';

export default function ROIBenefits() {
  const [isVisible, setIsVisible] = useState([false, false, false]);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Staggered animation trigger
            setTimeout(() => setIsVisible([true, false, false]), 100);
            setTimeout(() => setIsVisible([true, true, false]), 300);
            setTimeout(() => setIsVisible([true, true, true]), 500);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      },
    },
  };

  return (
    <section className={styles.section} ref={sectionRef}>
      <div className={styles.container}>
        {/* Header */}
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className={styles.title}>Berechne deine ROI</h2>
          <p className={styles.subtitle}>
            Maximiere Buchungen und reduziere Abhängigkeit durch intelligente Ads
          </p>
        </motion.div>

        {/* Cards Grid */}
        <motion.div
          className={styles.grid}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {/* Card 1: Increase Conversions */}
          <motion.div variants={cardVariants}>
            <Card variant="glass" padding="lg" className={styles.card}>
              <div className={styles.cardHeader}>
                <span className={styles.cardNumber}>01.</span>
                <h3 className={styles.cardTitle}>Increase conversions</h3>
              </div>

              {/* Bar Chart */}
              <div className={styles.chartContainer}>
                <div className={styles.barChart}>
                  <div className={styles.barGroup}>
                    <div 
                      className={`${styles.bar} ${styles.barHuman}`}
                      style={{
                        height: isVisible[0] ? '35%' : '0%',
                      }}
                    />
                    <span className={styles.barLabel}>HUMAN CVR</span>
                  </div>
                  <div className={styles.barGroup}>
                    <div 
                      className={`${styles.bar} ${styles.barAi}`}
                      style={{
                        height: isVisible[0] ? '75%' : '0%',
                      }}
                    />
                    <span className={styles.barLabel}>AI CVR</span>
                  </div>
                </div>
              </div>

              {/* Stats */}
              <div className={styles.stats}>
                <div className={styles.statItem}>
                  <span className={styles.statLabel}>Human Setter durchschnitt:</span>
                  <span className={`${styles.statValue} ${styles.statValueRed}`}>10-20%</span>
                </div>
                <div className={styles.statItem}>
                  <span className={styles.statLabel}>AI Setter durchschnitt:</span>
                  <span className={`${styles.statValue} ${styles.statValueGreen}`}>30-40%</span>
                </div>
              </div>
            </Card>
          </motion.div>

          {/* Card 2: Reduce Expenses */}
          <motion.div variants={cardVariants}>
            <Card variant="glass" padding="lg" className={styles.card}>
              <div className={styles.cardHeader}>
                <span className={styles.cardNumber}>02.</span>
                <h3 className={styles.cardTitle}>Reduce expenses</h3>
              </div>

              {/* Line Chart */}
              <div className={styles.chartContainer}>
                <div className={styles.lineChart}>
                  <svg viewBox="0 0 400 200" className={styles.lineChartSvg}>
                    {/* Grid lines */}
                    <line x1="0" y1="50" x2="400" y2="50" className={styles.gridLine} />
                    <line x1="0" y1="100" x2="400" y2="100" className={styles.gridLine} />
                    <line x1="0" y1="150" x2="400" y2="150" className={styles.gridLine} />
                    
                    {/* Human Setter Line */}
                    <motion.path
                      d="M 0 60 Q 100 40, 200 80 T 400 50"
                      className={styles.lineHuman}
                      initial={{ pathLength: 0, opacity: 0 }}
                      animate={isVisible[1] ? { pathLength: 1, opacity: 1 } : {}}
                      transition={{ duration: 2, ease: "easeInOut" }}
                    />
                    <motion.circle
                      cx="200"
                      cy="80"
                      r="6"
                      className={styles.lineDotHuman}
                      initial={{ scale: 0 }}
                      animate={isVisible[1] ? { scale: 1 } : {}}
                      transition={{ delay: 1, duration: 0.3 }}
                    />
                    
                    {/* AI Setter Line */}
                    <motion.path
                      d="M 0 140 Q 100 160, 200 130 T 400 150"
                      className={styles.lineAi}
                      initial={{ pathLength: 0, opacity: 0 }}
                      animate={isVisible[1] ? { pathLength: 1, opacity: 1 } : {}}
                      transition={{ duration: 2, ease: "easeInOut", delay: 0.3 }}
                    />
                    <motion.circle
                      cx="200"
                      cy="130"
                      r="6"
                      className={styles.lineDotAi}
                      initial={{ scale: 0 }}
                      animate={isVisible[1] ? { scale: 1 } : {}}
                      transition={{ delay: 1.3, duration: 0.3 }}
                    />
                    
                    {/* Labels */}
                    <text x="210" y="70" className={styles.chartLabel}>HUMAN SETTER COSTS</text>
                    <text x="210" y="120" className={styles.chartLabelAi}>AI SETTER COSTS</text>
                  </svg>
                </div>
              </div>

              {/* Stats */}
              <div className={styles.stats}>
                <div className={styles.statItem}>
                  <span className={styles.statLabel}>1 human setter:</span>
                  <span className={`${styles.statValue} ${styles.statValueRed}`}>$2000<span className={styles.statPeriod}>/month</span></span>
                </div>
                <div className={styles.statItem}>
                  <span className={styles.statLabel}>Unlimited AI setters:</span>
                  <span className={`${styles.statValue} ${styles.statValueGreen}`}>$297<span className={styles.statPeriod}>/month</span></span>
                </div>
              </div>
            </Card>
          </motion.div>

          {/* Card 3: Maximize Capacity */}
          <motion.div variants={cardVariants}>
            <Card variant="glass" padding="lg" className={styles.card}>
              <div className={styles.cardHeader}>
                <span className={styles.cardNumber}>03.</span>
                <h3 className={styles.cardTitle}>Maximize capacity</h3>
              </div>

              {/* Globe Graphic */}
              <div className={styles.chartContainer}>
                <div className={styles.globeContainer}>
                  <motion.div 
                    className={styles.globe}
                    animate={isVisible[2] ? { 
                      rotateY: [0, 360],
                    } : {}}
                    transition={{
                      duration: 20,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                  >
                    {/* Globe dots */}
                    {[...Array(80)].map((_, i) => {
                      const phi = Math.acos(-1 + (2 * i) / 80);
                      const theta = Math.sqrt(80 * Math.PI) * phi;
                      const x = 50 + 45 * Math.cos(theta) * Math.sin(phi);
                      const y = 50 + 45 * Math.sin(theta) * Math.sin(phi);
                      const z = Math.cos(phi);
                      
                      return (
                        <motion.div
                          key={i}
                          className={styles.globeDot}
                          style={{
                            left: `${x}%`,
                            top: `${y}%`,
                            opacity: z > 0 ? 0.8 : 0.2,
                          }}
                          initial={{ scale: 0 }}
                          animate={isVisible[2] ? { scale: 1 } : {}}
                          transition={{
                            delay: i * 0.01,
                            duration: 0.5
                          }}
                        />
                      );
                    })}
                  </motion.div>
                  
                  {/* Glow effect */}
                  <div className={styles.globeGlow} />
                </div>
              </div>

              {/* Stats */}
              <div className={styles.stats}>
                <div className={styles.statItem}>
                  <span className={styles.statLabel}>Human capacity:</span>
                  <span className={`${styles.statValue} ${styles.statValueRed}`}>150<span className={styles.statPeriod}>/leads per day</span></span>
                </div>
                <div className={styles.statItem}>
                  <span className={styles.statLabel}>AI setter capacity:</span>
                  <span className={`${styles.statValue} ${styles.statValueGreen}`}>10,000+<span className={styles.statPeriod}>/leads per day</span></span>
                </div>
              </div>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

