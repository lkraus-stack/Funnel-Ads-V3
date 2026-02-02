/**
 * Vercel Serverless Function für Kontaktformular
 * Sendet E-Mails über Resend API
 */
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

/**
 * Formatiert die Formulardaten für die E-Mail
 */
function formatEmailContent(formData) {
  const improvementOptions = {
    'account-check': 'Account Check',
    'more-bookings': 'Mehr Buchungen',
    'no-agency': 'Keine Agentur mehr',
    'conversion-tracking': 'Conversion Tracking',
    'better-campaigns': 'Bessere Kampagnen',
  };

  const budgetOptions = {
    'under-1000': 'Unter 1.000€',
    '1000-3000': '1.000€ - 3.000€',
    '3000-5000': '3.000€ - 5.000€',
    '5000-10000': '5.000€ - 10.000€',
    'over-10000': 'Über 10.000€',
  };

  const futureStartOptions = {
    true: 'Ja, so bald wie möglich',
    planning: 'Ja, bin in der Planungsphase',
    exploring: 'Ich informiere mich erst mal',
  };

  let improvementsText = '';
  if (formData.improvements && formData.improvements.length > 0) {
    improvementsText = formData.improvements
      .map(id => improvementOptions[id] || id)
      .join(', ');
  }

  let futureStartText = '';
  if (formData.futureStart) {
    futureStartText = futureStartOptions[formData.futureStart] || formData.futureStart;
  }

  const timestamp = new Date().toLocaleString('de-DE', {
    dateStyle: 'long',
    timeStyle: 'short',
  });

  return {
    html: `
<!DOCTYPE html>
<html lang="de">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Neue Kontaktanfrage</title>
</head>
<body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
  <div style="background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%); padding: 30px; border-radius: 10px 10px 0 0; text-align: center;">
    <h1 style="color: white; margin: 0; font-size: 24px;">Neue Kontaktanfrage</h1>
  </div>
  
  <div style="background: #f9fafb; padding: 30px; border-radius: 0 0 10px 10px; border: 1px solid #e5e7eb;">
    <h2 style="color: #1f2937; margin-top: 0; font-size: 20px; border-bottom: 2px solid #6366f1; padding-bottom: 10px;">Kontaktdaten</h2>
    <table style="width: 100%; border-collapse: collapse; margin-bottom: 30px;">
      <tr>
        <td style="padding: 10px 0; font-weight: 600; color: #4b5563; width: 150px;">Name:</td>
        <td style="padding: 10px 0; color: #1f2937;">${formData.name || 'Nicht angegeben'}</td>
      </tr>
      ${formData.company ? `
      <tr>
        <td style="padding: 10px 0; font-weight: 600; color: #4b5563;">Firma:</td>
        <td style="padding: 10px 0; color: #1f2937;">${formData.company}</td>
      </tr>
      ` : ''}
      <tr>
        <td style="padding: 10px 0; font-weight: 600; color: #4b5563;">E-Mail:</td>
        <td style="padding: 10px 0; color: #1f2937;"><a href="mailto:${formData.email}" style="color: #6366f1; text-decoration: none;">${formData.email}</a></td>
      </tr>
      ${formData.phone ? `
      <tr>
        <td style="padding: 10px 0; font-weight: 600; color: #4b5563;">Telefon:</td>
        <td style="padding: 10px 0; color: #1f2937;"><a href="tel:${formData.phone}" style="color: #6366f1; text-decoration: none;">${formData.phone}</a></td>
      </tr>
      ` : ''}
    </table>

    <h2 style="color: #1f2937; margin-top: 30px; font-size: 20px; border-bottom: 2px solid #6366f1; padding-bottom: 10px;">Marketing-Informationen</h2>
    <table style="width: 100%; border-collapse: collapse; margin-bottom: 30px;">
      <tr>
        <td style="padding: 10px 0; font-weight: 600; color: #4b5563; width: 150px;">Marketing-Status:</td>
        <td style="padding: 10px 0; color: #1f2937;">
          ${formData.hasMarketing === true ? '✅ Bereits aktiv' : formData.hasMarketing === false ? '🚀 Noch nicht gestartet' : 'Nicht angegeben'}
        </td>
      </tr>
      ${formData.hasMarketing === true && improvementsText ? `
      <tr>
        <td style="padding: 10px 0; font-weight: 600; color: #4b5563;">Optimierungswünsche:</td>
        <td style="padding: 10px 0; color: #1f2937;">${improvementsText}</td>
      </tr>
      ` : ''}
      ${formData.hasMarketing === false && futureStartText ? `
      <tr>
        <td style="padding: 10px 0; font-weight: 600; color: #4b5563;">Zukunftspläne:</td>
        <td style="padding: 10px 0; color: #1f2937;">${futureStartText}</td>
      </tr>
      ` : ''}
      ${formData.budget ? `
      <tr>
        <td style="padding: 10px 0; font-weight: 600; color: #4b5563;">Budget:</td>
        <td style="padding: 10px 0; color: #1f2937;">${budgetOptions[formData.budget] || formData.budget}</td>
      </tr>
      ` : ''}
    </table>

    <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb; color: #6b7280; font-size: 14px;">
      <p style="margin: 0;">Anfrage erhalten am: <strong>${timestamp}</strong></p>
    </div>
  </div>
</body>
</html>
    `,
    text: `
Neue Kontaktanfrage

Kontaktdaten:
-----------
Name: ${formData.name || 'Nicht angegeben'}
${formData.company ? `Firma: ${formData.company}\n` : ''}E-Mail: ${formData.email}
${formData.phone ? `Telefon: ${formData.phone}\n` : ''}
Marketing-Informationen:
-----------------------
Marketing-Status: ${formData.hasMarketing === true ? 'Bereits aktiv' : formData.hasMarketing === false ? 'Noch nicht gestartet' : 'Nicht angegeben'}
${formData.hasMarketing === true && improvementsText ? `Optimierungswünsche: ${improvementsText}\n` : ''}
${formData.hasMarketing === false && futureStartText ? `Zukunftspläne: ${futureStartText}\n` : ''}
${formData.budget ? `Budget: ${budgetOptions[formData.budget] || formData.budget}\n` : ''}

Anfrage erhalten am: ${timestamp}
    `.trim(),
  };
}

