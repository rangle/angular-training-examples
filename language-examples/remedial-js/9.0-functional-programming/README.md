# Functional Programming

Functional Programming simply means composing programs with small, reusable, **pure functions**.

## Pure Functions 

A pure function is a function that, given the same input, will always return the same output, and has no side-effects.

For a function to be pure, it must have absolutely no side-effects. It cannot access, mutate, or depend upon shared state in any capacity. This includes mutating params, and accessing any mutable state that has not been explicitly passed to the function.


```javascript
let globalVar = 4

// impure, depends on shared state, unpredictable output
function impureAdd (a) {
  return a + globalVar
}

// impure, mutates shared state
function impureDivide (a) {
  globalVar /= a
}

// pure, no dependencies, predictable output
function pureAdd (a, b) {
  return a + b
}
```

Pure functions can be thought of as a mapping of an input to an output, similar to algebraic functions.

- *f(x) = 2x* translates to `const double = (x) => x + x `
- *f(x, y) = -xy* translates to `const negativeProduct = (x, y) =>  -(x * y)`
- *f(x) = 2x -5* translates to `const doubleMinusFive = (x) => (x * 2) - 5`

### Side Effects and Unpredictability

Functions like `Date.now()` and `Math.random()` (and any function that depends on them) are considered impure because their outputs are not predictable.

```javascript
// impure unpredictable output
function impureCreateObj (objName) {
  return {
    name: objName,
    id: Math.random() * 100000
  }
}

// passing in the unique id allows this function to remain pure
function pureCreateObject (objName, uniqueId) {
  return {
    name: objName,
    id: uniqueId
  }
}
```

An innocent call to `console.log` is enough to prevent a function from qualifying as 'pure' (it mutates the state of the console).

```javascript
// impure
function addSomething (a, b) {
  console.log(`adding ${a} to ${b}`)
  return a + b
}
```

Even though `addSomething` has a predictable output, and can easily be tested, if a function causes any side-effects at all, it is not a pure function.

### Mutations 

A pure function never mutates a data structure, whether it has been passed to it or not. If any values need to be updated, it must clone or create a new data structure.

```javascript
// impure, mutates param
function impureParamUpdate(obj, b) {
  obj.val = b
}

const mutableStateObj = { val: 'fleeting' }
impureParamUpdate(mutableStateObj, 'mutated')

mutableStateObj.val // 'mutated'

// pure, returns new object rather than mutating old one
function pureParamUpdate (obj, b) {
  return Object.assign({}, obj, {
    val: b
  })
}

const stateObj = { val: 'initial state' }
const newStateObj = pureParamUpdate(stateObj, 'next state')

// stateObj is unchanged
stateObj.val // 'initial state'
newStateObj.val // 'next state'

// Array.prototype.concat is pure because it does not mutate it's array
const seq = [1, 2, 3, 4]
const longerSeq = seq.concat(5)

seq // [1, 2, 3, 4]
longerSeq // [1, 2, 3, 4, 5]

// Array.prototype.push is impure, as it mutates it's array
seq.push(5)
seq // [1, 2, 3, 4, 5]
```

Avoiding mutations simplifies programs, making it easier to reason about how and where changes take place.

### Function Composition

Two or more functions can be combined to create new functions.

```javascript
const addOne = (a) => a + 1
const addTwo = (a) => addOne(addOne(a))

addTwo(4) // 6
```
The inner function executes first and the return value is passed directly into the outer function. A generic compose function is a useful abstraction for combining functions.

```javascript
function compose(fn1, fn2) {
  return function (val) {
    return fn1(fn2(val))
  }
}

const timesTwo = (a) => a * 2
const timesFive = (a) => a * 5
const timesTen = compose(timesFive, timesTwo)
timesTen(12) // 120

// you can even pass functions created with compose to compose 
const timesFifty = compose(timesTen, timesFive)
timesFifty(3) // 150
```

## Array Methods

Javascript provides several methods on `Array.prototype` that allow developers to program in a more functional manner.

## `.map`

`Array.prototype.map` returns a new array of the same length. Map accepts a single function as an argument. The function is called once for every element in the array, the return value of the function is pushed into the new array that is returned by `.map`.


```javascript

const square = (a) => a * a
const sequence = [1, 2, 3, 4]
const squares = sequence.map(square)

// sequence remains unchanged
sequence // [1, 2, 3, 4]

// squares is a new Array
squares // [1, 4, 9, 16]

const wrappedValues = sequence.map((val) => ({ value: val }))

wrappedValues // [{ value: 1 }, { value: 2 }, { value: 3 }, { value: 4 }]
```

