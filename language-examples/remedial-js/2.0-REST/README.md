# 2.0 - Example REST

# Purpose
Learn what REST is and how it is used in Javascript.

REST stands for Representational State Transfer. (It is sometimes spelled "ReST".)

It relies on a stateless, client-server, cacheable communications protocol -- and most modern web development cases, the HTTP protocol is used.
You use the protocol by coding REST requests for client-side (front end) JavaScript.

Example 

````js

/*
 * EXAMPLE OF A REST ENDPOINT IN A NODE BACKEND: This endpoint will GET a
 * userlist
 */
router.get('/userlist', function(req, res) {
    var db = req.db;
    var collection = db.get('userlist');
    collection.find({},{},function(e,docs){
        res.json(docs);
    });
});

/*
* THEN YOU CAN CONSUME THE ABOVE REST ENDPOINT ON THE FRONTEND IN YOUR APP
*/
function userRequest() {
    $.getJSON( '/users/userlist', function( data ) {

        // For each item in our JSON, do something like render some HTML to the DOM
        $.each(data, function(){
            // mock up some html
        });
    });
};
````

FOR A LIVE REAL WORLD EXAMPLE
  1. Go to this page: https://jsonplaceholder.typicode.com/
  2. Open your browser's console
  3. Copy and paste the following code snippet into the console and press enter:

````js
var root = 'https://jsonplaceholder.typicode.com';

$.ajax({
  url: root + '/posts/1',
  method: 'GET'
}).then(function(data) {
  console.log(data);
});
````

# Exercise
Now experiment with some of the other free endpoints available on the site for you to get comfortable making REST calls to endpoints.  Here's some other REST calls you can make:

  - GET	/posts
  - GET	/posts/1
  - GET	/posts/1/comments



