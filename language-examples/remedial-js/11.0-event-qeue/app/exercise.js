'use strict';
'format es6'; // force SystemJS to transpile exercise

const exampleDiv = document.getElementById('example');

exampleDiv.innerHTML = '';

let httpRequest;

function makeRequest(url) {
  httpRequest = new XMLHttpRequest();

  if (!httpRequest) {
    alert('Giving up :( Cannot create an XMLHTTP instance');
    return false;
  }
  httpRequest.onreadystatechange = alertContents;
  httpRequest.open('GET', url);
  httpRequest.send();
};

function alertContents() {
  if (httpRequest.readyState === XMLHttpRequest.DONE) {
    if (httpRequest.status === 200) {
      alert(httpRequest.responseText);
    } else {
      alert('There was a problem with the request.');
    }
  }
};
