# 6.0 - Source Maps

#Purpose
JavaScript sources are often combined and minified to make delivering them from the server more efficient. Increasingly, too, JavaScript running in a page is machine-generated, as when compiled from a language like CoffeeScript or TypeScript. By using source maps, the debugger can map the code being executed to the original source files, making debugging much, much easier.

By default, the Debugger will use source maps if they are available.

Of course, for this to work, you will need to have supplied a source map for the JavaScript running in the page. Do this by appending a comment directive to your source file:

Example 

````js
//# sourceMappingURL=http://example.com/path/to/your/sourcemap.map
````

# Exercise
This link allows you see a full javascript bundle minified, and if you right click anywhere in the source code and select "Get original location", it will tell you which file and line number to go to for the original code.

https://www.thecssninja.com/demo/source_mapping/

For a live real world example of what this looks like in the browser:  Using Chrome:

1. http://dev.fontdragr.com/
2. Open the debugger console and click on the Sources tab
3. In the left column, open the SCRIPTS folder, and inspect app.js
4. Notice at the very bottom of the center column what it says.

