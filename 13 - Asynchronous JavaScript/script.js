'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

const countryRender = function (data, className = "") {
    const html = `
        <article class="country ${className}">
        <img class="country__img" src="${data.flags.svg}" />
        <div class="country__data">
            <h3 class="country__name">${data.name.common}</h3>
            <h4 class="country__region">${data.region}</h4>
            <p class="country__row"><span>👫</span>${(Number(data.population) / 1000000).toFixed(1)} people</p>
            <p class="country__row"><span>🗣️</span>${data.languages[Object.keys(data.languages)[0]]}</p>
            <p class="country__row"><span>💰</span>${data.currencies[Object.keys(data.currencies)[0]].name}</p>
        </div>
        </article>
    `;
    countriesContainer.insertAdjacentHTML("beforeend", html);
    // countriesContainer.style.opacity = 1;
}

// const getCountryAndNeighbour = function (country) {
//     // new XMLHttpRequest() is a function that launch asyncrouns request from API
//     const request = new XMLHttpRequest();
//     // open("type of getting info", "link of API")
//     request.open("GET", `https://restcountries.com/v3.1/name/${country}`);
//     // sending back all data from api url
//     request.send();
//     // loading data to our website that was sent
//     request.addEventListener("load", function () {
//         const [data] = JSON.parse(this.responseText);
//         console.log(data);
//         countryRender(data);

//         // render neighbour country
//         const [neighbour] = data.borders;
//         if (!neighbour) return;

//         // new XMLHttpRequest() is a function that launch asyncrouns request from API
//         const requestNeighbour = new XMLHttpRequest();
//         // open("type of getting info", "link of API")
//         requestNeighbour.open("GET", `https://restcountries.com/v3.1/alpha/${neighbour}`);
//         // sending back all data from api url
//         requestNeighbour.send();
//         requestNeighbour.addEventListener("load", function () {
//             const [dataNeighbour] = JSON.parse(this.responseText);
//             console.log(dataNeighbour);
//             countryRender(dataNeighbour, "neighbour");
//         })
//     });
// }

// getCountryAndNeighbour("russia");
// getCountryAndNeighbour("usa");
// getCountryAndNeighbour("sweden");
// getCountryAndNeighbour("turkey");
// getCountryAndNeighbour("slovakia");
// getCountryAndNeighbour("kazakhstan");
// getCountryAndNeighbour("africa");
// getCountryAndNeighbour("germany");
const renderError = function (message) {
    countriesContainer.insertAdjacentHTML("beforebegin", message);
    // countriesContainer.style.opacity = 1;
}
const getCountryData = function (country) {
    // Creating and consuming promise
    fetch(`https://restcountries.com/v3.1/name/${country}`)
        // fetch creating promise and .then() fullfil the promise
        .then((response) => {
            // convert all data to json object
            return response.json();
        }).then((data) => {
            countryRender(data[0]);

            const neighbour = data[0].borders?.[0];

            if (!neighbour) return;

            return fetch(`https://restcountries.com/v3.1/alpha/${neighbour}`);

        }).then(response => {
            return response.json();
        }).then(data => {
            countryRender(data[0], "neighbour");
            // catch method handle with errors, if no internet show alert
        }).catch((error) => {
            renderError(`Something went wrong ${error.message}`);
            // finally method wroks when the promise fully accepted adn load function
            // when fetch was accepted, it's possible to load as lazyload, spinners before loading content
        }).finally(() => {
            countriesContainer.style.opacity = 1;
        })
};
btn.addEventListener("click", function () {
    getCountryData("sweden");
    getCountryData("russia");
});

// Build own promise
const lotteryPromise = new Promise(function (accept, reject) {
    let lotteryChance = Math.trunc(Math.random() * 100) + 1;
    setTimeout(function () {
        if (lotteryChance >= 50) {
            accept(`You won lottery with ${lotteryChance}% chance`);
        } else {
            reject(`You lose lottery. You had ${lotteryChance}% chance`);
        }
    }, 3000);
});
// Consume promise
lotteryPromise.then((response) => {
    console.log(response);
}).catch((error) => {
    console.error(error);
});

const wait = function (seconds) {
    return new Promise(function (accept) {
        setTimeout(accept, seconds * 1000);
    });
};

wait(4).then(() => {
    console.log(`I waited for 4 seconds`);
});

const getPosition = function () {
    return new Promise(function (accept, reject) {
        navigator.geolocation.getCurrentPosition(
            position => accept(position),
            error => reject(error));
    });
};
getPosition().then(position => console.log(position));

// Consuming promises with async/await
const whereAmI = async function (country) {
    const response = await fetch(`https://restcountries.com/v3.1/name/${country}`);
    const data = await response.json();
    console.log(data);
    countryRender(data[0]);
};
whereAmI("poland");

// Pokemon API practise
const pokemonWrapper = document.querySelector(".pokemons");
const inputPokemon = document.querySelector(".input");
const submitPokemon = document.querySelector(".submit");

const pokemonRender = function (image, name, age) {
    const pokemonContainer = `
    <div class="pokemon">
        <img src="${image}" alt="" class="pokemon__img">
        <h1 class="pokemon__heading">${name}</h1>
        <p class="pokemon__age">${age} yo</p>
    </div>
    `;
    pokemonWrapper.insertAdjacentHTML("beforeend", pokemonContainer)
}

const pokemonAPI = async function (pokemon) {
    try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
        const pokemonData = await response.json();
        console.log(pokemonData);
        const pokemonImage = await pokemonData.sprites.front_default;
        const pokemonName = await pokemonData.name;
        const pokemonAge = await pokemonData.order;
        pokemonRender(pokemonImage, pokemonName, pokemonAge);
    }
    catch (error) {
        const value = inputPokemon.value;
        console.log(`${value} does't exist!`);
    }
}

submitPokemon.addEventListener("click", function (event) {
    event.preventDefault();
    const value = inputPokemon.value;
    pokemonAPI(value);
});