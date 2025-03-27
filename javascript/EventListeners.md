# JavaScript Event Listeners

## Basic Event Handling

### 1. Adding Event Listeners
```javascript
// Using addEventListener
const button = document.querySelector('button');
button.addEventListener('click', function(event) {
    console.log('Button clicked!');
});

// Using inline event handlers (not recommended)
<button onclick="handleClick()">Click me</button>
```

### 2. Removing Event Listeners
```javascript
const button = document.querySelector('button');

function handleClick(event) {
    console.log('Button clicked!');
}

button.addEventListener('click', handleClick);
button.removeEventListener('click', handleClick);
```

## Event Object

### 1. Common Event Properties
```javascript
element.addEventListener('click', function(event) {
    console.log(event.target);        // Element that triggered the event
    console.log(event.currentTarget); // Element the listener is attached to
    console.log(event.type);          // Type of event
    console.log(event.timeStamp);     // When the event occurred
});
```

### 2. Preventing Default Behavior
```javascript
const form = document.querySelector('form');
form.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevents form submission
    // Handle form submission manually
});
```

## Event Bubbling and Capturing

### 1. Event Bubbling
```javascript
document.body.addEventListener('click', function(event) {
    console.log('Body clicked');
});

document.querySelector('.container').addEventListener('click', function(event) {
    console.log('Container clicked');
});

document.querySelector('button').addEventListener('click', function(event) {
    console.log('Button clicked');
    // event.stopPropagation(); // Stop event bubbling
});
```

### 2. Event Capturing
```javascript
document.body.addEventListener('click', function(event) {
    console.log('Body clicked');
}, true); // true enables capturing phase

document.querySelector('.container').addEventListener('click', function(event) {
    console.log('Container clicked');
}, true);
```

## Common Event Types

### 1. Mouse Events
```javascript
element.addEventListener('mouseover', function(event) {
    console.log('Mouse over');
});

element.addEventListener('mouseout', function(event) {
    console.log('Mouse out');
});

element.addEventListener('mousemove', function(event) {
    console.log('Mouse moved');
});

element.addEventListener('click', function(event) {
    console.log('Clicked');
});

element.addEventListener('dblclick', function(event) {
    console.log('Double clicked');
});
```

### 2. Keyboard Events
```javascript
document.addEventListener('keydown', function(event) {
    console.log('Key pressed:', event.key);
    console.log('Key code:', event.keyCode);
});

document.addEventListener('keyup', function(event) {
    console.log('Key released:', event.key);
});
```

### 3. Form Events
```javascript
const form = document.querySelector('form');

form.addEventListener('submit', function(event) {
    event.preventDefault();
    console.log('Form submitted');
});

form.addEventListener('reset', function(event) {
    console.log('Form reset');
});

const input = document.querySelector('input');
input.addEventListener('change', function(event) {
    console.log('Input changed:', event.target.value);
});

input.addEventListener('input', function(event) {
    console.log('Input value:', event.target.value);
});
```

## Advanced Event Handling

### 1. Event Delegation
```javascript
document.querySelector('.container').addEventListener('click', function(event) {
    if (event.target.matches('button')) {
        console.log('Button clicked:', event.target.textContent);
    }
});
```

### 2. Custom Events
```javascript
// Creating and dispatching custom events
const customEvent = new CustomEvent('customEvent', {
    detail: { message: 'Hello from custom event!' }
});

element.addEventListener('customEvent', function(event) {
    console.log(event.detail.message);
});

element.dispatchEvent(customEvent);
```

### 3. Event Throttling and Debouncing
```javascript
// Throttling
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

// Debouncing
function debounce(func, delay) {
    let timeoutId;
    return function(...args) {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
            func.apply(this, args);
        }, delay);
    };
}

// Usage
window.addEventListener('scroll', throttle(() => {
    console.log('Scrolled!');
}, 1000));

const searchInput = document.querySelector('input');
searchInput.addEventListener('input', debounce((event) => {
    console.log('Searching:', event.target.value);
}, 500));
```

## Best Practices

1. **Use Event Delegation for Dynamic Elements**
```javascript
// Good
document.querySelector('.container').addEventListener('click', function(event) {
    if (event.target.matches('.dynamic-element')) {
        handleClick(event);
    }
});

// Avoid
document.querySelectorAll('.dynamic-element').forEach(element => {
    element.addEventListener('click', handleClick);
});
```

2. **Clean Up Event Listeners**
```javascript
class Component {
    constructor() {
        this.handleClick = this.handleClick.bind(this);
        this.element.addEventListener('click', this.handleClick);
    }

    handleClick(event) {
        console.log('Clicked');
    }

    destroy() {
        this.element.removeEventListener('click', this.handleClick);
    }
}
```

3. **Use Passive Event Listeners for Better Performance**
```javascript
// Good for scroll events
document.addEventListener('scroll', function(event) {
    // Handle scroll
}, { passive: true });
```

## Practice Exercise

Create a drag-and-drop interface:
```javascript
class Draggable {
    constructor(element) {
        this.element = element;
        this.isDragging = false;
        this.currentX = 0;
        this.currentY = 0;
        this.initialX = 0;
        this.initialY = 0;
        this.xOffset = 0;
        this.yOffset = 0;

        this.init();
    }

    init() {
        this.element.addEventListener('mousedown', this.dragStart.bind(this));
        document.addEventListener('mousemove', this.drag.bind(this));
        document.addEventListener('mouseup', this.dragEnd.bind(this));
    }

    dragStart(e) {
        this.initialX = e.clientX - this.xOffset;
        this.initialY = e.clientY - this.yOffset;

        if (e.target === this.element) {
            this.isDragging = true;
        }
    }

    drag(e) {
        if (this.isDragging) {
            e.preventDefault();
            
            this.currentX = e.clientX - this.initialX;
            this.currentY = e.clientY - this.initialY;

            this.xOffset = this.currentX;
            this.yOffset = this.currentY;

            this.setTranslate(this.currentX, this.currentY, this.element);
        }
    }

    setTranslate(xPos, yPos, el) {
        el.style.transform = `translate3d(${xPos}px, ${yPos}px, 0)`;
    }

    dragEnd() {
        this.initialX = this.currentX;
        this.initialY = this.currentY;
        this.isDragging = false;
    }
}

// Usage
const draggableElement = document.querySelector('.draggable');
new Draggable(draggableElement);
``` 