const questionElement = document.getElementById("question");
const answerElement = document.getElementById("options");
const nextButton = document.getElementById("btn-container");

let currentQuestionIndex = 0;
let score = 0;

const questions = [
    {
        question: "What is the capital of Nepal?",
        answers: [
            { text: "Kathmandu", correct: true },
            { text: "Pokhara", correct: false },
            { text: "Biratnagar", correct: false }
        ]
    },
    {
        question: "What is the capital of India?",
        answers: [
            { text: "New Delhi", correct: true },
            { text: "Mumbai", correct: false },
            { text: "Kolkata", correct: false }
        ]
    },
    {
        question: "Which is the smallest continent?",
        answers: [
            { text: "Asia", correct: false },
            { text: "Africa", correct: false },
            { text: "Australia", correct: true }
        ]
    }
];

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion() {
    resetState();
    const currentQuestion = questions[currentQuestionIndex];
    questionElement.innerText = currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const answerButton = document.createElement("button");
        answerButton.innerText = answer.text;
        answerButton.classList.add("btn");
        if (answer.correct) {
            answerButton.dataset.correct = true;
        }
        answerButton.addEventListener("click", selectAnswer);
        answerElement.appendChild(answerButton);
    });
}

function resetState() {
    nextButton.style.display = "none";
    while (answerElement.firstChild) {
        answerElement.removeChild(answerElement.firstChild);
    }
}

function selectAnswer(e) {
    const selectedButton = e.target;
    const isCorrect = selectedButton.dataset.correct === "true";
    if (isCorrect) {
        score++;
    }
    Array.from(answerElement.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct");
        } else {
            button.classList.add("wrong");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
    nextButton.addEventListener("click", () => {
        currentQuestionIndex++;
        if (currentQuestionIndex < questions.length) {
            showQuestion();
        } else {
            endQuiz();
        }
    });
}

function endQuiz() {
    questionElement.innerText = `Quiz ended! Your score: ${score}/${questions.length}`;
    nextButton.style.display = "none";
}

startQuiz();
