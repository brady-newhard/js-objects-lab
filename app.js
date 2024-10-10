const pokemon = require("./data.js")

const game = {
    party: [],
    gyms: [
      { location: "Pewter City", completed: false, difficulty: 1 },
      { location: "Cerulean City", completed: false, difficulty: 2 },
      { location: "Vermilion City", completed: false, difficulty: 3 },
      { location: "Celadon City", completed: false, difficulty: 4 },
      { location: "Fuchsia City", completed: false, difficulty: 5 },
      { location: "Saffron City", completed: false, difficulty: 6 },
      { location: "Cinnabar Island", completed: false, difficulty: 7 },
      { location: "Viridian City", completed: false, difficulty: 8 },
    ],
    items: [
      { name: "potion", quantity: 4 },
      { name: "pokeball", quantity: 8 },
      { name: "rare candy", quantity: 99 },
    ],
  }
  //console.dir(pokemon, { maxArrayLength: null })

  //Exercise 1

 const pokemonFiftyNine = pokemon[58]

  console.log("Exercise 1: ", pokemonFiftyNine.name)
  
/*
Exercise 2
*/

//console.log("Exercise 2: ", game)

console.log("Exercise 2:  Commented out")

/* 
// Exercise 3
// 1. Add a new property to the `game` object. Let's call it "difficulty".
// 2. Choose a value for "difficulty" that you think fits the game. Ex: "Easy", "Med" or "Hard". How would you assign it?
*/

game.difficulty = "Hard"
  
  console.log("Exercise 3: ",game.difficulty)

/*
Exercise 4
1. Select a starter Pokémon from the `pokemon` array. Remember, a starter Pokémon's `starter` property is true.
2. Add this Pokémon to the `game.party` array. Which array method will you use to add them?
*/

let starterPokemon = [];

pokemon.forEach(element => {
  if (element.starter === true) {
    // console.log("Exercise 4: ", element.name)
    starterPokemon.push(element)
}
});
const firstPokemon = starterPokemon[0];
  
game.party.push(firstPokemon)

  console.log("Exercise 4: ", firstPokemon.name)

/*
Exercise 5
1. Choose three more Pokémon from the `pokemon` array and add them to your party.
2. Consider different attributes like 'type' or 'HP' for your selection. Which array method will you use to add them?
*/

const pokemonHP = [          
          pokemon[10],
          pokemon[20],
          pokemon[30]
]

for (let i = 0; i < pokemonHP.length; i++) {
  game.party.push(pokemonHP[i].name)
}
console.log("Exercise 5: ", game.party)

/*
Exercise 6
1. Set the `completed` property to true for gyms with a difficulty below 3.
2. Think about how you'd loop through the `gyms` array to check and update the `completed` property.
*/

game.gyms.forEach(gym => {
  if (gym.difficulty < 3) {
    gym.completed = true;
    }
});
    console.log("Exercise 6: ", game.gyms);

/*
Exercise 7
1. Evolve the starter Pokémon you added to your party earlier. Each starter Pokémon evolves into a specific one.
2. How would you replace the current starter Pokémon in your party with its evolved form?

Hint: 
  - Pokemon 1: Bulbasaur evolves into Pokemon 2: Ivysaur
  - Pokemon 4: Charmander evolves into Pokemon 5: Charmeleon
  - Pokemon 7: Squirtle evolves into Pokemon 8: Wartortle
  - Pokemon 25: Pikachu evolves into Pokemon 26: Raichu

More Hints: The existing starter Pokemon will be *replaced* in your party with the Pokemon it evolved into. When working with an array of objects, the splice() array method is ideal for replacing one element with another. 
*/

game.party.splice(0, 1, "Ivysaur",);
    
  console.log("Exercise 7: ", game.party);

// Exercise 8
// 1. Print the name of each Pokémon in your party.
// 2. Consider using a loop or an array method to access each Pokémon's name.

console.log("Exercise 8: ")
for (let i = 0; i < game.party.length; i++){
  
    console.log(game.party[i]);
}

/*
Exercise 9
1. Can you print out all the starter Pokémon from the `pokemon` array?
2. Think about how you can identify a starter Pokémon and then log their names.
*/

console.log("Exercise 9: ");

