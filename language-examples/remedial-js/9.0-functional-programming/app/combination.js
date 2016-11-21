function combinationExample01 () {
  const pokemon = [
    { name: 'Pikachu', cp: 265, candies: 16, evolution: 'Raichu' },
    { name: 'Squirtle', cp: 321, candies: 3, evolution: 'Wartortle' },
    { name: 'Pinsir', cp: 267, candies: 42, evolution: null },
    { name: 'Bulbasaur', cp: 387, candies: 12, evolution: 'IvySaur' },
    { name: 'Sandslash', cp: 467, candies: 42, evolution: null }
  ]

  const toughest = pokemon
    .filter((mon) => mon.evolution !== null)
    .filter((mon) => mon.candies > 15)
    .map((mon) => Object.assign({}, {
        name: mon.evolution,
        evolution: null,
        candies: mon.candies - 15,
        cp: mon.cp * 2
      })
    )
    .reduce((champion, challenger) => challenger.cp > champion.cp ? challenger : champion)

  console.log(toughest) // { name: 'Raichu', evolution: null, candies: 1, cp: 530 }
}

exports.combinationExample01 = combinationExample01