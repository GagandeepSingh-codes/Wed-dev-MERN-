// If-else ladder 
// // Making a grade assigning system
// console.log("CALCULATING YOUR GRADES!!!");

// const marks = 99;

// if(marks>=95){
//     console.log("Excellent grade :- A++\nKeep it up my boy!!!");
// }
// else if(marks>=90){
//     console.log("Great grade :- A+\nGreat job!!!");
// }
// else if(marks>=85){
//     console.log("Good grade :- B++\nGood job!!!");
// }
// else if(marks>=80){
//     console.log("Better grade :- B+\nBetter job!!!");
// }
// else if(marks>=70){
//     console.log("Average grade :- C\nAverage job!!!");
// }
// else{
//     console.log("Below Average grade :- D\nYou have potential, do better!!!");
// }
// console.log("There is always hope of improvement!!!");

// Making a grade assigning system
console.log("CALCULATING YOUR GRADES!!!");

const marks = 90;

switch(marks){
    case 95:
        console.log("Excellent grade :- A++\nKeep it up my boy!!!");
        break;
    case 90:
        console.log("Great grade :- A+\nGreat job!!!");
        break;
    case 85:
        console.log("Good grade :- B++\nGood job!!!");
        break;
    case 80:
        console.log("Better grade :- B+\nBetter job!!!");
        break;
    case 70:
        console.log("Average grade :- C\nAverage job!!!");
        break;
    default:
        console.log("Below Average grade :- D\nYou have potential, do better!!!");
        break;
}
console.log("There is always hope of improvement!!!");