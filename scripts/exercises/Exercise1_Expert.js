function checkAnswers() {
    // Đáp án đúng cho các câu hỏi
    const correctAnswers = {
        q1: "a", // Câu 1: Đáp án đúng là a
        q2: "b", // Câu 2: Đáp án đúng là b
        q3: "a", // Câu 3: Đáp án đúng là a
        q4: "a", // Câu 4: Đáp án đúng là a
        q5: "a", // Câu 5: Đáp án đúng là a
        q6: "b", // Câu 6: Đáp án đúng là b
        q7: "a", // Câu 7: Đáp án đúng là a
        q8: "a", // Câu 8: Đáp án đúng là a
        q9: "a", // Câu 9: Đáp án đúng là a
        q10: "a", // Câu 10: Đáp án đúng là a
        q11: "a", // Câu 11: Đáp án đúng là a
        q12: "a", // Câu 12: Đáp án đúng là a
        q13: "a", // Câu 13: Đáp án đúng là a
        q14: "a", // Câu 14: Đáp án đúng là a
        q15: "a", // Câu 15: Đáp án đúng là a
        q16: "10", // Câu 16: Đáp án đúng là 10
        q17: "112.5", // Câu 17: Đáp án đúng là 112.5
        q18: "25", // Câu 18: Đáp án đúng là 25
        q19: "98", // Câu 19: Đáp án đúng là 98
        q20: "1256", // Câu 20: Đáp án đúng là 1256
        q21: "64", // Câu 21: Đáp án đúng là 64
        q22: "400", // Câu 22: Đáp án đúng là 400
        q23: "128", // Câu 23: Đáp án đúng là 128
        q24: "113.04", // Câu 24: Đáp án đúng là 113.04
        q25: "100", // Câu 25: Đáp án đúng là 100
    };

    let score = 0; // Biến đếm số câu trả lời đúng

    // Kiểm tra câu hỏi trắc nghiệm (1-15)
    for (let i = 1; i <= 15; i++) {
        const selected = document.querySelector(`input[name="q${i}"]:checked`);
        if (selected && selected.value === correctAnswers[`q${i}`]) {
            score++;
        }
    }

    // Kiểm tra câu hỏi điền vào chỗ trống (16-25)
    for (let i = 16; i <= 25; i++) {
        const answer = document.querySelector(`input[name="q${i}"]`).value.trim();
        if (answer === correctAnswers[`q${i}`]) {
            score++;
        }
    }

    // Hiển thị kết quả
    const resultDiv = document.getElementById("result");
    resultDiv.innerHTML = `Số điểm của bạn là: <strong>${score}/25</strong>`;

    // Tô màu đáp án đúng và sai
    highlightAnswers(correctAnswers);
}

function highlightAnswers(correctAnswers) {
    // Tô màu câu hỏi trắc nghiệm (1-15)
    for (let i = 1; i <= 15; i++) {
        const selected = document.querySelector(`input[name="q${i}"]:checked`);
        if (selected) {
            if (selected.value === correctAnswers[`q${i}`]) {
                selected.parentElement.style.color = "green"; // Đáp án đúng: màu xanh
            } else {
                selected.parentElement.style.color = "red"; // Đáp án sai: màu đỏ
            }
        }
    }

    // Tô màu câu hỏi điền vào chỗ trống (16-25)
    for (let i = 16; i <= 25; i++) {
        const input = document.querySelector(`input[name="q${i}"]`);
        if (input.value.trim() === correctAnswers[`q${i}`]) {
            input.style.borderColor = "green"; // Đáp án đúng: viền xanh
        } else {
            input.style.borderColor = "red"; // Đáp án sai: viền đỏ
        }
    }
}
