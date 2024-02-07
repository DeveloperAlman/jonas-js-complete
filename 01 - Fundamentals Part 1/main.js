let js = "amazing";
if (js === "amazing") {
    console.log("Javascript is fun!");
}

// Declaring a variable with STRING (text) value
let firstName = "Alman";
console.log(firstName);

let myFirstJob = "student";
let myCurrentJob = "technical manager";
console.log(myFirstJob, myCurrentJob);

// Primitive data types
// 1. Number. Floating point numbers. Used for decimals and integers. let age=21;
// 2. String. Sequance of characters. Used for text. let lastName = "Nazyrov";
// 3. Boolean. Logical type that can be only TRUE or FALSE. let children = false;
// 4. Undefined. Value taken by a variable that is not defined. let relatives;
// 5. Null. Empty value that is not created, neither declared, nor existed

let myAge = 23; // Number
myAge = 21;
let lastName = "Nazyrov"; // String
let children = false; // Boolean
let relatives; // Undefined
console.log(myAge, firstName, lastName, children, relatives, typeof myAge, typeof firstName, typeof lastName, typeof children, typeof relatives);

// Declaring variables LET, CONST
// Let is a variable that can change over the time and being mutated
children = 2;
// Const is a variable that can not reassign, immutable variable, can never change
const birthYear = 2002;
console.log(children, birthYear);

// Math Operators
// + concatenate, - decrease, * multiply, / divide, ** means 2 power of 3 = 2*2*2
const futureAge = 2037;
const ageAlman = futureAge - birthYear;
console.log(ageAlman);
console.log(ageAlman - ageAlman, ageAlman * 2, ageAlman / 2, 2 ** 3);
console.log(firstName + ' ' + lastName);

// Assignment Operators
// = equals
let x = 10 + (5 * 3); // 25
console.log(x);
x += 15; // x=x+15 => x=25+15=40
console.log(x);
x *= 2.5; // x=x*2.5 => x=40*2.5=100
console.log(x);
x++; // x=x+1; // 101
console.log(x);
x--; // x=x-1; // 100
console.log(x);

// Comparison Operatiors
// > < >= <=
console.log(futureAge > ageAlman);
console.log(futureAge < ageAlman);
console.log(ageAlman >= 18);
console.log(ageAlman <= 18);
console.log(futureAge - 2002 > futureAge - 2003);

let c = v = 100 - 50 - 25 * 2; // c=v=0
console.log(c, v); // 0 0

/* CHALLENGE #1
Mark and John are trying to compare their BMI (Body Mass Index),
which is calculated using the formula:
BMI = mass / (height * height) (mass in kg and height in meters).

Your task is to write some code to help them:
Store Mark's and John's mass and height in variables called massMark,
heightMark, massJohn and heightJohn. Calculate both their BMIs using the formula,
and store the results in two variables called BMIMark and BMIJohn.
Log the value of BMIMark and BMIJohn to the console.

BONUS: Create a boolean variable markHigherBMI containing information about whether Mark has a higher BMI than John. Log it to the console too

TEST DATA: Marks weighs 78 kg and is 1.69 m tall. John weighs 92 kg and is 1.95 m tall. */

// SOLUTION CHALLENGE #1
const massMark = 78;
const heightMark = 1.69;

const massJohn = 92;
const heightJohn = 1.95;

const BMIMark = massMark / (heightMark ** 2);
const BMIJohn = massJohn / (heightJohn ** 2);
console.log(BMIMark, BMIJohn);

const markHigherBMI = BMIMark > BMIJohn;
console.log(markHigherBMI);

const alman = "I am " + firstName + ", a " + (futureAge - birthYear) + " yo student with a job of " + myCurrentJob;
console.log(alman);

// Template literals
const almanNew = `I am ${firstName},
a ${futureAge - birthYear} old student with a job of
${myCurrentJob}`;
console.log(almanNew);
console.log(`String
with
multiple
lines`);

// Taking decision if else
const age = 21;
const isOldEnough = age >= 18;
const yearsLeft = 18 - age;

if (isOldEnough) {
    console.log(`${firstName} can take the driver license!`);
} else {
    console.log(`${firstName} can not take any license! You need to grow for ${yearsLeft} years`)
}

let century;
if (birthYear >= 2000) {
    century = 21;
} else if (birthYear <= 2000) {
    century = 20;
}
console.log(century);

/* CHALLENGE #2
Use the BMI example from Challenge #1, and the code
you already wrote, and improve it:

1. Print a nice output to the console,
telling the user who has the higher BMI.
The message can be either:
"Mark's BMI is higher than John's!" 
or "John's BMI is higher than Mark's!".

2. Modify the outputs above to use template literals
to include the BMI values in the outputs.

Example: "Mark's BMI (28.3) is higher
than John's (23.9)!" or "John's BMI (29.1)
is higher than Mark's (27)!".

Note: Don't round the BMI values.
Leave them as they are. */

