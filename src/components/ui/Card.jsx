/**
 * Card Component
 * 
 * TEMPLATE GUIDE:
 * Glasmorphism-Karte mit Hover-Effekten.
 * 
 * Props:
 * - variant: 'default' | 'glass' | 'gradient' | 'bordered'
 * - hover: Boolean - aktiviert Hover-Animationen
 * - glow: Boolean - aktiviert Glow-Effekt
 * - padding: 'none' | 'sm' | 'md' | 'lg'
 * - children: Karteninhalt
 * - className: Zusätzliche CSS-Klassen
 */
import { motion } from 'framer-motion';
import styles from './Card.module.css';

export default function Card({
  variant = 'default',
  hover = true,
  glow = false,
  padding = 'md',
  children,
  className = '',
  ...props
}) {
  const classes = `${styles.card} ${styles[variant]} ${styles[`padding-${padding}`]} ${glow ? styles.glow : ''} ${className}`;

  const cardVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    hover: hover ? { 
      y: -5, 
      scale: 1.02,
      transition: { duration: 0.2 }
    } : {},
  };

  return (
    <motion.div
      className={classes}
      initial="initial"
      whileInView="animate"
      whileHover="hover"
      viewport={{ once: true, margin: "-50px" }}
      variants={cardVariants}
      transition={{ duration: 0.4 }}
      {...props}
    >
      {children}
    </motion.div>
  );
}

