---
title: Mocking ES2015 modules
date: January 4, 2017
sortableDate: 2017/01/04
layout: article.jade
snippet: When unit testing your ES2015 code, you'll probably want to mock dependencies. My team had been tolerating some test-induced damage to our code, in order to allow mocking of ES2015 module exports. But recently we discovered a feature of ES2015 modules that allowed us to no longer accept the test-induced damage.
url: blog/2017/01/mocking-es2015-modules
---

If you're unit testing code that is using ES2015 modules [[1](#footnotes)], you'll probably point want to mock dependencies at some point. For the most part this is just like mocking things in any code. My tool of choice right now is [simple-mock](https://github.com/jupiter/simple-mock), but there are gajillions of options.

### Test-induced damage

There is some test-induced damage that my team has come to accept with simple-mock, and I am guessing it would be an issue with other mocking libraries like it. While simple-mock is great for mocking functions that are properties on exported objects, it seemed difficult to mock standalone/named exported functions from dependencies.

So we found this to be easy: [[2](#footnotes)]

```javascript
//dependency.js
export default {
    someAction: function(){
        //....
    }
}

//test.js
import simple from 'simple-mock';

import dependency from './dependency';

describe('feature', function(){
    afterEach(function(){
        simple.restore();
    });

    it('calls a dependency', function(){
        //Arrange
        simple.mock(dependency, 'someAction');

        //Act
        systemUnderTest.execute();

        //Assert
        expect(dependency.someAction.callCount).to.equal(1);
    });
});
```

But the `simple.mock` function is looking for an object, and a property on that object. So we found this to be difficult:

```javascript
//dependency.js
export function someAction(){
    //....
}

//test.js
import simple from 'simple-mock';

// Notice the difference in how we are importing...
import {someAction} from './dependency';

describe('feature', function(){
    afterEach(function(){
        simple.restore();
    });

    it('calls a dependency', function(){
        //Arrange
        // ¯\_(ツ)_/¯
        // How would we mock 'someAction'? It isn't a property on an object.

        //Act
        systemUnderTest.execute();

        //Assert
        expect(someAction.callCount).to.equal(1);
    });
});
```

As a result of our inability to solve this problem, we had accepted that we would always export a default object from our code, with functions on it as properties.

So while we wanted to export something like this:

```javascript
//dependency.js - the desired way
export function someAction(){
    //....
}

export function otherAction(){
    //...
}
```

We just always accepted that we would do this:

```javascript
//dependency.js - the undesired way
export default {
    someAction: function(){
        //....
    },
    otherAction: function(){
        //...
    }
}
```

### Why does it matter?

There's a reason this was not ideal. Modern bundlers are able to remove the unused exports out of your code, to reduce your bundle size. But code is only removed if it isn't imported. By exporting a single object with a bunch of functions on it, the entire object must be imported by the calling code.

So in the first example, if your code called `someAction` but not `otherAction`, your final bundle would only include `someAction`. But in the second example, even if you are only ever calling `someAction`...you are importing the entire object, and therefore the unused `otherAction`.

In our app, that ends up not being a problem, because we are using all of the code we write. But if we were writing a library, or some code that was intended to be shared by other apps and therefore might not use everything, this would not be cool.

### But there is a better way to import the dependency.

Today, we discovered the answer to our problems. The "import * as" syntax allows you to import all exports from a dependency, expanding them onto an object - and therefore allowing you to mock a named/standalone function from your dependency. [[3](#footnotes)]

So all that changes is how we import dependencies into our tests:

```javascript
//dependency.js
export function someAction(){
    //....
}

//test.js
import simple from 'simple-mock';

//     vvvvvvvvvvvvvvv Notice the difference in how we are importing
import * as dependency from './dependency';
//     ^^^^^^^^^^^^^^^

describe('feature', function(){
    afterEach(function(){
        simple.restore();
    });

    it('calls a dependency', function(){
        //Arrange
        // and now we can pass simple.mock a property on an object.
        simple.mock(dependency, 'someAction');

        //Act
        systemUnderTest.execute();

        //Assert
        expect(dependency.someAction.callCount).to.equal(1);
    });
});
```

Hooray, JavaScript! Hooray, mocking! Boo, test-induced damage!

---

<div id="footnotes"></div>

[1] If you aren't unit testing your JS, you should be! It is not as scary as it sounds. You'll see great improvements to the quality of your front-end code. As an added bonus, the guilt that you probably feel for not testing your JS will disappear.

[2] [Why aren't you using ES2015 arrow functions in your tests?](http://mochajs.org/#arrow-functions)

[3] I ain't gonna lie, the discovery of this functionality was, as usual, the result of a [stackoverflow search](http://stackoverflow.com/a/38414160/1585069) that I definitely tried a long time ago, but must have narrowly missed.
