/**
 * Theme Toggle Button Component
 * 
 * Button zum Wechseln zwischen hellem und dunklem Modus
 */
import { motion } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../../contexts/ThemeContext';
import styles from './ThemeToggle.module.css';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <motion.button
      className={styles.themeToggle}
      onClick={toggleTheme}
      aria-label={isDark ? 'Zu hellem Modus wechseln' : 'Zu dunklem Modus wechseln'}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ duration: 0.2 }}
    >
      <motion.div
        className={styles.iconContainer}
        initial={false}
        animate={{ rotate: isDark ? 0 : 180 }}
        transition={{ duration: 0.3 }}
      >
        {isDark ? (
          <Sun size={20} className={styles.icon} />
        ) : (
          <Moon size={20} className={styles.icon} />
        )}
      </motion.div>
    </motion.button>
  );
}

