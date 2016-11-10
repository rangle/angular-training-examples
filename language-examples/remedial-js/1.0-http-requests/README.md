
# 1.0 - Example HTTP REQUESTS

# Purpose:
How to write http requests in pure Javascript.

````js
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
````

# Exercise
  1. After reviewing this URL: 
  
  http://127.0.0.1:8080/remedial-js/1.0-http-requests/
  
  Compose (in English, not in Javascript) a very simple http request, make sure you include the following items:
    - A Request-line
    - Zero or more header (General|Request|Entity) fields followed by CRLF
    - An empty line (i.e., a line with nothing preceding the CRLF) 
    indicating the end of the header fields
    - Optionally a message-body

  2. Now write the same request in pure Javascript
