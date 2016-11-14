'use strict';
'format es6'; // force SystemJS to transpile exercise

const exampleDiv = document.getElementById('example');

exampleDiv.innerHTML = 'Browser Rendering: See ReadMe file for definition, examples and exercises.  See browser console for code execution logs';

console.log("<<<<<< EXERCISE 1")

// define the class
var Kitten = function() {
  this.name = 'Garfield';
  this.color = 'brown';
  this.gender = 'male';
};

Kitten.prototype.setName = function(name) {
  this.name = name;
  return this;
};

Kitten.prototype.setColor = function(color) {
  this.color = color;
  return this;
};

Kitten.prototype.setGender = function(gender) {
  this.gender = gender;
  return this;
};

Kitten.prototype.save = function() {
  console.log(
    'saving ' + this.name + ', the ' +
    this.color + ' ' + this.gender + ' kitten...'
  );

  // save to database here...

  return this;
};

// Now use our new class with method chaining
var bob = new Kitten();

var tmp = bob.setName('Bob');
tmp.setColor('black');

console.log(tmp === bob);

// OUTPUT:
// > true

// WE CAN EVEN MAKE IT SHORTER:

new Kitten()
  .setName('Bob')
  .setColor('black')
  .setGender('male')
  .save();

// OUTPUT:
// > saving Bob, the black male kitten...

// Function as first class citizens
console.log("<<<<<< EXERCISE 2");

fnFoo();

function fnFoo(){
  console.log("i am the hoisted fn fnFoo, even though I was invoked before I was declared, I am still able to execute because of hoisting")
}


// NESTED SCOPING

console.log("<<<<<< EXERCISE 3");

var x = 1;
var y = 2;

console.log('in global scope: ', x, y);

function func() {
  var x = 2;
  y = 2;
  console.log('in func(): ', x, y);

  function innerFunc() {
    var x = 3;
    y = 3;
    console.log('in innerFunc(): ', x, y);
  }
  innerFunc();

  console.log('in func() again: ', x, y);
};
func();
console.log('in global scope again: ', x, y);
