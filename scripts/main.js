// Hàm gửi kết quả về Telegram
async function sendToTelegram(message) {
    const response = await fetch('/.netlify/functions/sendToTelegram', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message })
    });
    const result = await response.text();
    console.log(result);
}