// SOLUTION CHALLENGE #2
if (BMIMark > BMIJohn) {
    console.log(`Mark's BMI (${BMIMark}) is higher than John's (${BMIJohn})!`);
} else {
    console.log(`John's BMI (${BMIJohn}) is higher than Mark's (${BMIMark})!`)
}

// Type conversion
// It's a type that we can convert manually

const inputYear = "2003";
// It will not work as numbers because it's a string + number that
// will concatenate string with number and make the whole string
console.log(inputYear + 25); // "2003"+25 is 200325 (String)

// But we can change manually data types as a type conversion
// Number() is a function that manually changes from string to a number
// After manually changing, it will be a real number with math calculation
// IMPORTANT that inputYear is still a String and was changed once in Number()
console.log(Number(inputYear) + 25); // Number("2003") will be 2003+25 = 2028

// Number() can not change text strings to numbers, only number strings to a math numbers
console.log(Number("Alman")); // NaN -> not a number (because it's text)

// String() it will change from math number to a text number (String)
console.log(String(23)); // from math 23 to text String 23

// Checking String()
console.log(String(21), 21, typeof String(21), typeof 21); // 21 21 string number

// Type coercion
// It's a type that js convert automatically
/* It works when it deals with different operators
and making numbers as a strings automatically that concatenate (+)

There is a math number 21 but it will be one big String because of type coercion
and it will take all math values and change auto as a string */
console.log(`I am ${age} yo`, typeof `I am ${age} yo`);

// "+" makes concatenation as a string automatically from numbers to strings text
console.log(100500 + "500"); // 100500500 (String) Type coercion
// "-" does not concatenate, and  it converted from strings to math numbers (opposite conversion)
console.log(100500 - "500"); // 100000 (Number) Type coercion

console.log("100" + 500); // 100500
console.log("100" - 500); // -400

let n = "1" + 1; // "1"+1 = 11 String
n = n - 1; // 11 String-1 math number = 10 math number (opposite coercion)
console.log(n);

let m = 5 + 5 + 10 + "95"; // 5+5+10= 20 +"95"= 2095 String
console.log(m);

let o = 100 - 50 - 25 - "10" - 5 + 10 + "50"; // 100-50-25-10-5+10=20=20+"50"= 2050 String
console.log(o, typeof o); // 2050 String

let r = "25" * 25; // it works as a math operation, doesnt transform (625 number)
r = r / 100; // the same with divide, makes a number math operation (6.25 number)
console.log(r);

// 5 falsy values
// 0, "", undefined, null, NaN
console.log(Boolean(0)); // False
console.log(Boolean(undefined)); // False
console.log(Boolean("")); // False (empty string)
console.log(Boolean("Alman")); // True (string with value of text Alman)

const money = 0; // falsy value
if (money) { // if money true
    console.log("Don't spend it all in 1 day");
} else { // else executed because 0 is falsey value
    console.log("You should get a job");
}

let height; // it's empty value, so it's undefined, falsy value
height = 0; // 0 is also falsy value
if (height) {
    console.log("Height is defined");
} else {
    console.log("height is NOT DEFINED");
};

// Equality operators =, ==, ===
// === is an exact and strict equal of data type, it requires to have exact number and exact data type
// == has type coercion, can transform from string to number and be true

// 18 === 18 TRUE (exact data type and exact value)
// 18 === 21 FALSE (not exact number)
// 18 === "18" FALSE (different data types)

// 18 == 18 TRUE (exact value)
// 18 == 21 FALSE (not exact number)
// 18 == "18" TRUE (because it will convert "18" String to a math number 18 = 18)

// const age = 21;
if (age === 18) { // age = 21 but it required exactly 18
    console.log(`You have became an adult`);
} else if (age == "21") { // even with "21" string, will be true with age 21 to "21"
    console.log(`You have became an adult (== equal)`);
} else {
    console.log("NA");
}

const num = "25"; // String

if (num === 25) { // === strict, must be number 25 with other number 25, the same data type and value
    console.log("YES");
} else {
    console.log("NO"); // RESULT NO, different data types
}

if (num == 25) { // ==, type coercion, can 25 and "25" as a true, the same number but different data types
    console.log("YES"); // RESULT YES, different data types but the same value creating from string to a math number
} else {
    console.log("NO");
}

if (num !== 25) { // "25" is not === 25
    console.log("YES")
}

