function classExampleOne () {
  class Cat {
    sound () {
      return 'meow'
    }
  }

  const lilBub = new Cat()
}

function classExampleTwo () {
  class Cat {
    sound () {
      return 'meow'
    }
  }

  console.log(Cat.prototype.sound()) // 'meow'
  console.log(typeof Cat) // 'function'
}

function classConstructorExample () {
  class Cat {
    constructor (name) {
      this.name = name
    }
  }

  const lilBub = new Cat('Lil Bub')
  console.log(lilBub.name) // 'Lil Bub'
}

function extendsExample () {
  class Animal {
    constructor() {
      console.log('animal constructor was called')
    }
    breath (gas) {
      if (gas === 'oxygen') {
        return 'co2'
      }
      return 'gasp'
    }
  }

  class NinjaTurtle extends Animal {
    constructor (weapon) {
      super()
      // this is only available after super() has been called
      this.weapon = weapon
    }
  }

  const michelangelo = new NinjaTurtle('nunchucks')
  console.log(michelangelo.breath('oxygen')) // 'co2'
}

function getterSetterExampleOne () {
  class NinjaTurtle {
    get color () {
      return this._color
    }

    set color (color) {
      this._color = color
    }
  }

  const donatello = new NinjaTurtle()
  donatello.color = 'purple'
  console.log(donatello.color) // 'purple'
}

function getterSetterExampleTwo () {
  class NinjaTurtle {}

  const leonardo = Object.create(NinjaTurtle.prototype, {
      color: {
          get: function () {
              return this._color
          },
          set: function (color) {
              this._color = color
          },
          enumerable: true,
          configurable: true
      }
  })

  leonardo.color = 'blue'
  console.log(leonardo.color) // 'blue'
}

exports.classExampleOne = classExampleOne
exports.classExampleTwo = classExampleTwo
exports.classConstructorExample = classConstructorExample
exports.extendsExample = extendsExample
exports.getterSetterExampleOne = getterSetterExampleOne
exports.getterSetterExampleTwo = getterSetterExampleTwo
