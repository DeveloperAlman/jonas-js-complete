'use strict';
// Object-oriented programming theory
/*
Object-Oriented Programming (OOP) Overview:
Definition: OOP is a programming paradigm based on objects,
combining data (properties) and behavior (methods).

Objects and Paradigm:
Objects are used to model real-world aspects like users,
to-do list items, HTML components, or data structures.
Paradigm refers to the coding style and organization.

Properties and Methods:
Objects can contain data (properties) and behavior (methods).
This encapsulation makes it easy to directly act on the data.

OOP in Action:
Objects are self-contained code blocks, used as building blocks in applications.
Interactions happen through a public interface (API), a set of methods accessible from outside.

Purpose of OOP:
Developed to organize code, making it flexible and easier to maintain.
Addresses issues like spaghetti code in large code bases.
Comparison with Other Paradigms:

OOP is not the only way; functional programming is an alternative.
Functional programming will be discussed later in the course.

Introduction to Classes:
Classes are blueprints for creating objects.
Instances are objects created from classes, sharing functionality.

Abstraction:
Involves ignoring or hiding unnecessary details.
Essential for getting an overview perspective.

Encapsulation:
Keeps some properties and methods private inside a class.
Public interface (API) exposes methods, preventing direct manipulation of internal state.

Inheritance:
Allows one class to inherit properties and methods from another.
Promotes code reuse; child classes inherit from a parent class.

Polymorphism:
Child classes can override inherited methods.
Example: Admin and Author classes inheriting and modifying the login method.

Conclusion:
OOP provides a structured approach to code organization.
JavaScript implements OOP with classes and instances, though differently than described."
This structured outline summarizes the key concepts of the provided text. */

// Constructor functions
// Always start with big letter declaration and execute with word "new"
const Person = function (firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
}
const almanObject = new Person("Alman", 2002);
console.log(almanObject);

// Can pass other functions in 1 constructor
const alvi = new Person("Alvi", 1991);
console.log(alvi);

// Prototype
Person.prototype.calcAge = function () {
    let currentYear = 2024;
    console.log(currentYear - this.birthYear);
}

alvi.calcAge(1991);
almanObject.calcAge(2002);

const Car = function (make, speed) {
    this.make = make;
    this.speed = speed
};

const bmw = new Car("BMW", 120);
const mercedes = new Car("Mercedes", 95);

Car.prototype.accelerate = function () {
    this.speed += 10;
    console.log(`${this.make} is going at ${this.speed} km/hour`);
};

Car.prototype.brake = function () {
    this.speed -= 5;
    console.log(`${this.make} is going at ${this.speed} km/hour`);
};

bmw.accelerate();
bmw.accelerate();
bmw.brake();
bmw.accelerate();

// ES6 Classes
// the same but better syntax
// class declaration
class Persons {
    constructor(firstName, birthYear) {
        this.firstName = firstName;
        this.birthYear = birthYear;
    }
    // Methods will be added to prototype property automatically
    calcAge() {
        console.log(2024 - this.birthYear)
    }

    greetings() {
        console.log(`${this.firstName} greets you! Hey!`)
    }
}
const alim = new Persons("Harbi", 1996);
console.log(alim);
alim.calcAge();
alim.greetings();


// Get, Set
const accounts = {
    owner: "Alman",
    movements: [100, 50, 220],

    get latestMovement() {
        return this.movements.slice(-1).pop();
    },

    set latest(movement) {
        this.movements.push(movement);
    }
};
console.log(accounts.latestMovement); // 220
accounts.latest = 50;
console.log(accounts.movements); // (4) [100, 50, 220, 50]

// Challenge 2
class CarClass {
    constructor(make, speed) {
        this.make = make;
        this.speed = speed;
    }

    accelerate() {
        this.speed += 10;
        console.log(`${this.make} is going at ${this.speed} km/hour`);
    }

    brake() {
        this.speed -= 5;
        console.log(`${this.make} is going at ${this.speed} km/hour`)
    }

    get speedUS() {
        return this.speed / 1.6;
    }

    set speedUS(speed) {
        this.speed = speed * 1.6;
    }
}
const ford = new CarClass("Ford", 120);
console.log(ford.speedUS);
ford.accelerate();
ford.accelerate();
ford.accelerate();
ford.brake();

ford.speedUS = 100;
console.log(ford);

class Account {
    constructor(owner, currency, pin) {
        this.owner = owner;
        this.currency = currency;
        this.pin = pin;
    }
}
const account1 = new Account("Alman", "USD", 1111);
console.log(account1);