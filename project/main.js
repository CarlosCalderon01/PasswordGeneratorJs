"use strict";

// Proyecto para generar contraseñas V0.0

// ----- // ----- // Variables // ----- // ----- //

const ascii_lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
const ascii_uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
const digits          = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const hexdigits       = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f", "A", "B", "C", "D", "E", "F"];
const octdigits       = ["0", "1", "2", "3", "4", "5", "6", "7"];
const punctuation     = ["!", "#", "$", " % ", " & ", "'","(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}", "~", '"',];
// del estandar "punctuation" me falto "\" no supe como ponerlo.

// ----- // ----- // Procesos // ----- // ----- //
let random_ascii_lowercase = ascii_lowercase[Math.floor(Math.random() * ascii_lowercase.length)]
let random_ascii_uppercase = ascii_uppercase[Math.floor(Math.random() * ascii_uppercase.length)]
let random_digits = digits[Math.floor(Math.random() * digits.length)]
let random_hexdigits = hexdigits[Math.floor(Math.random() * hexdigits.length)]
let random_octdigits = octdigits[Math.floor(Math.random() * octdigits.length)]
let random_punctuation = punctuation[Math.floor(Math.random() * punctuation.length)]

// ----- // ----- // imprimir // ----- // ----- //

console.log(random_ascii_lowercase);
console.log(random_ascii_uppercase);
console.log(random_digits);
console.log(random_hexdigits);
console.log(random_octdigits);
console.log(random_punctuation);


/*
    Biliografia -->

    https://docs.python.org/3/library/string.html

*/