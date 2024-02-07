"use strict";

// Data needed for a later exercise
const flights =
  "_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30";

// Data needed for first part of the section
const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],

  orderMenu: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderCheckout: function ({ starterFood, mainFood, time, zIndex, address }) {
    console.log(
      `Your ${this.starterMenu[starterFood]} and ${this.mainMenu[mainFood]} will be delivered to ${address}, ${zIndex} at ${time}`
    );
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(`Here is your pasta with ${ing1}, ${ing2}, ${ing3}`);
  },

  orderPizza: function (requiredIngridient, ...otherIngridients) {
    console.log(requiredIngridient, otherIngridients);
  },

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
};

restaurant.orderCheckout({
  time: "22:30",
  address: "Wadmans Linje 10",
  zIndex: 56133,
  starterFood: 1,
  mainFood: 2,
});

// Array destructuring
// const [] it means destructuring array assignment
const array = [2, 3, 4];
const a = [0];
const b = [1];
const c = [2];

const [x, y, z] = array; // Destrucure array and define to previus value
console.log(x, y, z); // [2, 3, 4]

/* const restaurant = {
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
*/

const [first, second] = restaurant.categories; // Unpacking array to first 2 elements
console.log(first, second); // Italian Pizzeria

// Skipping elements with ,
let [primary /* skipped element */, , secondary] = restaurant.categories; // Unpacking array and skipping second element
console.log(primary, secondary); // Italian Vegetarian

// Reverse values through destructuring arrays (switching, mutating variables)
[primary, secondary] = [secondary, primary];
console.log(primary, secondary); // From  Italian Vegetarian to Vegetarian Italian

/* const restaurant = {
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],

    orderMenu: function (starterIndex, mainIndex) {
      return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
    }
*/

console.log(restaurant.orderMenu(2, 1)); // (2 elements) ['Garlic Bread', 'Pasta']
console.log(restaurant.orderMenu(1, 0)); // (2 elements) ['Bruschetta', 'Pizza']

// Receive 2 return values from orderMenu() function
const [firstFood, secondFood] = restaurant.orderMenu(1, 1);
console.log(firstFood, secondFood); // Bruschetta Pasta (Strings)

// Nested arrays (one inside of another)
const nestedArray = [1, 2, 3, [4, 5]];
const [i /* skipped 2 */ /* skipped 3 */, , , j /* [4, 5] */] = nestedArray;
console.log(i, j);

// Destructure inside of other destructure (Nested destructuring)
const [q, , , [w, e]] = nestedArray;
console.log(q, w, e); // 1, 4, 5

// -------------------------------------------------

// Objects destructuring
/* const restaurant = {
  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
}; */

// Create new vars based on restairant object
const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

/* Classico Italiano
  {thu: {…}, fri: {…}, sat: {…}} 
  (4) ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'] */

// Reassign old vars to new vars
const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
// The same result but with new vars
console.log(restaurantName, hours, tags);

// Destructuring objects (switching, mutating variables)
let p = 111;
let o = 777;

const obj = {
  p: 23,
  o: 444,
  h: 999,
};

({
  // mutating for objects need to cover in (), therefore ({a, b, c} = variable)
  p,
  o,
} = obj);
console.log(p, o); // it was 111, 777 and became 23, 444

// Real world object deconstruct
/* const restaurant = {
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  orderCheckout: function ({ // Creating function with whole object as a parameter
    starterFood,
    mainFood,
    time,
    zIndex,
    address
  }) {
  // Deconstruct every object value
    console.log(`Your ${this.starterMenu[starterFood]} and ${this.mainMenu[mainFood]}
    will be delivered to ${address}, ${zIndex} at ${time}`)
  },
};

restaurant.orderCheckout({
  time: "22:30",
  address: "Wadmans Linje 10",
  zIndex: 56133,
  starterFood: 1,
  mainFood: 2
});
*/

// -------------------------------------------------

