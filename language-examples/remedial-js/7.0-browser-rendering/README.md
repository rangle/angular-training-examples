# 7.0 - Browser Rendering

# Purpose

# What is HTML?

HTML is the standard markup language for creating Web pages.

- HTML stands for Hyper Text Markup Language
- HTML describes the structure of Web pages using markup
- HTML elements are the building blocks of HTML pages
- HTML elements are represented by tags
- HTML tags label pieces of content such as "heading", "paragraph", "table", and so on
- Browsers do not display the HTML tags, but use them to render the content of the page

````HTML
<p>Hello World</p>
````

#What is CSS?

CSS stands for Cascading Style Sheets
CSS describes how HTML elements are to be displayed on screen, paper, or in other media

````CSS
.my-paragraph {
  font-color: black;
  font-size: 15px;
  text-indent: 25px;
  padding: 20px;
  text-align: left;
}
````

# What is the difference between HTML and the DOM

HTML you write is parsed by the browser and turned into the DOM.
The Document Object Model (DOM) is the application programming interface (API) for valid HTML files. It defines the logical structure of documents and the way a document is accessed and manipulated by the browser. 

# How do browsers render web pages?

1. Process HTML markup and build the DOM tree.
2. Process CSS markup and build the CSSOM tree.
3. Combine the DOM and CSSOM into a render tree.
4. Run layout on the render tree to compute geometry of each node.
5. Paint the individual nodes to the screen.


# Exercise
1. Open up Chrome Dev Tools and click on the Timline Tab
2. Open a new webpage, could be any page, but pic one that's got a lot of content, like CNN
3. Be prepared to do the following 2 clicks, quickly so read them first:
  - Click the record button on the top left of the dev Tools
  - Refresh the webpage
  - Click Stop on the recorder as soon as the new page loads
4. Inspect the timeline panel for various points of time that the page loaded during.

