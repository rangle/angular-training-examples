function objectCreateExample() {
  const catProto = {
    sound: function () {
      return 'meow'
    }
  }

  const lilBub = Object.create(catProto, {
    name: {
      value: 'Lil Bub',
      enumerable: true
    }
  })

  console.log(lilBub) // { name: 'Lil Bub' }
  console.log(lilBub.sound()) // 'meow'
}

exports.objectCreateExample = objectCreateExample