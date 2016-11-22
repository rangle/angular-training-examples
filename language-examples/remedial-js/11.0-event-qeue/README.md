
# 11.0 - Example Event Qeue

# Purpose:

  - An overview of how the browser event queue works
  - What it means to post something to the event queue
  - How user interactions are also processed through the event queue

## Overview

Running applications in a web browser involves a collection of technologies, such as a JavaScript Engine (such as Chrome’s V8), a collection of Web API’s (such as the DOM), and the Event Loop and Event Queue.

## What exactly does the JavaScript Engine do?

It’s job is to go through all the lines of JavaScript in an application and process them one at a time. This means that JavaScript is single-threaded. The main repercussion of this is that if you’re running a line of JavaScript that happens to take a long time to return, then all the code after that will be blocked.

**So how does javascript engine know how to process a single line of javascript at a time?**

It uses a call stack. You can think of a call stack like entering an elevator — the first person who enters the elevator is the last person to exit the elevator, whereas the last person to enter is the first to exit.

## Where does the event qeue and loop play into this?

The way Javascript avoids blocking code is that the engine provides a mechanism and it’s via asynchronous callback functions.

An asynchronous callback function is just like any other function you’re used to writing in JavaScript, with the added caveat that it doesn’t get executed till later.

## How is a function posted to the event qeue?

When an async function is executed (like setTimeout), something special happens to its callback — the browser places the callback function into an Event Table. Think of the event table as a registration booth: the call stack tells the event table to register a particular function to be executed only when a specific event happens.

## When an event occurs like a user clicking a button...

When the event does happen, the event table will simply move the function over to the Event Queue. The beauty of this event queue is that its simply a staging area for functions waiting to be invoked and moved over to the call stack.

So when exactly can functions in the event queue move over to the call stack? The JavaScript engine follows a very simple rule: there’s a process that constantly checks whether the call stack is empty, and whenever it’s empty, it checks if the event queue has any functions waiting to be invoked. If it does, then the first function in the queue gets invoked and moved over into the call stack. If the event queue is empty, then this monitoring process just keeps on running indefinitely. And voila — what I just described is the infamous Event Loop!

# Exercise:  This is a realtime visualization of the event queue and event loop in action.

To illustrate how this works in theory, have a look at the following link and click "save + run" or "rerun" whichever the case may be.

[Click here for live example](http://latentflip.com/loupe/?code=CgoKJC5vbignYnV0dG9uJywgJ2NsaWNrJywgZnVuY3Rpb24gb25DbGljaygpIHsKICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gdGltZXIoKSB7CiAgICAgICAgY29uc29sZS5sb2coJ1lvdSBjbGlja2VkIHRoZSBidXR0b24hJyk7ICAgIAogICAgfSwgMjAwMCk7Cn0pOwoKY29uc29sZS5sb2coIkhpISIpOwoKc2V0VGltZW91dChmdW5jdGlvbiB0aW1lb3V0KCkgewogICAgY29uc29sZS5sb2coIkNsaWNrIHRoZSBidXR0b24hIik7Cn0sIDUwMDApOwoKY29uc29sZS5sb2coIldlbGNvbWUgdG8gbG91cGUuIik7!!!PGJ1dHRvbj5DbGljayBtZSE8L2J1dHRvbj4%3D)

Now that you have an idea of how the event qeue and event loop in the browser work, write 3 functions.  Make the second one an asynchronous function with a call back.  Make them all console something out and then run them in the console and witness this mechanism in action executing your own code.
