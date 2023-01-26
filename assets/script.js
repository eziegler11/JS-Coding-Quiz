// Global Variables

const question = document.getElementById(`quiz-question`);
const answer1 = document.getElementById(`answer1`);
const answer2 = document.getElementById(`answer2`);
const answer3 = document.getElementById(`answer3`);
const answer4 = document.getElementById(`answer4`);
const quizContent = document.getElementById(`quiz-content`);
const answerConfirmDivider = document.getElementById(`result-divider`);
const answerConfirm = document.getElementById(`result`);
const initialsPage = document.getElementById(`quiz-finish-page`);
const initialsInput = document.getElementById(`initials-input`);
const highscores = document.getElementById(`highscores`);
let finalScores = document.getElementById(`highscores-list`);
let userScore = document.getElementById(`final-score`);
let timer = document.getElementById(`timer`);
let countdown = 100;
let initials = [];
let userHighscore = [];
let timerInterval;


// Event Listeners

document.getElementById(`quiz-start`).addEventListener(`click` , startQuiz);
document.getElementById(`submit-initials`).addEventListener(`click`, submitInitials);

// Object of Quiz Questions and Answers

let questions = [
    {
        question: `What is a variable?`,
        answer1: `1. Line of code`,
        answer2: `2. A file`,
        answer3: `3. Programming language`,
        answer4: `4. A label that may contain a value`,
        correctAnswer: `4`
    },
    {
        question: `What does CSS stand for?`,
        answer1: `1. Country Style Seasonings`,
        answer2: `2. Cascading Style Sheets`,
        answer3: `3. Corner Stone Styling`,
        answer4: `4. Color Style Sheets`,
        correctAnswer: `2`
    },
    {
        question: `What does a function in JavaScript do?`,
        answer1: `1. Logs a statement into the console`,
        answer2: `2. Runs code`,
        answer3: `3. Saves a file`,
        answer4: `4. Performs a task`,
        correctAnswer: `1`
    }
]

// Keeping track of the index of the questions

const lastQuestionIndex = questions.length - 1;
let runningQuestionIndex = 0;

// Rendering each question on the screen

function renderQuestion () {
    let q = questions[runningQuestionIndex];
    question.textContent = q.question;
    answer1.textContent = q.answer1;
    answer2.textContent = q.answer2;
    answer3.textContent = q.answer3;
    answer4.textContent = q.answer4;
}

// Quiz Timer

function startTime () {
    timerInterval = setInterval (function() {
        countdown--;
        timer.textContent = countdown + ` second(s) left.`;
        if (countdown <= 0) {
            initialsInputPage()
        }
    },1000);
}

// Start the quiz & timer, using event listener, hiding Quiz instructions/main page, and showing the questions and answers by calling renderQuestion function

function startQuiz () {
    document.getElementById(`quiz-box`).classList.add(`hidden`);
    quizContent.classList.remove(`hidden`);
    startTime ();
    renderQuestion ();
}

// Checks if the answer is correct or incorrect, then renders the next question, so long as there is another question after, otherwise goes to initials input page & stops timer

function checkAnswer(answer) {
    if (questions[runningQuestionIndex].correctAnswer == answer) {
        correctAnswer();
    } else {
        wrongAnswer();
    }
    if (runningQuestionIndex < lastQuestionIndex) {
        count = 0;
        runningQuestionIndex++;
        renderQuestion ();
    } else
    initialsInputPage()
};

// Function if the answer is correct

function correctAnswer () {
    answerConfirmDivider.classList.remove(`hidden`);
    answerConfirm.textContent = `Correct!`;
}

// Function if the answer is wrong

function wrongAnswer () {
    answerConfirmDivider.classList.remove(`hidden`);
    answerConfirm.textContent = `Wrong!`;
    countdown = countdown - 10;
}

// Initials input box


function initialsInputPage () {
    initialsPage.classList.remove(`hidden`);
    quizContent.classList.add(`hidden`);
    userScore.innerHTML = "";
    userScore.textContent = countdown + "!";
    clearInterval(timerInterval);
}

// Submit initials to view highscores

function submitInitials () {
    initialsPage.classList.add(`hidden`);
    highscores.classList.remove(`hidden`);
}

// Inputting, storing and rendering highscores
// Getting the stored initials and then rendering to the page through a function

function init () {
    var storedInitials = JSON.parse(localStorage.getItem(`intials`));
    if (storedInitials !== null) {
        initials = storedInitials;
    } var displayScore = JSON.parse(localStorage.getItem(`userHighscore`));
    if (displayScore !== null) {
        userHighscore = displayScore;
    }
    renderHighscores();
}

// Turning initials array into strings

function storeInitials () {
    userHighscore.push(countdown);
    localStorage.setItem(`initials`, JSON.stringify(initials));
    localStorage.setItem(`userHighscore`, JSON.stringify(userHighscore));
}

// Captures user input when submit button is clicked, stores in local storage, then renders to highscores page

document.getElementById(`submit-initials`).addEventListener(`click`, function(event) {
    event.preventDefault();
    var initialsText = initialsInput.value.trim();
    if (initialsText === "") {
        return;
    }
    initials.push(initialsText);
    initialsInput.value = "";
    storeInitials ();
    renderHighscores();
});

// Render initials and high score to highscores page

function renderHighscores () {
    finalScores.innerHTML = "";
    for (let index = 0; index < initials.length; index++) {
        const initial = initials[index] + `: ` + userHighscore[index];
        
        var li = document.createElement(`li`);
        li.textContent = initial;
        li.setAttribute(`data-index`, index);

        finalScores.appendChild(li);
    }
}

init();

// Show highscores page through link

function showHighscores () {
    highscores.classList.remove(`hidden`);
    document.getElementById(`quiz-box`).classList.add(`hidden`);
}

document.getElementById(`highscores-link`).addEventListener(`click`, showHighscores);

// Go back to start, button

document.getElementById(`back-to-start`).addEventListener(`click`, backToStart);

function backToStart () {
    document.getElementById(`quiz-box`).classList.remove(`hidden`);
    highscores.classList.add(`hidden`);
    return;
}

// Clear highscore button

document.getElementById(`clear-scores`).addEventListener(`click`, clearScores);

function clearScores () {
    localStorage.clear();
    while (finalScores.firstChild) {
        finalScores.removeChild(finalScores.firstChild);
}}