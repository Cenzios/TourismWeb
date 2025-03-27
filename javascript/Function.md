# JavaScript Functions

## Function Declaration and Expression

### 1. Function Declaration
```javascript
function greet(name) {
    return `Hello, ${name}!`;
}
```

### 2. Function Expression
```javascript
const greet = function(name) {
    return `Hello, ${name}!`;
};
```

### 3. Arrow Functions (ES6+)
```javascript
const greet = (name) => `Hello, ${name}!`;
```

## Function Parameters

### 1. Default Parameters
```javascript
function greet(name = 'Guest') {
    return `Hello, ${name}!`;
}
console.log(greet()); // "Hello, Guest!"
console.log(greet('John')); // "Hello, John!"
```

### 2. Rest Parameters
```javascript
function sum(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
}
console.log(sum(1, 2, 3, 4, 5)); // 15
```

### 3. Destructuring Parameters
```javascript
function printUserInfo({ name, age, city }) {
    return `${name} is ${age} years old and lives in ${city}`;
}
const user = { name: 'John', age: 30, city: 'New York' };
console.log(printUserInfo(user));
```

## Advanced Function Concepts

### 1. Higher-Order Functions
```javascript
function multiplyBy(factor) {
    return function(number) {
        return number * factor;
    };
}

const multiplyByTwo = multiplyBy(2);
const multiplyByThree = multiplyBy(3);

console.log(multiplyByTwo(4)); // 8
console.log(multiplyByThree(4)); // 12
```

### 2. Function Composition
```javascript
const compose = (...functions) => 
    functions.reduce((f, g) => (...args) => f(g(...args)));

const addOne = x => x + 1;
const multiplyByTwo = x => x * 2;
const square = x => x * x;

const composed = compose(square, multiplyByTwo, addOne);
console.log(composed(3)); // ((3 + 1) * 2)² = 64
```

### 3. Memoization
```javascript
function memoize(fn) {
    const cache = new Map();
    return function(...args) {
        const key = JSON.stringify(args);
        if (cache.has(key)) {
            return cache.get(key);
        }
        const result = fn.apply(this, args);
        cache.set(key, result);
        return result;
    };
}

const fibonacci = memoize(function(n) {
    if (n <= 1) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
});

console.log(fibonacci(10)); // 55
```

## Constructor Functions

### 1. Basic Constructor
```javascript
function Person(name, age) {
    this.name = name;
    this.age = age;
    
    this.greet = function() {
        return `Hello, I'm ${this.name} and I'm ${this.age} years old`;
    };
}

const person = new Person('John', 30);
console.log(person.greet());
```

### 2. Prototype Methods
```javascript
function Car(make, model) {
    this.make = make;
    this.model = model;
}

Car.prototype.getInfo = function() {
    return `${this.make} ${this.model}`;
};

const car = new Car('Toyota', 'Camry');
console.log(car.getInfo());
```

## Function Context and `this`

### 1. Understanding `this`
```javascript
const person = {
    name: 'John',
    greet: function() {
        console.log(`Hello, ${this.name}`);
    }
};

const greet = person.greet;
person.greet(); // "Hello, John"
greet(); // "Hello, undefined"
```

### 2. Binding Context
```javascript
const person = {
    name: 'John',
    greet: function() {
        console.log(`Hello, ${this.name}`);
    }
};

const greet = person.greet.bind(person);
greet(); // "Hello, John"
```

## Best Practices

1. **Use Arrow Functions for Callbacks**
```javascript
// Good
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(num => num * 2);

// Avoid
const doubled = numbers.map(function(num) {
    return num * 2;
});
```

2. **Keep Functions Pure When Possible**
```javascript
// Pure function
function add(a, b) {
    return a + b;
}

// Impure function
let total = 0;
function addToTotal(num) {
    total += num;
    return total;
}
```

3. **Use Function Composition Over Inheritance**
```javascript
const canEat = {
    eat: function() {
        return 'eating';
    }
};

const canWalk = {
    walk: function() {
        return 'walking';
    }
};

const person = Object.assign({}, canEat, canWalk);
console.log(person.eat()); // 'eating'
console.log(person.walk()); // 'walking'
```

## Practice Exercises

1. Create a function that implements debouncing:
```javascript
function debounce(func, delay) {
    let timeoutId;
    return function(...args) {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
            func.apply(this, args);
        }, delay);
    };
}

const debouncedSearch = debounce((query) => {
    console.log('Searching for:', query);
}, 500);
```

2. Create a function that implements throttling:
```javascript
function throttle(func, limit) {
    let inThrottle;
    return function(...args) {
        if (!inThrottle) {
            func.apply(this, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

const throttledScroll = throttle(() => {
    console.log('Scrolled!');
}, 1000);
``` 