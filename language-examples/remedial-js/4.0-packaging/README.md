# 4.0 - Example Packaging

# Purpose
What is a packaging system?  What is an example of a Javascript packaging system?

Example 

In the early days, we "managed" Javascript dependencies by including files in a specific order:

````js
<script src="jquery.min.js"></script>  
<script src="jquery.some.plugin.js"></script>  
<script src="main.js"></script>  
````

This was too slow because of excess HTTP requests. We graduated to concatenating and minifying our scripts in a build step:

````js
// build-script.js
var scripts = [  
    'jquery.min.js',
    'jquery.some.plugin.js',
    'main.js'
].concat().uglify().writeTo('bundle.js');

// Everything our app needs!
<script src="bundle.js"></script> 
````

This still relied on the order of concatenated files. Even worse, the code could only communicate through global variables!

Now we use CommonJS or ES6 modules to put our Javascript in a true dependency graph. 

````js
// Version.js
module.exports = { version: 1.0 };

// App.js
var config = require('./Version.js');  
console.log('App Version:', config.version);
````

The browser doesn't support require(), so we use a build tool to transform the above files into a "bundled" file that the browser can execute properly.

# Enter Webpack

Webpack puts your static assets (and source code) in a true dependency graph.
Webpack builds a new Javascript file, replacing require() calls with valid Javascript code, such as URLs. The bundled file is what's executed by Node or the browser.

There is no exercise for this section, just know that you will eventually be introduced to Webpack and you are now aware of its purpose and what roll it plays in your app development.
