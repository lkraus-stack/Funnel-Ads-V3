/**
 * Hero Section Component
 * 
 * TEMPLATE GUIDE:
 * Die Hero-Section enthält:
 * - Trust Badge oben
 * - Große Überschrift mit rotierendem Text
 * - Subtitle/Beschreibung
 * - CTA-Buttons
 * - Statistiken-Leiste
 * - Hintergrund-Gradient mit Glow-Effekt
 * 
 * Texte aus data/content.js (heroContent)
 */
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import Button from '../ui/Button';
import AnimatedCounter from '../ui/AnimatedCounter';
import { useContactModal } from '../../contexts/ContactModalContext';
import { heroContent } from '../../data/content';
import styles from './Hero.module.css';

export default function Hero() {
  const { openModal } = useContactModal();
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  return (
    <section className={styles.hero}>
      {/* Background Effects */}
      <div className={styles.bgGradient} />
      <div className={styles.bgGlow} />
      <div className={styles.bgGrid} />

      <motion.div
        className={styles.container}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Trust Badge */}
        <motion.div className={styles.badge} variants={itemVariants}>
          <Sparkles size={16} />
          <span>{heroContent.badge}</span>
        </motion.div>

        {/* Main Headline */}
        <motion.h1 className={styles.title} variants={itemVariants}>
          {heroContent.title}
        </motion.h1>

        {/* Subtitle */}
        <motion.p className={styles.subtitle} variants={itemVariants}>
          {heroContent.subtitle}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div className={styles.ctas} variants={itemVariants}>
          <Button size="lg" onClick={openModal} iconRight={ArrowRight}>
            {heroContent.primaryCta}
          </Button>
          <Button variant="outline" size="lg" href="#features">
            {heroContent.secondaryCta}
          </Button>
        </motion.div>

        {/* Stats */}
        <motion.div className={styles.stats} variants={itemVariants}>
          {heroContent.stats.map((stat, index) => {
            const hasPlusPrefix = stat.value.startsWith('+');
            const cleanValue = hasPlusPrefix ? stat.value.slice(1) : stat.value;
            const hasM = cleanValue.includes('M');
            const finalValue = hasM ? cleanValue.replace('M', '') : cleanValue;
            
            return (
              <div key={index} className={styles.stat}>
                <AnimatedCounter
                  value={finalValue}
                  className={styles.statValue}
                  prefix={hasPlusPrefix ? '+' : ''}
                  suffix={hasM ? 'M' : stat.value.includes('x') ? 'x' : ''}
                />
                <span className={styles.statLabel}>{stat.label}</span>
              </div>
            );
          })}
        </motion.div>
      </motion.div>
    </section>
  );
}

