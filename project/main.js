"use strict";

// Proyecto para generar contraseñas V0.1
// ----- // ----- // Variables // ----- // ----- //

function optionMenu(){
    console.log("// ----- // ----- // ----- // ----- // ----- // ----- //");
    console.log("welcome to the menu for create a password");
    console.log("que tipo de contraseña quieres");
    console.log("1- letras minusculas");
    console.log("2- letras mayusculas");
    console.log("3- letras numericas");

    let inputOption = prompt('Ingrese su opcion: ');

    case inputOption = 1;
        console.log("1- letras minusculas");
        break
    case inputOption = 2;
        console.log("2- letras mayusculas");
        break
    case inputOption = 3;
        console.log("3- letras numericas");
        break
    }
    console.log("// ----- // ----- // ----- // ----- // ----- // ----- //");
}

optionMenu()

const SIZEWORLD = 10;
const ascii_lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
const ascii_uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
const digits          = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const punctuation     = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}", "~", '"',];

const oneAll = [ascii_lowercase, ascii_uppercase, digits, punctuation]
// ----- // ----- // Procesos // ----- // ----- //
function generateAsciiLowercase(ziseWord){
    let result = ""
    for (let i = 0 ; i <= ziseWord; i++){
        result +=oneAll[Math.floor(Math.random() * oneAll.length)]
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
