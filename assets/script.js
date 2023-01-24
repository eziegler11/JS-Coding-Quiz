// Acceptance Criteria

// GIVEN I am taking a code quiz
// WHEN I click the start button
// THEN a timer starts and I am presented with a question
// WHEN I answer a question
// THEN I am presented with another question
// WHEN I answer a question incorrectly
// THEN time is subtracted from the clock
// WHEN all questions are answered or the timer reaches 0
// THEN the game is over
// WHEN the game is over
// THEN I can save my initials and my score

// Landing Page - View Highscores & Timer, CSS: flex, space-between
// H1 Coding Quiz Challenge
// P with text
// Button to start quiz
// DIV wrapping the above minus "nav bar / header"

// Starting the quiz - timer starts
// Store quiz questions and answers in an object, plus which is correct answer
// Each answer is a button
// Event listener for each answer button
// When user clicks on an answer button
// If answer is correct, put "Correct!" below the answer buttons
// If answer is incorrect, put "Wrong!" below the answer buttons, subtract 10 seconds from the timer

// Once through all questions or timer reaches 0, game is over
// Once through all questions and timer still has time, the game ends and that is users score
// Displays users final score based on time left and adds input box to enter initials
// Submit button to save initials and score to local storage
// Then displays the highscores page

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
let timerInterval;

// Event Listeners

document.getElementById(`quiz-start`).addEventListener(`click` , startQuiz);
document.getElementById(`submit-initials`).addEventListener(`click`, submitInitials);
// document.getElementById(`back-to-start`).addEventListener(`click`, toBeginning);
// TO-DO: and above ^^ does the quiz just start over again or go to the mainpage?
// document.getElementById(`clear-scores`).addEventListener(`click`); - needs to clear local storage and empty the li element

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
        question: `WHAT is a variable?`,
        answer1: `1. Line of code`,
        answer2: `2. A file`,
        answer3: `3. A label that may contain a value`,
        answer4: `4. Programming language`,
        correctAnswer: `3`
    },
    {
        question: `What is a VARIABLE?`,
        answer1: `1. A label that may contain a value`,
        answer2: `2. Line of code`,
        answer3: `3. A file`,
        answer4: `4. Programming language`,
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
    renderQuestion ();
    startTime ();
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
    // TO-DO: need to only display for 2-3 seconds
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
    }
    renderHighscores();
}

// Turning initials array into strings

function storeInitials () {
    localStorage.setItem(`initials`, JSON.stringify(initials));
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
        const initial = initials[index];
        
        var li = document.createElement(`li`);
        li.textContent = initial;
        li.setAttribute(`data-index`, index);

        finalScores.appendChild(li);
    }
}

init();

// function toBeginning () {
//     document.getElemenyById(`quiz-finish-page`).classList.add(`hidden`);
//     document.getElemenyById(`highscores`).classList.add(`hidden`);
// };