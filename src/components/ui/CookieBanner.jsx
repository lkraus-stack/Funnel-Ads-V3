import { useEffect, useState } from 'react';
import Button from './Button';
import { useCookieConsent } from '../../contexts/CookieConsentContext';
import styles from './CookieBanner.module.css';

const initialDraft = {
  necessary: true,
  statistics: false,
  marketing: false,
};

const cookieDetails = [
  {
    title: 'Notwendig',
    items: [
      {
        name: 'Cookie-Consent',
        provider: 'FunnelAds',
        purpose: 'Speichert Ihre Cookie-Auswahl und Einwilligungen.',
        duration: '1 Jahr',
        type: 'Local Storage',
      },
    ],
  },
  {
    title: 'Statistiken',
    items: [
      {
        name: 'Google Analytics 4',
        provider: 'Google LLC',
        purpose: 'Erfasst anonymisierte Nutzungsstatistiken.',
        duration: '2 Jahre',
        type: 'Cookie',
      },
    ],
  },
  {
    title: 'Marketing',
    items: [
      {
        name: 'Google Tag Manager',
        provider: 'Google LLC',
        purpose: 'Verwaltet Marketing- und Statistik-Tags.',
        duration: 'Keine eigenen Cookies',
        type: 'Script',
      },
      {
        name: 'Google Ads',
        provider: 'Google LLC',
        purpose: 'Conversion-Tracking und Remarketing.',
        duration: 'bis zu 13 Monate',
        type: 'Cookie',
      },
    ],
  },
];

export default function CookieBanner() {
  const {
    consent,
    isBannerVisible,
    isSettingsOpen,
    acceptAll,
    rejectAll,
    saveSettings,
    openSettings,
  } = useCookieConsent();
  const [draft, setDraft] = useState(initialDraft);

  useEffect(() => {
    setDraft(consent);
  }, [consent, isSettingsOpen, isBannerVisible]);

  if (!isBannerVisible) {
    return null;
  }

  const handleToggle = (key) => {
    setDraft((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const handleSave = () => {
    saveSettings({
      statistics: draft.statistics,
      marketing: draft.marketing,
    });
  };

  return (
    <div className={styles.overlay} role="dialog" aria-modal="true" aria-labelledby="cookie-title">
      <div className={`${styles.banner} glass`}>
        <div className={styles.header}>
          <h3 id="cookie-title">Cookie-Einstellungen</h3>
          <p className={styles.description}>
            Wir verwenden Cookies, um die Website zuverlässig bereitzustellen sowie Marketing und
            Statistiken zu ermöglichen. Sie können Ihre Auswahl jederzeit im Footer anpassen.
          </p>
        </div>

        {isSettingsOpen && (
          <>
            <div className={styles.categories}>
              <div className={styles.category}>
                <div>
                  <h4>Notwendig</h4>
                  <p>Diese Cookies sind für den Betrieb der Website erforderlich.</p>
                </div>
                <label className={`${styles.toggle} ${styles.toggleDisabled}`}>
                  <input type="checkbox" checked disabled />
                  <span className={styles.slider} />
                </label>
              </div>

              <div className={styles.category}>
                <div>
                  <h4>Statistiken</h4>
                  <p>Hilft uns zu verstehen, wie Besucher die Website nutzen.</p>
                </div>
                <label className={styles.toggle}>
                  <input
                    type="checkbox"
                    checked={draft.statistics}
                    onChange={() => handleToggle('statistics')}
                  />
                  <span className={styles.slider} />
                </label>
              </div>

              <div className={styles.category}>
                <div>
                  <h4>Marketing</h4>
                  <p>Ermöglicht personalisierte Werbung und Kampagnenmessung.</p>
                </div>
                <label className={styles.toggle}>
                  <input
                    type="checkbox"
                    checked={draft.marketing}
                    onChange={() => handleToggle('marketing')}
                  />
                  <span className={styles.slider} />
                </label>
              </div>
            </div>

            <div className={styles.details}>
              <div className={styles.detailsHeader}>
                <h4>Verwendete Dienste & Cookies</h4>
                <p>Je nach Auswahl werden folgende Technologien geladen.</p>
              </div>
              {cookieDetails.map((group) => (
                <div key={group.title} className={styles.detailGroup}>
                  <h5>{group.title}</h5>
                  <ul className={styles.detailList}>
                    {group.items.map((item) => (
                      <li key={item.name} className={styles.detailItem}>
                        <div>
                          <span className={styles.detailName}>{item.name}</span>
                          <span className={styles.detailPurpose}>{item.purpose}</span>
                        </div>
                        <div className={styles.detailMeta}>
                          <span>{item.provider}</span>
                          <span>{item.type}</span>
                          <span>{item.duration}</span>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </>
        )}

        <div className={styles.actions}>
          <Button variant="secondary" size="sm" onClick={rejectAll}>
            Nur notwendige
          </Button>
          {!isSettingsOpen ? (
            <Button variant="ghost" size="sm" onClick={openSettings}>
              Einstellungen
            </Button>
          ) : (
            <Button variant="outline" size="sm" onClick={handleSave}>
              Einstellungen speichern
            </Button>
          )}
          <Button variant="primary" size="sm" onClick={acceptAll}>
            Alle akzeptieren
          </Button>
        </div>

        <div className={styles.footerNote}>
          Mehr Informationen in der <a href="/datenschutz">Datenschutzerklärung</a>.
        </div>
      </div>
    </div>
  );
}
