'use strict';

// Default parameters in functions
let bookings = [];
const createBooking = function (flight, numPassenger = 10, price = 100 * numPassenger) {

    const booking = {
        flight,
        numPassenger,
        price
    }
    console.log(booking);
    bookings.push(booking);
};

createBooking("LH103", 25);

// How parameters works in functions

let flight = "LH123";
const alman = {
    fullName: "Alman Nazyrov",
    passport: 1234512345
}

const checkInBoard = function (flightNum, passenger) {
    flightNum = "LHA999";
    passenger.fullName = "Mr. " + passenger.fullName;
    if (passenger.passport === 1234512345) {
        console.log(`Check in succesful`);
    } else {
        console.log(`Wrong passport or Invalid`);
    }

}
checkInBoard(flight, alman);
console.log(flight);
console.log(alman);

const newPassport = function (person) {
    person.passport = Math.trunc(Math.random() * 1000000) + 1;
    console.log(person.passport)
}
newPassport(alman);
checkInBoard(flight, alman);

// First-class (ordinary, low-level) functions + Higher-order function
// Ordinary first class function
const oneWord = function (str) {
    return str.replace(/ /g, "").toLowerCase();
}

// Ordinary first class function
const upperFirstWord = function (str) {
    const [firstWord, ...restWords] = str.split("");
    return [firstWord.toUpperCase(), ...restWords].join(" ");
}

// Higher class function
const wordsTransformer = function (str, func) {
    console.log(`Original string: ${str}`);
    console.log(`Transformed string with function: ${func(str)}`);
    console.log(`Transformed string by this function: ${func.name}`);
}

wordsTransformer("JavaScript is the best language", upperFirstWord);
/*  Original string: JavaScript is the best language
    Transformed string with function: J a v a S c r i p t   i s   t h e   b e s t   l a n g u a g e
    Transformed string by this function: upperFirstWord
*/
wordsTransformer("JavaScript is the best language", oneWord);
/*  Original string: JavaScript is the best language
    Transformed string with function: javascriptisthebestlanguage
    Transformed string by this function: oneWord
*/

// ------------------------------------------------------------------

// Function returning other function
const greet = function (greetings) {
    return function (name) {
        console.log(`${greetings}! ${name}`)
    }
}
const greetingsHey = greet("Hey there");
greetingsHey("Alman"); // Hey there! Alman
greetingsHey("Sakhab"); // Hey there! Sakhab
greet("Hello")("Harbi");

// ------------------------------------------------------------------

// Call method for functions
const russianAirlines = {
    airline: "POBEDA",
    flightCode: "RU06",
    bookings: [],
    book(flightNum, passengerName) {
        console.log(`${passengerName} booked a seat on ${this.airline} airlines with ${this.flightCode} flight ${flightNum}`);
        this.bookings.push({
            passengerName: `${passengerName}`,
            flightNumber: `${this.flightCode}, ${flightNum}`
        })
    }
}

russianAirlines.book(888, "Alman Nazyrov");
russianAirlines.book(777, "Sakhab Nazyrov");

console.log(russianAirlines)

const euAirlines = {
    airline: "Red Wings",
    flightCode: "RW01",
    bookings: []
};

const book = russianAirlines.book;

book.call(euAirlines, "23", "Harbi Kurmakhadov");
console.log(euAirlines);

// ------------------------------------------------------------------

// Bind method on functions
// Bind is pretty the same with call() method but more advanced
const bookRU = book.bind(russianAirlines);
bookRU(90, "Alvi Nazyrov");

const bookEU = book.bind(euAirlines, 33);
bookEU("Alman nazyrov");
bookEU("Sakhab nazyrov");
bookEU("Alvi nazyrov");
bookEU("Alimkhan nazyrov");

// Bind method with eventListeners
russianAirlines.planes = 300;
russianAirlines.buyPlanes = function () {
    console.log(this);
    this.planes++;
    console.log(this.planes)
}
document.querySelector(".buy").addEventListener("click", russianAirlines.buyPlanes.bind(russianAirlines));

// ------------------------------------------------------------------

// Immedietly invoked function expressions IIFE
// these functions executes once and never runs again
// it needs to test for async or await
// IIFE writes without naming of function
// IIFE start with (function(){.....}) ();
(function () {
    console.log(`IIFE FUNCTION! THIS WILL NEVER RUN AGAIN, JUST ONCE`)
})(); // these brackets need to invoke function and never call them again, just for check

// ------------------------------------------------------------------

// Closures
const secureBooking = function () {
    let passengerCount = 0;

    return function () {
        passengerCount++;
        console.log(`${passengerCount} passengers`)
    }
}

const booker = secureBooking();
booker();
booker();
booker();

let x;
let y = function () {
    const z = 23;
    x = function () {
        console.log(z * 2);
    }
}
y();
x();

let q;
let w = function () {
    const e = 500;
    q = function () {
        console.log(e * 2);
    }
}

w();
q();