const pokemonStarters = [];

starterPokemon.forEach(element => {
    pokemonStarters.push(element.name)
  })
    console.log(pokemonStarters);

/*
Exercise 10
Create a method called `catchPokemon` and add it to the `game` object. You should not need to edit the original game object directly. This method should:
  - Accept an object as a parameter called `pokemonObj`
  - Add the `pokemonObj` to the `game.party` array.
  - not return anything

After writing this method, call it and pass in a Pokemon object of your choice from the `pokemon` data to catch it.
*/

const pokemonObj = []

game.catchPokemon = function(pokemonObj) {
    game.party.push(pokemonObj)
    console.log("Exercide 10: ", pokemonObj)
};

game.catchPokemon(pokemon[34].name)

/*
Exercise 11
1. Copy the `catchPokemon` method that you just wrote above, and paste it below. Modify it so that it also decreases the number of pokeballs in your inventory each time you catch a Pokémon.
2. How will you find and update the quantity of pokeballs in the `game.items` array?

Tips:
For this exercise, it's okay to have a negative number of pokeballs.
After updating the method, call it and pass in a Pokemon object of your choice from the `pokemon` data to catch it.
Also, log the `game.items` array to confirm that the pokeball quantity is being decremented.
*/

let pokeballQuantity = game.items[1].quantity;
game.catchPokemon = function(pokemonObj) {
 game.party.push(pokemonObj)
  for (let i =5; i< game.items.length; i++) {
    if (game.items[i].name === "pokeball") {

      game.items[i].quantity--;
    }
  }
}
game.catchPokemon(pokemon[75].name, pokeballQuantity);

console.log("Exercise 11: ", game.party, pokeballQuantity);

/*
Exercise 12
1. Similar to Exercise 6, now complete gyms with a difficulty below 6. How will you approach this?
 (change the value of `complete` in the qualifying objects from false to true).
*/
game.gyms.forEach(gym => {
  if (gym.difficulty < 6) {
    gym.completed = true;
    }
});
    console.log("Exercise 12: ", game.gyms);

/*
Exercise 13
1. Create a `gymStatus` method in `game` to tally completed and incomplete gyms.
2. How will you iterate through the `gyms` array and update the tally? Remember to log the final tally.

This method should:
  - Not accept any arguments.
  - Initially create a constant `gymTally`, which is an object that has two 
    properties: `completed` and `incomplete`, both of which are initially set to 0.
  - Iterate through the objects in the `game.gyms` array and update the 
    properties on `gymTally` as follows: 
    - `completed` should count how many gyms in the array have a value of `true` 
      for their `completed` property. 
    - `incomplete` should count how many gyms in the array have a value of 
      `false` for their `completed` property.
  - Log the value of `gymTally`.
  - The method should not return anything.

For example, if five gym objects have a value of `true` on their `completed` property and three gym objects have a value of `false` on their `completed` property, the logged value would be: `{ completed: 5, incomplete: 3 }`.
*/

const gymTally = {
  completed: 0,
  incomplete: 0
}
game.gymStatus = function () {
  game.gyms.forEach(element => {
    if (element.completed === true) {
      gymTally.completed ++;
    }
    if (element.completed === false) {
      gymTally.incomplete ++;
    } 
  })
}
game.gymStatus()

console.log("Exercise 13: ", gymTally)

/*
Exercise 14
1. Add a `partyCount` method to `game` that counts the number of Pokémon in your party.

This method should:
  - Not accept any arguments.
  - Count the number of Pokemon in the party.
  - return the found number of Pokemon in the party.
*/

game.partyCount = function () {
  const partyNumber = game.party.length
  
  console.log("Exercise 14: ", partyNumber)   
}
game.partyCount()

/*
Exercise 15
1. Now, complete gyms with a difficulty below 8. Reflect on how this is similar to or different from the previous gym exercises.
(change the value of `complete` in the qualifying objects from false to true).
*/

game.gyms.forEach(gym => {
  if (gym.difficulty < 8) {
    gym.completed = true;
    }
});
    console.log("Exercise 15: ", game.gyms);

/*
Exercise 16
1. Log the entire `game` object to the console. Take a moment to review the changes you've made throughout the exercises.
*/

console.log("Exercise 16: ", game)