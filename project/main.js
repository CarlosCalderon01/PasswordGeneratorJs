"use strict";
// Proyecto para generar contraseñas V0.1
// ----- // ----- // Variables // ----- // ----- //
const SIZEWORLD = 10;
const ascii_lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
// ----- // ----- // Procesos // ----- // ----- //
function generateAsciiLowercase(ziseWord){
    let result = ""
    for (let i = 0 ; i <= ziseWord; i++){
        result +=ascii_lowercase[Math.floor(Math.random() * ascii_lowercase.length)]
    }
    return result
}
// ----- // ----- // imprimir // ----- // ----- //
console.log("// ----- // ----- // ----- // ----- // ----- // ----- //");
console.log(generateAsciiLowercase(SIZEWORLD))
console.log("// ----- // ----- // ----- // ----- // ----- // ----- //");
/*
    Biliografia -->

    https://docs.python.org/3/library/string.html

*/
