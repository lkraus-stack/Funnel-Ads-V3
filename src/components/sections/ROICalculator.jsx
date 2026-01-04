/**
 * ROICalculator Section Component
 * 
 * Vergleich: Drittanbieter-Plattformen vs. Eigene Ads für Hotels
 * - Interaktiver Rechner mit Slidern
 * - Visuelle Vergleichsgrafik mit Umsatz/Kosten-Aufteilung
 * - Variable Preiserhöhung
 */
import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Hotel, TrendingUp, Percent, Building2, Target, DollarSign, AlertTriangle, CheckCircle2 } from 'lucide-react';
import Button from '../ui/Button';
import Card from '../ui/Card';
import AnimatedCounter from '../ui/AnimatedCounter';
import styles from './ROICalculator.module.css';

export default function ROICalculator() {
  // State für Slider-Werte
  const [values, setValues] = useState({
    bookingValue: 600,
    bookingsPerYear: 1000,
    priceIncrease: 12, // Prozent
  });

  // Konstanten für Berechnungen
  const THIRD_PARTY_COMMISSION = 0.20; // 20% Provision
  const OWN_ADS_MARKETING_COST = 0.10; // 10% Marketingkosten

  // Berechnungen
  const calculations = useMemo(() => {
    const { bookingValue, bookingsPerYear, priceIncrease } = values;
    
    // Drittanbieter Berechnung
    const thirdPartyRevenue = bookingValue * bookingsPerYear;
    const thirdPartyCommission = thirdPartyRevenue * THIRD_PARTY_COMMISSION;
    const thirdPartyNet = thirdPartyRevenue - thirdPartyCommission;
    
    // Eigene Ads Berechnung (GLEICHER PREIS)
    const ownAdsSamePriceRevenue = bookingValue * bookingsPerYear;
    const ownAdsSamePriceMarketingCost = ownAdsSamePriceRevenue * OWN_ADS_MARKETING_COST;
    const ownAdsSamePriceNet = ownAdsSamePriceRevenue - ownAdsSamePriceMarketingCost;
    
    // Eigene Ads Berechnung (MIT PREISERHÖHUNG)
    const ownAdsBookingValue = bookingValue * (1 + priceIncrease / 100);
    const ownAdsRevenue = ownAdsBookingValue * bookingsPerYear;
    const ownAdsMarketingCost = ownAdsRevenue * OWN_ADS_MARKETING_COST;
    const ownAdsNet = ownAdsRevenue - ownAdsMarketingCost;
    
    // Vorteile
    const advantageSamePrice = ownAdsSamePriceNet - thirdPartyNet;
    const advantageWithIncrease = ownAdsNet - thirdPartyNet;
    const percentageGainSamePrice = ((ownAdsSamePriceNet / thirdPartyNet) - 1) * 100;
    const percentageGainWithIncrease = ((ownAdsNet / thirdPartyNet) - 1) * 100;
    
    return {
      thirdParty: {
        revenue: thirdPartyRevenue,
        commission: thirdPartyCommission,
        net: thirdPartyNet,
      },
      ownAdsSamePrice: {
        revenue: ownAdsSamePriceRevenue,
        marketingCost: ownAdsSamePriceMarketingCost,
        net: ownAdsSamePriceNet,
      },
      ownAdsWithIncrease: {
        revenue: ownAdsRevenue,
        marketingCost: ownAdsMarketingCost,
        net: ownAdsNet,
        bookingValue: ownAdsBookingValue,
      },
      advantageSamePrice,
      advantageWithIncrease,
      percentageGainSamePrice,
      percentageGainWithIncrease,
    };
  }, [values]);

  // Handler für Slider-Änderungen
  const handleSliderChange = (id, value) => {
    setValues((prev) => ({ ...prev, [id]: parseInt(value) }));
  };

  // Formatierung
  const formatCurrency = (num) => {
    return new Intl.NumberFormat('de-DE', {
      style: 'currency',
      currency: 'EUR',
      maximumFractionDigits: 0,
    }).format(num);
  };

  // Berechne Balken-Höhen für gestapelte Darstellung
  const maxRevenue = Math.max(
    calculations.thirdParty.revenue,
    calculations.ownAdsSamePrice.revenue,
    calculations.ownAdsWithIncrease.revenue
  );

  return (
    <section className={styles.section} id="pricing">
      <div className={styles.container}>
        {/* Header */}
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className={styles.badge}>
            <Hotel size={16} />
            Für Hotels
          </span>
          <h2 className={styles.title}>Drittanbieter vs. Eigene Ads</h2>
          <p className={styles.subtitle}>
            Berechne wie viel mehr du mit eigenen Google & Meta Ads verdienen kannst – 
            statt Provisionen an Booking, Check24 & Co. zu zahlen
          </p>
        </motion.div>

        {/* Main Content */}
        <div className={styles.content}>
          {/* Slider Bereich */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <Card variant="glass" padding="lg">
              <h3 className={styles.inputsTitle}>Deine Kennzahlen</h3>
              <div className={styles.inputs}>
                {/* Durchschnittlicher Buchungswert */}
                <div className={styles.inputGroup}>
                  <div className={styles.inputHeader}>
                    <label className={styles.inputLabel}>
                      <DollarSign size={16} />
                      Durchschnittlicher Buchungswert
                    </label>
                    <span className={styles.inputValue}>
                      {formatCurrency(values.bookingValue)}
                    </span>
                  </div>
                  <input
                    type="range"
                    min={350}
                    max={1500}
                    step={50}
                    value={values.bookingValue}
                    onChange={(e) => handleSliderChange('bookingValue', e.target.value)}
                    className={styles.slider}
                  />
                  <div className={styles.inputRange}>
                    <span>{formatCurrency(350)}</span>
                    <span>{formatCurrency(1500)}</span>
                  </div>
                </div>

                {/* Buchungen pro Jahr */}
                <div className={styles.inputGroup}>
                  <div className={styles.inputHeader}>
                    <label className={styles.inputLabel}>
                      <Building2 size={16} />
                      Buchungen pro Jahr
                    </label>
                    <span className={styles.inputValue}>
                      {values.bookingsPerYear.toLocaleString('de-DE')}
                    </span>
                  </div>
                  <input
                    type="range"
                    min={500}
                    max={5000}
                    step={100}
                    value={values.bookingsPerYear}
                    onChange={(e) => handleSliderChange('bookingsPerYear', e.target.value)}
                    className={styles.slider}
                  />
                  <div className={styles.inputRange}>
                    <span>500</span>
                    <span>5.000</span>
                  </div>
                </div>

                {/* Preiserhöhung bei eigenen Ads */}
                <div className={styles.inputGroup}>
                  <div className={styles.inputHeader}>
                    <label className={styles.inputLabel}>
                      <Percent size={16} />
                      Mögliche Preiserhöhung (eigene Ads)
                    </label>
                    <span className={styles.inputValue}>
                      +{values.priceIncrease}%
                    </span>
                  </div>
                  <input
                    type="range"
                    min={0}
                    max={20}
                    step={1}
                    value={values.priceIncrease}
                    onChange={(e) => handleSliderChange('priceIncrease', e.target.value)}
                    className={styles.slider}
                  />
                  <div className={styles.inputRange}>
                    <span>0%</span>
                    <span>20%</span>
                  </div>
                  <div className={styles.inputNote}>
                    Zimmerpreis: {formatCurrency(calculations.ownAdsWithIncrease.bookingValue)} statt {formatCurrency(values.bookingValue)}
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>

          {/* Vergleichs-Grafik */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Card variant="glass" padding="lg" className={styles.comparisonCard}>
              <h3 className={styles.comparisonTitle}>Jährlicher Vergleich</h3>
              
              <div className={styles.stackedBarsWrapper}>
                <div className={styles.stackedBars}>
                {/* Drittanbieter */}
                <div className={styles.stackedBarGroup}>
                  <div className={styles.stackedBarHeader}>
                    <div className={styles.stackedBarLabel}>
                      <AlertTriangle size={18} className={styles.iconWarning} />
                      <div>
                        <div className={styles.stackedBarTitle}>Drittanbieter</div>
                        <div className={styles.stackedBarSubtitle}>Booking, Check24, etc.</div>
                      </div>
                    </div>
                    <div className={styles.stackedBarNet}>
                      <AnimatedCounter value={calculations.thirdParty.net} prefix="€" duration={1} />
                    </div>
                  </div>
                  <div className={styles.stackedBarContainer}>
                    <motion.div 
                      className={`${styles.stackedBarRevenue} ${styles.stackedBarRevenueThird}`}
                      initial={{ height: 0 }}
                      whileInView={{ height: `${(calculations.thirdParty.revenue / maxRevenue) * 100}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                      <span className={styles.stackedBarLabel}>
                        Umsatz: {formatCurrency(calculations.thirdParty.revenue)}
                      </span>
                    </motion.div>
                    <motion.div 
                      className={`${styles.stackedBarCost} ${styles.stackedBarCostThird}`}
                      initial={{ height: 0 }}
                      whileInView={{ height: `${(calculations.thirdParty.commission / maxRevenue) * 100}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                    >
                      <span className={styles.stackedBarLabel}>
                        Provision (20%): -{formatCurrency(calculations.thirdParty.commission)}
                      </span>
                    </motion.div>
                  </div>
                </div>

                {/* Eigene Ads - Gleicher Preis */}
                <div className={styles.stackedBarGroup}>
                  <div className={styles.stackedBarHeader}>
                    <div className={styles.stackedBarLabel}>
                      <CheckCircle2 size={18} className={styles.iconSuccess} />
                      <div>
                        <div className={styles.stackedBarTitle}>Eigene Ads</div>
                        <div className={styles.stackedBarSubtitle}>Gleicher Zimmerpreis</div>
                      </div>
                    </div>
                    <div className={styles.stackedBarNet}>
                      <AnimatedCounter value={calculations.ownAdsSamePrice.net} prefix="€" duration={1} />
                    </div>
                  </div>
                  <div className={styles.stackedBarContainer}>
                    <motion.div 
                      className={`${styles.stackedBarRevenue} ${styles.stackedBarRevenueOwn}`}
                      initial={{ height: 0 }}
                      whileInView={{ height: `${(calculations.ownAdsSamePrice.revenue / maxRevenue) * 100}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
                    >
                      <span className={styles.stackedBarLabel}>
                        Umsatz: {formatCurrency(calculations.ownAdsSamePrice.revenue)}
                      </span>
                    </motion.div>
                    <motion.div 
                      className={`${styles.stackedBarCost} ${styles.stackedBarCostOwn}`}
                      initial={{ height: 0 }}
                      whileInView={{ height: `${(calculations.ownAdsSamePrice.marketingCost / maxRevenue) * 100}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
                    >
                      <span className={styles.stackedBarLabel}>
                        Marketing (10%): -{formatCurrency(calculations.ownAdsSamePrice.marketingCost)}
                      </span>
                    </motion.div>
                  </div>
                </div>

                {/* Eigene Ads - Mit Preiserhöhung */}
                <div className={styles.stackedBarGroup}>
                  <div className={styles.stackedBarHeader}>
                    <div className={styles.stackedBarLabel}>
                      <TrendingUp size={18} className={styles.iconSuccess} />
                      <div>
                        <div className={styles.stackedBarTitle}>Eigene Ads</div>
                        <div className={styles.stackedBarSubtitle}>+{values.priceIncrease}% Preiserhöhung</div>
                      </div>
                    </div>
                    <div className={styles.stackedBarNet}>
                      <AnimatedCounter value={calculations.ownAdsWithIncrease.net} prefix="€" duration={1} />
                    </div>
                  </div>
                  <div className={styles.stackedBarContainer}>
                    <motion.div 
                      className={`${styles.stackedBarRevenue} ${styles.stackedBarRevenueOwnPlus}`}
                      initial={{ height: 0 }}
                      whileInView={{ height: `${(calculations.ownAdsWithIncrease.revenue / maxRevenue) * 100}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
                    >
                      <span className={styles.stackedBarLabel}>
                        Umsatz: {formatCurrency(calculations.ownAdsWithIncrease.revenue)}
                      </span>
                    </motion.div>
                    <motion.div 
                      className={`${styles.stackedBarCost} ${styles.stackedBarCostOwn}`}
                      initial={{ height: 0 }}
                      whileInView={{ height: `${(calculations.ownAdsWithIncrease.marketingCost / maxRevenue) * 100}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, ease: "easeOut", delay: 0.8 }}
                    >
                      <span className={styles.stackedBarLabel}>
                        Marketing (10%): -{formatCurrency(calculations.ownAdsWithIncrease.marketingCost)}
                      </span>
                    </motion.div>
                  </div>
                </div>
              </div>
              </div>

              {/* Ergebnisse */}
              <div className={styles.resultsGrid}>
                <motion.div 
                  className={styles.resultBox}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.9 }}
                >
                  <div className={styles.resultBoxHeader}>
                    <Target size={20} />
                    <span>Vorteil bei gleichem Preis</span>
                  </div>
                  <div className={styles.resultBoxValue}>
                    +<AnimatedCounter value={calculations.advantageSamePrice} prefix="€" duration={1.5} />
                  </div>
                  <div className={styles.resultBoxPercent}>
                    +{calculations.percentageGainSamePrice.toFixed(1)}% mehr Nettoertrag
                  </div>
                </motion.div>

                <motion.div 
                  className={`${styles.resultBox} ${styles.resultBoxHighlight}`}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 1.0 }}
                >
                  <div className={styles.resultBoxHeader}>
                    <TrendingUp size={20} />
                    <span>Vorteil mit Preiserhöhung</span>
                  </div>
                  <div className={styles.resultBoxValue}>
                    +<AnimatedCounter value={calculations.advantageWithIncrease} prefix="€" duration={1.5} />
                  </div>
                  <div className={styles.resultBoxPercent}>
                    +{calculations.percentageGainWithIncrease.toFixed(1)}% mehr Nettoertrag
                  </div>
                </motion.div>
              </div>
            </Card>
          </motion.div>

          {/* Info Boxes */}
          <motion.div
            className={styles.infoGrid}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            {/* Drittanbieter Nachteile */}
            <Card variant="default" padding="md" className={styles.infoCard}>
              <div className={styles.infoHeader}>
                <AlertTriangle className={styles.infoIconWarning} size={20} />
                <h4 className={styles.infoTitle}>Drittanbieter-Plattformen</h4>
              </div>
              <ul className={styles.infoList}>
                <li>
                  <Percent size={14} />
                  <span>10-30% Provision pro Buchung</span>
                </li>
                <li>
                  <Target size={14} />
                  <span>Starke Preisvergleichbarkeit</span>
                </li>
                <li>
                  <Building2 size={14} />
                  <span>Abhängigkeit von Plattformen</span>
                </li>
                <li>
                  <DollarSign size={14} />
                  <span>Preisdruck durch Wettbewerb</span>
                </li>
              </ul>
            </Card>

            {/* Eigene Ads Vorteile */}
            <Card variant="default" padding="md" className={`${styles.infoCard} ${styles.infoCardSuccess}`}>
              <div className={styles.infoHeader}>
                <CheckCircle2 className={styles.infoIconSuccess} size={20} />
                <h4 className={styles.infoTitle}>Eigene Google & Meta Ads</h4>
              </div>
              <ul className={styles.infoList}>
                <li>
                  <Percent size={14} />
                  <span>Nur 5-15% Marketingkosten</span>
                </li>
                <li>
                  <TrendingUp size={14} />
                  <span>5-20% höhere Zimmerpreise möglich</span>
                </li>
                <li>
                  <Target size={14} />
                  <span>Direktbuchungen ohne Mittelsmann</span>
                </li>
                <li>
                  <Hotel size={14} />
                  <span>Volle Kontrolle über Preisgestaltung</span>
                </li>
              </ul>
            </Card>
          </motion.div>

          {/* CTA */}
          <motion.div
            className={styles.ctaWrapper}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <Button href="#contact" size="lg" className={styles.cta}>
              Jetzt unabhängig werden
              <ArrowRight size={20} />
            </Button>
            <p className={styles.ctaSubtext}>
              Kostenlose Analyse für dein Hotel in 24h
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
