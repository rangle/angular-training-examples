function chainExample () {
  function Animal () {}
  Animal.prototype.breathe = function (gas) {
    if (gas === 'oxygen') {
      return 'co2'
    }
    return 'gasp'
  }

  function Mammal () {}

  // set Mammal.prototype to an object with it's prototype pointing to Animal.prototype
  Mammal.prototype = Object.create(Animal.prototype)
  Mammal.prototype.hairy = true

  function Cat () {}

  // set Cat.prototype to an object with it's prototype pointing to Mammal.prototype
  Cat.prototype = new Mammal()
  Cat.prototype.sound = function () {
    return 'meow'
  }

  const lilBub = Object.create(Cat.prototype, {
    name: {
      value: 'Lil Bub',
      enumerable: true
    }
  })

  console.log(lilBub.name) // 'Lil Bub' -- directly on lilBub object
  console.log(lilBub.sound()) // 'meow' -- one level up the chain
  console.log(lilBub.hairy) // true -- two levels up the chain
  console.log(lilBub.breathe('oxygen')) // 'co2' -- three levels up the chain 
  console.log(lilBub.toString()) // '[object Object]' -- four levels up

  // instanceof
  console.log(lilBub instanceof Cat) // true
  console.log(lilBub instanceof Mammal) // true
  console.log(lilBub instanceof Animal) // true
}

exports.chainExample = chainExample