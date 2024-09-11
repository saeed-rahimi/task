"use strict"
const currentcolo = "red";

function checkcolor(color) {
    if (color === "red") {
        console.log("stop");

    } else if (color === "yellow") {
        console.log("slow down");

    } else if (color === "green") {
        console.log('go');

    } else {
        console.log("invalid color");
    }
}
checkcolor(currentcolo)
    //////////////
const [num, num1] = [10, 13];

function OddEvencheker(n) {
    return n % 2 == 0 ? `${n} is even` : `${n} is odd`
}
console.log(OddEvencheker(num1));
console.log(OddEvencheker(num));
////////////////////////////////////////////////