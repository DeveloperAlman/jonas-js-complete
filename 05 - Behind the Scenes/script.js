'use strict';

function calcAge(birthYear) { // First Scope, function scope (they are blocks too in strict mode)
    const age = 2024 - birthYear;
    console.log(firstName);

    function printAge() { // Second Scope, function scope (they are blocks too in strict mode)
        const printMessage = `${firstName} is ${age} yo and you was born in ${birthYear}`;
        console.log(printMessage);

        if (birthYear >= 1996 && birthYear <= 2005) { // Block scope, let, const available only inside of block
            let oldEnoughMessage = `${firstName}, you are young!`;
            console.log(oldEnoughMessage); // Inside of the current block scope
        }
        // console.log(oldEnoughMessage); // ERROR, outside of the block scope
    }

    printAge();
    return age;
}

const firstName = "Alman"; // Global Scope env, available everywhere
calcAge(2002);

// this keyword
/* this keyword or this variable is a special variable that is created for every execution context
and any function. The value of the this keyword is not static, it 's not always the same.
It depends on how the functionis called, and its value is only assigned when the
function is called.*/
console.log(this);
const calcAge1 = function (birthYear) {
    console.log(this);
    return 2024 - birthYear;
}
console.log(calcAge1(2002))
calcAge1(2002);

const alman = {
    year: 2002,
    job: "developer",
    sex: "male",
    calcAge3: function () {
        console.log(2024 - this.year); // this takes from current object alman and make 2024-alman.year
        console.log(this); // renders alman object
    }
}
alman.calcAge3();