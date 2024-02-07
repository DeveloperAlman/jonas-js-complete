// strict mode allows to write more secure code
// it helps to find buggs, errors and misspelling
// it's required to use strict in every project
"use strict";

let hasDriversLicense = false;
let passedTest = true;

if (passedTest) {
    hasDriversLicense = true;

}
console.log(`I can drive :D`);

// Functions
// It's a block of code that is reusable over and over again, recieve and send data like machines
// function "function name" (parameters, placeholder to recieve input values like local variables)
/* function "name"(parameters, pass data){
    "function body code"
}*/
function logger() {
    console.log(`First function`);
}

// Invoking, calling, running, executing function
logger();
logger();

function fruitProcessor(apples, oranges) {
    console.log(apples, oranges);

    // Juice template literal
    const juice = `Juice with ${apples} apples and ${oranges} oranges`;
    // Return back value, can be used again whenever later
    return juice;
}

// Catching value in variable to show in the console result
const appleJuice = fruitProcessor(5, 0); // variable storing = function invoking
console.log(appleJuice); // Juice with 5 apples and 0 oranges

// Using again function with different parameters
const appleOrangeJuice = fruitProcessor(10, 5);
console.log(appleOrangeJuice); // Juice with 10 apples and 5 oranges

console.log("Alman") // build-in function
Number("250"); // build-in function

// Function declaration
// It declares function with name without storing in variables
// Function without storing in variable, function "name" (parameters) { function body }
function calcAge1(birthYear) {
    const age = 2023 - birthYear;
    return age; // returning value back
}

// Catching value in variable; variable storing = invoking function
const age = calcAge1(2002);
console.log(age);

// Function expression
// Storing anonymus function without name in variable
// Storing variable = expression
// Variable name = function (parameters) { function body }
const calcAge2 = function (birthYear) {
    const age2 = 2023 - birthYear;
    return age2; // Returning value back
}

const age2 = calcAge2(1965);
console.log(age2);

// Arrow function
// Shortened function expression
// (parameters) => { function body }
const calcAge3 = (birthYear) => 2023 - birthYear;
const age3 = calcAge3(2003);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
    const currentAge = 2023 - birthYear;
    const ageUntilRetirement = 65 - currentAge;

    let retirement = `${firstName} is ${currentAge} yo and you have ${ageUntilRetirement} years until retirement`;
    return retirement;
}

yearsUntilRetirement(1965, "Arbi");
yearsUntilRetirement(2002, "Alman");
yearsUntilRetirement(2003, "Sakhab");
console.log(yearsUntilRetirement(1965, "Arbi")); // Arbi is 58 yo and you have 7 years until retirement
console.log(yearsUntilRetirement(2002, "Alman")); // Alman is 21 yo and you have 44 years until retirement
console.log(yearsUntilRetirement(2003, "Sakhab")); // Sakhab is 20 yo and you have 45 years until retirement

// Functions calling other functions

const weightDistributer = (portion) => {
    return portion * 3;
}

function shaverma(chicken, veggies, sauce) {
    const chickenWeight = weightDistributer(chicken);
    const veggiesWeight = weightDistributer(veggies);
    const sauceWeight = weightDistributer(sauce);

    let shavermaPortion = `You have shaverma with ${chickenWeight} grams of chicken, ${veggiesWeight} grams of veggies and ${sauceWeight} milliliters of sauce`;
    return shavermaPortion;
}

shaverma(50, 30, 20);
console.log(shaverma(50, 30, 20));

