// const bodysBackgroungcolor = document.body;
// bodysBackgroungcolor.style.backgroundColor = "lightpink";

// // 1st approach (by id)
// const box4 = document.getElementById("box4");
// console.log(box4);

// // 2nd approach (by class name)
// const box2 = document.getElementsByClassName("box2");
// console.log(box2);

// // 3rd approach (by tag name)
// const box3 = document.getElementsByTagName("div");
// console.log(box3);

// // 4th approach (by query selector)
// const box1 = document.querySelector(".box1");
// console.log(box1);
// const box2_1 = document.querySelector(".box2");
// console.log(box2_1);
// const box3_1 = document.querySelector(".box3");
// console.log(box3_1);
// const box4_1 = document.querySelector("#box4");
// console.log(box4_1);

// Modifying the HTML elements
// const box1 = document.getElementById("box-1");
// box1.innerHTML="<h1>Box 1</h1>";
// box1.innerText="Box 1";

document.getElementById("box-1").innerHTML="<h1>Box 1</h1>";
document.getElementById("para").innerHTML="<b>Description about DOM manipulation:-</b> <br> DOM manipulation is the process of dynamically changing the structure, style, and content of a web page using JavaScript. It allows developers to create interactive and dynamic web applications by modifying the Document Object Model (DOM) in real-time. With DOM manipulation, you can  <i>add</i>,  <i>remove</i>, or  <i>modify HTML elements, change their attributes</i>, and update their styles to enhance user experience and create engaging web pages.";

// Using to add a new element in the DOM
const newElement = document.createElement("p");
newElement.innerText = "This is a new paragraph added using DOM manipulation.";
document.body.appendChild(newElement);

// Using to remove an element from the DOM
const elementToRemove = document.getElementById("box-2");
elementToRemove.remove();

// Using to modify the style of an element
const box3 = document.getElementById("box-3");
// box3.style.backgroundColor = "lightblue";
// box3.style.color = "white";
box3.style.padding = "20px";

box3.classList.add("circle")

