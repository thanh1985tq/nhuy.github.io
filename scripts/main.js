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

function highlightAnswers(correctAnswers) {
    // Lấy tất cả các câu hỏi trên form
    const questions = document.querySelectorAll(".question");

    questions.forEach((question, index) => {
        const questionNumber = index + 1; // Số thứ tự câu hỏi (bắt đầu từ 1)
        const questionKey = `q${questionNumber}`; // Key để truy cập đáp án đúng trong correctAnswers

        // Kiểm tra loại câu hỏi
        const inputElements = question.querySelectorAll("input");

        if (inputElements.length > 1) {
            // Nếu có nhiều input (multiple choice)
            const selected = question.querySelector(`input[name="q${questionNumber}"]:checked`);
            if (selected) {
                if (selected.value === correctAnswers[questionKey]) {
                    selected.parentElement.style.color = "green"; // Đáp án đúng: màu xanh
                } else {
                    selected.parentElement.style.color = "red"; // Đáp án sai: màu đỏ
                }
            }
        } else if (inputElements.length === 1) {
            // Nếu chỉ có 1 input (điền vào chỗ trống)
            const input = inputElements[0];
            if (input.value.trim() === correctAnswers[questionKey]) {
                input.style.borderColor = "green"; // Đáp án đúng: viền xanh
            } else {
                input.style.borderColor = "red"; // Đáp án sai: viền đỏ
            }
        }
    });
}

document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("login");
    const loginError = document.getElementById("loginError");
    const mainContent = document.getElementById("mainContent");
    const loginContainer = document.getElementById("loginForm");

    // Thông tin đăng nhập mẫu (có thể thay thế bằng cơ sở dữ liệu hoặc API)
    const validCredentials = {
        username: "user123",
        password: "password123"
    };

    // Xử lý sự kiện đăng nhập
    loginForm.addEventListener("submit", function (e) {
        e.preventDefault(); // Ngăn chặn form gửi đi

        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;

        // Kiểm tra thông tin đăng nhập
        if (username === validCredentials.username && password === validCredentials.password) {
            // Đăng nhập thành công
            loginError.textContent = "";
            loginContainer.classList.add("hidden"); // Ẩn form đăng nhập
            mainContent.classList.remove("hidden"); // Hiển thị nội dung chính
        } else {
            // Đăng nhập thất bại
            loginError.textContent = "Tên đăng nhập hoặc mật khẩu không đúng.";
        }
    });
});