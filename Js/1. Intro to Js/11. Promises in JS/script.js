// Promises are a way to handle asynchronous operations in JavaScript. They provide a cleaner and more manageable way to work with asynchronous code compared to callbacks. A Promise is an object that represents the eventual completion (or failure) of an asynchronous operation and its resulting value.

// A Promise can be in one of three states:
// 1. Pending: The initial state, neither fulfilled nor rejected.
// 2. Fulfilled: The operation completed successfully, and the promise has a value.
// 3. Rejected: The operation failed, and the promise has a reason for the failure.

// // Example of creating a Promise:
// const ticket= new Promise((resolve, reject) => {
//     const isBoarded = false;
//     if(isBoarded){
//         resolve("Boarding successful! Enjoy your flight.");
//     }else{
//         reject("Boarding failed! Please check your ticket and try again.");
//     }
// });
// // To consume a Promise, we can use the .then() method for handling fulfilled promises and the .catch() method for handling rejected promises.
// ticket.then((message) => {
//     console.log(message);
// }).catch((error) => {
//     console.error(error);
// });
// // We can also chain multiple .then() calls to handle a sequence of asynchronous operations without nesting callbacks, which helps to avoid callback hell.
// const fetchData = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("Data fetched successfully!");
//     }, 2000);
// });
// fetchData.then((message) => {
//     console.log(message);
//     return "Processing data...";
// }).then((message) => {
//     console.log(message);
//     return "Data processed!";
// }).then((message) => {
//     console.log(message);
// }
// ).catch((error) => {
//     console.error("An error occurred:", error);
// });
// // Promises also have a .finally() method that allows you to execute code regardless of whether the promise was fulfilled or rejected.
// fetchData.then((message) => {
//     console.log(message);
// }).catch((error) => {
//     console.error("An error occurred:", error);
// }).finally(() => {
//     console.log("This will always be executed, regardless of the promise outcome.");
// });

// Promises are a powerful tool for managing asynchronous operations in JavaScript, and they help to improve the readability and maintainability of your code.  

const ticket = new Promise((resolve,reject) => {
    const isBoarded = true;
    if(isBoarded){
        resolve("Boarding successful! Enjoy your flight.");
    }else{
        reject("Boarding failed! Please check your ticket and try again.");
    }
});

ticket.then((data) => {
    console.log("Whooo...",data);
}).catch((data) => {
    console.log("Oh noo...",data);
}).finally(()=>{
    console.log("This will always be executed, regardless of the promise outcome.");
})


// Making system for booking a hotel room using Promises

function getCandies(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            const candies = "🍬";
            console.log("First have some candies",candies);
            resolve(candies);
        },2000);
        
    })
}

function handOverkeys(candies){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            const keys = "🔑";
            console.log("Here are your keys", keys);
            resolve(keys);
        },4000);
        
    })
}

function onBoarding(candies,keys){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            const HomelikeVilla = "🏠";
            console.log("Now you can go inside your home like villa", HomelikeVilla);
            resolve(HomelikeVilla);
        },5000);
        
    })
}

console.log(getCandies());

setTimeout(() => {
    console.log("I hope you like candies! v-v");
}, 3000);

console.log(handOverkeys());

setTimeout(()=>{
    console.log("Enjoy your stay! v-v");
},6000);

console.log(onBoarding());


