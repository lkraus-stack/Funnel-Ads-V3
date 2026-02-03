/**
 * Contact Form Component - Multi-Step Button-Based Form (Modal)
 * 
 * TEMPLATE GUIDE:
 * Mehrstufiges Kontaktformular mit Button-basierter Navigation als Popup-Modal:
 * - Schritt 1: Online Marketing Status (Ja/Nein)
 * - Schritt 2a (wenn Nein): Zukunftspläne
 * - Schritt 2b (wenn Ja): Gewünschte Anpassungen
 * - Schritt 3: Marketing Budget
 * - Schritt 4: Kontaktdaten
 */
import { useState, useEffect, useRef, useCallback, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowRight, 
  ArrowLeft, 
  Check, 
  ClipboardCheck, 
  TrendingUp, 
  UserX, 
  BarChart3, 
  Zap,
  Wallet,
  DollarSign,
  Banknote,
  CreditCard,
  Landmark,
  X
} from 'lucide-react';
import Button from '../ui/Button';
import { useContactModal } from '../../contexts/ContactModalContext';
import styles from './ContactForm.module.css';

export default function ContactForm() {
  const { isOpen, closeModal } = useContactModal();
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState(null);
  const wasOpenRef = useRef(false);
  const lastStepRef = useRef(step);
  const [formData, setFormData] = useState({
    hasMarketing: null,
    futureStart: null,
    improvements: [],
    budget: null,
    name: '',
    company: '',
    email: '',
    phone: '',
    privacyAccepted: false,
  });

  const formMeta = useMemo(
    () => ({
      form_name: 'kontaktformular',
      form_id: 'contact_modal',
    }),
    []
  );

  const getStepName = useCallback(() => {
    if (step === 1) return 'marketing_status';
    if (step === 2 && formData.hasMarketing === false) return 'future_start';
    if (step === 2 && formData.hasMarketing === true) return 'improvements';
    if (step === 3) return 'budget';
    if (step === 4) return 'contact_details';
    if (step === 5) return 'success';
    return 'unknown';
  }, [formData.hasMarketing, step]);

  const buildStepPayload = useCallback(
    (override = {}) => ({
      ...formMeta,
      form_step: step,
      form_step_name: getStepName(),
      has_marketing: formData.hasMarketing,
      future_start: formData.futureStart,
      improvements: formData.improvements,
      budget: formData.budget,
      ...override,
    }),
    [
      formData.budget,
      formData.futureStart,
      formData.hasMarketing,
      formData.improvements,
      formMeta,
      getStepName,
      step,
    ]
  );

  const pushTrackingEvent = useCallback(
    (eventName, params = {}) => {
      if (typeof window === 'undefined') return;
      const payload = buildStepPayload(params);
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({ event: eventName, ...payload });
      if (window.gtag) {
        window.gtag('event', eventName, payload);
      }
    },
    [buildStepPayload]
  );

  // Anpassungsmöglichkeiten für bestehende Marketing-Aktivitäten
  const improvementOptions = [
    { id: 'account-check', label: 'Account Check', icon: ClipboardCheck },
    { id: 'more-bookings', label: 'Mehr Buchungen', icon: TrendingUp },
    { id: 'no-agency', label: 'Keine Agentur mehr', icon: UserX },
    { id: 'conversion-tracking', label: 'Conversion Tracking', icon: BarChart3 },
    { id: 'better-campaigns', label: 'Bessere Kampagnen', icon: Zap },
  ];

  // Budget-Optionen
  const budgetOptions = [
    { id: 'under-1000', label: 'Unter 1.000€', icon: Wallet },
    { id: '1000-3000', label: '1.000€ - 3.000€', icon: DollarSign },
    { id: '3000-5000', label: '3.000€ - 5.000€', icon: Banknote },
    { id: '5000-10000', label: '5.000€ - 10.000€', icon: CreditCard },
    { id: 'over-10000', label: 'Über 10.000€', icon: Landmark },
  ];

  const handleMarketingChoice = (hasMarketing) => {
    setFormData({ ...formData, hasMarketing });
    pushTrackingEvent('form_step_choice', { has_marketing: hasMarketing });
    setStep(2);
  };

  const handleFutureStart = (futureStart) => {
    setFormData({ ...formData, futureStart });
    pushTrackingEvent('form_step_choice', { future_start: futureStart });
    setStep(3);
  };

  const toggleImprovement = (improvementId) => {
    const improvements = formData.improvements.includes(improvementId)
      ? formData.improvements.filter(id => id !== improvementId)
      : [...formData.improvements, improvementId];
    setFormData({ ...formData, improvements });
    pushTrackingEvent('form_step_choice', { improvements });
  };

  const handleContinueToStep3 = () => {
    if (formData.improvements.length > 0) {
      pushTrackingEvent('form_step_continue', { improvements: formData.improvements });
      setStep(3);
    }
  };

  const handleBudgetChoice = (budget) => {
    setFormData({ ...formData, budget });
    pushTrackingEvent('form_step_choice', { budget });
    setStep(4);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError(null);
    pushTrackingEvent('form_submit');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Fehler beim Senden der Anfrage');
      }

      // Erfolgreich gesendet
      pushTrackingEvent('form_submit_success');
      setStep(5); // Erfolgsseite
    } catch (error) {
      console.error('Form submission error:', error);
      pushTrackingEvent('form_submit_error', { error_message: error.message || 'unknown' });
      setSubmitError(error.message || 'Ein Fehler ist aufgetreten. Bitte versuchen Sie es erneut.');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Modal schließen mit ESC-Taste
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape' && isOpen) {
        closeModal();
      }
    };
    if (isOpen) {
      document.addEventListener('keydown', handleEsc);
      document.body.style.overflow = 'hidden'; // Verhindert Scrollen im Hintergrund
    }
    return () => {
      document.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, closeModal]);

  useEffect(() => {
    if (isOpen && !wasOpenRef.current) {
      lastStepRef.current = null;
      pushTrackingEvent('form_open');
    }
    if (!isOpen && wasOpenRef.current) {
      pushTrackingEvent('form_close');
    }
    wasOpenRef.current = isOpen;
  }, [isOpen, pushTrackingEvent]);

  useEffect(() => {
    if (isOpen && lastStepRef.current !== step) {
      lastStepRef.current = step;
      pushTrackingEvent('form_step_view');
    }
  }, [step, isOpen, pushTrackingEvent]);

  // Formular zurücksetzen beim Öffnen
  useEffect(() => {
    if (isOpen && step !== 1) {
      setStep(1);
      setFormData({
        hasMarketing: null,
        futureStart: null,
        improvements: [],
        budget: null,
        name: '',
        company: '',
        email: '',
        phone: '',
        privacyAccepted: false,
      });
    }
  }, [isOpen]);

  const goBack = () => {
    if (step === 3 && formData.hasMarketing === false) {
      setStep(2);
    } else if (step === 3 && formData.hasMarketing === true) {
      setStep(2);
    } else if (step > 1) {
      setStep(step - 1);
    }
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
    exit: {
      opacity: 0,
      y: -30,
      transition: { duration: 0.3 },
    },
  };

  const buttonGridVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const buttonItemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.3 },
    },
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className={styles.modalOverlay}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={closeModal}
        >
          <motion.div
            className={styles.modalContent}
            initial={{ opacity: 0, scale: 0.9, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 50 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button className={styles.closeButton} onClick={closeModal} aria-label="Schließen">
              <X size={24} />
            </button>

            <div className={styles.formWrapper}>
              <div className={styles.formContent}>
                {/* Progress Indicator */}
                <div className={styles.progress}>
                  <div className={styles.progressBar}>
                    <motion.div
                      className={styles.progressFill}
                      initial={{ width: '0%' }}
                      animate={{ width: `${(step / 5) * 100}%` }}
                      transition={{ duration: 0.5, ease: 'easeOut' }}
                    />
                  </div>
                  <p className={styles.progressText}>
                    Schritt {step} von 5
                  </p>
                </div>

                <AnimatePresence mode="wait">
            {/* STEP 1: Online Marketing Status */}
            {step === 1 && (
              <motion.div
                key="step1"
                className={styles.step}
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                <h2 className={styles.question}>
                  Betreiben Sie bereits Online Marketing?
                </h2>
                <p className={styles.description}>
                  Wählen Sie die Option, die auf Sie zutrifft
                </p>
                <motion.div
                  className={styles.buttonGrid}
                  variants={buttonGridVariants}
                  initial="hidden"
                  animate="visible"
                >
                  <motion.div variants={buttonItemVariants}>
                    <button
                      className={styles.choiceButton}
                      onClick={() => handleMarketingChoice(true)}
                    >
                      <span className={styles.choiceEmoji}>✅</span>
                      <span className={styles.choiceText}>Ja, bereits aktiv</span>
                    </button>
                  </motion.div>
                  <motion.div variants={buttonItemVariants}>
                    <button
                      className={styles.choiceButton}
                      onClick={() => handleMarketingChoice(false)}
                    >
                      <span className={styles.choiceEmoji}>🚀</span>
                      <span className={styles.choiceText}>Nein, noch nicht</span>
                    </button>
                  </motion.div>
                </motion.div>
              </motion.div>
            )}

            {/* STEP 2a: Future Plans (wenn NEIN bei Step 1) */}
            {step === 2 && formData.hasMarketing === false && (
              <motion.div
                key="step2a"
                className={styles.step}
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                <button className={styles.backButton} onClick={goBack}>
                  <ArrowLeft size={20} />
                  <span>Zurück</span>
                </button>
                <h2 className={styles.question}>
                  Möchten Sie in naher Zukunft mit Online Marketing starten?
                </h2>
                <p className={styles.description}>
                  Lassen Sie uns gemeinsam Ihre Strategie aufbauen
                </p>
                <motion.div
                  className={styles.buttonGrid}
                  variants={buttonGridVariants}
                  initial="hidden"
                  animate="visible"
                >
                  <motion.div variants={buttonItemVariants}>
                    <button
                      className={styles.choiceButton}
                      onClick={() => handleFutureStart(true)}
                    >
                      <span className={styles.choiceEmoji}>🎯</span>
                      <span className={styles.choiceText}>Ja, so bald wie möglich</span>
                    </button>
                  </motion.div>
                  <motion.div variants={buttonItemVariants}>
                    <button
                      className={styles.choiceButton}
                      onClick={() => handleFutureStart('planning')}
                    >
                      <span className={styles.choiceEmoji}>📊</span>
                      <span className={styles.choiceText}>Ja, bin in der Planungsphase</span>
                    </button>
                  </motion.div>
                  <motion.div variants={buttonItemVariants}>
                    <button
                      className={styles.choiceButton}
                      onClick={() => handleFutureStart('exploring')}
                    >
                      <span className={styles.choiceEmoji}>💡</span>
                      <span className={styles.choiceText}>Ich informiere mich erst mal</span>
                    </button>
                  </motion.div>
                </motion.div>
              </motion.div>
            )}

            {/* STEP 2b: Improvements (wenn JA bei Step 1) */}
            {step === 2 && formData.hasMarketing === true && (
              <motion.div
                key="step2b"
                className={styles.step}
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                <button className={styles.backButton} onClick={goBack}>
                  <ArrowLeft size={20} />
                  <span>Zurück</span>
                </button>
                <h2 className={styles.question}>
                  Was möchten Sie optimieren?
                </h2>
                <p className={styles.description}>
                  Wählen Sie alle Bereiche, die für Sie relevant sind
                </p>
                <motion.div
                  className={styles.buttonGrid}
                  variants={buttonGridVariants}
                  initial="hidden"
                  animate="visible"
                >
                  {improvementOptions.map((option) => {
                    const IconComponent = option.icon;
                    return (
                      <motion.div key={option.id} variants={buttonItemVariants}>
                        <button
                          className={`${styles.multiChoiceButton} ${
                            formData.improvements.includes(option.id) ? styles.selected : ''
                          }`}
                          onClick={() => toggleImprovement(option.id)}
                        >
                          <span className={styles.checkIcon}>
                            {formData.improvements.includes(option.id) && <Check size={20} />}
                          </span>
                          <span className={styles.optionIcon}>
                            <IconComponent size={24} />
                          </span>
                          <span className={styles.choiceText}>{option.label}</span>
                        </button>
                      </motion.div>
                    );
                  })}
                </motion.div>
                <div className={styles.continueButton}>
                  <Button
                    size="lg"
                    onClick={handleContinueToStep3}
                    disabled={formData.improvements.length === 0}
                    iconRight={ArrowRight}
                  >
                    Weiter
                  </Button>
                </div>
              </motion.div>
            )}

            {/* STEP 3: Budget */}
            {step === 3 && (
              <motion.div
                key="step3"
                className={styles.step}
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                <button className={styles.backButton} onClick={goBack}>
                  <ArrowLeft size={20} />
                  <span>Zurück</span>
                </button>
                <h2 className={styles.question}>
                  Wie hoch ist Ihr monatliches Marketing-Budget?
                </h2>
                <p className={styles.description}>
                  Damit können wir Ihnen die passende Lösung anbieten
                </p>
                <motion.div
                  className={styles.buttonGrid}
                  variants={buttonGridVariants}
                  initial="hidden"
                  animate="visible"
                >
                  {budgetOptions.map((option) => {
                    const IconComponent = option.icon;
                    return (
                      <motion.div key={option.id} variants={buttonItemVariants}>
                        <button
                          className={`${styles.choiceButton} ${
                            formData.budget === option.id ? styles.selected : ''
                          }`}
                          onClick={() => handleBudgetChoice(option.id)}
                        >
                          <span className={styles.budgetIcon}>
                            <IconComponent size={32} />
                          </span>
                          <span className={styles.choiceText}>{option.label}</span>
                        </button>
                      </motion.div>
                    );
                  })}
                </motion.div>
              </motion.div>
            )}

            {/* STEP 4: Contact Details */}
            {step === 4 && (
              <motion.div
                key="step4"
                className={styles.step}
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                <button className={styles.backButton} onClick={goBack}>
                  <ArrowLeft size={20} />
                  <span>Zurück</span>
                </button>
                <h2 className={styles.question}>
                  Wie können wir Sie erreichen?
                </h2>
                <p className={styles.description}>
                  Ihre Daten werden vertraulich behandelt
                </p>
                <form onSubmit={handleSubmit} className={styles.contactDetailsForm}>
                  <div className={styles.formGroup}>
                    <label htmlFor="name">Name *</label>
                    <input
                      type="text"
                      id="name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Max Mustermann"
                    />
                  </div>
                  <div className={styles.formGroup}>
                    <label htmlFor="company">Firmenname</label>
                    <input
                      type="text"
                      id="company"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      placeholder="Musterfirma GmbH"
                    />
                  </div>
                  <div className={styles.formGroup}>
                    <label htmlFor="email">E-Mail *</label>
                    <input
                      type="email"
                      id="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="max@beispiel.de"
                    />
                  </div>
                  <div className={styles.formGroup}>
                    <label htmlFor="phone">Telefon (optional)</label>
                    <input
                      type="tel"
                      id="phone"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+49 123 456789"
                    />
                  </div>
                  <div className={styles.formGroup}>
                    <label className={styles.checkboxLabel}>
                      <input
                        type="checkbox"
                        required
                        checked={formData.privacyAccepted}
                        onChange={(e) => setFormData({ ...formData, privacyAccepted: e.target.checked })}
                        className={styles.checkbox}
                      />
                      <span>
                        Ich habe die{' '}
                        <a 
                          href="https://www.franco-consulting.com/datenschutz" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className={styles.privacyLink}
                        >
                          Datenschutzerklärung
                        </a>
                        {' '}gelesen und akzeptiere sie. *
                      </span>
                    </label>
                  </div>
                  {submitError && (
                    <div className={styles.errorMessage}>
                      <span style={{ color: 'var(--error, #ef4444)' }}>⚠️</span>
                      <span>{submitError}</span>
                    </div>
                  )}
                  <div className={styles.submitButton}>
                    <Button 
                      type="submit" 
                      size="lg" 
                      iconRight={ArrowRight}
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? 'Wird gesendet...' : 'Beratungsgespräch anfragen'}
                    </Button>
                  </div>
                </form>
              </motion.div>
            )}

            {/* STEP 5: Success */}
            {step === 5 && (
              <motion.div
                key="step5"
                className={styles.step}
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                <div className={styles.success}>
                  <div className={styles.successIcon}>
                    <Check size={48} />
                  </div>
                  <h2 className={styles.successTitle}>
                    Vielen Dank für Ihre Anfrage!
                  </h2>
                  <p className={styles.successText}>
                    Wir melden uns innerhalb von 24 Stunden bei Ihnen.
                  </p>
                  <div className={styles.successDetails}>
                    <h3>Ihre Angaben:</h3>
                    <ul>
                      <li>
                        <strong>Marketing-Status:</strong>{' '}
                        {formData.hasMarketing ? 'Bereits aktiv' : 'Noch nicht gestartet'}
                      </li>
                      {formData.improvements.length > 0 && (
                        <li>
                          <strong>Optimierungswünsche:</strong>{' '}
                          {formData.improvements.map(id => 
                            improvementOptions.find(opt => opt.id === id)?.label
                          ).join(', ')}
                        </li>
                      )}
                      <li>
                        <strong>Budget:</strong>{' '}
                        {budgetOptions.find(opt => opt.id === formData.budget)?.label}
                      </li>
                      {formData.company && (
                        <li>
                          <strong>Firma:</strong> {formData.company}
                        </li>
                      )}
                    </ul>
                  </div>
                </div>
              </motion.div>
            )}
                </AnimatePresence>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

