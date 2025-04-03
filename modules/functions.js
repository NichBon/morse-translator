import {
    morseCode,
    reverseMorseCode
} from "./dictionary.js";

export const morseTranslate = (inputString) => {
    try {
        let outputString = ''
        const words = inputString.split(' ')
        for (const word of words) {
            const letters = word.split('');
            for (const letter of letters) {
                outputString += `${morseCode[letter.toUpperCase()]} `
            };

            outputString += '/ '

        }
        outputString = outputString.slice(0, -3)
        return (outputString)
    } catch (e) {
        console.error('Error in MorseTranslate')
        return ('Error in morseTranslate')
    }

}

export const reverseMorseTranslate = (inputString) => {
    try {
        let outputString = ''
        const words = inputString.split(' / ')
        for (const word of words) {
            const letters = word.split(' ');
            for (const letter of letters) {
                outputString += `${reverseMorseCode[letter]}`
            };
            outputString += ' '
        }
        outputString = outputString.trim()
        return (outputString)
    } catch (e) {
        console.error('Error in reverseMorseTranslate')
        return ('Error in reverseMorseTranslate')
    }
}

const regexEnglish = /^[A-Za-z0-9 .,]+$/;
const regexMorse = /^[\.\-\s\/]+$/;

export const inputType = (inputString) => {
    if (regexEnglish.test(inputString)) {
        return ('english')
    } else if (regexMorse.test(inputString)) {
        return ('morse')
    } else {
        return ('invalid')
    }
}