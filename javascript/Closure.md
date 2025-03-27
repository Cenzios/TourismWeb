# JavaScript Closures

## What is a Closure?
A closure is a function that has access to variables in its outer (enclosing) lexical scope, even after the outer function has returned. This means a closure can remember and access variables and arguments of its outer function even after the function has finished executing.

## Basic Example
```javascript
function outerFunction() {
    let outerVariable = 'I am from outer scope';
    
    function innerFunction() {
        console.log(outerVariable); // Can access outerVariable
    }
    
    return innerFunction;
}

const closure = outerFunction();
closure(); // Outputs: "I am from outer scope"
```

## Practical Use Cases

### 1. Data Privacy
```javascript
function createCounter() {
    let count = 0; // Private variable
    
    return {
        increment: function() {
            count++;
            return count;
        },
        decrement: function() {
            count--;
            return count;
        },
        getCount: function() {
            return count;
        }
    };
}

const counter = createCounter();
console.log(counter.increment()); // 1
console.log(counter.increment()); // 2
console.log(counter.decrement()); // 1
console.log(counter.getCount()); // 1
```

### 2. Function Factories
```javascript
function multiply(x) {
    return function(y) {
        return x * y;
    };
}

const multiplyByTwo = multiply(2);
const multiplyByThree = multiply(3);

console.log(multiplyByTwo(4)); // 8
console.log(multiplyByThree(4)); // 12
```

## Advanced Examples

### 1. Module Pattern
```javascript
const calculator = (function() {
    let result = 0;
    
    return {
        add: function(x) {
            result += x;
            return this;
        },
        subtract: function(x) {
            result -= x;
            return this;
        },
        multiply: function(x) {
            result *= x;
            return this;
        },
        getResult: function() {
            return result;
        },
        reset: function() {
            result = 0;
            return this;
        }
    };
})();

// Method chaining
console.log(calculator.add(5).multiply(2).subtract(3).getResult()); // 7
```

### 2. Currying with Closures
```javascript
function curry(fn) {
    return function curried(...args) {
        if (args.length >= fn.length) {
            return fn.apply(this, args);
        }
        return function(...moreArgs) {
            return curried.apply(this, args.concat(moreArgs));
        };
    };
}

function sum(a, b, c) {
    return a + b + c;
}

const curriedSum = curry(sum);
console.log(curriedSum(1)(2)(3)); // 6
console.log(curriedSum(1, 2)(3)); // 6
```

## Common Pitfalls and Best Practices

1. **Memory Leaks**: Be careful with closures in loops
```javascript
// Bad
for (var i = 0; i < 5; i++) {
    setTimeout(function() {
        console.log(i); // Will print 5 five times
    }, 1000);
}

// Good
for (let i = 0; i < 5; i++) {
    setTimeout(function() {
        console.log(i); // Will print 0,1,2,3,4
    }, 1000);
}
```

2. **Performance Considerations**: Closures keep references to their outer scope variables, which can impact memory usage if not used carefully.

## Key Points to Remember

1. Closures have access to variables in their outer scope even after the outer function has returned
2. They are commonly used for:
   - Data privacy
   - Function factories
   - Module patterns
   - Currying
3. Each closure maintains its own reference to the outer variables
4. Closures can lead to memory leaks if not used carefully
5. They are fundamental to many JavaScript patterns and frameworks

## Practice Exercise
Create a function that generates a sequence of Fibonacci numbers using closures:

```javascript
function createFibonacciGenerator() {
    let prev = 0;
    let curr = 1;
    
    return function() {
        const next = prev + curr;
        prev = curr;
        curr = next;
        return prev;
    };
}

const fib = createFibonacciGenerator();
console.log(fib()); // 1
console.log(fib()); // 1
console.log(fib()); // 2
console.log(fib()); // 3
console.log(fib()); // 5
``` 