import {
    morseTranslate,
    reverseMorseTranslate,
    inputTypeTest
} from "./modules/functions.js";


test("morseTranslate", () => {
    expect(morseTranslate('abcdefghijklmnopqrstuvwxyz')).toBe('.- -... -.-. -.. . ..-. --. .... .. .--- -.- .-.. -- -. --- .--. --.- .-. ... - ..- ...- .-- -..- -.-- --..');
    expect(morseTranslate('1234567890')).toBe('.---- ..--- ...-- ....- ..... -.... --... ---.. ----. -----');
    expect(morseTranslate('emERGency')).toBe('. -- . .-. --. . -. -.-. -.--');
    expect(morseTranslate('A BIG BANANA')).toBe('.- / -... .. --. / -... .- -. .- -. .-');
    expect(morseTranslate('Two  Spaces')).toBe('- .-- --- / ... .--. .- -.-. . ...');
});

test("reverseMorseTranslate", () => {
    expect(reverseMorseTranslate('.- -... -.-. -.. . ..-. --. .... .. .--- -.- .-.. -- -. --- .--. --.- .-. ... - ..- ...- .-- -..- -.-- --..')).toBe('ABCDEFGHIJKLMNOPQRSTUVWXYZ');
    expect(reverseMorseTranslate('----- .---- ..--- ...-- ....- ..... -.... --... ---.. ----. -----')).toBe('01234567890');
    expect(reverseMorseTranslate('-. --- .-.. --- --. -.-- - . ... -')).toBe('NOLOGYTEST');
    expect(reverseMorseTranslate('.- / -- .- ... ... .. ...- . / .--. --- - .- - ---')).toBe('A MASSIVE POTATO');
    expect(reverseMorseTranslate('asdf ./-')).toBe('Invalid morse characters were detected');
    expect(reverseMorseTranslate('.-..-----...')).toBe('Invalid morse characters were detected');
    expect(reverseMorseTranslate('.-..-----... .......//////')).toBe('Invalid morse characters were detected');
    expect(reverseMorseTranslate('- .-- --- /  / ... .--. .- -.-. . ...')).toBe('TWO SPACES');
});

test("inputTypeTest", () => {
    expect(inputTypeTest('.- -... -.-. -.. . ..-. ')).toBe('morse');
    expect(inputTypeTest('asdfa bla9')).toBe('english');
    expect(inputTypeTest('.- -... -.-. -.. . ..-. asjdf')).toBe('invalid');
    expect(inputTypeTest('+')).toBe('invalid');
    expect(inputTypeTest('*')).toBe('invalid');
    expect(inputTypeTest('@')).toBe('invalid');
});