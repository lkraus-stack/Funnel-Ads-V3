/**
 * Button Component
 * 
 * TEMPLATE GUIDE:
 * Wiederverwendbarer Button mit verschiedenen Varianten.
 * 
 * Props:
 * - variant: 'primary' | 'secondary' | 'outline' | 'ghost'
 * - size: 'sm' | 'md' | 'lg'
 * - children: Button-Text
 * - href: Optional - macht Button zu einem Link
 * - onClick: Click Handler
 * - className: Zusätzliche CSS-Klassen
 * - disabled: Deaktiviert den Button
 * - icon: Optional - Icon-Komponente (vor dem Text)
 * - iconRight: Optional - Icon rechts vom Text
 */
import { motion } from 'framer-motion';
import styles from './Button.module.css';

export default function Button({
  variant = 'primary',
  size = 'md',
  children,
  href,
  onClick,
  className = '',
  disabled = false,
  icon: Icon,
  iconRight: IconRight,
  ...props
}) {
  const classes = `${styles.button} ${styles[variant]} ${styles[size]} ${className}`;

  const content = (
    <>
      {Icon && <Icon className={styles.icon} size={size === 'sm' ? 16 : size === 'lg' ? 24 : 20} />}
      <span>{children}</span>
      {IconRight && <IconRight className={styles.iconRight} size={size === 'sm' ? 16 : size === 'lg' ? 24 : 20} />}
    </>
  );

  // Animation variants
  const buttonVariants = {
    hover: { scale: 1.02 },
    tap: { scale: 0.98 },
  };

  if (href) {
    return (
      <motion.a
        href={href}
        className={classes}
        whileHover="hover"
        whileTap="tap"
        variants={buttonVariants}
        {...props}
      >
        {content}
      </motion.a>
    );
  }

  return (
    <motion.button
      className={classes}
      onClick={onClick}
      disabled={disabled}
      whileHover={!disabled ? "hover" : undefined}
      whileTap={!disabled ? "tap" : undefined}
      variants={buttonVariants}
      {...props}
    >
      {content}
    </motion.button>
  );
}

