/**
 * RotatingText Component
 * 
 * TEMPLATE GUIDE:
 * Animierter Text-Rotator für Hero-Überschriften.
 * Wechselt automatisch zwischen den Wörtern.
 * 
 * Props:
 * - words: Array von Strings zum Rotieren
 * - interval: Zeit zwischen Wechseln in ms (default: 3000)
 * - className: Zusätzliche CSS-Klassen
 */
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './RotatingText.module.css';

export default function RotatingText({
  words = [],
  interval = 3000,
  className = '',
}) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (words.length <= 1) return;
    
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % words.length);
    }, interval);

    return () => clearInterval(timer);
  }, [words.length, interval]);

  const variants = {
    enter: {
      y: 50,
      opacity: 0,
      scale: 0.9,
    },
    center: {
      y: 0,
      opacity: 1,
      scale: 1,
    },
    exit: {
      y: -50,
      opacity: 0,
      scale: 0.9,
    },
  };

  return (
    <span className={`${styles.container} ${className}`}>
      <AnimatePresence mode="wait">
        <motion.span
          key={currentIndex}
          className={styles.word}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            y: { type: 'spring', stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 },
            scale: { duration: 0.2 },
          }}
        >
          {words[currentIndex]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}

