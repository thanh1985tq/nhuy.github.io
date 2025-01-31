// netlify/functions/sendToTelegram.js
  exports.handler = async (event) => {
    const { message } = JSON.parse(event.body);
    const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
    const TELEGRAM_CHAT_ID = process.env.TELEGRAM_CHAT_ID;

    const url = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`;
    const payload = {
      chat_id: TELEGRAM_CHAT_ID,
      text: message
    };

    try {
      await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
      return { statusCode: 200, body: 'Message sent to Telegram' };
    } catch (error) {
      return { statusCode: 500, body: 'Error sending message to Telegram' };
    }
  };
