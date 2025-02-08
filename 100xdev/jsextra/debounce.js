
function debounce(fn, t)
{
    let timer;
    return function(...args) {
        clearTimeout(timer); // first time the timer will be null, which will be harmless, but later, since object is created once, 
                             // it will have value if the call happended 
                             // before the fxn was supposed to be executed.
        timer = setTimeout(() => fn(...args), t);
    }
}

const obj = debounce(console.log, 100)
// console.log(debounce)
// console.log(obj)
obj("hii", "muy")
obj("hii", "1")
obj("hii", "2")
obj("hii", "3")
obj("hii", "ddf")
// this is not the most proper example as all previous calls would keep getting cancelled, but i will improve

// Why to use Debouncing?
// Have you ever encountered a situation where a function gets called multiple times within a short amount of time, 
// leading to performance issues or unexpected behavior? This is a common problem in JavaScript, 
// especially when working with events like scrolling, resizing, or typing.

// Fortunately, there's a simple technique called "debouncing" that can help you control the frequency of function calls and avoid these issues.

// What is Debouncing?
// Debouncing is a method that limits the rate at which a function gets called. 
// It works by delaying the execution of a function until a certain amount of time has passed without any additional function calls. 
// If another function call happens within this time frame, the timer resets and the function execution is delayed again.

// Debouncing is useful in situations where you want to prevent a function from being called too frequently, such as:

// Handling user input events like keypresses, mouse movements, or button clicks

// Handling expensive computations or network requests that don't need to be performed on every function call