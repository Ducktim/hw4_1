import {getInputValue} from "./getValue.js";

const buttonSubmit = document.querySelector('.validate_button');
const answerDiv = document.querySelector('#result_table');

function answer(k, x, l, E) {
    return 4 * l * Math.sqrt(3.14 * k * x * E);
}

buttonSubmit.addEventListener("click", () => {
    const inputValue = getInputValue();
    const divAnswer = document.createElement('div');
    divAnswer.textContent = answer(inputValue[0], inputValue[1], inputValue[2], inputValue[3]);
    answerDiv.appendChild(divAnswer)
})