// Spread Operator ...
// ... (spread operator) takes all values and write manulally to other array together in 1 array
const oldArray = [10, 20, 30];
const newArray = [1, 2, 3, ...oldArray]; // [1, 2, 3, 10, 20, 30] (Array of numbers)
console.log(newArray);
console.log(...newArray); // 1, 2, 3, 10, 20, 30 Numbers

/* const restaurant = {
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
};
*/
// Adding new value to mainMenu Array
// taking all values in ... operators and adding new value at the end
const newMenu = [...restaurant.mainMenu, "Gnocci"];
console.log(newMenu); // (4 elements) ['Pizza', 'Pasta', 'Risotto', 'Gnocci']

// Copy array
// Takes all elements with ... spread operator
const mainMenuCopied = [...restaurant.mainMenu]; // shallow copy of mainMenu array

// Combine arrays (join 2 or more arrays);
// ...array1, ...array2, ...array3 will take all values and create a new big array with all its elements
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
// (7 elements) ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad', 'Pizza', 'Pasta', 'Risotto']
console.log(menu);

// Iterables: arrays, strings, maps, sets. NOT OBJECTS.
const stringName = "Alman";
const letters = [...stringName]; // It takes every letter and make single elements accordign string text
console.log(letters); // (5 elements) ['A', 'l', 'm', 'a', 'n']

// Real world example
/* orderPasta: function (ing1, ing2, ing3) {
    console.log(`Here is your pasta with ${ing1}, ${ing2}, ${ing3}`);
  }
*/
// const ingridients = [prompt("Lets make pasta! Ingridient 1:"),
//   prompt("Lets make pasta! Ingridient 2:"), prompt("Lets make pasta! Ingridient 3:")
// ];
// console.log(ingridients);
// ...ingridients takes all elements from prompt values
// example for prompt(): chicken, alfredo sauce, cheese
// restaurant.orderPasta(...ingridients); // Here is your pasta with chicken, alfredo sauce, cheese

// Spread operator (...) on objects
const newRestaurant = {
  CEO: "Harbi",
  revenue: "2 billion dollars",
  ...restaurant, // copied and taken all elements from old restaurant
  founded: 1991,
};
/* {CEO: 'Harbi',
  revenue: '2 billion dollars',
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23,
  Firenze, Italy',
  categories: Array(4)}
*/
console.log(newRestaurant); // created brand new object with old elements, original + new values

// Rest operator, rest parameters
// Rest operator writes the same with spread but it must be on the left part of =
// Rest operator must be at the end of elements, not like spread
const [
  f,
  g,
  ...others /* (it's rest operator because on the left part of =) */
] = [1, 2, 3, 4, 5];
console.log(f, g, others); // 1, 2, (3 elements) [3, 4, 5]
// it takes rest elements and combine them in new array

// Rest + spread operators together
const [
  pizza /* skipped meal */,
  ,
  risotto,
  ...otherFood
  /* (it's rest operator because it's on the left side) */
] = [
    ...restaurant.mainMenu,
    ...restaurant.starterMenu,
    /* both spread operators, because on the right side 0f = */
  ];
console.log(pizza, risotto, otherFood);
// Pizza Risotto (4 elements) ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad']

// Rest parameters on functions
// With rest parameters it's possible to take all values no matter how many in parameters in function

// BEFORE (ES5)
// Parameters were static on how many delcared in function
const numbers1 = function (/* 4 parameters */ num1, num2, num3, num4) {
  console.log(num1, num2, num3, num4);
};

numbers1(1, 2, 3, 4); // 4 values
numbers1(10, 20, 30, 40); // Numbers 1 2 3 4; 10 20 30 40

// AFTER (ES6)
const numbers2 = function (
  /* rest operator takes all values no matter how many parameters */ ...values
) {
  console.log(values);
  let sum = 0;
  for (let i = 0; i < values.length; i++) {
    sum += values[i];
  }
  console.log(sum);
};

