/**
 * FeatureShowcase Section Component
 * 
 * TEMPLATE GUIDE:
 * Feature-Präsentation mit abwechselndem Layout:
 * - Animierte Chat-Mockups links oder rechts
 * - Titel, Beschreibung, Bullet-Points
 * - CTA-Button
 * 
 * Texte aus data/content.js (featureShowcaseContent)
 */
import { motion } from 'framer-motion';
import * as Icons from 'lucide-react';
import Button from '../ui/Button';
import Card from '../ui/Card';
import { featureShowcaseContent } from '../../data/content';
import styles from './FeatureShowcase.module.css';

// Chat-Nachrichten für verschiedene Features
const chatMessages = [
  // Feature 1: Lead Qualifizierung
  [
    { type: 'bot', text: 'Hallo! 👋 Ich bin Ihr digitaler Assistent. Wie kann ich Ihnen heute helfen?' },
    { type: 'user', text: 'Ich interessiere mich für Ihre Google Ads Dienstleistungen.' },
    { type: 'bot', text: 'Super! Darf ich fragen, wie hoch Ihr aktuelles Werbebudget ist?' },
    { type: 'user', text: 'Etwa 5.000€ pro Monat.' },
    { type: 'bot', text: 'Perfekt! Sie qualifizieren sich für unser Premium-Programm. Möchten Sie einen Beratungstermin vereinbaren?' },
  ],
  // Feature 2: Kalender-Buchung
  [
    { type: 'user', text: 'Das klingt interessant! Kann ich einen Termin für Freitag buchen?' },
    { type: 'bot', text: 'Natürlich! Ich habe freie Slots um 11:00, 14:00 oder 15:00 Uhr - welcher passt Ihnen?' },
    { type: 'user', text: '11 Uhr ist perfekt.' },
    { type: 'bot', text: '✅ Gebucht! Freitag, 11:00 Uhr. Sie erhalten gleich eine Bestätigungs-E-Mail.' },
  ],
  // Feature 3: Integration
  [
    { type: 'bot', text: 'Ihre Anfrage wurde über Instagram empfangen und mit Ihrem CRM synchronisiert.' },
    { type: 'user', text: 'Funktioniert das auch mit WhatsApp?' },
    { type: 'bot', text: 'Ja! SMS, WhatsApp, Instagram und Facebook Messenger - alles an einem Ort.' },
    { type: 'bot', text: '🔗 Alle Kanäle sind verbunden und synchron.' },
  ],
];

export default function FeatureShowcase() {
  // Dynamic Icon Component
  const DynamicIcon = ({ name, ...props }) => {
    const IconComponent = Icons[name];
    return IconComponent ? <IconComponent {...props} /> : null;
  };

  // Message animation variants
  const messageVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        delay: i * 0.4,
        duration: 0.4,
        ease: 'easeOut',
      },
    }),
  };

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {featureShowcaseContent.map((feature, index) => (
          <motion.div
            key={feature.id}
            className={`${styles.feature} ${feature.imagePosition === 'left' ? styles.reversed : ''}`}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            {/* Content Side */}
            <div className={styles.content}>
              <h2 className={styles.title}>{feature.title}</h2>
              <p className={styles.subtitle}>{feature.subtitle}</p>
              <p className={styles.description}>{feature.description}</p>

              {/* Points */}
              <ul className={styles.points}>
                {feature.points.map((point, idx) => (
                  <motion.li
                    key={idx}
                    className={styles.point}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + idx * 0.1 }}
                  >
                    <span className={styles.pointIcon}>
                      <DynamicIcon name={point.icon} size={20} />
                    </span>
                    <span className={styles.pointText}>{point.text}</span>
                  </motion.li>
                ))}
              </ul>

              <Button variant="secondary" href="#contact">
                {feature.cta}
              </Button>
            </div>

            {/* Image Side - Animated Chat Mockup */}
            <div className={styles.imageWrapper}>
              <Card variant="glass" padding="none" className={styles.imageCard}>
                <div className={styles.mockup}>
                  {/* Mockup Header */}
                  <div className={styles.mockupHeader}>
                    <div className={styles.mockupDots}>
                      <span></span>
                      <span></span>
                      <span></span>
                    </div>
                    <span className={styles.mockupTitle}>Live Chat</span>
                    <div className={styles.mockupStatus}>
                      <span className={styles.statusDot}></span>
                      Online
                    </div>
                  </div>

                  {/* Mockup Content with Animated Messages */}
                  <div className={styles.mockupContent}>
                    <div className={styles.mockupMessage}>
                      {chatMessages[index]?.map((message, msgIndex) => (
                        <motion.div
                          key={msgIndex}
                          className={message.type === 'bot' ? styles.messageBot : styles.messageUser}
                          custom={msgIndex}
                          variants={messageVariants}
                          initial="hidden"
                          whileInView="visible"
                          viewport={{ once: true }}
                        >
                          {message.type === 'bot' && (
                            <span className={styles.messageAvatar}>AI</span>
                          )}
                          <div className={message.type === 'bot' ? styles.messageBubble : styles.messageBubbleUser}>
                            {message.text}
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Input Field */}
                  <div className={styles.mockupInput}>
                    <div className={styles.inputField}>
                      <span>Nachricht schreiben...</span>
                    </div>
                    <div className={styles.sendButton}>
                      <Icons.Send size={16} />
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
