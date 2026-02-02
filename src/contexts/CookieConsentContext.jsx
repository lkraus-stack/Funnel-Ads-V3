import { createContext, useContext, useEffect, useMemo, useState } from 'react';

const CookieConsentContext = createContext(null);

const STORAGE_KEY = 'cookie-consent-v1';
const GTM_ID = 'GTM-MGK7XX25';

const defaultConsent = {
  necessary: true,
  statistics: false,
  marketing: false,
};

const consentToGtmMode = (consent) => ({
  ad_storage: consent.marketing ? 'granted' : 'denied',
  analytics_storage: consent.statistics ? 'granted' : 'denied',
  functionality_storage: 'granted',
  security_storage: 'granted',
  personalization_storage: consent.marketing ? 'granted' : 'denied',
  ad_user_data: consent.marketing ? 'granted' : 'denied',
  ad_personalization: consent.marketing ? 'granted' : 'denied',
});

const normalizeConsent = (value) => ({
  necessary: true,
  statistics: Boolean(value?.statistics),
  marketing: Boolean(value?.marketing),
});

const ensureGtag = () => {
  if (typeof window === 'undefined') return;
  window.dataLayer = window.dataLayer || [];
  if (!window.gtag) {
    window.gtag = function gtag() {
      window.dataLayer.push(arguments);
    };
  }
};

const pushGtmConsent = (consent, type = 'update') => {
  if (typeof window === 'undefined') return;
  ensureGtag();
  window.gtag('consent', type, consentToGtmMode(consent));
};

const loadGtm = () => {
  if (typeof document === 'undefined') return;
  if (document.getElementById('gtm-script')) return;

  ensureGtag();
  window.dataLayer.push({ 'gtm.start': new Date().getTime(), event: 'gtm.js' });

  const script = document.createElement('script');
  script.id = 'gtm-script';
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtm.js?id=${GTM_ID}`;
  document.head.appendChild(script);

  if (!document.getElementById('gtm-noscript')) {
    const noscript = document.createElement('noscript');
    noscript.id = 'gtm-noscript';
    noscript.innerHTML = `<iframe src="https://www.googletagmanager.com/ns.html?id=${GTM_ID}" height="0" width="0" style="display:none;visibility:hidden"></iframe>`;
    document.body.appendChild(noscript);
  }
};

const readStoredConsent = () => {
  if (typeof window === 'undefined') return null;
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (!stored) return null;
    return normalizeConsent(JSON.parse(stored));
  } catch (error) {
    return null;
  }
};

const writeStoredConsent = (consent) => {
  if (typeof window === 'undefined') return;
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(consent));
  } catch (error) {
    // ignore write errors (private mode, storage full)
  }
};

export function CookieConsentProvider({ children }) {
  const [consent, setConsent] = useState(defaultConsent);
  const [hasChoice, setHasChoice] = useState(false);
  const [isBannerVisible, setIsBannerVisible] = useState(false);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);

  useEffect(() => {
    const stored = readStoredConsent();

    if (stored) {
      setConsent(stored);
      setHasChoice(true);
      setIsBannerVisible(false);
      pushGtmConsent(stored, 'update');
      if (stored.marketing || stored.statistics) {
        loadGtm();
      }
      return;
    }

    setIsBannerVisible(true);
    pushGtmConsent(defaultConsent, 'default');
  }, []);

  const applyConsent = (nextConsent) => {
    const normalized = normalizeConsent(nextConsent);
    setConsent(normalized);
    setHasChoice(true);
    setIsBannerVisible(false);
    setIsSettingsOpen(false);
    writeStoredConsent(normalized);
    pushGtmConsent(normalized, 'update');

    if (normalized.marketing || normalized.statistics) {
      loadGtm();
    }
  };

  const acceptAll = () => applyConsent({ statistics: true, marketing: true });
  const rejectAll = () => applyConsent({ statistics: false, marketing: false });
  const saveSettings = (nextConsent) => applyConsent(nextConsent);

  const openSettings = () => {
    setIsBannerVisible(true);
    setIsSettingsOpen(true);
  };

  const value = useMemo(
    () => ({
      consent,
      hasChoice,
      isBannerVisible,
      isSettingsOpen,
      acceptAll,
      rejectAll,
      saveSettings,
      openSettings,
    }),
    [consent, hasChoice, isBannerVisible, isSettingsOpen]
  );

  return (
    <CookieConsentContext.Provider value={value}>
      {children}
    </CookieConsentContext.Provider>
  );
}

export function useCookieConsent() {
  const context = useContext(CookieConsentContext);
  if (!context) {
    throw new Error('useCookieConsent must be used within CookieConsentProvider');
  }
  return context;
}
