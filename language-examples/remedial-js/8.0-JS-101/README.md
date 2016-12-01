# 8.0 - JS101

# Purpose

JavaScript is an untyped, interpreted programming language that can accommodate
a variety of  programming paradigms. Among other things, a lot of modern
JavaScript code heavily leverages functional programming style. The
combination of weak typing and functional methods can make JavaScript code a
bit hard to understand for those coming from strongly typed object-oriented
languages such as  Java.

This module is intended for an audience who is new to JavaScript, or one that
simply needs a refresher. We will walk through the basic JavaScript
constructs.


#Function Chaining / Fluent interfaces

If we look at files that make up an AngularJS application, a typical file
would often consist of a single giant JavaScript statement where multiple
method calls are chained together: we call a method on an object, get another
object, then call a method on that object, get another method, etc. JavaScript
allows us to insert white space before the `.` that precedes a method
invocation

```javascript
/** Example of method chaining in jQuery */


//////////////////////////
// WITHOUT METHOD CHAINING

var $div = $('#my-div');         // assign to var

$div.css('background', 'blue');  // set BG
$div.height(100);                // set height
$div.fadeIn(200);                // show element


///////////////////////
// WITH METHOD CHAINING

$('#my-div').css('background', 'blue').height(100).fadeIn(200);

// often broken to multiple lines:
$('#my-div')
  .css('background', 'blue')
  .height(100)
  .fadeIn(200);
```

is really equivalent to this:

```javascript
  angular.module('ngcourse').controller(...);
```

# Exercise 1

To support this `fluent` programming style, Let's define our own class and add method chaining.  Notice each prototype method is returning the object being worked on.  This allows the method calls to be chained.
This code is running live in the exercise.js file, so you can open the browser, navigate to this exercise, and see the code in action in the console.

```javascript
// define the class
var Kitten = function() {
  this.name = 'Garfield';
  this.color = 'orange';
  this.gender = 'male';

  this.setName = function(name) {
    this.name = name;
    return this;
  };

  this.setColor = function(color) {
    this.color = color;
    return this;
  };

  this.setGender = function(gender) {
    this.gender = gender;
    return this;
  };

  this.save = function() {
    console.log(
      'saving ' + this.name + ', the ' +
      this.color + ' ' + this.gender + ' kitten...'
    );

    // save to database here...

    return this;
  };
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
```

# JavaScript Functions

In languages such as Java, arguments to functions and methods can be objects
or primitives, but not functions. In JavaScript, however, functions are first
class citizens. A function can be passed into another function as a parameter.
A function can return a function. Functions can also be assigned to variables.

JavaScript allows two ways of defining a function. In the first method, called
"function declaration", a new function is defined in the current
scope and is given a name:

```javascript
  function foo() {
    // do something
  }
```

We will be able to refer to this function as `foo` in the current scope. It is
worth noting that functions defined using function declarations are "hoisted"
in JavaScript. Regardless of where you define a function in the current scope,
JavaScript would act as if the function was defined up front. So, this is
perfectly valid (This Javascript behaviour of processing declarations 
first before execution is called hoisting, and is equivalent to moving the 
declarations to the top):

```javascript
  // Call a function.
  foo();

  // Now provide a definition.
  function foo() {
    // do something
  }
```

An alternative method of defining a function is a "function expression". In
this case, provide a function definition in a context where JavaScript would
expect to see an expression:

```javascript
  var foo = function foo() {
    // do something
  }
```

Functions defined this way are _not_ hoisted, so this would be invalid:

```javascript
  // This call will fail because the value of "foo" is undefined at this point.
  foo();

  // The function is defined, but it's too late.
  var foo = function foo() {
    // do something
  }
```

Functions defined as function expressions do not need to have names:

```javascript
  var foo = function() {
    // do something
  }
```

If we do provide a name in a function expression, we won't be able to call the
function by this name, but the function will use name when reporting errors.

```javascript
  var foo = function bar() {
    // This function thinks it's called "bar" and will use this name when
    // reporting errors. We cannot call it by this name, however.
  }

  bar(); // This will fail.
```

# Exercise 2
Go ahead and open the browser to the exercise folder again, if you view the source you will see the following code executed:

````javascript
// Function as first class citizens

fnFoo();
console.log('after fnFoo is called');

function fnFoo(){
  console.log("i am the hoisted fn fnFoo, even though I was invoked before I was declared, I am still able to execute because of hoisting")
}
````

# Variable Scope

In JavaScript, variables are _global_ unless declared inside a function.
Global variables can make code very hard to debug and maintain, so you must
always be careful not to create them unintentionally.

The only way to create local variables in JavaScript is to define them inside
a function. Doing so, however, requires defining a function. If we were to use
a function declaration, we would end up polluting the global name space with
the function itself.

Consider this example:

```javascript
  function foo() {
    var bar = 1;
    // do something with bar;
  }
```

Here we succeeded in making `bar` local, but we created a global function `foo()`!

We can solve this "catch-22" situation by using a function expression:

```javascript
  (function() {
    var bar = 1;
    // do something with bar;
  })();
```

Here we defined `bar` inside an _anonymous_ function that we call right away.
This pattern is very common in JavaScript and is called "a immediately-invoked
function expression" or "IIFE".

```javascript
  .controller('MainCtrl', function($scope) {
    var bar = 1; // This will be local to this function.
    ...
  })
```

It is worth noting that unlike some languages, JavaScript does not support
"lexical scoping": variable are defined at the level of a function, not a
block. (This is being fixed in ES6 with the keyword "let".)

# Nested Scopes

In JavaScript, a function can be declared within another function.  The
function has a local (function) scope, it has access to the scope of the outer
function, and it also has access to a global scope.

Here is a pure JavaScript example with multiple scopes:

```javascript
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
```
Executing the code above will produce the following:

```
  in global scope:  1 2
  in func():  2 2
  in innerFunc():  3 3
  in func() again:  2 3
  in global scope again:  1 3
```

The code above is, again, inside the exercise.js folder, so it is currently executing in the browser

# Exercise 3

Go ahead and open the folder again, and view the executed console messages in the browser console.

Notice that here we declare `x` again in each scope. This makes `x` act as
different variables in different scopes. Changing the value of `x` in inner
scopes does not affect its value in the outer scopes.

For `y`, the behavior is quite different. We do not declare it again in the
nested scopes, which means the outer scope's variable is used. Setting the
value of `y` inside a nested scope changes its value in the outer scope.
