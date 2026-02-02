# Resend Integration Setup

Diese Anleitung erklärt, wie du die Resend-Integration für das Kontaktformular einrichtest.

## 1. Resend Account erstellen

1. Gehe zu [resend.com](https://resend.com) und erstelle einen Account
2. Verifiziere deine Domain oder verwende die Test-Domain `onboarding@resend.dev` für Tests

## 2. API Key erstellen

1. Gehe zu [API Keys](https://resend.com/api-keys) in deinem Resend Dashboard
2. Erstelle einen neuen API Key
3. Kopiere den API Key (beginnt mit `re_`)

## 3. Environment Variables konfigurieren

### Standard (ohne Env-Variablen)

Wenn nur `RESEND_API_KEY` in Vercel gesetzt ist, werden folgende Adressen verwendet:
- **Absender:** `Franco Consulting <kontakt@franco-consulting.com>` (verifizierte Domain)
- **Empfänger:** `kontakt@franco-consulting.com`

DNS und Domain `franco-consulting.com` müssen in Resend verifiziert sein.

### Lokale Entwicklung (optional)

Erstelle eine `.env.local` Datei im Root-Verzeichnis, falls du andere Adressen nutzen willst:

```bash
RESEND_API_KEY=re_xxxxxxxxxxxxxxxxxxxxx
RESEND_FROM_EMAIL=Franco Consulting <kontakt@franco-consulting.com>
RESEND_TO_EMAIL=kontakt@franco-consulting.com
```

**Wichtig:**
- `RESEND_FROM_EMAIL`: Muss eine verifizierte Domain in Resend sein
- `RESEND_TO_EMAIL`: E-Mail-Adresse, an die die Kontaktanfragen gesendet werden
- Die `.env.local` Datei ist in `.gitignore` und wird nicht committed

### Vercel Production

1. Gehe zu deinem Vercel Dashboard
2. Wähle dein Projekt aus
3. Gehe zu **Settings** → **Environment Variables**
4. Mindestens erforderlich:
   - `RESEND_API_KEY`: Dein Resend API Key
5. Optional (falls andere Adressen als Standard):
   - `RESEND_FROM_EMAIL`: Absender (Standard: `Franco Consulting <kontakt@franco-consulting.com>`)
   - `RESEND_TO_EMAIL`: Empfänger für Anfragen (Standard: `kontakt@franco-consulting.com`)

## 4. Domain verifizieren (Production)

Für Production solltest du deine eigene Domain verwenden:

1. In Resend Dashboard: **Domains** → **Add Domain**
2. Folge den DNS-Anweisungen zur Verifizierung
3. Verwende dann deine verifizierte Domain in `RESEND_FROM_EMAIL` (z.B. `noreply@yourdomain.com`)

## 5. Testen

### Lokal testen

```bash
# Mit Vercel CLI (empfohlen)
npm install -g vercel
vercel dev

# Oder mit Vite (API Route wird nicht funktionieren, nur Frontend)
npm run dev
```

**Hinweis:** Für lokales Testen der API Route benötigst du `vercel dev`, da Vite keine Serverless Functions unterstützt.

### Production testen

1. Deploye auf Vercel: `vercel --prod`
2. Fülle das Kontaktformular aus
3. Prüfe dein E-Mail-Postfach (RESEND_TO_EMAIL)

## Troubleshooting

### "RESEND_API_KEY ist nicht gesetzt"
- Stelle sicher, dass die Environment Variable in Vercel gesetzt ist
- Für lokale Tests: Prüfe, ob `.env.local` existiert und korrekt ist

### "Domain not verified"
- Die `RESEND_FROM_EMAIL` Domain muss in Resend verifiziert sein
- Für Tests: Verwende `onboarding@resend.dev`

### E-Mails kommen nicht an
- Prüfe das Resend Dashboard auf Fehler
- Stelle sicher, dass `RESEND_TO_EMAIL` korrekt ist
- Prüfe den Spam-Ordner

## API Route Details

Die API Route befindet sich in `api/contact.js` und:
- Validiert alle Formulardaten
- Sendet formatierte HTML- und Text-E-Mails
- Gibt aussagekräftige Fehlermeldungen zurück
- Unterstützt CORS für Frontend-Requests

## E-Mail-Template

Das E-Mail-Template enthält:
- Kontaktdaten (Name, Firma, E-Mail, Telefon)
- Marketing-Status und Details
- Budget-Informationen
- Timestamp der Anfrage

Das Template kann in `api/contact.js` in der `formatEmailContent` Funktion angepasst werden.
