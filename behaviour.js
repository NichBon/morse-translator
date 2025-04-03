import {
    morseTranslate,
    reverseMorseTranslate,
} from "./modules/functions.js";

const regexEnglish = /^[A-Za-z0-9 .,]+$/;
const regexMorse = /^[\.\-\s\/]+$/;

const form = document.querySelector('form');
const translationType = document.querySelector('#translation-type');

const outputArea = document.querySelector('#output-text');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    let output = ''
    const formData = new FormData(form);
    const input = formData.get('input-text')

    if (regexEnglish.test(input)) {
        output = morseTranslate(input);
        translationType.textContent = 'Translating English to Morse'
    } else if (regexMorse.test(input)) {
        output = reverseMorseTranslate(input);
        translationType.textContent = 'Translating Morse to English'
    } else {
        output = 'Input must be either all english or all morse'
        translationType.textContent = 'Invalid input'
    }
    outputArea.textContent = output;
})




// take an input and split it

let testString = 'at big banana'

console.log(testString)

let morse = morseTranslate(testString)

console.log(morse)

let reverse = reverseMorseTranslate('.- / -- .- ... ... .. ...- . / .--. --- - .- - ---')

console.log(reverse)


// output
// for (letter in letters)