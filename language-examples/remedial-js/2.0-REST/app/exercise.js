'use strict';
'format es6'; // force SystemJS to transpile exercise

const exampleDiv = document.getElementById('example');

exampleDiv.innerHTML = 'REST: There is no front end HTML to this example, please edit the exercise.js file for code examples and view the ReadMe file for exercise.';

/*
 * EXAMPLE OF A REST ENDPOINT IN A NODE BACKEND: This endpoint will GET a
 * userlist.
 */
router.get('/userlist', function (req, res) {
  var db = req.db;
  var collection = db.get('userlist');
  collection.find({}, {}, function (e, docs) {
    res.json(docs);
  });
});

/*
 * THEN YOU CAN CONSUME THE ABOVE REST ENDPOINT ON THE FRONTEND IN YOUR APP
 */
function userRequest() {
  $.getJSON('/users/userlist', function (data) {

    // For each item in our JSON, do something like render some HTML to the DOM
    $.each(data, function () {
      // mock up some html
    });
  });
};

// SEE README FILE FOR LIVE REAL WORLD EXAMPLE OF HITTING A REST ENDPOINT
