// import functions and grab DOM elements
import { isYes } from './yes-utils.js';
const myButton = document.getElementById('quiz-button');
const resultSpan = document.getElementById('quiz-result');

// initialize state

// set event listeners to update state and DOM
myButton.addEventListener('click', () => {
    const name = prompt('Who Dis?');
    const really = confirm('Are you sure you want to take the Quiz?');
    if (really === false) {
        return;
    }
    const answer1 = prompt('Do I like ear-rubs?');
    const answer2 = prompt('Do I like food?');
    const answer3 = prompt('Am I poohead?');
    let score = 0;

    if (isYes(answer1)) {
        score++;
    }
    if (isYes(answer2)) {
        score++;
    }
    if (isYes(answer3)) {
        score++;
    }

    resultSpan.textContent = name + score;
});

