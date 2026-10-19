console.log("Hello world -> Node.js \n\n")

// Import Module using CommonJS
// const getNumber = require('./modules/random-number');
// console.log(getNumber())

// Destructuring the exact function from the export file 
const { randomNumberLessThanTen, getDate, getTime, getYear } = require("./modules/random-number");
console.log(randomNumberLessThanTen());
console.log(getDate());
console.log(getTime());
console.log(getYear());

// Destructuring the function using the object assigned value
const T = require("./modules/random-number");
console.log(T.randomNumberLessThanTen());
console.log(T.getDate());
console.log(T.getTime());
console.log(T.getYear());

// Imports based on the conditions the functions are assigned

const {add, sub, mod}= require("./modules/controller");
console.log(typeof add);
console.log(typeof sub);
console.log(typeof mod);

// Bypass undefined function using proxy (act like manager for objects)
const rawArithmetic = require("./modules/controller");

const A = new Proxy(rawArithmetic, {
    get(target, property) {
        if (typeof target[property] === 'function') { return target[property]; }

        return function() {
            return console.warn(`Fallback to the function, "${property} is missing or undefined!"`)
        };
            
    }
});

console.log(A.add(5,3));
console.log(A.sub(4, 5));
console.log(A.mod(20, 10));