function compositionExample01 () {
  const addOne = (a) => a + 1
  const addTwo = (a) => addOne(addOne(a))

  console.log(addTwo(4)) // 6
}

function compositionExample02 () {
  function compose(fn1, fn2) {
    return function (val) {
      return fn1(fn2(val))
    }
  }

  const timesTwo = (a) => a * 2
  const timesFive = (a) => a * 5
  const timesTen = compose(timesFive, timesTwo)
  console.log(timesTen(12)) // 120

  // you can even pass functions created with compose to compose 
  const timesFifty = compose(timesTen, timesFive)
  console.log(timesFifty(3)) // 150
}

exports.compositionExample01 = compositionExample01
exports.compositionExample02 = compositionExample02

