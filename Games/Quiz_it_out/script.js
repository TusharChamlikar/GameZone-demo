const questions = [
    {
        question: "What company was originally called ?",
        answers: [
            { text: "Flipkart", correct: false},
            { text: "Apple", correct: false},
            { text: "Amazon", correct: true},
            { text: "Netflix", correct: false},
        ]
    },
    {
        question: "Which planet in the options can be seen without the telescope ?",
        answers: [
            { text: "Neptune", correct: false},
            { text: "Uranus", correct: false},
            { text: "Saturn", correct: false},
            { text: "Venus", correct: true },
        ]
    },
    {
        question: "What is the 3rd letter of the Greek alphabet ?",
        answers: [
            { text: "Delta (Δ)", correct: false},
            { text: "Gamma (Γ)", correct: true},
            { text: "Alpha (Α)", correct: false},
            { text: "Beta  (Β)", correct: false },
        ]
    },
    {
        question: "How many hearts does an octopus have ?",
        answers: [
            { text: "6", correct: false},
            { text: "3 ", correct: true},
            { text: "5 ", correct: false},
            { text: "7 ", correct: false },
        ]
    },
    {
        question: "What country drinks the most coffee ? ",
        answers: [
            { text: "Denmark", correct: false},
            { text: "Sweden ", correct: false},
            { text: "Luxembourg", correct: false},
            { text: "Finland ", correct: true },
        ]
    }
]

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById('answer-buttons');
const nextButton = document.getElementById('next-btn'); 

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = 'Next';
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        button.addEventListener("click", selectAnswer);
    })
}

function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

//To display outPut
startQuiz();