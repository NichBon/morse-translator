import {
    morseTranslate,
    reverseMorseTranslate,
} from "./modules/functions.js";

// take an input and split it

let testString = 'at big banana'

console.log(testString)

let morse = morseTranslate(testString)

console.log(morse)

let reverse = reverseMorseTranslate('.- / -- .- ... ... .. ...- . / .--. --- - .- - ---')

console.log(reverse)


// output
// for (letter in letters)