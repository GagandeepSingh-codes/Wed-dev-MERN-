// Variable :- To store a single value we use variable. It is a container that holds a value. We can change the value of a variable at any time. We can also use the same variable to store different values.

// let name = "Ram"
// console.log(name)

// But to store multiple values we use array. 
// let student1 = "Ram"
// let student2 = "Sham"
// let student3 = "Naam"
// let student4 = "Bolo"
// let student5 = "Hari"

// Array :- An array is a collection of values. It can hold multiple values of different types. We can access the values in an array using their index. The index starts from 0.

let studentsArr = ["Ram", "Sham", "Naam", "Bolo", "Hari"]
console.log(studentsArr);
console.log(studentsArr[2]); /* Accessing the value at index 2 which is "Naam" */
console.log(studentsArr.length); /* Accessing the length of the array */

let randomArr = ["Ram", 12 , true, null, undefined, { name: "Sham" , age : 23 , male : true }, [1, 2, 3]]
console.log(randomArr);
console.log(randomArr[5]);

randomArr[1] = 24; /* Changing the value at index 1 from 12 to 24 */
console.log(randomArr);

console.log(randomArr.indexOf   (24));
console.log(randomArr.includes(25));

// To add a element at the end of the array we use push() method.
randomArr.push("New Element");
console.log(randomArr);

// To add a element at the beginning of the array we use unshift() method.
randomArr.unshift("First Element");
console.log(randomArr);

// To remove the last element of the array we use pop() method.
randomArr.pop();
console.log(randomArr);

// To remove the first element of the array we use shift() method. 
randomArr.shift();
console.log(randomArr);

// To sort the array we use sort() method. It sorts the array in ascending order by default.
let counting=[12,14,61,11,13,16]
console.log(counting);
counting.sort();
console.log(counting);

// To slice the array we use slice() method. It returns a new array containing the selected elements. The original array remains unchanged.
let slicedArr = counting.slice(1, 4); /* It will return a new array containing the elements from index 1 to index 3 (4 is not included) */
console.log(slicedArr);
console.log(counting); /* The original array remains unchanged */