// rest parameters takes all values, combine and make to a new array
numbers2(2, 3); // (2 elements) [2, 3]
numbers2(30, 40, 50, 60, 70, 80); // (6 elements) [30, 40, 50, 60, 70, 80]
numbers2(1); // [1]
numbers2(111, 222, 333, 444, 555); // (5 elements) [111, 222, 333, 444, 555]

// Rest parameters example
/* orderPizza: function (requiredIngridient, ...otherIngridients (it's rest parameter)) {
    console.log(requiredIngridient, otherIngridients);
  },
*/
restaurant.orderPizza("chicken", "mushrooms", "tomato", "sauce");
// rest parameters will take all rest values and combine them in 1 new array
// requiredIngridient is Chicken and rest of them are in 1 new array combined
// chicken (3 elements) ['mushrooms', 'tomato', 'sauce']

// -------------------------------------------------

// Short circuiting ||
// Use any data type, return any data type
// Short circuiting || shows the first TRUE value and ignores rest values
console.log(3 || "Alman"); // 3
console.log("" || "Alman"); // Alman string (bcs it's true, "" empty string is false)
console.log(true || 0); // true
console.log(undefined || null); // null

let guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guests1); // 10 because numGuests does't exist now

guests1 = restaurant.numGuests || 15; // Takes first TRUE value (numGuests is false), 15 is true
console.log(guests1); // 15

// Short circuiting &&
// If the first value is falsey in && operator then it means that the whole argument is false
console.log(0 && "Alman"); // 0 bcs 0 is falsey and && requires both values to be true otherwise all is false
console.log(7 && "Alman."); // Alman. both are true and return the LAST value
console.log(10 && "Alman" && "Sakhab" && null); // null bcs if 1 false then everything is false in &&

// -------------------------------------------------

// Logical Assignment Operators (ES12 (2021))
const restaurant1 = {
  name: "Appuchiuno",
  guests: 10,
};

const restaurant2 = {
  name: "Gianinno",
  owner: "Hasam Lundo"
};

// Creating new guests property to restaurant2 object if restaurant1 has guests then create 20 guests or 50 if false
restaurant2.guests = restaurant1.guests || 50;
console.log(restaurant2.guests); // 20

restaurant2.guests = restaurant2.guests || 100;
console.log(restaurant2.guests); // 100

// New Assignment Operators (ES12 2021)
// OR Assignment operator ||=
// ||= it's the same as rest1 = rest1 || 30
restaurant1.guests ||= 30;
console.log(restaurant1.guests); // 10

// Noulish assignment operator ??=
// It works if statement is null or undefined
restaurant2.guests ??= 50;
// Restaurant2 doesn't have guests, so it's null and ??= works with null or undefined ONLY
console.log(restaurant2.guests); // 50

// Example with Assignment Operator &&
// OLD WAY
restaurant1.owner = restaurant1.owner && "Alman Nazyrov";
restaurant2.owner = restaurant2.owner && "Alman Nazyrov";
console.log(restaurant1, restaurant2);

// NEW WAY
restaurant1.owner &&= "Alman Nazyrov";
restaurant2.owner &&= "Alman Nazyrov";
console.log(restaurant1, restaurant2);

// Example with Assignment Operator ||
// OLD WAY
restaurant1.owner = restaurant1.owner || "Alman Nazyrov";
restaurant2.owner = restaurant2.owner || "Alman Nazyrov";
console.log(restaurant1, restaurant2);

// NEW WAY
restaurant1.owner ||= "Alman Nazyrov";
restaurant2.owner ||= "Alman Nazyrov";
console.log(restaurant1, restaurant2);

