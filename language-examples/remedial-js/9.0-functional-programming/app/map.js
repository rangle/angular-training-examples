function mapExample01 () {
  const square = (a) => a * a
  const sequence = [1,2,3,4]
  const squares = sequence.map(square)

  // sequence remains unchanged
  console.log(sequence) // [1,2,3,4]

  // squares is a new Array
  console.log(squares) // [1,4,9,16]
}

function mapExample02 () {
  const sequence = [1,2,3,4]
  const wrappedValues = sequence.map((val) => ({ value: val }))
  console.log(wrappedValues) // [{ value: 1 }, { value: 2 }, { value: 3 }, { value: 4 }]
}

exports.mapExample01 = mapExample01
exports.mapExample02 = mapExample02