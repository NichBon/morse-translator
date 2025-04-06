import {
    morseCode,
    reverseMorseCode
} from "./dictionary.js";

export const morseTranslate = (inputString) => {
    try {
        let outputString = ''
        const words = inputString.split(' ')
        for (const word of words) {
            if (word === '') continue;
            const letters = word.split('');
            for (const letter of letters) {
                outputString += `${morseCode[letter.toUpperCase()]} `
            };
            outputString += '/ '
        }
        outputString = outputString.slice(0, -3)
        return (outputString)
    } catch (e) {
        console.error('Unexpected error in MorseTranslate input: ' + inputString)
        return ('Oops something went wrong')
    }
}

// splits on " \ " or " / " or " | " or "  "
const morseDelimiter = /(?:\s*[\/|\\]\s*|\s{2})/

export const reverseMorseTranslate = (inputString) => {
    try {
        let outputString = ''
        const words = inputString.split(morseDelimiter)
        for (const word of words) {
            if (word === '') continue;
            const letters = word.split(' ');
            for (const letter of letters) {
                outputString += `${reverseMorseCode[letter]}`
            }
            outputString += ' '
        }
        if (outputString.includes('undefined')) {
            return ("Invalid morse characters were detected")
        };
        outputString = outputString.trim()
        return (outputString)
    } catch (e) {
        console.error('Unexpected error in reverseMorseTranslate input: ' + inputString)
        return ('Oops something went wrong')
    }
}

export const regexEnglish = /^[A-Za-z0-9 .,?'!/()&:;=+\-_"$@]+$/;
export const regexMorse = /^[\.\-\s\/\|\\]+$/;

export const inputTypeTest = (inputString) => {
    if (regexMorse.test(inputString)) {
        return ('morse')
    } else if (regexEnglish.test(inputString)) {
        return ('english')
    } else {
        return ('invalid')
    }
}