// Loops :- Used to perform repeatative tasks 
// eg:- Print "Gagan" for 5 time 
// console.log("Gagan");
// console.log("Gagan");
// console.log("Gagan");
// console.log("Gagan");
// console.log("Gagan");

// For loop :- When we know limits or number of iterations (start and end values)
// i++ = i=i+1
console.log("For Loop");
for(let i=0;i<10;i++){
    console.log("Gagan",i);
}

// while loop :- When we don't know limits or number of iterations (start and end values) it exceutes it after checking all the conditions
// i++ = i=i+1
console.log("While Loop");
let icount=0;
while(icount<10){
    console.log("Gagan",icount);
    icount++;
}

// do-while loop :- When we don't know limits or number of iterations , but execute it for one time without checking the conditions(start and end values)
// i++ = i=i+1
console.log("do-while Loop");
let counti=0
do{
    console.log("Gagan",counti);
    counti++;
}while(counti<10)

// "We can use two keywords"
console.log("We can use two keywords");
console.log("continue :- to skip iteration");
console.log("break :- to stop after any particular iteration");
