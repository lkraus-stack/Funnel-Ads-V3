/**
 * Footer Component
 * 
 * TEMPLATE GUIDE:
 * Multi-Column Footer mit:
 * - Logo und Beschreibung
 * - Link-Spalten
 * - Social Media Icons
 * - Copyright
 * 
 * Texte aus data/content.js (footerContent)
 */
import { motion } from 'framer-motion';
import * as Icons from 'lucide-react';
import { useTheme } from '../../contexts/ThemeContext';
import { footerContent } from '../../data/content';
import logoWhite from '../../assets/LogoFrancoConsulting-weiß.png';
import logoBlack from '../../assets/LogoFrancoConsulting-schwarz.png';
import styles from './Footer.module.css';

export default function Footer() {
  const { theme } = useTheme();
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  // Dynamic Icon Component
  const DynamicIcon = ({ name, ...props }) => {
    const IconComponent = Icons[name];
    return IconComponent ? <IconComponent {...props} /> : null;
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <motion.div
          className={styles.grid}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Brand Column */}
          <motion.div className={styles.brandColumn} variants={itemVariants}>
            <a href="/" className={styles.logo}>
              <img 
                src={theme === 'dark' ? logoWhite : logoBlack} 
                alt={footerContent.logo}
                className={styles.logoImage}
              />
            </a>
            <p className={styles.description}>
              {footerContent.description}
            </p>
            
            {/* Social Icons */}
            <div className={styles.social}>
              {footerContent.social.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={styles.socialLink}
                  aria-label={item.name}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <DynamicIcon name={item.icon} size={20} />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Link Columns */}
          {footerContent.links.map((column) => (
            <motion.div
              key={column.title}
              className={styles.linkColumn}
              variants={itemVariants}
            >
              <h4 className={styles.columnTitle}>{column.title}</h4>
              <ul className={styles.linkList}>
                {column.items.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className={styles.link}>
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        {/* Copyright */}
        <motion.div
          className={styles.copyright}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <div className={styles.divider} />
          <p>{footerContent.copyright}</p>
        </motion.div>
      </div>
    </footer>
  );
}

