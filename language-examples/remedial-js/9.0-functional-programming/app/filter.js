function filterExample01 () {
  const sequence = [1,2,3,4,5,6,7]
  const odds = sequence.filter((val) => val % 2 !== 0)

  console.log(odds) // [1,3,5,7]
}

function filterExample02 () {
  const buddies = [
    { name: 'peter', age: 18 },
    { name: 'sarah', age: 22 },
    { name: 'gordon', age: 31 },
    { name: 'jessica', age: 14 }
  ]
  const drinkingBuddies = buddies.filter((buddy) => buddy.age >= 19) // yay Ontario

  console.log(drinkingBuddies) // [{ name: 'sarah', age: 22 }, { name: 'gordon', age: 31 }]
}

exports.filterExample01 = filterExample01
exports.filterExample02 = filterExample02