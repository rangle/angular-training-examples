function constructorExampleOne () {
  function Cat () {}
  const lilBub = new Cat()
  console.log(lilBub) // Cat {}
}

function constructorExampleTwo () {
  function Cat () {}
  Cat.prototype // {}
  Cat.prototype.hairy = true
  Cat.prototype.sound = function () {
    return 'meow'
  }

  const lilBub = new Cat()
  console.log(lilBub.hairy) // true
  console.log(lilBub.sound()) // 'meow'
  console.log(lilBub instanceof Cat) // true
  console.log(lilBub.constructor) // [Function: Cat]
}

function arrowFunctionExample () {
  const Dog = () => {}
  Dog.prototype // undefined
  const snoopy = new Dog() // type error Dog is not a constructor
}

exports.constructorExampleOne = constructorExampleOne
exports.constructorExampleTwo = constructorExampleTwo
exports.arrowFunctionExample = arrowFunctionExample