import {validateData} from "./validator.js";
import {  getInputValue} from "./getValue.js";
import {clearRequest} from "./clearRequest.js";
import {postRequest} from "./postRequest.js";
const buttonSubmit = document.querySelector('.validate_button');

buttonSubmit.addEventListener("click",() =>{
    const inputValue = getInputValue();
    console.log(inputValue)

    let body = {
        "kValue": inputValue[0],
        "xValue": inputValue[1],
        "lValue": inputValue[2],
        "EValue": inputValue[3],
    }
    postRequest('php/back.php', body)
    console.log(body)
})