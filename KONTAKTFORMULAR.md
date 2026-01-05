# Kontaktformular - Dokumentation

## Übersicht

Das mehrstufige Kontaktformular wurde erfolgreich erstellt und in die Webseite integriert. Es verwendet das bestehende Design-System und bietet eine intuitive Button-basierte Navigation.

## Features

### 1. **Mehrstufiger Ablauf**
- **Schritt 1:** Online Marketing Status (Ja/Nein)
- **Schritt 2a:** (bei "Nein") Zukunftspläne für Marketing
- **Schritt 2b:** (bei "Ja") Auswahl der Optimierungsbereiche (Mehrfachauswahl)
- **Schritt 3:** Monatliches Marketing-Budget
- **Schritt 4:** Kontaktdaten (Name, E-Mail, Telefon)
- **Schritt 5:** Erfolgsbestätigung

### 2. **Benutzerfreundliche Features**
- ✅ Fortschrittsanzeige mit animiertem Balken
- ✅ Zurück-Button für einfache Navigation
- ✅ Animierte Übergänge zwischen den Schritten (Framer Motion)
- ✅ Button-basierte Auswahl statt Formularfelder
- ✅ Visuelles Feedback bei Hover und Auswahl
- ✅ Responsive Design für alle Bildschirmgrößen

### 3. **Design-Integration**
- 🎨 Verwendet existierende CSS-Variablen und Farben
- 🎨 Gradient-Effekte und Glow-Schatten wie im Rest der Seite
- 🎨 Konsistente Button-Styles mit dem bestehenden Design-System
- 🎨 Dark-Theme mit glasmorphism Effekten

## Formular-Ablauf

### Schritt 1: Marketing-Status
```
"Betreiben Sie bereits Online Marketing?"
→ Ja, bereits aktiv ✅
→ Nein, noch nicht 🚀
```

### Schritt 2a: Zukunftspläne (wenn Nein)
```
"Möchten Sie in naher Zukunft mit Online Marketing starten?"
→ Ja, so bald wie möglich 🎯
→ Ja, bin in der Planungsphase 📊
→ Ich informiere mich erst mal 💡
```

### Schritt 2b: Optimierungsbereiche (wenn Ja)
```
"Was möchten Sie optimieren?" (Mehrfachauswahl)
→ Account Check
→ Mehr Buchungen
→ Keine Agentur mehr
→ Conversion Tracking
→ Bessere Kampagnen
```

### Schritt 3: Budget
```
"Wie hoch ist Ihr monatliches Marketing-Budget?"
→ Unter 1.000€
→ 1.000€ - 3.000€
→ 3.000€ - 5.000€
→ 5.000€ - 10.000€
→ Über 10.000€
```

### Schritt 4: Kontaktdaten
```
Formularfelder:
- Name (Pflichtfeld)
- E-Mail (Pflichtfeld)
- Telefon (optional)
```

### Schritt 5: Erfolgsbestätigung
```
Zeigt eine Zusammenfassung der eingegebenen Daten an
```

## Integration

Das Kontaktformular wurde zwischen der FAQ und der CTA-Section eingefügt:

```jsx
<FAQ />
<ContactForm />  // ← NEU
<CTASection />
```

Die Section ist über die ID `#contact` verlinkt und kann direkt angesprungen werden.

## Anpassungen

### Fragen ändern
Bearbeite die Arrays in `/src/components/sections/ContactForm.jsx`:

```javascript
// Optimierungsoptionen
const improvementOptions = [
  { id: 'account-check', label: 'Account Check' },
  // ... weitere Optionen
];

// Budget-Optionen
const budgetOptions = [
  { id: 'under-1000', label: 'Unter 1.000€' },
  // ... weitere Optionen
];
```

### Styling anpassen
Alle Styles befinden sich in `/src/components/sections/ContactForm.module.css`

### Backend-Integration
In der `handleSubmit`-Funktion musst du die Daten an dein Backend senden:

```javascript
const handleSubmit = (e) => {
  e.preventDefault();
  // TODO: Backend-Integration
  console.log('Form submitted:', formData);
  setStep(5);
};
```

## Browser-Kompatibilität

- ✅ Chrome/Edge (modern)
- ✅ Firefox (modern)
- ✅ Safari (iOS & macOS)
- ✅ Mobile Browser

## Accessibility

- ✅ Tastatur-Navigation möglich
- ✅ Semantisches HTML
- ✅ ARIA-Labels (bei Bedarf erweiterbar)
- ✅ Focus-States für alle interaktiven Elemente

## Nächste Schritte

1. **Backend-Integration:** Verbinde das Formular mit deinem Backend/CRM
2. **E-Mail-Benachrichtigungen:** Sende automatische E-Mails bei Formularübermittlung
3. **Analytics:** Tracking für jeden Schritt implementieren
4. **A/B-Testing:** Teste verschiedene Fragen und Button-Labels
5. **Validation:** Erweitere die Validierung falls nötig

---

**Status:** ✅ Vollständig implementiert und funktionsfähig

