import { createServer } from 'node:http';

const PORT = 3001;
const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
const TELEGRAM_CHAT_ID = process.env.TELEGRAM_CHAT_ID;

if (!TELEGRAM_BOT_TOKEN || !TELEGRAM_CHAT_ID) {
  console.error('Missing TELEGRAM_BOT_TOKEN or TELEGRAM_CHAT_ID in environment.');
  process.exit(1);
}

function json(res, status, payload) {
  res.writeHead(status, {
    'Content-Type': 'application/json; charset=utf-8',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
  });
  res.end(JSON.stringify(payload));
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

const server = createServer(async (req, res) => {
  if (req.method === 'OPTIONS') {
    json(res, 204, {});
    return;
  }

  if (req.method === 'POST' && req.url === '/api/suggestions') {
    let body = '';

    req.on('data', chunk => {
      body += chunk;
    });

    req.on('end', async () => {
      try {
        const payload = JSON.parse(body || '{}');
        const message = buildTelegramMessage(payload);

        const response = await fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            chat_id: TELEGRAM_CHAT_ID,
            text: message,
            parse_mode: 'HTML',
          }),
        });

        const telegramResult = await response.json();

        if (!response.ok || !telegramResult.ok) {
          console.error('Telegram API error:', telegramResult);
          json(res, 502, { ok: false, message: 'Failed to send to Telegram.' });
          return;
        }

        json(res, 200, { ok: true });
      } catch (error) {
        console.error('Suggestion API error:', error);
        json(res, 500, { ok: false, message: 'Internal server error.' });
      }
    });

    return;
  }

  json(res, 404, { ok: false, message: 'Not found.' });
});

server.listen(PORT, () => {
  console.log(`Telegram proxy listening on http://localhost:${PORT}`);
});