/* Coding Challenge #1
We're building a football betting app!
Suppose we get data from a web service about a certain game ('game' variable on
next page). In this challenge we're gonna work with that data.
Your tasks:
1. Create one player array for each team (variables 'players1' and
'players2')

2. The first player in any player array is the goalkeeper and the others are field
players. For Bayern Munich (team 1) create one variable ('gk') with the
goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10
field players

3. Create an array 'allPlayers' containing all players of both teams (22
players)

4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a
new array ('players1Final') containing all the original team1 players plus
'Thiago', 'Coutinho' and 'Perisic'

5. Based on the game.odds object, create one variable for each odd (called
'team1', 'draw' and 'team2')

6. Write a function ('printGoals') that receives an arbitrary number of player
names (not an array) and prints each of them to the console, along with the
number of goals that were scored in total (number of player names passed in)

7. The team with the lower odd is more likely to win. Print to the console which
team is more likely to win, without using an if/else statement or the ternary
operator.

Test data for 6.: First, use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'.
Then, call the function again with players from game.scored
GOOD LUCK 😀 */

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski',
    'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

const [players1, players2] = game.players;
const [gk, ...fieldPlayers] = players1;
console.log(gk, fieldPlayers);

const allPlayers = [...players1, ...players2];
const players1Final = [...players1, "Thiago", "Coutinho", "Perisic"];

const { odds: { team1, x: draw, team2 } } = game;
console.log(team1, x, team2);

const printGoals = function (...players) {
  console.log(`${players.length} goals were scored`);
}

printGoals("Davies", "Muller", "Lewandowski", "Kimmich", "Alman", "Sakhab"); // 6 goals were scored
printGoals("Davies", "Muller"); // 2 goals were scored

printGoals(...game.scored); // 4 goals were scored

// -------------------------------------------------

// For-of Loop
const menuLoop = [...restaurant.mainMenu, ...restaurant.starterMenu];
// for(variable of block); It does't need any counters or conditions like i++ etc.
for (const item of menu) console.log(item);
/*Focaccia
  Bruschetta
  Garlic Bread
  Caprese Salad
  Pizza
  Pasta
  Risotto */

// Taking current index from for of loop
for (const item of menu.entries()) {
  console.log(item);
}
/*(2) [0, 'Focaccia']
  (2) [1, 'Bruschetta']
  (2) [2, 'Garlic Bread']
  (2) [3, 'Caprese Salad']
  (2) [4, 'Pizza']
  (2) [5, 'Pasta']
  (2) [6, 'Risotto'] */

for (const [index, element] of menu.entries()) {
  // index: food
  // 0+1: element => 1: Focaccia
  console.log(`${index + 1}: ${element}`);
}

/*1: Focaccia
  2: Bruschetta
  3: Garlic Bread
  4: Caprese Salad
  5: Pizza
  6: Pasta
  7: Risotto */

// -------------------------------------------------

// Optional Chaining
// ?. is for checking if exists if not then return Undefined
// It works perfectly with ?? that works if statement is undefined or null
console.log(restaurant.openingHours.mon?.open);

const days = ["mon", "tue", "wed", "thu", "fri", "sat", "sund"];
for (const index of days) {
  // console.log(index);
  /*mon
    tue
    wed
    thurs
    frid
    sat
    sund */
  const open = restaurant.openingHours[index]?.open ?? "closed";
  const close = restaurant.openingHours[index]?.close;
  console.log(`On ${index}, we are open at ${open}`);
}

// Optional chaining on Methods
// check if method exists and if not then return instead of undefined
console.log(restaurant.orderMenu?.(1, 2) ?? "It does not exist");
// It exists and returned (2 elements) ['Bruschetta', 'Risotto']

console.log(restaurant.orderRisotto?.(1, 2) ?? "It does not exist");
// It checked and it does't exist, then return instead undefined "It does not exist"

// -------------------------------------------------

/* Coding Challenge #2
Let's continue with our football betting app! Keep using the 'game' variable from
before.
Your tasks:
1. Loop over the game.scored array and print each player name to the console,
along with the goal number (Example: "Goal 1: Lewandowski")
2. Use a loop to calculate the average odd and log it to the console (We already
studied how to calculate averages, you can go check if you don't remember)
3. Print the 3 odds to the console, but in a nice formatted way, exactly like this:
Odd of victory Bayern Munich: 1.33
Odd of draw: 3.25
Odd of victory Borrussia Dortmund: 6.5
Get the team names directly from the game object, don't hardcode them
(except for "draw"). Hint: Note how the odds and the game objects have the
same property names 😉

GOOD LUCK 😀 */

