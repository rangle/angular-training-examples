# Prototypal Inheritance vs. Classical Inheritance

## Classes

A Class is a blueprint that defines properties and behaviours of a yet-to-be instantiated object. Aside from static members, properties and methods are not accessible on a class definition, an instance must be created using the class constructor function.

## Prototypes

A Prototype is just a javascript object that another object delegates tasks (property lookup and method invocation) to. Unlike a class, it is not merely a definition, methods and properties are available directly on prototype objects. The prototype itself is an instance.

```javascript
const catProto = {
  sound: function () {
    return 'meow'
  }
}

const lilBub = Object.create(catProto)

lilBub.sound() // 'meow'
catProto.sound() // 'meow'
catProto.sound === lilBub.sound // true
```

All objects in Javascript have an internal prototype property, which is simply a reference to another object (it is possible for it to be `null`, but that is out of scope of this example).
By default a Javascipt object's prototype points to [Object.prototype](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Object/prototype).

```javascript
const pojo = {}

// prototype ref on an object is internal not an accessible member
pojo.prototype // undefined

// .toString() call is delegated to Object.prototype.toString()
pojo.toString() // '[object Object]'
```

## Object.create()

The simplest way to create an object with a specific prototype is by calling `Object.create()`. The first argument is the prototype to delegate tasks to. Properties specific to the newly created object can be defined by sending an object containing [property Descriptors](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperties) as the second argument.

```javascript
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

lilBub // { name: 'Lil Bub' }
lilBub.sound() // 'meow'
```
## Constructor Functions


Function calls prepended with the `new` keyword in Javascript automatically create and return new objects.

```javascript
function Cat () {}
const lilBub = new Cat()
lilBub // Cat {}
```

The object returned when calling a function with `new` will have it's internal prototype set to the function's `.prototype` memeber, which by default, is an empty object.
The new object can now delegate property lookup and function invocation to the constructor function's `.prototype` object.

```javascript
function Cat () {}
Cat.prototype // {}
Cat.prototype.hairy = true
Cat.prototype.sound = function () {
  return 'meow'
}

const lilBub = new Cat()
lilBub.hairy // true
lilBub.sound() // 'meow'
lilBub instanceof Cat // true
lilBub.constructor // [Function: Cat]
```

Note: ES6 arrow functions do not have a `.prototype` property and cannot be used as constructor functions.

```javascript
const Dog = () => {}
Dog.prototype // undefined
const snoopy = new Dog() // type error Dog is not a constructor
```

## Prototype Chain

When a method or property is accessed on an object, the object checks if it has a member that matches, if it does not find the member, it checks it's prototype. It does this automatically, so behaviours are seamlessly delegated to the object's prototype.

If it does not immediately find the member, it will check the prototype object's prototype, and so on... traversing the entire chain until it either comes up empty-handed (and throws), or it finds the member (and delegates).

`instanceof` expressions evaluate `true` if any prototype in an object's prototype chain matches the constructor functions prototype property.

```javascript
function Animal () {}

Animal.prototype.breathe = function (gas) {
  if (gas === 'oxygen') {
    return 'co2'
  }
  return 'gasp'
}

function Mammal () {}

// set Mammal.prototype to an object with it's prototype pointing to Animal.prototype
Mammal.prototype = Object.create(Animal.prototype)
Mammal.prototype.hairy = true

function Cat () {}

// set Cat.prototype to an object with it's prototype pointing to Mammal.prototype
Cat.prototype = new Mammal()
Cat.prototype.sound = function () {
  return 'meow'
}

const lilBub = Object.create(Cat.prototype, {
  name: {
    value: 'Lil Bub'
    enumerable: true
  }
})

lilBub.name // 'Lil Bub' -- directly on lilBub object
lilBub.sound() // 'meow' -- one level up the chain
lilBub.hairy // true -- two levels up the chain
lilBub.breathe('oxygen') // 'co2' -- three levels up the chain 
lilBub.toString() // '[object Object]' -- four levels up

// instanceof
lilBub instanceof Cat // true
lilBub instanceof Mammal // true
lilBub instanceof Animal // true
```

