function checkAnswers() {
    const answers = {
        q1: 'b',
        q2: 'b',
        q3: 'a',
        q4: 'b',
        q5: 'a',
        q6: 'b',
        q7: 'a',
        q8: 'b',
        q9: 'b',
        q10: 'b',
        q11: '9',
        q12: '15',
        q13: '5',
        q14: '10',
        q15: '7',
        q16: '12',
        q17: '10',
        q18: '10',
        q19: '11',
        q20: '20'
    };

    let score = 0;
    let wrongAnswers = [];

    // Kiểm tra câu hỏi multiple choice (1-10)
    for (let i = 1; i <= 10; i++) {
        const selected = document.querySelector(`input[name="q${i}"]:checked`);
        if (selected && selected.value === answers[`q${i}`]) {
            score++;
        } else {
            wrongAnswers.push(i);
        }
    }

    // Kiểm tra câu hỏi điền vào chỗ trống (11-15)
    for (let i = 11; i <= 15; i++) {
        const input = document.querySelector(`input[name="q${i}"]`);
        if (input && input.value.trim() === answers[`q${i}`]) {
            score++;
        } else {
            wrongAnswers.push(i);
        }
    }

    // Kiểm tra câu hỏi tự luận (16-20)
    for (let i = 16; i <= 20; i++) {
        const textarea = document.querySelector(`textarea[name="q${i}"]`);
        if (textarea && textarea.value.trim() === answers[`q${i}`]) {
            score++;
        } else {
            wrongAnswers.push(i);
        }
    }

    const resultText = `Số điểm của bạn là: ${score}/20`;
    document.getElementById('result').innerHTML = resultText;

    // Gửi kết quả về Telegram
    const title = "Bài tập nâng cao 1: Diện tích các hình";
    const wrongAnswersText = wrongAnswers.length > 0 ? `, các câu sai: ${wrongAnswers.join(', ')}` : '';
    const telegramMessage = `${title}: ${resultText}${wrongAnswersText}`;
    sendToTelegram(telegramMessage); // Gọi hàm chung từ main.js
}
