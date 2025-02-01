function checkAnswers() {
    const answers = {
        q1: 'a',
        q2: 'b',
        q3: 'a',
        q4: 'c',
        q5: 'a',
        q6: 'b',
        q7: 'a',
        q8: 'a',
        q9: 'a',
        q10: 'a',
        q11: 'a',
        q12: 'a',
        q13: 'a',
        q14: 'a',
        q15: 'a',
        q16: '100',
        q17: '112.5',
        q18: '25',
        q19: '98',
        q20: '1256',
        q21: '64',
        q22: '400',
        q23: '128',
        q24: '113.04',
        q25: '100'
    };

    let score = 0;
    let wrongAnswers = [];

    // Kiểm tra câu hỏi multiple choice (1-15)
    for (let i = 1; i <= 15; i++) {
        const selected = document.querySelector(`input[name="q${i}"]:checked`);
        if (selected && selected.value === answers[`q${i}`]) {
            score++;
        } else {
            wrongAnswers.push(i);
        }
    }

    // Kiểm tra câu hỏi điền vào chỗ trống (16-25)
    for (let i = 16; i <= 25; i++) {
        const input = document.querySelector(`input[name="q${i}"]`);
        if (input && input.value.trim()
