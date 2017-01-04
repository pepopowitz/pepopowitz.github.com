---
title: Getting Started With TDD
date: August 19, 2016
sortableDate: 2016/08/19
layout: article.jade
snippet: Some advice and resources to help someone get started with TDD.
url: blog/2016/08/getting-started-with-tdd
draft: false
---

### Background

Recently, a coworker asked me to send him some good resources for introducing a team to TDD. Rather than hoarding the info, this seemed like something I should probably put somewhere for the next person that asks. Much of this is information that I talked about in my "You down with TDD? Yeah you know me" talk that I wish I could give more often.

There is entirely too much information to fit into one place, so I've broken the info down a bit.

* [My TDD sales pitch](/blog/2016/08/my-tdd-sales-pitch)
* [Getting started with TDD (this post!)](/blog/2016/08/getting-started-with-tdd)

### Getting Started

Right, so there are a couple different ways to handle this.

#### Cold Turkey

There are many who will say that cold turkey is the way to go to learn TDD. TDD all the things, on all the projects, all the time! The only way to truly learn it is to be thrown into the fire, with no way to escape but a fireman's axe labelled "TDD".

Maybe this works for you. If it does...I apologize, I don't have any advice, because this would never work for me.

#### Baby Steps

Things generally work better for me if I dip my toes in the water first. TDD for me took a couple years of biting off a little more each time. It went something like this:

1. **Consume resources**. Watch videos. Read blogs. Learn what TDD is all about.
1. **Practice.** Start messing around with some meaningless code, just to see what TDD feels like. [Code katas](http://codekata.com/) are a great medium for this.
1. **Introduce TDD into one project, in one feature.** Sometimes there is a task on a project that just feels perfectly made for TDD. Something where you need to do some calculations, for example. The test scenarios practically write themselves. It is here that you can start to introduce TDD into your development flow.

    Sometimes the features will end up being more difficult to TDD than you expected - that's okay. If you need to stop, you can stop. You also might find yourself feeling like you are taking to long to get things done, the TDD learning curve is just fighting you. Again - I stopped here many times myself, and abandoned TDD until I felt like I was back on schedule. **It's okay to introduce the practice a little bit at a time.**
1. **Introduce TDD into one project, in many features.** Alright, so now you're starting to build momentum and confidence. Start TDD'ing more!
1. **TDD all the things!** Okay, not really. There are things that are just not worth testing or TDD'ing, in my opinion. The cost is just too high for the value you get. But now you can go into a project saying "yeah, we're going to TDD the snot out of this thing."

### Resources
#### The man himself

If there's anyone who knows anything about TDD, it's [Kent Beck](https://twitter.com/KentBeck). These resources would be a good place to start if you would like to learn from "the source" of TDD.
* [**He wrote a book.**](https://www.amazon.com/Test-Driven-Development-Kent-Beck/dp/0321146530/ref=sr_1_1)  I would be lying if I said I read it but I would like to.
* [**He made some videos.**](https://pragprog.com/screencasts/v-kbtdd/test-driven-development) I would be lying if I said I've watched them but I would like to.

#### Mark Seemann

I'll talk about this more in another post, but the most significant way to improve your ability to TDD is to improve your ability to write tests. [Mark Seemann](http://blog.ploeh.dk/about/) is full of good tips on writing autonomous tests that follow principles of clean software design.
* [**He has a really good Pluralsight video on Advanced Unit Testing**](https://app.pluralsight.com/library/courses/advanced-unit-testing/table-of-contents). I have watched this and it has significantly improved my test code.
* [**He has another Pluralsight video called Outside-In TDD.**](https://app.pluralsight.com/library/courses/outside-in-tdd/table-of-contents) I have not watched this but I want to. There are a couple strategies to TDD - outside-in, and then I guess obviously inside-out. Inside-out seems to be more natural for people new to TDD. You build the inner-most components (i.e. data-access) first, then work your way out. Outside-in is, in my opinion, the correct way to TDD. Build the outer-most component (i.e. the UI) first, then work your way in. The big advantage to outside-in is that it allows you to shape the interfaces between components as the caller would want to use them.

#### Chess TDD series

I would be lying if I said I watched all 60-some episodes, but Erik Dietrich put together a really nice [series of screencasts](href='http://www.daedtech.com/tag/chesstdd/'), which captured him using TDD to build a chess game. It is neat to see it in action.

#### A good testing checklist

[This is a checklist](https://dzone.com/articles/unit-testing-checklist) that helps you write good tests. Your tests are as important as your system code, so you should put effort into writing good, clean test code.

### TDD is an investment

Hopefully the above resources can help you get started with TDD. Like any other skill, TDD takes practice and patience. It took me years to get from TDD newb to feeling totally comfortable with it, so don't feel discouraged if it feels difficult at first.
