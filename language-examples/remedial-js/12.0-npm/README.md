# 12.0 - NPM

# Purpose

### What is NPM?

NPM stands for Node Package Manager.
NPM makes it easy for JavaScript developers to share and reuse code, and it makes it easy to update the code that you're sharing.

Once you're depending on this code from other developers, npm makes it really easy to check to see if they've made any updates to it, and to download those updates when they're made.

These bits of reusable code are called packages, or sometimes modules. A package is just a directory with one or more files in it, that also has a file called "package.json" with some metadata about this package. A typical application, such as a website, will depend on dozens or hundreds of packages. These packages are often small. The general idea is that you create a small building block which solves one problem and solves it well. This makes it possible for you to compose larger, custom solutions out of these small, shared building blocks.

A side note:
Your project may depend on packages that you use only in development as opposed to in production.  For example I might use ````webpack```` in development and in my build process, but it is not needed to be used on the live application.  On the other hand, I might use ````Bootstrap```` both in development and in production.  We will install both development and production based packages.

# Exercise
Because this is just to demonstrate NPM usage, setting it up is out of the scope of this exercise.  Please make sure you have Node and NPM installed before attempting this exercise.

To show how npm works we are going to initialize a small project folder to use some packages from npm.

1. Open your terminal and create a project folder, give it any name and cd into that folder.

2. Type ````npm init``` and press Enter. You will be asked to set some config options for your project in a series of simple questions. If you don't know the answer yet (like what your testing setup is), just press Enter to skip and progress through the setup.  Now browse into your project's root folder and you should have a package.json file created for you inside your root folder.

3. We are now going to install a package only used in development. Lets install a testing framework called Karma
  - type ````npm install Karma --save-dev```` and press Enter

4. Now open your root folder and notice that package.json now has Karma listed as a development dependency.  You will also notice a new folder created for you called node_modules.   NPM keeps any packages installed in this folder.  Now let's install a package that will be used in our live app.

5. Let's install a great utility library called lodash: 
 - type ````npm install lodash --save```` and press Enter

There are many ways to use production packages depending on your stack.  The most basic way is to just include it before the closing body tag of your index.html in a ````<script src="node_modules/myPackageName">```` tag.
