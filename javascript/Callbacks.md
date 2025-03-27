# JavaScript Callbacks

## What are Callbacks?
A callback is a function that is passed as an argument to another function and is executed after the main function has finished its execution. Callbacks are fundamental to asynchronous programming in JavaScript.

## Basic Callback Examples

### 1. Simple Callback
```javascript
function greet(name, callback) {
    console.log(`Hello, ${name}!`);
    callback();
}

function sayGoodbye() {
    console.log('Goodbye!');
}

greet('John', sayGoodbye);
// Output:
// Hello, John!
// Goodbye!
```

### 2. Callback with Parameters
```javascript
function processUser(name, age, callback) {
    const user = {
        name: name,
        age: age
    };
    callback(user);
}

function displayUser(user) {
    console.log(`User: ${user.name}, Age: ${user.age}`);
}

processUser('John', 30, displayUser);
```

## Asynchronous Callbacks

### 1. setTimeout
```javascript
console.log('Start');

setTimeout(function() {
    console.log('This runs after 2 seconds');
}, 2000);

console.log('End');
// Output:
// Start
// End
// This runs after 2 seconds
```

### 2. Event Listeners
```javascript
const button = document.querySelector('button');

button.addEventListener('click', function() {
    console.log('Button clicked!');
});
```

## Common Callback Patterns

### 1. Error-First Callbacks
```javascript
function readFile(path, callback) {
    // Simulating file read
    setTimeout(() => {
        const error = null; // or new Error('File not found')
        const data = 'File contents';
        
        if (error) {
            callback(error, null);
        } else {
            callback(null, data);
        }
    }, 1000);
}

readFile('example.txt', function(error, data) {
    if (error) {
        console.error('Error:', error);
    } else {
        console.log('Data:', data);
    }
});
```

### 2. Callback Hell
```javascript
// Bad - Callback Hell
function getData(callback) {
    setTimeout(() => {
        callback('Data 1');
        setTimeout(() => {
            callback('Data 2');
            setTimeout(() => {
                callback('Data 3');
            }, 1000);
        }, 1000);
    }, 1000);
}

// Better - Using Promises
function getDataPromise() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('Data 1');
        }, 1000);
    });
}

// Even Better - Using async/await
async function getDataAsync() {
    const data1 = await getDataPromise();
    const data2 = await getDataPromise();
    const data3 = await getDataPromise();
    return [data1, data2, data3];
}
```

## Advanced Callback Patterns

### 1. Callback Queue
```javascript
class CallbackQueue {
    constructor() {
        this.queue = [];
        this.processing = false;
    }

    add(callback) {
        this.queue.push(callback);
        if (!this.processing) {
            this.process();
        }
    }

    async process() {
        if (this.queue.length === 0) {
            this.processing = false;
            return;
        }

        this.processing = true;
        const callback = this.queue.shift();
        await callback();
        this.process();
    }
}

const queue = new CallbackQueue();
queue.add(() => console.log('First'));
queue.add(() => console.log('Second'));
queue.add(() => console.log('Third'));
```

### 2. Callback with Context
```javascript
class User {
    constructor(name) {
        this.name = name;
    }

    greet(callback) {
        callback.call(this);
    }
}

const user = new User('John');

function sayHello() {
    console.log(`Hello, I'm ${this.name}`);
}

user.greet(sayHello);
```

## Best Practices

### 1. Avoid Callback Hell
```javascript
// Bad
function processData(data, callback) {
    processStep1(data, function(result1) {
        processStep2(result1, function(result2) {
            processStep3(result2, function(result3) {
                callback(result3);
            });
        });
    });
}

// Good - Using Promises
function processDataPromise(data) {
    return processStep1Promise(data)
        .then(processStep2Promise)
        .then(processStep3Promise);
}

// Better - Using async/await
async function processDataAsync(data) {
    const result1 = await processStep1Promise(data);
    const result2 = await processStep2Promise(result1);
    return await processStep3Promise(result2);
}
```

### 2. Error Handling
```javascript
function fetchData(callback) {
    try {
        // Simulating API call
        setTimeout(() => {
            const data = { id: 1, name: 'John' };
            callback(null, data);
        }, 1000);
    } catch (error) {
        callback(error, null);
    }
}

fetchData((error, data) => {
    if (error) {
        console.error('Error:', error);
    } else {
        console.log('Data:', data);
    }
});
```

## Practice Exercises

### 1. Create a Rate Limiter
```javascript
class RateLimiter {
    constructor(limit, interval) {
        this.limit = limit;
        this.interval = interval;
        this.queue = [];
        this.processing = false;
    }

    add(callback) {
        this.queue.push(callback);
        if (!this.processing) {
            this.process();
        }
    }

    async process() {
        if (this.queue.length === 0) {
            this.processing = false;
            return;
        }

        this.processing = true;
        const batch = this.queue.splice(0, this.limit);
        
        await Promise.all(batch.map(callback => callback()));
        
        setTimeout(() => {
            this.process();
        }, this.interval);
    }
}

const limiter = new RateLimiter(2, 1000);
for (let i = 0; i < 5; i++) {
    limiter.add(() => console.log(`Task ${i} completed`));
}
```

### 2. Create a Retry Mechanism
```javascript
function retry(fn, retries = 3, delay = 1000) {
    return function(...args) {
        return new Promise((resolve, reject) => {
            function attempt(n) {
                fn(...args)
                    .then(resolve)
                    .catch(error => {
                        if (n === 0) {
                            reject(error);
                        } else {
                            setTimeout(() => attempt(n - 1), delay);
                        }
                    });
            }
            attempt(retries);
        });
    };
}

// Usage
const fetchWithRetry = retry(fetch, 3);
fetchWithRetry('https://api.example.com/data')
    .then(response => response.json())
    .catch(error => console.error('Failed after retries:', error));
``` 