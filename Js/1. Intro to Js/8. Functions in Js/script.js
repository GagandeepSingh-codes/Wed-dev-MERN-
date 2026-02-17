// // To add to numbers 
// let a = 12;
// let b = 24;
// let sum = a+b;
// console.log(sum);

// // But rather than writing the same code again and again to add two numbers we can create a function.

// // Function :- A function is a block of code that performs a specific task. We can call the function whenever we want to perform that task.

// // Func decleration 
// function summation(a, b){
//     let sum = a+b ;
//     console.log("The sum of a and b is :- ",sum); /*We can use return instead of console.log to return the value*/
//     return sum;
// }
// // Func call
// summation(20,30);
// summation(100,200);

// function greet(username){
//     console.log("Hi,", username ,"Welcome to my full-stack website...");
// }
// greet("Gagandeep singh")


// // Anoymous function/Expression function :- A function without a name is called an anonymous function. We can assign an anonymous function to a variable and call it using that variable.

// let result = function(a, b){
//     return a + b;
// }
// console.log("The result of summation is :- ", result(50, 70));

// Nested function :- A function inside another function is called a nested function. The inner function can access the variables of the outer function.

function addSquares(a,b){
    const x = squares(a);
    const y = squares(b);

    function squares(num){
        return num*num;
    }
    return x+y
}

console.log(addSquares(11,21));
