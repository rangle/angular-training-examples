# 5.0 - Transpiling

#Purpose
To define what a transpiler is.  Show that there are different types of transpilers: for Javascript, Typescript and SASS.

Transpilers, or source-to-source compilers, are tools that read source code written in one programming language, and produce the equivalent code in another language. 

Example 


# ES6 Transpiled to ES5 using Babel
````js
// ES6
const exampleDiv = document.getElementById('example');

export const helloStr = 'Hello World';

const sayHello = (string) => exampleDiv.innerHTML(string);

export default sayHello;

// Transpiled to ES5
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
var exampleDiv = document.getElementById('example');

var helloStr = exports.helloStr = 'Hello World';

var sayHello = function sayHello(string) {
    return exampleDiv.innerHTML(string);
};
````

# Typescript
````TS
exports.default = sayHello;

// Typescript
class Animal {
    constructor(public name: string) {}
    move(distanceInMeters: number = 0) {
        console.log(`${this.name} moved ${distanceInMeters}m.`);
    }
}

class Snake extends Animal {
    constructor(name: string) { super(name); }
    move(distanceInMeters = 5) {
        console.log("Slithering...");
        super.move(distanceInMeters);
    }
}

// Transpiled to ES5
var __extends = (this && this.__extends) || function(d, b) {
    for (var p in b)
        if (b.hasOwnProperty(p)) d[p] = b[p];

    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Animal = (function() {
    function Animal(name) {
        this.name = name;
    }
    Animal.prototype.move = function(distanceInMeters) {
        if (distanceInMeters === void 0) { distanceInMeters = 0; }
        console.log(this.name + " moved " + distanceInMeters + "m.");
    };
    return Animal;
}());
var Snake = (function(_super) {
    __extends(Snake, _super);

    function Snake(name) {
        _super.call(this, name);
    }
    Snake.prototype.move = function(distanceInMeters) {
        if (distanceInMeters === void 0) { distanceInMeters = 5; }
        console.log("Slithering...");
        _super.prototype.move.call(this, distanceInMeters);
    };
    return Snake;
}(Animal));
````

# SASS
````SCSS
// SASS
$black: 'black';

.geometric-shape{
  width: 200px;
  height: 200px;
  display: black;
  .smaller {
    width: 100px;
    height: 100px;
  }
}

.square {
  @extend .geometric-shape;
  background-color: $black;
}

// Transpiled to CSS
.geometric-shape, .square {
  width: 200px;
  height: 200px;
  display: black;
}
.geometric-shape .smaller, .square .smaller {
  width: 100px;
  height: 100px;
}

.square {
  background-color: "black";
}

````

# Exercise

  1. Open you browser console (CHROME ONLY)
  2. Click on the Sources Tab
  3. Expand the app folder
  4. Notice the difference between exercise.js and exercise.js!transpiled.
