/**
 * Accordion Component
 * 
 * TEMPLATE GUIDE:
 * Akkordeon-Komponente für FAQs und ausklappbare Inhalte.
 * 
 * Props:
 * - items: Array von { question: string, answer: string }
 * - allowMultiple: Boolean - erlaubt mehrere offene Items
 * - className: Zusätzliche CSS-Klassen
 */
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import styles from './Accordion.module.css';

export default function Accordion({
  items = [],
  allowMultiple = false,
  className = '',
}) {
  const [openItems, setOpenItems] = useState([]);

  const toggleItem = (index) => {
    if (allowMultiple) {
      setOpenItems((prev) =>
        prev.includes(index)
          ? prev.filter((i) => i !== index)
          : [...prev, index]
      );
    } else {
      setOpenItems((prev) =>
        prev.includes(index) ? [] : [index]
      );
    }
  };

  const isOpen = (index) => openItems.includes(index);

  return (
    <div className={`${styles.accordion} ${className}`}>
      {items.map((item, index) => (
        <motion.div
          key={index}
          className={`${styles.item} ${isOpen(index) ? styles.open : ''}`}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 }}
        >
          <button
            className={styles.trigger}
            onClick={() => toggleItem(index)}
            aria-expanded={isOpen(index)}
          >
            <span className={styles.question}>{item.question}</span>
            <motion.span
              className={styles.icon}
              animate={{ rotate: isOpen(index) ? 180 : 0 }}
              transition={{ duration: 0.2 }}
            >
              {isOpen(index) ? <Minus size={20} /> : <Plus size={20} />}
            </motion.span>
          </button>
          
          <AnimatePresence>
            {isOpen(index) && (
              <motion.div
                className={styles.content}
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
              >
                <div className={styles.answer}>
                  {item.answer}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      ))}
    </div>
  );
}

