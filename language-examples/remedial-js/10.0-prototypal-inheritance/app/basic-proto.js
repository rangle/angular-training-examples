function basicProtoExample () {
  const catProto = {
    sound: function () {
      return 'meow'
    }
  }

  const lilBub = Object.create(catProto)

  console.log(lilBub.sound()) // 'meow'
  console.log(catProto.sound()) // 'meow'
  console.log(catProto.sound === lilBub.sound) // true
}

function pojoExample () {
  const pojo = {}

  // prototype ref on an object is internal not an accessible member
  console.log(pojo.prototype) // undefined

  // .toString() call is delegated to Object.prototype.toString()
  console.log(pojo.toString()) // '[object Object]'
}

exports.basicProtoExample = basicProtoExample
exports.pojoExample = pojoExample