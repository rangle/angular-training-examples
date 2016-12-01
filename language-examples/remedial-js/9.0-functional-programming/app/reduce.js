function reduceExample01 () {
  const sum = [1,2,3,4,5].reduce((sum, nextVal) => sum + nextVal, 0);
  console.log(sum); // 15
}

function reduceExample02 () {
  const largest = [12, 52, 67, 83, 32, 81, 37, 49].reduce((largest, nextVal) => nextVal > largest ? nextVal : largest);
  console.log(largest); // 83
}

function reduceExample03 () {
  const pokemon = [
    { name: 'Pikachu', type: 'Electric' },
    { name: 'Charmander', type: 'Fire' },
    { name: 'Bulbasaur', type: 'Poison' },
    { name: 'Vaporeon', type: 'Water' },
    { name: 'Flareon', type: 'Fire' },
    { name: 'Squirtle', type: 'Water' }
  ];

  const pokemonByType = pokemon.reduce((collection, poke) => {
  if (!Array.isArray(collection[poke.type])) collection[poke.type] = [];

  collection[poke.type].push(poke.name);
  return collection;
  }, {})

  console.log(pokemonByType);
  /* { 
    Electric: ['Pikachu'],
    Fire: ['Charmander', 'Flareon'],
    Poison: ['Bulbasaur'],
    Water: ['Vaporeon', 'Squirtle']
    }
  */
}

exports.reduceExample01 = reduceExample01;
exports.reduceExample02 = reduceExample02;
exports.reduceExample03 = reduceExample03;