/*
CHALLENGE #1
Back to the two gymnastics teams, the Dolphins and the Koalas!
There is a new gymnastics discipline, which works differently.

Each team competes 3 times, and then the average of the 3 scores is calculated
(so one average score per team).

A team only wins if it has at least double the average score of the other team.
Otherwise, no team wins!

Your tasks:
Create an arrow function calcAverage to calculate the average of 3 scores.
This function should have three parameters and return a single number (the average score).

Create two new variables — scoreDolphins and scoreKoalas, and assign
the value returned from the calcAverage function to them
(you will need to call this function, and pass scores as arguments).

Create a function checkWinner that takes the average score of each team as parameters
(avgDolphins and avgKoalas), and then logs the winner to the console, together with the victory points, according to the rule above. Example: Koalas win (30 vs. 13) (use avgDolphins and avgKoalas instead of hard-coded values).

Use the checkWinner function to determine the winner for both DATA 1 and DATA 2.

Ignore draws this time. Instead, log No team wins... to the console if there is no winner.

TEST DATA 1: Dolphins scored 44, 23, and 71. Koalas scored 65, 54, and 49.
TEST DATA 2: Dolphins scored 85, 54, and 41. Koalas scored 23, 34, and 27.
*/

// SOLUTION CHALLENGE #1
const calcAverage = (score1, score2, score3) => {
    return (score1 + score2 + score3) / 3;
};

const scoreDolphins = calcAverage(85, 54, 41);
const scoreKoalas = calcAverage(23, 34, 27);

function checkWinner(avgDolphins, avgKoalas) {
    avgDolphins = scoreDolphins;
    avgKoalas = scoreKoalas;

    if (avgDolphins > avgKoalas * 2) {
        console.log(`Dolphins win ${scoreDolphins} vs ${scoreKoalas}`);
    } else if (avgKoalas > avgDolphins * 2) {
        console.log(`Koalas win ${scoreKoalas} vs ${scoreDolphins}`);
    } else {
        console.log(`No team wins...`);
    }
}

checkWinner(scoreDolphins, scoreKoalas);

// Arrays
/* Data structure. Array is a single variable that is used to store 
elements of different data types. JavaScript arrays are zero - indexed.
Arrays are used when we have a list of items.
An array allows you to store several values with the same name and access
them by using their index number.
*/
const brothers = ["Alman", "Sakhab", "Alvi", "Alimkhan"];
console.log(brothers); // ["Alman", "Sakhab", "Alvi", "Alimkhan"]

// finding first element in array is variable of array and index [0, 1, 2, 3 etc.];
console.log(brothers[0]); // "Alman"
console.log(brothers[1]); // "Sakhab"
console.log(brothers[2]); // "Alvi"
console.log(brothers[3]); // "Alimkhan"

// Finding how much elements in Array
console.log(brothers.length);

// Get the last element in Array
console.log(brothers[brothers.length - 1]);

// Changing value in Array
brothers[2] = "Harbi";
console.log(brothers); // ['Alman', 'Sakhab', 'Harbi', 'Alimkhan']
console.log(brothers[2]); // Harbi

const firstName = "Alman";
const alman = [firstName, "Nazyrov", 2023 - 2002];
console.log(alman);

// Making Array work to function and storing processed values in the new Array
const calcAge4 = (birthYear) => {
    return 2023 - birthYear;
}

// Processing Array to work with function
const ages = [2002, 2003, 1996, 1991];

const brotherAge1 = calcAge4(ages[0]);
const brotherAge2 = calcAge4(ages[1]);
const brotherAge3 = calcAge4(ages[2]);
const brotherAge4 = calcAge4(ages[ages.length - 1]); // last value
console.log(brotherAge1, brotherAge2, brotherAge3, brotherAge4);

// Storing new values in new Array
const newAges = [calcAge4(ages[0]), calcAge4(ages[1]), calcAge4(ages[2]), calcAge4(ages[ages.length - 1])];
console.log(newAges); // (4 elements) [21, 20, 27, 32]

// Basic Array Methods (Operations)
// push() is a method, function that creates a new value to the end of the Array
// It pushes to the end, adding a new value
brothers.push("Harbi2");
console.log(brothers); // (5 elements) ['Alman', 'Sakhab', 'Harbi', 'Alimkhan', 'Harbi2']