for (const [index, player] of game.scored.entries()) {
  console.log(`Goal ${index + 1}: ${player}`);
  /*Goal 1: Lewandowski
    Goal 2: Gnarby
    Goal 3: Lewandowski
    Goal 4: Hummels */
};

const odds = Object.values(game.odds);
let average = 0;

for (const odd of odds) {
  average += odd;
  average /= odds.length;
  console.log(average);
}
for (const [team, odd] of Object.entries(game.odds)) {
  console.log(team, odd);
}

// -------------------------------------------------

// Sets
/* Sets are collection of unique values.Each value can only occur once in a Set.
A Set can hold any value of any data type
Sets and variables must be unique and if something repetitve so it avoids */
const orderSet = new Set(["pizza", "pasta", "risotto", "pizza", "pasta", "risotto"]);
console.log(orderSet); // Set(3) {'pizza', 'pasta', 'risotto'}

// .has() method if need to check for having values
console.log(orderSet.has("pizza")); // true
console.log(orderSet.has("kebab")); // false
console.log(orderSet.has("pasta")); // true

// .add() method if need to add value at the end of set
orderSet.add("Kebab");
console.log(orderSet) // Set(4) {'pizza', 'pasta', 'risotto', 'Kebab'}

// .delete() method if need to delete exact value from the set
orderSet.delete("risotto");
console.log(orderSet); // Set(3) {'pizza', 'pasta', 'Kebab'}

// Sets are iterables, therefore, it can used to for of loop

for (let order of orderSet) {
  console.log(order);
  /*pizza
    pasta
    Kebab */
}

// Real world example
// Write as lot of jobs and make it unqiue and convert them in Array
const jobs = ["Manager", "CEO", "Programmer", "Designer", "Manager", "CEO"];
const jobsUnique = [...new Set(jobs)]; // spread operator with [] for array values
console.log(jobsUnique); // (4 elements) ['Manager', 'CEO', 'Programmer', 'Designer']

// -------------------------------------------------

// Maps
// Maps is data structure that use values to keys
// Maps consist of KEYS and VALUES
const restaurantMap = new Map("");
// set() method adds new value and update the map
restaurantMap.set("name", "Classico italiano");
restaurantMap.set(1, "Wadmans Linje 10");
restaurantMap.set(2, "Wadmans Linje 12");
/* Map(3)
{'name' => 'Classico italiano', 1 => 'Wadmans Linje 10', 2 => 'Wadmans Linje 12'}
[[Entries]]
0: {"name" => "Classico italiano"}
1: {1 => "Wadmans Linje 10"}
2: {2 => "Wadmans Linje 12"}
size: 3 */
console.log(restaurantMap);

// Adding set methods and chaining inside of the map
// Structure Key: Value
restaurantMap.set("categories", ["Italian", "Pizzeria", "Vegetarian", "Organic"])
  .set("open:", 11)
  .set("close:", 22)
  .set(true, "We are open")
  .set(false, "We are closed");

// Passing keys for showing its values
// get() method takes keys and return values from maps
console.log(restaurantMap.get("categories")); // (4) ['Italian', 'Pizzeria', 'Vegetarian', 'Organic']
console.log(restaurantMap.get(true)); // We are open

// Maps methods
// map.has(value) checks if KEY exists
restaurantMap.has("categories");
restaurantMap.delete("categories");
console.log(restaurantMap); // categories key and its values disappeared

// map.size shows how many KEYS are in the map 
console.log(restaurantMap.size); // 7 

// map.set() method works with DOM
restaurantMap.set(document.querySelector("h1"), "Heading 1");
console.log(restaurantMap);

// Full map structure
// Every entry has own KEY and its value

