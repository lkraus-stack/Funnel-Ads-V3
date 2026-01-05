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
 * 
 * ARCHIVIERT: Diese Sektion wurde aus dem aktiven Funnel entfernt,
 * bleibt aber für zukünftige Verwendung erhalten.
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
            setTimeout(() => setIsVisible([true, false, false]), 200);
            setTimeout(() => setIsVisible([true, true, false]), 400);
            setTimeout(() => setIsVisible([true, true, true]), 600);
          }
        });
      },
      { threshold: 0.1 }
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
          <h2 className={styles.title}>Ihre ROI-Vorteile im Überblick</h2>
          <p className={styles.subtitle}>
            So steigern Sie Direktbuchungen, verbessern Margen und reduzieren Abhängigkeiten
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
                <h3 className={styles.cardTitle}>Direktbuchungsquote steigern</h3>
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
                    >
                      {isVisible[0] && (
                        <span className={styles.barPercentage}>35%</span>
                      )}
                    </div>
                    <span className={styles.barLabel}>OHNE STRATEGIE</span>
                  </div>
                  <div className={styles.barGroup}>
                    <div 
                      className={`${styles.bar} ${styles.barAi}`}
                      style={{
                        height: isVisible[0] ? '75%' : '0%',
                      }}
                    >
                      {isVisible[0] && (
                        <span className={styles.barPercentage}>75%</span>
                      )}
                    </div>
                    <span className={styles.barLabel}>MIT UNS</span>
                  </div>
                </div>
              </div>

              {/* Stats */}
              <div className={styles.stats}>
                <div className={styles.statItem}>
                  <span className={styles.statLabel}>Buchungsportale & Co.:</span>
                  <span className={`${styles.statValue} ${styles.statValueRed}`}>Abhängigkeit</span>
                </div>
                <div className={styles.statItem}>
                  <span className={styles.statLabel}>Performance-Marketing:</span>
                  <span className={`${styles.statValue} ${styles.statValueGreen}`}>Mehr Direktbuchungen</span>
                </div>
              </div>
            </Card>
          </motion.div>

          {/* Card 2: Reduce Expenses */}
          <motion.div variants={cardVariants}>
            <Card variant="glass" padding="lg" className={styles.card}>
              <div className={styles.cardHeader}>
                <span className={styles.cardNumber}>02.</span>
                <h3 className={styles.cardTitle}>Marketingkosten optimieren</h3>
              </div>

              {/* Line Chart */}
              <div className={styles.chartContainer}>
                <div className={styles.lineChart}>
                  <svg viewBox="0 0 400 200" className={styles.lineChartSvg}>
                    {/* Grid lines */}
                    <line x1="0" y1="50" x2="400" y2="50" className={styles.gridLine} />
                    <line x1="0" y1="100" x2="400" y2="100" className={styles.gridLine} />
                    <line x1="0" y1="150" x2="400" y2="150" className={styles.gridLine} />
                    
                    {/* Without Strategy Line */}
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
                    
                    {/* With Strategy Line */}
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
                    <text x="210" y="70" className={styles.chartLabel}>OHNE STRATEGIE</text>
                    <text x="210" y="120" className={styles.chartLabelAi}>MIT FRANCO CONSULTING</text>
                  </svg>
                </div>
              </div>

              {/* Stats */}
              <div className={styles.stats}>
                <div className={styles.statItem}>
                  <span className={styles.statLabel}>Hohe Streuverluste:</span>
                  <span className={`${styles.statValue} ${styles.statValueRed}`}>Ineffizient</span>
                </div>
                <div className={styles.statItem}>
                  <span className={styles.statLabel}>Gezielte Steuerung:</span>
                  <span className={`${styles.statValue} ${styles.statValueGreen}`}>Optimiert</span>
                </div>
              </div>
            </Card>
          </motion.div>

          {/* Card 3: Maximize Capacity */}
          <motion.div variants={cardVariants}>
            <Card variant="glass" padding="lg" className={styles.card}>
              <div className={styles.cardHeader}>
                <span className={styles.cardNumber}>03.</span>
                <h3 className={styles.cardTitle}>Markterschließung maximieren</h3>
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
                  <span className={styles.statLabel}>Begrenzte Märkte:</span>
                  <span className={`${styles.statValue} ${styles.statValueRed}`}>Wenig Kontrolle</span>
                </div>
                <div className={styles.statItem}>
                  <span className={styles.statLabel}>Gezielte Zielmärkte:</span>
                  <span className={`${styles.statValue} ${styles.statValueGreen}`}>Vollständige Steuerung</span>
                </div>
              </div>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