// unshift() is a method, function that creates, adds a new value on the beginning of the Array
// It creates a new value on the first place of all value, so it's first value in the Array
brothers.unshift("Harbi1");
console.log(brothers); // (6 elements) ['Harbi1', 'Alman', 'Sakhab', 'Harbi', 'Alimkhan', 'Harbi2']

// shift() is a method, function that removes the first element in the Array
// It removes the first avaliable element in the Array
brothers.shift();
console.log(brothers); // (5 elements) ['Alman', 'Sakhab', 'Harbi', 'Alimkhan', 'Harbi2']

// pop() is a method, function that removes last element in the Array
brothers.pop();
console.log(brothers); // (4 elements) ['Alman', 'Sakhab', 'Harbi', 'Alimkhan']

// able to do again, remove the last element in the Array again
brothers.pop();
console.log(brothers); // (3 elements) ['Alman', 'Sakhab', 'Harbi']

// indexOf() is a methodm function that need to figure out what index of element in the Array
console.log(brothers.indexOf("Harbi")); // it has index 2, [2]
console.log(brothers.indexOf("Sakhab")); // it has index 1, [1]
console.log(brothers.indexOf("Alman")); // it has index 0, [0]

// includes() is a method function that need to figure out if element exists or includes in the Array
console.log(brothers.includes("Harbi")); // true because it has, exists in the Array
console.log(brothers.includes("Arbi")); // false because it doesn't exist in the Array
console.log(brothers.includes("Alvi")); // false because it doesn't exist in the Array

/* CHALLENGE #2
Steven wants you to improve his tip calculator,
using the same rules as before — tip 15% of the bill
if the bill value is between 50 and 300, and if the value is different, the tip is 20%.

Your tasks:
Write a function calcTip that takes any bill value as an
input and returns the corresponding tip, calculated
based on the rules above (you can check out the code from
the first tip calculator challenge if you need to).
Use the function type you like the most. Test the function using a bill value of 100.

And now let's use arrays! So, create an array called bills containing the test data below.

Create an array called tips containing the tip value for each bill,
calculated from the function you created before.

BONUS: Create an array totals containing the total values, so the bill + tip.
TEST DATA: 125, 555, and 44.
*/

// SOLUTION CHALLENGE #2
function calcTip(billValue) {
    if (billValue >= 50 && billValue <= 300) {
        billValue *= 0.15;
    } else {
        billValue *= 0.2;
    }
    return billValue;
}

let bills = [125, 555, 44];
let tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[bills.length - 1])];
let totals = [bills[0] + calcTip(bills[0]), bills[1] + calcTip(bills[1]), bills[bills.length - 1] + calcTip(bills[bills.length - 1])];

console.log(`Bills: `, bills)
console.log(`Calculated tips: `, tips);
console.log(`Totals, bills + tips: `, totals);

// Objects
/* Object in is a data type that is composed of a collection of names or keys and values,
represented in name:value pairs. The name:value pairs can consist of properties that may contain
any data type — including strings, numbers, and Booleans — as well as methods,
which are functions contained within an object. */
// variable = { object body }
// const person or an object, thing = {}
const alvi = {
    firstName: "Alvi",
    lastName: "Nazyrov",
    age: 31,
    birthYear: 1991,
    job: "Ophtalmologyst",
    brothers: ["Alman", "Sakhab", "Alimkhan"],
    hasDriversLicense: true,

    calcAge: function () {
        console.log(this);
        return 2023 - this.birthYear;
    }
}
console.log(alvi);

// Dot notation
// It's a method that allow to get value from an object directly
// object dot value, alvi.age
console.log(alvi.firstName); // Alvi

// Brackets notation
console.log(alvi["firstName"]);

alvi.calcAge(1991);
console.log(alvi.calcAge());

