function pureFunctionsExample01 () {
  let globalVar = 4

  // impure, depends on shared state, unpredictable output
  function impureAdd (a) {
    return a + globalVar
  }

  const mysteryNumber = impureAdd(12)
  console.log(mysteryNumber) // ??

  // impure, mutsates shared state
  function impureDivide (a) {
    globalVar /= a
  }

  impureDivide(8)
  console.log(globalVar) // ??

  // pure, no dependencies, predictable output
  function pureAdd (a, b) {
    return a + b
  }

  console.log(pureAdd(12, 4)) // 16
}

function pureFunctionsExample02 () {
  // impure unpredictable output
  function impureCreateObj (objName) {
    return {
      name: objName,
      id: Math.random() * 100000
    }
  }

  const obj1 = impureCreateObj('banana')
  console.log(obj1.id) // ??

  // passing in the unique id allows this function to remain pure
  function pureCreateObject (objName, uniqueId) {
    return {
      name: objName,
      id: uniqueId
    }
  }

  const objId = Math.random() * 100000
  const obj2 = pureCreateObject('pineapple', objId)
  // predictable code is testable code
  console.log(obj2.id === objId) // true 
}

function pureFunctionsExample03 () {
  // impure
  function addSomething (a, b) {
    console.log(`adding ${a} to ${b}`)
    return a + b
  }

  addSomething(2, 3) // 'adding 2 to 3' is logged to the console
}

exports.pureFunctionsExample01 = pureFunctionsExample01
exports.pureFunctionsExample02 = pureFunctionsExample02
exports.pureFunctionsExample03 = pureFunctionsExample03