/* Map(8) {'name' => 'Classico italiano', 1 => 'Wadmans Linje 10', 2 => 'Wadmans Linje 12', 'open:' => 11, 'close:' => 22, …}
[[Entries]]
0: {"name" => "Classico italiano"}
  key: "name"
  value: "Classico italiano"
1: {1 => "Wadmans Linje 10"}
  key: 1
  value: "Wadmans Linje 10"
2: {2 => "Wadmans Linje 12"}
  key: 2
  value: "Wadmans Linje 12"
3: {"open:" => 11}
  key: "open:"
  value: 11
4: {"close:" => 22}
  key: "close:"
  value: 22
5: {true => "We are open"}
  key: true
  value: "We are open"
6: {false => "We are closed"}
  key: false
  value: "We are closed"
7: {h1 => "Heading 1"}
  key: h1
  value: "Heading 1"
size: 8
[[Prototype]]: Map */

const questions = new Map([
  ["question", "What is the best programming language in the world?"],
  [1, "C++"],
  [2, "Java"],
  [3, "JavaScript"],
  ["correct", 3],
  [true, "Correct"],
  [false, "Try Again"]
]);
console.log(questions);

for (const [key, entries] of questions) {
  if (typeof key === "number") {
    console.log(`Answer: ${key} - ${entries}`)
  }
}

// const answer = Number(prompt("What is the best programming language in the world?"));
// console.log(questions.get(questions.get("correct") === answer));

/* Coding Challenge #3
Let's continue with our football betting app! This time, we have a map called
'gameEvents'(see below) with a log of the events that happened during the
game.The values are the events themselves, and the keys are the minutes in which
each event happened(a football game has 90 minutes plus some extra time).
Your tasks:
1. Create an array 'events' of the different game events that happened(no
duplicates)
2. After the game has finished, is was found that the yellow card from minute 64
was unfair.So remove this event from the game events log.
3. Compute and log the following string to the console: "An event happened, on
average, every 9 minutes" (keep in mind that a game has 90 minutes)
4. Loop over 'gameEvents' and log each element to the console, marking
whether it's in the first half or second half (after 45 min) of the game, like this:
[FIRST HALF]17:
⚽
GOAL
GOOD LUCK 😀*/
const gameEvents = new Map([
  [17, '⚽ GOAL'],
  [36, '🔁 Substitution'],
  [47, '⚽ GOAL'],
  [61, '🔁 Substitution'],
  [64, '🔶 Yellow card'],
  [69, '🔴 Red card'],
  [70, '🔁 Substitution'],
  [72, '🔁 Substitution'],
  [26, '⚽ GOAL'],
  [80, '⚽ GOAL'],
  [12, '🔶 Yellow card'],
]);

const events = [...new Set(gameEvents.values())];
console.log(events);

gameEvents.delete(64);

console.log(`An event happened, on average, every ${90 / gameEvents.size} minutes`)

for (const [minute, event] of gameEvents) {
  const halfTime = minute < 45 ? "First" : "Second";
  console.log(`${halfTime} half of ${event}: ${minute} minutes`)
}

// -------------------------------------------------
// Work with Strings
const airline = "S7 Airlines";
const plane = "A320";

console.log(plane[0]); // A
console.log(plane[1]); // 3
console.log(plane[2]); // 2
console.log(plane[3]); // 0

console.log("B370"[0]); // B

console.log(airline.length); // 11 letters
console.log("B370".length); // 4 letters

// indexOf() method
// It was used for finding location or position of letter or element (first occurance, first finding)
console.log(airline.indexOf("s")); // 10 because s was found on the 10th letter place (S7 AirlineS)

// lastindexOf() method
// Used for last occuranse, if there is 2 same letters or elements, it will use last element
console.log(airline.lastIndexOf("i")); // 7, last index of letter

// slice() method
// Used to slice first letters and start extract from sliced string
console.log(airline.slice(3)); // Airlines, bcs 3 letters were sliced or deleted and rest stayed Airlines

// slice method from the end
console.log(airline.slice(-1)); // s bcs it will take the last letter from String

