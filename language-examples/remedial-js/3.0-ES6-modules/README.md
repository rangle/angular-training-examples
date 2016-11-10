# 3.0 - ES6 Modules

#Purpose
What are ES6 modules and how to use them.

The code samples here are the same as what is in the files they reference, feel free to edit them to see the code.

````js
// in export-example.js
export const helloStr = "Hello World";

function addTwo(num) {
    return num + 2
};
export default addTwo;
````
imports example:
````js
// in exercise.js
import addTwo, { helloStr } from './export-example';

const exampleDiv = document.getElementById('example');

exampleDiv.innerHTML = `${helloStr} and ${addTwo(6)}`;
````

#Exercise
Add another js file called my-export-example.js and write a function to be exported.

Then import it into exercise.js

This exercise probably won't run, but at least you will be more familiar with the ES6 Module system syntax.
