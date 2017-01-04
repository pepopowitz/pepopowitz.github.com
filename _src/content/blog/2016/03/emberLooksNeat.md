---
title: Ember looks neat
date: March 24, 2016
sortableDate: 2016/03/24
layout: article.jade
snippet: I am in the market for a new MV* framework in Javascript. I'm not totally sold on Angular 2 or React, but I think Ember looks neat.
url: blog/2016/03/emberLooksNeat
---

### I got 99 problems and 98 of them are javascript MV* frameworks

I am in the market for a new MV* framework in Javascript. I've done Angular 1, many times. There are things I like about it - dependency injection is easy, meaning unit testing is easy; there is [good guidance](https://github.com/johnpapa/angular-styleguide) on style and best practices; documentation is pretty great. There are also things I don't like about it - it can be slow; the digest cycle can make me want to rip my hair out at times; writing directives can be confusing and sometimes feels a little like throwing darts at a dartboard to see what sticks. But that ship has sailed, and there are too many other frameworks to stick with Angular 1 for life. I am a breadth of knowledge guy, not depth of knowledge - and the longer I stick with one framework, the more I feel like I'm falling behind.


#### Angular 2

The logical framework for me is Angular 2, right? I have all that Angular 1 experience. They've now provided good [guidance on migration](https://angular.io/docs/ts/latest/guide/upgrade.html),which is way better than when it was announced, and we all thought we'd be rewriting apps from scratch. But to be honest, I haven't looked into Angular 2 a whole lot, because when I look at the examples, the views look atrocious.

```html
<li *ngFor="#hero of heroes" (click)="onSelect(hero)">
    <span class="badge">{{hero.id}}</span> {{hero.name}}
</li>
```

```html
<some-component [prop]="someExp" (event)="someEvent()" [(twoWayProp)]="someExp"></show-title>
```

Good gracious, look at all those symbols. Maybe I'm being a crybaby, but I can't imagine myself staring at views like that all day without (a) needing a cheat-sheet to tell me which symbol to use when, and (b) throwing up. I despise Markdown for its use of semantic symbols; the symbols in Angular 2 seem just as confusing to me.

#### That React, it's so hot right now!

First of all, most of what I've learned so far about React, I've learned from [Cory House](https://medium.com/@housecor) - [his Pluralsight course](https://www.pluralsight.com/courses/react-flux-building-applications) is a great place to start. This dude is an amazing speaker, and I highly recommend checking him out if you get a chance.

I really like a lot of things about React.

* The virtualDom diffing is cool. Better performance is nothing to complain about.
* I like the concept of uni-directional flow. I've played with both Flux and Redux, and before you get lawyery on me I know that's not technically part of React, but it is part of the ecosystem - and if you're going to build something with React, you're going to use either Flux or Redux because all of the examples do too. Flux is okay, but has too much boilerplate repetition for my tastes. Redux I find to be pretty neat - I like the [guiding principles](http://redux.js.org/docs/introduction/ThreePrinciples.html) - a single source of truth, read-only state, and the use of pure functions.
* The language is simple, and it's pretty easy to figure out what's going on in a component.
* Jsx is awesome. I love the fact that you get a compile error when you typo something in a component - as opposed to something silently failing in most other frameworks.

The dislikes list is much shorter....but the one item on the list is huge. Javascript tools fatigue is a real thing, and React is the ultimate example of it. I hope you like to have opinions about everything - cuz you're gonna need to. Setting up a project in React is a painful experience. React embraces the micro-library culture of npm - so you need to pick your own libraries for pretty much everything. If you're the kind of person who wants control over every..single..feature when you buy a new car, then React is going to make you happy. I am not one of those people. I am pretty happy to have three packages to choose from. I don't want to fill out a form for two hours choosing between 2 cupholders and 3. I want a car, and I want to drive it, and I don't much care for the details. Getting up and running with React can be a challenge, and one that makes me not want to use React.

#### Ember

Which brings me to Ember. I don't know a whole lot about Ember. In fact, most of what I know, I learned from [one episode of HanselMinutes](http://hanselminutes.com/516/ambitious-ux-and-ambitious-apps-with-ember-and-lauren-tan).

What I think I like the most about Ember is that it provides opinions for you. This is my biggest issue right now with JavaScript development - you need to have an opinion about everything. I am a breadth of knowledge guy, rather than depth of knowledge - as a result, I have more interest in learning the opinions prescribed by a framework than in forcing my own opinions onto a framework. I want my MV* framework to have opinions for me so that I can focus on building something.

Heck, [the slogan on their site](http://emberjs.com/) is "more productive out of the box". That is a slogan I can get behind.