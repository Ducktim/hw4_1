export function validateData(coordinate, min, max) {
    const errorContainer = document.querySelector('.error');
    if ((coordinate <= min) || (coordinate >= max) || isNaN(coordinate)) {
        generateError("Wrong data", errorContainer);
    } else if (coordinate == "") {
        generateError("...", errorContainer);
    } else {
        errorContainer.innerHTML = '';
    }
}

//вывод ошибок
let generateError = (text, errorContainer) => {
    errorContainer.innerHTML = text;
}

