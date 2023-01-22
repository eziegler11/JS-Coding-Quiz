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

const questions = [
    {
        question: `What is a variable?`,
        answer1: `Line of code`,
        answer2: `A file`,
        answer3: `Programming language`,
        answer4: `A label that may contain a value`,
        correctAnswer: `answer4`
    },
    {
        question: `WHAT is a variable?`,
        answer1: `Line of code`,
        answer2: `A file`,
        answer3: `A label that may contain a value`,
        answer4: `Programming language`,
        correctAnswer: `answer3`
    },
    {
        question: `What is a VARIABLE?`,
        answer1: `A label that may contain a value`,
        answer2: `Line of code`,
        answer3: `A file`,
        answer4: `Programming language`,
        correctAnswer: `answer1`
    }
]


function userChose(event) {
    console.log("Ran")
    const clickedEl = event.target;
    if(clickedEl.id===questions[0].correctAnswer) {
        alert("Correct!")
    } else {
        alert("Incorrect")
    }
}

document.getElementById(`questions`).addEventListener("click", userChose)


function startQuiz () {
    document.getElementById(`quiz-box`).classList.add(`hidden`);
    document.getElementById(`quiz-question`).textContent=questions[0].question
    document.getElementById(`answer1`).textContent=questions[0].answer1
    document.getElementById(`answer2`).textContent=questions[0].answer2
    document.getElementById(`answer3`).textContent=questions[0].answer3
    document.getElementById(`answer4`).textContent=questions[0].answer4


    document.getElementById(`quiz-content`).classList.remove(`hidden`);
}

document.getElementById(`quiz-start`).addEventListener(`click` , startQuiz)


// how do I keep track of which question I am on and move to next question - ASK BCS
// how to display if I am correct or wrong
// how do I know I am on the last question, to submit initials (another div)
// how to save initial and time/score to localStorage. How to display scores at any time, which will be another div. Probably want to cap the localStorage to 10 scores