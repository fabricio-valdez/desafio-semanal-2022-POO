const morse = {
    "a": ".-",
    "b": "-...",
    "c": "-.-.",
    "d": "-..",
    "e": ".",
    "f": "..-.",
    "g": "--.",
    "h": "....",
    "i": "..",
    "j": ".---",
    "k": "-.-",
    "l": ".-..",
    "m": "--",
    "n": "-.",
    "o": "---",
    "p": ".--.",
    "q": "--.-",
    "r": ".-.",
    "s": "...",
    "t": "-",
    "u": "..-",
    "w": ".--",
    "x": "-..-",
    "y": "-.--",
    "z": "--.."
}
 const ConvertirMorse = (texto) => {
    return texto.toLowerCase().split("").map(i => {
       return morse[i] ? morse[i] : i;
    }).join("");
 };
 console.log(ConvertirMorse('Hola Mundo'));
 console.log(ConvertirMorse('Hello World'));