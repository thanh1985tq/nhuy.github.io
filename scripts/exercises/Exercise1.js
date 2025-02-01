function checkAnswers() {
    const answers = {
        q1: 'b',
        q2: 'b',
        q3: 'b',
        q4: 'b',
        q5: 'a',
        q6: 'a',
        q7: 'a',
        q8: 'a',
        q9: 'a',
        q10: 'b',
        q11: '16',
        q12: '21',
        q13: '12.56',
        q14: '20',
        q15: '36'
    };

    let score = 0;
    let wrongAnswers = [];

    for (let i = 1; i <= 10; i++) {
        const selected = document.querySelector(`input[name="q${i}"]:checked`);
        if (selected && selected.value === answers[`q${i}`]) {
            score++;
        } else {
            wrongAnswers.push(i);
        }
    }

    for (let i = 11; i <= 15; i++) {
        const input = document.querySelector(`input[name="q${i}"]`);
        if (input && input.value.trim() === answers[`q${i}`]) {
            score++;
        } else {
            wrongAnswers.push(i);
        }
    }

    const resultText = `Số điểm của bạn là: ${score}/15`;
    document.getElementById('result').innerHTML = resultText;

    // Gửi kết quả về Telegram
    const title = "Bài tập 1: Diện tích các hình";
    const wrongAnswersText = wrongAnswers.length > 0 ? `, các câu sai: ${wrongAnswers.join(', ')}` : '';
    const telegramMessage = `${title}: ${resultText}${wrongAnswersText}`;
    sendToTelegram(telegramMessage); // Gọi hàm chung từ main.js
}
