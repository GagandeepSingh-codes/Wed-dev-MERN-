// // Named function :- It is a function that has a name and can be called by its name. It is defined using the 'function' keyword followed by the function name and parentheses.
// // for example :-
// function greet1(){
//     console.log("Hi for once, welcome to JavaScript!");
// }

// greet1();

// // Anonymous / Expression function :- It is a function that does not have a name and is often assigned to a variable. It can be used as a callback function or passed as an argument to other functions.
// // for example :-
// let greet2 = function(){
//     console.log("Hi for twice, welcome to JavaScript!");
// }
// greet2();


// // Arrow function :- It is a shorter syntax for writing function expressions. It does not have its own 'this' context and is often used for concise functions or when you want to preserve the 'this' context of the surrounding code.
// // for example :-
// let greet3 = () => {
//     console.log("Hi for thrice, welcome to JavaScript!");
// }

// greet3();

// // Advance featture of arrow function :- Arrow functions can have implicit return, which means that if the function body consists of a single expression, you can omit the curly braces and the 'return' keyword. The value of the expression will be automatically returned.

// let add1 = (a,b) => {
//     return a+b;
// }
// console.log(add1(2,34));

// let add = (a,b) => a+b;
// console.log(add(5,10)); // Output: 15

// Call back function :- A callback function is a function that is passed as an argument to another function and is executed after a certain event or condition is met. It allows you to handle asynchronous operations or perform actions after a specific task is completed.
// for example :-
let addition = (a,b,sum) => {
    const result = a+b;
    sum(result);
}

addition(12,34,(result) => {
    console.log("The sum is: " + result);
}); 

// Using arrow function as a callback
let calculate = (a,b,operation) =>{ 
    return operation(a,b);
}

const mul = (a,b) => a*b;
const multiplication = calculate(2,3,mul)
console.log("The multiplication is: " + multiplication);

// Finding the first negative number in an array using a callback function

const arr = [2,5,6,8,9,0,-3,-5,-2]

const printFirstNegativeNumber = (num) => num<0;

const result = arr.find(printFirstNegativeNumber);
console.log("The first negative number is: " + result);

// forEach function :- The forEach() method is an array method in JavaScript that allows you to iterate over each element in an array and execute a provided function for each element. It is commonly used to perform operations on each item in an array without needing to create a new array or return a value.

arr.forEach((num,index) => {
    console.log("Element: " , num , " Index:" , index);

})