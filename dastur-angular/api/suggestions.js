function json(res, status, payload) {
  res.status(status).setHeader('Content-Type', 'application/json; charset=utf-8');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  res.send(payload);
}

function escapeHtml(value = '') {
  return String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;');
}

function buildTelegramMessage({ name, tradition, description }) {
  return [
    '<b>New Tradition Suggestion</b>',
    '',
    `<b>Name:</b> ${escapeHtml(name || 'Anonymous')}`,
    `<b>Tradition:</b> ${escapeHtml(tradition || 'Not provided')}`,
    `<b>Description:</b> ${escapeHtml(description || 'Not provided')}`,
  ].join('\n');
}

module.exports = async function handler(req, res) {
  if (req.method === 'OPTIONS') {
    json(res, 204, {});
    return;
  }

  if (req.method !== 'POST') {
    json(res, 405, { ok: false, message: 'Method not allowed.' });
    return;
  }

  const botToken = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;

  if (!botToken || !chatId) {
    json(res, 500, { ok: false, message: 'Telegram environment variables are missing.' });
    return;
  }

  try {
    const payload = typeof req.body === 'string' ? JSON.parse(req.body || '{}') : req.body || {};
    const message = buildTelegramMessage(payload);

    const telegramResponse = await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        chat_id: chatId,
        text: message,
        parse_mode: 'HTML',
      }),
    });

    const telegramResult = await telegramResponse.json();
    if (!telegramResponse.ok || !telegramResult.ok) {
      console.error('Telegram API error:', telegramResult);
      json(res, 502, { ok: false, message: 'Failed to send to Telegram.' });
      return;
    }

    json(res, 200, { ok: true });
  } catch (error) {
    console.error('Suggestion API error:', error);
    json(res, 500, { ok: false, message: 'Internal server error.' });
  }
};