## Reference not Copy

It is important to understand that prototype objects do not get copied when they are assigned to objects. Any change to a prototype object (even after object creation), will affect an object's behaviour.

```javascript
function Cat () {}

const catProto = {
  sound: function () {
    return 'meow'
  }
}

Cat.prototype = catProto
const lilBub = new Cat()
lilBub.sound() // 'meow'

catProto.sound = function () {
  return 'woof'
}

lilBub.sound() // 'woof'
```

But any changes made directly to the object will not propagate up to affect the the prototype. New properties will be written directly on the object itself.

```javascript
function Cat () {}

const catProto = {
  hairball: true
}

Cat.prototype = catProto
const lilBub = new Cat()

lilBub // {}
// add a new property directly to lilBub
lilBub.hairball = false
lilBub // { hairball: false }

Cat.prototype.hairball // true
lilBub.hairball // false
```

# `class` declarations

ES6 offers developers a bit of syntactic sugar for creating new objects with prototypes. The `class` keyword followed by an object declaration, offers a handy shortform for defining a constructor function and separate prototype.

It also makes prototypal inheritance appear more like class definitions in languages with Classical Inheritance. 

```javascript
class Cat {
  sound () {
    return 'meow'
  }
}

const lilBub = new Cat()
```

Though syntactically different, this is __exactly__ the same as defining a function with a prototype object. `Cat` is a function, and functions on Cat's `.prototype` are callable.

```javascript
class Cat {
  sound () {
    return 'meow'
  }
}

Cat.prototype.sound() // 'meow'
typeof Cat // 'function'
```

## `constructor`

The optional `constructor` keyword can be used to define the body of the constructor function the class' prototype declaration belongs to. It is a common place to set properties on the new object.
```javascript
class Cat {
  constructor (name) {
    this.name = name
  }
}

const lilBub = new Cat('Lil Bub')
lilBub.name // 'Lil Bub'
```

## `extends`

The `extends` keyword can be used to inherit from other class declarations (add a link in the prototype chain).

If a class `extends` another class, and a `constructor` is defined on the child class, the constructor of the parent class must be called via the `super` keyword in the child class' constructor. 

```javascript
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
    super() //calls Animal's constructor
    // 'this' is only available after super() has been called
    this.weapon = weapon
  }
}

const michelangelo = new NinjaTurtle('nunchucks')
michelangelo.breath('oxygen') // 'co2'
```

## Getters Setters

Two other nice features of class declarations are getter and setter functions for setting and retrieving properties.

```javascript
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
donatello.color // 'purple'
```

This is equivalent to defining `get` and `set` on a property descriptor.

```javascript
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
leonardo.color // 'blue'
```

## Object.setPrototypeOf()

An object's prototype can also be set dynamically using `Object.setPrototypeOf`.
This is not recommended, as it will impede the Javascript engine's capacity to optimize code.

```javascript
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
lilBub.sound() // 'meow'

Object.setPrototypeOf(lilBub, dogProto)
lilBub.sound() // 'woof'
```

## More Learning

- [YDKJS Prototypes](https://github.com/getify/You-Dont-Know-JS/blob/master/this%20%26%20object%20prototypes/ch5.md)
- [YDKJS Behaviour Delegation](https://github.com/getify/You-Dont-Know-JS/blob/master/this%20%26%20object%20prototypes/ch6.md)
- [Common Misconceptions About Inheritance in Javascript](https://medium.com/javascript-scene/common-misconceptions-about-inheritance-in-javascript-d5d9bab29b0a#.daxnj95y6)
- [ES6 Classes](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Classes)
- [Object Creation in Javascript](https://www.youtube.com/watch?v=GhbhD1HR5vk&list=PL0zVEGEvSaeHBZFy6Q8731rcwk0Gtuxub)