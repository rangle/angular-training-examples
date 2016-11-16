function referenceExample() {
  function Cat () {}

  const catProto = {
    sound: function () {
      return 'meow'
    }
  }

  Cat.prototype = catProto
  const lilBub = new Cat()
  console.log(lilBub.sound()) // 'meow'

  catProto.sound = function () {
    return 'woof'
  }

  console.log(lilBub.sound()) // 'woof'
}

function propertyShadowExample () {
  function Cat () {}

  const catProto = {
    hairball: true
  }

  Cat.prototype = catProto
  const lilBub = new Cat()

  console.log(lilBub) // {}
  // add a new property directly to lilBub
  lilBub.hairball = false
  console.log(lilBub) // { hairball: false }

  console.log(Cat.prototype.hairball) // true
  console.log(lilBub.hairball) // false
}

exports.referenceExample = referenceExample
exports.propertyShadowExample = propertyShadowExample