// AND &&  OR ||
let hasDriverLicense = true;
let hasGoodVision = false;

console.log(hasDriverLicense && hasGoodVision); // false because it must be true for both
console.log(hasDriverLicense || hasGoodVision); // true because one of them must be true
console.log(!hasDriverLicense); // false ! inverts value, it was true but with ! it became false

let shouldDrive = hasDriverLicense && hasGoodVision; // it's reqiored to be both true for &&
if (shouldDrive) {
    console.log(`${firstName} can drive`);
} else {
    console.log(`${firstName} should not drive`); // result
}

hasGoodVision = true;
hasDriverLicense = true;
shouldDrive = hasDriverLicense && hasGoodVision;

if (shouldDrive) { // they are both true
    console.log(`${firstName} can drive`); // result
} else {
    console.log(`${firstName} should not drive`);
}

let isTired = true;
hasGoodVision = true;
hasDriverLicense = true;
console.log(hasDriverLicense || hasGoodVision || isTired); // if one of them true, result TRUE
console.log(hasDriverLicense && hasGoodVision && isTired); // all of them true, result TRUE

hasGoodVision = true;
hasDriverLicense = true;
isTired = false;
console.log(hasDriverLicense || hasGoodVision || isTired); // if one of them true, result TRUE
console.log(hasDriverLicense && hasGoodVision && isTired); // all of them must be true, but isTired is false, result FALSE

if (shouldDrive && hasGoodVision && !isTired) { // isTired will be inverted to TRUE
    console.log(`${firstName} can drive`); // result because all of them are true
} else {
    console.log(`${firstName} should not drive`);
}

/* CHALLENGE #3
There are two gymnastics teams: Dolphins and Koalas. 
They compete against each other 3 times.
The winner with the highest average score wins a trophy!

Your tasks:
1. Calculate the average score for each team,
using the test data included below. The average score for Dolphins
should be assigned to the scoreDolphins variable, and the average score
of Koalas should be assigned to the scoreKoalas variable.

2. Compare the team's average scores to determine the winner
of the competition, and print to the console:
"Dolphins win the trophy" if Dolphins win, or
"Koalas win the trophy" if Koalas win, or
"Both win the trophy" if their average scores are equal.
TEST DATA: Dolphins scored 96, 108, and 89. Koalas scored 88, 91, and 110. */

// SOLUTION CHALLENGE #3
const scoreDolphins = (96 + 108 + 89) / 3;
const scoreKoalas = (88 + 91 + 110) / 3;

if (scoreDolphins > scoreKoalas) {
    console.log(`Dolphins win the trophy ${scoreDolphins}`);
} else if (scoreKoalas > scoreDolphins) {
    console.log(`Koalas win the trophy ${scoreKoalas}`);
} else if (scoreDolphins === scoreKoalas) {
    console.log(`Both win the trophy Dolphins (${scoreDolphins}) vs Koalas (${scoreKoalas})`)
}

// Switch statement
/* switch(){
    case "":
        console.log()
        break;
    case "";
}
*/
const day = "monday";
switch (day) {
    case "monday": // day === "monday"
        console.log(`I plan for work`);
        console.log(`Coding meetup`);
        break;
    case "tuesday":
        console.log("Prepare theory");
        break;
    case "wednesday":
        console.log("Eat");
        break;
    default:
        console.log("Not valid day");
}

// Conditional Ternary Operator
// Statement if true ? expression : else expression
// if this statement is true ? then expression : else expression
age >= 18 ? console.log("I am an adult person") : console.log("You need to grow up");

let currentAGe = 16;
const drink = currentAGe >= 18 ? "Adult" : "Kid";
console.log(drink);

console.log(`I am ${currentAGe >= 18 ? "Adult" : "Kid"}`);

/* CHALLENGE #4
Steven needs a very simple tip calculator for whenever
he goes to eat in a restaurant. In his country, it's usual
to tip 15% if the bill value is between 50 and 300.
If the value is different, the tip is 20%.

Your tasks:
Calculate the tip, depending on the bill value.
Create a variable called tip for this. It's not allowed to
use an if...else statement.

Print a string to the console containing the bill value,
the tip, and the final value (bill + tip).

Example: The bill was 275, the tip was 41.25,
and the total value 316.25.

Note: Use the values of the bill and tip variables
to construct this string. Don't hard-code them 🙂

TEST DATA: Test with different bill values: 275, 40, and 430

HINT: To calculate 20% of a value, simply multiply it by 20/100 = 0.2
HINT 2: Value X is between 50 and 300,
    if it 's >= 50 && <= 300 😉
*/

// SOLUTION CHALLENGE #4
const bill = 275;
const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill+tip}`);