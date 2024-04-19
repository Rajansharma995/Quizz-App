const question =[
    {
        question: "What is the capital of Nepal?",
       answers:[
        {
            text: "Kathmandu",
            correct: true
            },
        {
            text: "Pokhara",
            correct: false
            },
        {
            text: "Biratnagar",
            correct: false
        }
    ]
    },
    {
        question: "What is the capital of India?",
        answers:[
            {
                text: "New Delhi",
                correct: true
                },
            {
                text: "Mumbai",
                correct: false
                },
            {
                text: "Kolkata",
                correct: false
            }]
        },
        {
            question: "Which is the smallest continent?",
            answers:[
                {
                    text :"Asia",
                    correct: false
                    },
                {
                    text: "Africa",
                    correct: false
                    },
                {
                    text: "Australia",
                    correct: false
                    },
            ]
        }
]

const questionElement = document.getElementById("question");
const answerElement = document.getElementById("options");
const nextButton = document.getElementById("btn-container");


let currentQuestion = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex =0;
    score = 0;
    nextButton.innerHTML ="Next";
    showQuestion();

}
function showQuestion(){
    let currentQuestion = question[currentQuestionIndex];
    let questionNumber = currentQuestionIndex + 1;
    questionElement.innerHTML = `${questionNumber}. ${currentQuestion.question}`;  

    currentQuestion.answers.forEach(answer => {
        let answerButton = document.createElement("button");
        answerButton.innerText = answer.text;
        answerButton.classList.add("btn");
        if(answer.correct){
            answerButton.dataset.correct = answer.correct;
        }
        answerButton.addEventListener("click", selectAnswer);
        answerElement.appendChild(answerButton);
        
    });
}

function showanswer(){
    let
}
startQuiz();