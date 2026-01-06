/**
 * AnimatedCounter Component
 * 
 * TEMPLATE GUIDE:
 * Animierter Zähler für Statistiken und Zahlen.
 * Zählt von 0 bis zum Zielwert wenn in Viewport sichtbar.
 * 
 * Props:
 * - value: Zielwert (Zahl oder String mit Suffix wie "500+")
 * - duration: Animation-Dauer in Sekunden (default: 2)
 * - prefix: Text vor der Zahl (z.B. "€")
 * - suffix: Text nach der Zahl (z.B. "+", "%", "M")
 * - className: Zusätzliche CSS-Klassen
 * - decimals: Anzahl Dezimalstellen (default: 0)
 */
import { useEffect, useRef, useState } from 'react';
import { motion, useInView, useSpring, useTransform } from 'framer-motion';
import styles from './AnimatedCounter.module.css';

export default function AnimatedCounter({
  value,
  duration = 2,
  prefix = '',
  suffix = '',
  className = '',
  decimals = 0,
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  // Parse the value - extract number and any suffix from the value itself
  const parseValue = (val) => {
    if (typeof val === 'number') return val;
    const numMatch = String(val).match(/[\d.]+/);
    return numMatch ? parseFloat(numMatch[0]) : 0;
  };
  
  const numericValue = parseValue(value);
  
  const spring = useSpring(0, { 
    duration: duration * 1000,
    bounce: 0,
  });
  
  const display = useTransform(spring, (current) => {
    return current.toFixed(decimals);
  });
  
  const [displayValue, setDisplayValue] = useState('0');
  
  useEffect(() => {
    if (isInView) {
      spring.set(numericValue);
    }
  }, [isInView, numericValue, spring]);
  
  useEffect(() => {
    const unsubscribe = display.on('change', (latest) => {
      // Format mit Tausender-Trennzeichen (Punkt für de-DE)
      const num = parseFloat(latest);
      const formatted = new Intl.NumberFormat('de-DE', {
        minimumFractionDigits: decimals,
        maximumFractionDigits: decimals,
      }).format(num);
      setDisplayValue(formatted);
    });
    return unsubscribe;
  }, [display, decimals]);

  return (
    <motion.span
      ref={ref}
      className={`${styles.counter} ${className}`}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={isInView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.3 }}
    >
      {prefix}{displayValue}{suffix}
    </motion.span>
  );
}