/* CHALLENGE #3

Let's go back to Mark and John comparing their BMIs!
This time, let's use objects to implement the calculations!
Remember: BMI = mass / (height * height)(mass in kg and height in meters).

Your tasks:
For each of them, create an object with properties
for their full name, mass, and height(Mark Miller and John Smith).
Name these objects as mark and john, and their properties exactly as fullName, mass and height.

Create a calcBMI method on each object to calculate the BMI(the same method on both objects).
Assign the BMI value to a property, and also return it from the method.

Log to the console who has the higher BMI, together with the full name
and the respective BMI.Example: "John Smith's BMI (28.3) is higher than Mark Miller's (23.9)!".

TEST DATA: Marks weighs 78 kg and is 1.69 m tall.John weighs 92 kg and is 1.95 m tall.
*/

// SOLUTION CHALLENGE #3
const mark = {
    fullName: "Mark Miller",
    mass: 78,
    height: 1.69,
    calcBMI: function () {
        this.bmi = this.mass / (this.height * this.height);
        return this.bmi;
    },
}

const john = {
    fullName: "John Smith",
    mass: 92,
    height: 1.95,
    calcBMI: function () {
        this.bmi = this.mass / (this.height * this.height);
        return this.bmi;
    }
}
mark.bmi = mark.calcBMI();
john.bmi = john.calcBMI();

console.log(mark.calcBMI(), john.calcBMI());

if (john.bmi >= mark.bmi) {
    console.log(`John Smith's BMI (${john.bmi}) is higher than Mark Miller's (${mark.bmi})!`)
} else if (mark.bmi >= john.bmi) {
    console.log(`Mark Miller's BMI (${mark.bmi}) is higher than John Smith's (${john.bmi})!`)
} else {
    console.log(`Wrong`);
}

// Loops
// for()
// for (1. defining value of counter, 2. condition, until how long counter must stopp, 3. value++, goes until the end of counter)
console.log(`Repetition 1`);
console.log(`Repetition 2`);
console.log(`Repetition 3`);
console.log(`Repetition 4`);
console.log(`Repetition 5`);

// for loop keeps running until the condition is TRUE, like until 10 for this example
for (let repetition = 1; repetition <= 10; repetition++) {
    console.log(`Repetition ${repetition}`);
}

for (let i = 0; i < ages.length; i++) {
    console.log(ages[i], typeof ages[i]);
}

const numbers = [1991, 1996, 2002, 2003];
const numbers2 = [];
for (let i = 0; i < numbers.length; i++) {
    numbers2.push(2023 - numbers[i]);
}
console.log(numbers2);

// Loops backwards 4 3 2 1 0 (going from the end to start)
for (let i = alman.length - 1; i >= 0; i--) {
    console.log(alman[i]);
}

// While loops
// It will runi while the condition is true and stops when condition is false
let rep = 1;
while (rep <= 10) {
    console.log(`WHILE LOOP: Repetition ${rep}`);
    rep++;
}

let dice = Math.trunc(Math.random() * 6) + 1;
while (dice !== 6) {
    console.log(`You rolled dice: ${dice}`);
    dice = Math.trunc(Math.random() * 6) + 1;

    if (dice === 6) {
        console.log(`Roll is finished! You rolled dice: ${dice}`);
    }
}

/* CHALLENGE #4
Let's improve Steven's tip calculator even more, this time using loops!
Your tasks:
Create an array called bills containing all 10 test bill values.
Create empty arrays for the tips and the totals (tips and totals)
Use the calcTip function we wrote before to calculate tips and total
values (bill + tip) for every bill value in the bills array. Use a for loop
to perform the 10 calculations!

TEST DATA: 22, 295, 176, 440, 37, 105, 10, 1100, 86, and 52. */

// SOLUTION CHALLENGE #4
let billss = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
let tipss = [];
let totalss = [];

for (let i = 0; i < billss.length; i++) {
    tipss.push(calcTip(billss[i]));

    totalss.push(billss[i] + tipss[i]);
}

function calcTip(billValue) {
    if (billValue >= 50 && billValue <= 300) {
        billValue *= 0.15;
    } else {
        billValue *= 0.2;
    }
    return billValue;
}

console.log(totalss);