/**
 * Bestätigungs-E-Mail an den Absender (E-Mail aus dem Formular)
 */
function formatConfirmationEmail(formData) {
  const name = formData.name || 'Sie';
  return {
    html: `
<!DOCTYPE html>
<html lang="de">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Ihre Anfrage wurde empfangen</title>
</head>
<body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
  <div style="background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%); padding: 30px; border-radius: 10px 10px 0 0; text-align: center;">
    <h1 style="color: white; margin: 0; font-size: 24px;">Anfrage empfangen</h1>
  </div>
  
  <div style="background: #f9fafb; padding: 30px; border-radius: 0 0 10px 10px; border: 1px solid #e5e7eb;">
    <p style="font-size: 18px; color: #1f2937; margin-top: 0;">Hallo ${escapeHtml(name)},</p>
    <p style="color: #4b5563;">vielen Dank für Ihre Nachricht. Wir haben Ihre Anfrage erhalten und melden uns <strong>innerhalb von 24 Stunden</strong> bei Ihnen.</p>
    <p style="color: #4b5563;">Bei Rückfragen erreichen Sie uns unter <a href="mailto:kontakt@franco-consulting.com" style="color: #6366f1; text-decoration: none;">kontakt@franco-consulting.com</a>.</p>
    <p style="color: #4b5563; margin-bottom: 0;">Mit freundlichen Grüßen<br><strong>Ihr Team von Franco Consulting</strong></p>
  </div>
</body>
</html>
    `,
    text: `
Hallo ${name},

vielen Dank für Ihre Nachricht. Wir haben Ihre Anfrage erhalten und melden uns innerhalb von 24 Stunden bei Ihnen.

Bei Rückfragen erreichen Sie uns unter kontakt@franco-consulting.com.

Mit freundlichen Grüßen
Ihr Team von Franco Consulting
    `.trim(),
  };
}

function escapeHtml(str) {
  if (!str) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

export default async function handler(req, res) {
  // Nur POST-Requests erlauben
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  // CORS-Header setzen
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  try {
    const formData = req.body;

    // Validierung der Pflichtfelder
    if (!formData.name || !formData.email) {
      return res.status(400).json({ 
        error: 'Name und E-Mail sind Pflichtfelder' 
      });
    }

    // E-Mail-Format validieren
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      return res.status(400).json({ 
        error: 'Ungültige E-Mail-Adresse' 
      });
    }

    // Prüfen ob Resend API Key gesetzt ist
    if (!process.env.RESEND_API_KEY) {
      console.error('RESEND_API_KEY ist nicht gesetzt');
      return res.status(500).json({ 
        error: 'Server-Konfiguration fehlerhaft' 
      });
    }

    // E-Mail-Content formatieren
    const { html, text } = formatEmailContent(formData);

    // E-Mail über Resend senden
    // Absender: verifizierte Domain franco-consulting.com (oder RESEND_FROM_EMAIL)
    // Empfänger: Kontakt-E-Mail für Anfragen (oder RESEND_TO_EMAIL)
    const fromEmail = process.env.RESEND_FROM_EMAIL || 'Franco Consulting <kontakt@franco-consulting.com>';
    const toEmail = process.env.RESEND_TO_EMAIL || 'kontakt@franco-consulting.com';
    // 1. E-Mail an dich: neue Anfrage (kontakt@franco-consulting.com)
    const { data, error } = await resend.emails.send({
      from: fromEmail,
      to: toEmail,
      replyTo: formData.email,
      subject: `Neue Kontaktanfrage von ${formData.name}${formData.company ? ` (${formData.company})` : ''}`,
      html: html,
      text: text,
    });

    if (error) {
      console.error('Resend API Error:', error);
      return res.status(500).json({ 
        error: 'Fehler beim Senden der E-Mail',
        details: error.message 
      });
    }

    // 2. Bestätigungs-E-Mail an den Absender (E-Mail aus dem Formular)
    const confirmation = formatConfirmationEmail(formData);
    const { error: confirmError } = await resend.emails.send({
      from: fromEmail,
      to: formData.email,
      subject: 'Ihre Anfrage bei Franco Consulting wurde empfangen',
      html: confirmation.html,
      text: confirmation.text,
    });
    if (confirmError) {
      console.error('Resend Confirmation Error:', confirmError);
      // Anfrage-E-Mail ist angekommen, wir antworten trotzdem mit Erfolg
    }

    // Erfolgreiche Antwort
    return res.status(200).json({ 
      success: true,
      message: 'E-Mail erfolgreich gesendet',
      emailId: data?.id 
    });

  } catch (error) {
    console.error('Unexpected error:', error);
    return res.status(500).json({ 
      error: 'Interner Serverfehler',
      details: error.message 
    });
  }
}
