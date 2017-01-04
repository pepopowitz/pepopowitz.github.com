---
title: Maybe I was wrong about React
date: April 7, 2016
sortableDate: 2016/04/07
layout: article.jade
snippet: Setting up a React project proved to be a challenge for me the first time I tried to learn it. It went a little better the second time around.
url: blog/2016/04/maybe-i-was-wrong-about-react
tags: react
draft: false
---
### So many places to start

There are a lot of examples of how to set up a project with React, and very little direction on the best route. The first time I tried to do this, I ended up with a whole lot of analysis paralysis, and couldn't figure out where to even start.

### It depends on how you learn

A lot of the advice you get on how to learn React and its ecosystem is to learn each individual piece, one thing at a time. Definitely DO NOT start with a "starter kit", they say. That isn't going to teach you anything, they say.

But suddenly in retrospect I'm realizing, that is why I struggled so much the first time I tried to learn React. I am not that kind of learner. I am a "give me a real live working example and I will tweak things until they break and learn from all the mistakes I make" kind of learner.

And what is the best way to fire up a working example of something? Yeoman. Find a generator that fits your tech stack, and start there.

### Yo let's do this

So off to [yeoman.io/generators](http://yeoman.io/generators) we go...where we search for 'react', and get....tons....and tons....of results.

![Yeoman React search](/static/images/yeoman-react.gif)

Looking through some of the results, I see one that has the things I'm looking for - [react-webpack-redux](https://github.com/stylesuxx/generator-react-webpack-redux), which is really an extension of another generator, [react-webpack](https://github.com/newtriks/generator-react-webpack). The things I want out of the box, and the things this generator offers out of the box, are...
* Redux
* ES2015
* Unit testing
* Sass or Less

### The moment of truth

So following the directions, we install the generator via npm, then generate a new site with yeoman.

`yo react-webpack-redux`

After answering a few questions for setup, comes the moment of truth. If all goes according to plan, I should be able to just start the app with

`pre npm start`

and HOLY CRAP I CAN AND IT JUST WORKS OH MY GEEZ HOW MUCH TIME DID I WASTE TRYING TO DO THIS THE LAST TIME!!!

<img src="/static/images/dancing_banana.gif" style="width:200px">

### The verdict - Oh my goodness this actually is kind of easy!

Well, jeez. This was so much easier than the first time I tried to set up a React project. I am very pleased. I am beyond very pleased. I am actually in complete disbelief and wish I had realized it could be this easy this the first time. This makes learning React a much more tolerable proposition.