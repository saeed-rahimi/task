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


const age = 14;

if (age >= 18) {
    console.log("you are an aukt");

} else if (age > 13 && age <= 17) {
    console.log(" you are tenager");

} else {
    console.log("you are child");
} //////////////////////////////////////
let grade;
let score = 50

if (score >= 90 && score <= 100) {
    grade = "A+";
} else
if (score >= 80 && score <= 89) {
    grade = "A";
} else if (score >= 70 && score <= 79) {
    grade = "B+";
} else if (score >= 60 && score <= 69) {
    grade = "B";
} else if (score >= 50 && score <= 59) {
    grade = "C";
} else if (score < 50) {
    grade = "D";
} else {
    grade = "Invalid score";
}

console.log(`The grade for a score of ${score} is: ${grade}`);
////////////////////////////////

let weight = 75;
let height = 1.8;


let bmi = weight / (height * height);


let range;


if (bmi < 18.5) {
    range = "Underweight";
} else if (bmi >= 18.5 && bmi < 25) {
    range = "Normal weight";
} else if (bmi >= 25 && bmi < 30) {
    range = "Overweight";
} else {
    range = "Obese";
}



console.log(` Your Health is : ${range}`);