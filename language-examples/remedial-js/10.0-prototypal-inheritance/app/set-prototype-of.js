function setPrototypeOfExample () {
  const catProto = {
    sound: function () {
      return 'meow'
    }
  }

  const dogProto = {
    sound: function () {
      return 'woof'
    }
  }

  const lilBub = {}
  Object.setPrototypeOf(lilBub, catProto)
  console.log(lilBub.sound()) // 'meow'

  Object.setPrototypeOf(lilBub, dogProto)
  console.log(lilBub.sound()) // 'woof'
}

exports.setPrototypeOfExample = setPrototypeOfExample