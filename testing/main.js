"use strict";

// intento 1 - enteros de 1 a 9
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

let randomInteger = getRandomInt(0, 9);

console.log(randomInteger)
