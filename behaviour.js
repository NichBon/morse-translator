import {
    morseTranslate,
    reverseMorseTranslate,
    inputTypeTest,
} from "./modules/functions.js";

import {
    toggleDarkMode,
} from "./modules/dom.js";

document.querySelector('#darkmode-toggle').addEventListener('click', (e) => {
    toggleDarkMode()
})

const form = document.querySelector('form');
const translationType = document.querySelector('#translation-type');
const inputTextArea = document.querySelector('#input-text')
const outputArea = document.querySelector('#output-text');


console.log(inputTextArea)

inputTextArea.addEventListener('keyup', (e) => {
    let output = ''
    const formData = new FormData(form);
    const input = formData.get('input-text').trim()
    if (input === '') {
        outputArea.textContent = null;
        translationType.textContent = 'Waiting for text or morse'
        return
    };

    let inputType = inputTypeTest(input)

    if (inputType === 'morse') {
        output = reverseMorseTranslate(input)
        translationType.textContent = 'Translating Morse to English...'
    } else if (inputType === 'english') {
        output = morseTranslate(input);
        translationType.textContent = 'Translating English to Morse...'
    } else {
        output = 'Input must be either all english or all morse'
        translationType.textContent = 'Invalid input'
    }
    outputArea.textContent = output;
})

// take an input and split it, console logs for testing

let testString = 'at big banana'

console.log(testString)

let morse = morseTranslate(testString)

console.log(morse)

let reverse = reverseMorseTranslate('asdf ./-')

console.log(reverse)


// output
// for (letter in letters)