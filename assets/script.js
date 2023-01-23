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
const highscores = document.getElementById(`highscores`);
let timer = document.getElementById(`timer`);

// Event Listeners

document.getElementById(`quiz-start`).addEventListener(`click` , startQuiz);
document.getElementById(`submit-initials`).addEventListener(`click`, submitInitials);
document.getElementById(`back-to-start`).addEventListener(`click`, startQuiz);
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

// Start the quiz, using event listener, hiding Quiz instructions/main page, and showing the questions and answers by calling renderQuestion function

function startQuiz () {
    document.getElementById(`quiz-box`).classList.add(`hidden`);
    quizContent.classList.remove(`hidden`);
    renderQuestion ();
}

// Checks if the answer is correct or incorrect, then renders the next question, so long as there is another question after

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
    initialsInput()
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
    // TO-DO: need to remove -10 seconds from the timer  
}

// Initials input box

function initialsInput () {
    initialsPage.classList.remove(`hidden`);
    quizContent.classList.add(`hidden`);
}

// Submit initials to view highscores

function submitInitials () {
    initialsPage.classList.add(`hidden`);
    highscores.classList.remove(`hidden`);
    // TO-DO: need to capture the value that the user inputs in the text field, store score and initials to local storage (setItem)
}

// TO-DO: need function for pulling from local storage (getItem) and adding that data as an li, appended to child or ul, then style in Javascript

// TO-DO: Timer function to countdown every 1 second from 100

timer = setInterval(1000);











// Action when user clicks on any of the answer buttons

// function userChose (event) {
//     const clickedEl = event.target;
//     if (clickedEl.id === questions[0].correctAnswer) {
//         answerConfirmDivider.classList.remove(`hidden`);
//         answerConfirm.textContent = `Correct!`;
//         document.getElementById(`quiz-question`).textContent=questions[1].question;
//         document.getElementById(`answer1`).textContent=questions[1].answer1;
//         document.getElementById(`answer2`).textContent=questions[1].answer2;
//         document.getElementById(`answer3`).textContent=questions[1].answer3;
//         document.getElementById(`answer4`).textContent=questions[1].answer4;
//     } else {
//         answerConfirmDivider.classList.remove(`hidden`);
//         answerConfirm.textContent = `Wrong!`;
//         document.getElementById(`quiz-question`).textContent=questions[1].question;
//         document.getElementById(`answer1`).textContent=questions[1].answer1;
//         document.getElementById(`answer2`).textContent=questions[1].answer2;
//         document.getElementById(`answer3`).textContent=questions[1].answer3;
//         document.getElementById(`answer4`).textContent=questions[1].answer4;
//     }
// }
// Action when user clicks the start button

// function startQuiz () {
//     document.getElementById(`quiz-box`).classList.add(`hidden`);
//     document.getElementById(`quiz-question`).textContent=questions[0].question;
//     document.getElementById(`answer1`).textContent=questions[0].answer1;
//     document.getElementById(`answer2`).textContent=questions[0].answer2;
//     document.getElementById(`answer3`).textContent=questions[0].answer3;
//     document.getElementById(`answer4`).textContent=questions[0].answer4;


//     document.getElementById(`quiz-content`).classList.remove(`hidden`);
// };

// function userChose2 (event) {
//     const clickedEl = event.target;
//     if (clickedEl.id === questions[1].correctAnswer) {
//         answerConfirmDivider.classList.remove(`hidden`);
//         answerConfirm.textContent = `Correct!`;
//         document.getElementById(`quiz-question`).textContent=questions[2].question;
//         document.getElementById(`answer1`).textContent=questions[2].answer1;
//         document.getElementById(`answer2`).textContent=questions[2].answer2;
//         document.getElementById(`answer3`).textContent=questions[2].answer3;
//         document.getElementById(`answer4`).textContent=questions[2].answer4;
//     } else {
//         answerConfirmDivider.classList.remove(`hidden`);
//         answerConfirm.textContent = `Wrong!`;
//         document.getElementById(`quiz-question`).textContent=questions[2].question;
//         document.getElementById(`answer1`).textContent=questions[2].answer1;
//         document.getElementById(`answer2`).textContent=questions[2].answer2;
//         document.getElementById(`answer3`).textContent=questions[2].answer3;
//         document.getElementById(`answer4`).textContent=questions[2].answer4;
//     }
// }


// how do I keep track of which question I am on and move to next question - ASK BCS
// how to display if I am correct or wrong
// how do I know I am on the last question, to submit initials (another div)
// how to save initial and time/score to localStorage. How to display scores at any time, which will be another div. Probably want to cap the localStorage to 10 scores