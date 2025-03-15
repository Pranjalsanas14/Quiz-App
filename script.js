// Array of quiz questions
const quizData = [
    {
        question: "What is the capital of France?",
        choices: ["Berlin", "Madrid", "Paris", "Rome"],
        correct: 2
    },
    {
        question: "Which planet is known as the Red Planet?",
        choices: ["Earth", "Mars", "Jupiter", "Saturn"],
        correct: 1
    },
    {
        question: "What is 2 + 2?",
        choices: ["3", "4", "5", "6"],
        correct: 1
    }
];

let currentQuestionIndex = 0;
let score = 0;

// Display the current question and choices
function displayQuestion() {
    const currentQuestion = quizData[currentQuestionIndex];
    document.getElementById('question').innerText = currentQuestion.question;
    const choicesContainer = document.getElementById('choices');
    choicesContainer.innerHTML = '';

    currentQuestion.choices.forEach((choice, index) => {
        const button = document.createElement('button');
        button.innerText = choice;
        button.onclick = () => checkAnswer(index);
        choicesContainer.appendChild(button);
    });

    document.getElementById('score').innerText = `Score: ${score}`;
}

// Check the selected answer
function checkAnswer(selectedIndex) {
    const currentQuestion = quizData[currentQuestionIndex];
    if (selectedIndex === currentQuestion.correct) {
        score++;
    }
    document.getElementById('score').innerText = `Score: ${score}`;
    document.getElementById('nextBtn').disabled = false; // Enable next button after answer is chosen
}

// Load next question
function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < quizData.length) {
        displayQuestion();
        document.getElementById('nextBtn').disabled = true; // Disable next button until an answer is selected
    } else {
        document.getElementById('question').innerText = 'Quiz Over!';
        document.getElementById('choices').innerHTML = '';
        document.getElementById('nextBtn').style.display = 'none'; // Hide next button after quiz ends
    }
}

// Initialize the quiz
function startQuiz() {
    displayQuestion();
    document.getElementById('nextBtn').disabled = true; // Disable next button initially
}

// Start quiz when the page loads
window.onload = startQuiz;
