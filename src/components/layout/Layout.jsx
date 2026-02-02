/**
 * Layout Component
 * 
 * TEMPLATE GUIDE:
 * Wrapper-Komponente die Header und Footer um den Inhalt legt.
 * 
 * Props:
 * - children: Seiteninhalt
 */
import Header from './Header';
import Footer from './Footer';
import CookieBanner from '../ui/CookieBanner';
import styles from './Layout.module.css';

export default function Layout({ children }) {
  return (
    <div className={styles.layout}>
      <Header />
      <main className={styles.main}>
        {children}
      </main>
      <Footer />
      <CookieBanner />
    </div>
  );
}

