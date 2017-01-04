---
title: My TDD Sales Pitch
date: August 18, 2016
sortableDate: 2016/08/18
layout: article.jade
snippet: A coworker recently asked me to send some good resources for introducing a team to TDD. I thought the internet was a good place to put it.
url: blog/2016/08/my-tdd-sales-pitch
draft: false
---

### Background

Recently, a coworker asked me to send him some good resources for introducing a team to TDD. Rather than hoarding the info, this seemed like something I should probably put somewhere for the next person that asks. Much of this is information that I talked about in my "You down with TDD? Yeah you know me" talk that I wish I could give more often.

There is entirely too much information to fit into one place, so I've broken the info down a bit.
* [My TDD sales pitch (this post!)](/blog/2016/08/my-tdd-sales-pitch)
* [Getting started with TDD](/blog/2016/08/getting-started-with-tdd)

### Intro to TDD

First off, [the wikipedia article](https://en.wikipedia.org/wiki/Test-driven_development) has a good summary of what TDD is. A summary -

* **Every system change that you make requires a failing test first.**
* This is often boiled down to the slogan **"Red/Green/Refactor"**. Red = write a failing test, Green = make the test pass by writing "just enough" code, and Refactor "just enough" that you are happy with the result.
* **TDD encourages simplicity.** "Just enough" is in that last bullet point twice. TDD wants to prevent you from over-designing.
* **TDD is a discipline.** It is not easy to learn, and it is easy to fall out of habit. It takes practice. I worked on incorporating TDD into my dev flow for probably 2 years before it finally stuck.

### Why use TDD?

Some of the reasons I like TDD are found in the code.

* **TDD can lead to simpler designs.** Emphasis on >>>**CAN**<<<. Not will. It is kind of a chicken vs egg situation - if you do TDD, your designs can be simpler...if you simplify your designs, it makes TDD easier. You can still do TDD with complex designs but that is often the type of scenario that causes a person to stop doing TDD.
* **TDD can lead to smaller units of code/looser coupling/cleaner interfaces.** Similar to the previous point, this is not a guaranteed result.
* **TDD can improve your code coverage.** You are writing tests before each line of system code - so you are usually getting pretty close to 100% coverage on anything you are using TDD for. I will not get into the discussion of whether 100% coverage is valuable....but if a high coverage number is important to you, TDD can help.

My favorite reasons that I like TDD are found beyond the code.
* **TDD questions your understandings of the requirements.** The moment in TDD when you are deciding what tests to write for your component is a great moment to reflect on what you do and don't know about the system. It is also a great moment for you and your team to talk, to figure out how to handle the things you don't know about the system.
* **TDD documents the requirements.** TDD gives you thorough tests, which tell the next person looking at the code what you expected the system to do. They are also great for when a Quality Engineer asks you what should happen in a specific scenario, and you can't exactly remember.
* **TDD is a good guide for code reviews.** Without TDD, code reviews that I've done are generally aimless and we end up meandering through the code. When I am using TDD to write something, I start with the tests to guide me through the code review. We can talk about all the things that were and weren't covered by my changes easily, by following the tests.
* **TDD gives you confidence** that your code works as you expected it to. If I make a change, I know I will have a broken test telling me if an unintended side-effect occurred.
* **TDD reduces mental clutter.** This is my favorite. When my wife sends me to the store for a couple things, there is like a 90% chance that I will screw it up. If I'm supposed to get milk, eggs, and butter, I will come home with milk, eggs, bacon, and beer....but no butter. My brain can't be trusted to remember a list of three groceries. It **definitely** can't be trusted to remember hundreds of different test scenarios for the code I'm working on. TDD gets me the confidence to know when I broke something that I didn't think I would break, rather than having to fumble manually through some scenarios that I half remember.

### Why not use TDD?

There are lots of arguments people, including myself, have made to not use TDD.
* **It is hard.** Yeah...at first. Like any skill, it takes practice, and eventually it becomes easier. The benefits outweigh the learning curve.
* **It is slow.** Yeah...at first. Again, you eventually get faster. Plus, bugs are generally easier to figure out because you're writing simpler code, so you spend way less time in a debugger.
* I have tried and **my tests were just breaking any time I wanted to change anything**. Again, you get better at this over time, too. When I started out, my tests were big. They had a lot of setup, and a lot of assertions...because I wasn't writing very small units. Over time, you learn to write smaller units of code, which require less test setup. When small tests for small units of code break, they are easier to fix, so it's not that big of a deal that you broke a test.
* **I don&apos;t need all that test coverage.** Maybe. I agree that 100% coverage is unreasonable. There definitely seems to be diminishing returns after about 80%. But sometimes I think we convince ourselves that we don't need coverage on something because we just aren't sure how to test it. As you get better at writing simpler units of code, it's hard to convince yourself not to cover stuff, because it's a lot easier than it used to be.
* **I test after.** First off, good for you. I know I have a tendency to pass on testing if I am doing it after, and I suspect you may be similar. Also - when you're testing after, it is often at a point in the current sprint/iteration/whatever that you don't really want to be making changes to the underlying code, because you don't want to break anything that's already been tested. So you write your tests around what is easy to test. Or #yolo, you refactor the code to be more testable, and don't tell anyone you made the changes, because there's no time to test them. (Guilty.) In either case....wouldn't it be cool if you could refactor while covered by tests, instead of refactoring to write tests?
* **All that stuff [that DHH said](http://david.heinemeierhansson.com/2014/tdd-is-dead-long-live-testing.html)**. The phrase I have best heard to describe DHH's post is "test-induced damage". Abstractions just for the sake of testing, for example. To me, I see it more as "test-induced compromise" than damage. I can write unit tests for all my things just by making a few small design changes? Sign me up.
* **TDD is not a silver bullet.** Yeah, it's not. Nothing is. But that doesn't mean it doesn't have value.

That's my sales pitch. Next up I'll list [a few good resources for getting started with TDD](/blog/2016/08/getting-started-with-tdd).