## `.filter`

`Array.prototype.filter` returns a new array of the same length or smaller. Filter expects a predicate function (a function that returns  `true` or `false`) as an argument, if the function returns a truthy value, the item is included, if the function returns a falsey value, the item is omitted.


```javascript
const sequence = [1, 2, 3, 4, 5, 6, 7]
const odds = sequence.filter((val) => val % 2 !== 0)

odds // [1, 3, 5, 7]

const buddies = [
  { name: 'peter', age: 18 },
  { name: 'sarah', age: 22 },
  { name: 'gordon', age: 31 },
  { name: 'jessica', age: 14 }
]
const drinkingBuddies = buddies.filter((buddy) => buddy.age >= 19) // yay Ontario

drinkingBuddies // [{ name: 'sarah', age: 22 }, { name: 'gordon', age: 31 }]
``` 

## `.reduce`

`Array.prototype.reduce` returns a single value of any type. Reduce accepts two arguments, a function that runs once for every item in the array, and a seed value.

On the first iteration, the seed value is passed as the first argument into the provided function, each successive iteration gets passed the return value from the last iteration. The return value of the final iteration becomes the return value of `.reduce`.


```javascript
const sum = [1, 2, 3, 4, 5].reduce((sum, nextVal) => sum + nextVal, 0)
sum // 15
```

If the second argument (seed value) is not provided, `reduce` will use the first value of the array as the seed and start iterating on the second item.

```javascript
const largest = [12, 52, 67, 83, 32, 81, 37, 49].reduce((largest, nextVal) => nextVal > largest ? nextVal : largest)
largest // 83
```

Reduce can be very effective for transforming data structures.

```javascript
const pokemon = [
  { name: 'Pikachu', type: 'Electric' },
  { name: 'Charmander', type: 'Fire' },
  { name: 'Bulbasaur', type: 'Grass' },
  { name: 'Vaporeon', type: 'Water' },
  { name: 'Flareon', type: 'Fire' },
  { name: 'Squirtle', type: 'Water' }
]

const pokemonByType = pokemon.reduce((collection, poke) => {
 if (!Array.isArray(collection[poke.type])) collection[poke.type] = []

 collection[poke.type].push(poke.name)
 return collection
}, {})

pokemonByType  
/* { 
  Electric: ['Pikachu'],
  Fire: ['Charmander', 'Flareon'],
  Grass: ['Bulbasaur'],
  Water: ['Vaporeon', 'Squirtle']
  }
*/
```

## Composing `.map`, `.filter` and `.reduce`

Because `.map` and `.filter` always return arrays (with the same methods available on them), calls to `.map`, `.filter` and `.reduce` can be chained together. Like function composition, the return value from one function becomes the argument to the next.

```javascript
const pokemon = [
  { name: 'Pikachu', cp: 265, candies: 16, evolution: 'Raichu' },
  { name: 'Squirtle', cp: 321, candies: 3, evolution: 'Wartortle' },
  { name: 'Pinsir', cp: 267, candies: 42, evolution: null },
  { name: 'Bulbasaur', cp: 387, candies: 12, evolution: 'IvySaur' },
  { name: 'Sandslash', cp: 467, candies: 42, evolution: null }
]

const toughest = pokemon
  .filter((mon) => mon.evolution !== null)
  .filter((mon) => mon.candies > 15)
  .map((mon) => Object.assign({}, {
      name: mon.evolution,
      evolution: null,
      candies: mon.candies - 15,
      cp: mon.cp * 2
    })
  )
  .reduce((champion, challenger) => challenger.cp > champion.cp ? challenger : champion)

toughest // { name: 'Raichu', evolution: null, candies: 1, cp: 530 }
```

**BONUS:** This pattern can be applied to an asynchronous stream of values as easily as it is applied to an Array. Mastering it will allow you to hit the ground running with libraries like [RxJS](https://github.com/Reactive-Extensions/RxJS).

## More Learning

This is intended to be a quick, first-step, introduction to functional programming. It is by no means comprehensive, there are many concepts that we have not even touched (currying, partial application, recursion...).

- [Mozilla Array.prototype](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/prototype)
- [Functional Programming in Javascript](https://www.youtube.com/watch?v=BMUiFMZr7vk&list=PL0zVEGEvSaeEd9hlmCXrk5yUyqUag-n84)
- [Professor Frisby's Mostly Adequate Guide to Functional Programming](https://drboolean.gitbooks.io/mostly-adequate-guide/content/)