const middleSeat = function (seat) {
  const middleSeatPassanger = seat.slice(-1);
  if (middleSeatPassanger === "B" || middleSeatPassanger === "E") {
    console.log(`You have middle seat ${seat} on the plane`)
  } else {
    console.log("You have other seat");
  }
}

middleSeat("20B");
middleSeat("6A");
middleSeat("12E");
middleSeat("86C");

// toLowerCase
// make all letters of string to be lower case
console.log(airline.toLowerCase()); // s7 airlines

// toUpperCase
// make all letters of string to be higher case (like capslock)
console.log(airline.toUpperCase()); // S7 AIRLINES

// Fix capitalization in passenger
let passenger = "aLMaN";
let passengerLower = passenger.toLowerCase();
let passangerCorrect = passengerLower[0].toUpperCase() + passengerLower.slice(1);
console.log(passangerCorrect);

const passengerNameCorrecter = function (name) {
  let passengerLower = name.toLowerCase();
  passengerLower = passengerLower[0].toUpperCase() + passengerLower.slice(1);
  console.log(passengerLower);
}
passengerNameCorrecter("alMAn");
passengerNameCorrecter("SAKhaB");

// comparing emails
const email = "almannaz161091@gmail.com";
const emailLoginned = "   AlMaNNAZ161091@GMAil.coM ";

// trim() method
// trim() deletes all spaces or weird symbols
const emailNormal = email.toLowerCase();
const emailTrimmed = emailNormal.trim();
console.log(emailTrimmed); // almannaz161091@gmail.com

// replacing strings
// replace() method replaces string values text and created new string (not mutable)
// this method needs to show first what to cut and second what to put instead or cutted letter
const price = "300$";
// deleted firstly $ currency and replaced to RUB
const priceRUB = price.replace("$", "RUB");
console.log(priceRUB); // 300RUB

// icludes() method
// if word or letter includes in String, then it will show TRUE
console.log(priceRUB.includes("RUB")); // true

// startsWith() method
// this method needs to find if string start with letter or word
console.log(priceRUB.startsWith("3")); // true

// endsWith() method
// this method needs to find if string end with letter or word
console.log(priceRUB.endsWith("RUB")); // true

// Exercise
const boardAllowCheck = function (items) {
  const buggage = items.toLowerCase();
  if (buggage.includes("gun") || buggage.includes("bomb") || buggage.includes("knife")) {
    console.log(`You are NOT ALLOWED on the board`);
  } else {
    console.log(`You are allowed on the board. Welcome aboard!`)
  }
}

boardAllowCheck("I have a laptop, pocket knife, Gun and Bomb");
boardAllowCheck("I have a laptop, socks and T-shirt");
boardAllowCheck("I have bomb");

// split() method
// this mthod split string in parts from one array to multiple parts as a new array with new elements
console.log("a+very+nice+person+Alman".split("+")); // (5 elements) ['a', 'very', 'nice', 'person', 'Alman']
console.log("Alman Nazyrov".split(" ")); // (2 elements) ['Alman', 'Nazyrov']

// Paddings for strings
// padStart() and padEnd() paddings to add symbols from front to back of strings
const message = 'Go to gate 23!';
console.log(message.padStart(20, '+').padEnd(30, '+')); // ++++++Go to gate 23!++++++++++
console.log('Alman'.padStart(20, '+').padEnd(30, '+')); // +++++++++++++++ Alman++++++++++

const maskCreditCard = function (number) {
  const str = number + '';
  const last = str.slice(-4);
  return last.padStart(str.length, '*');
};

console.log(maskCreditCard(64637836));
console.log(maskCreditCard(43378463864647384));
console.log(maskCreditCard('334859493847755774747'));

// Repeat strings
const message2 = 'Bad waether... All Departues Delayed... ';
console.log(message2.repeat(5));

const planesInLine = function (n) {
  console.log(`There are ${n} planes in line ${'🛩'.repeat(n)}`);
};

planesInLine(5);
planesInLine(3);
planesInLine(12);