// Events => Action performed when something happens

// Types of events 
// 1. Mouse events => click, mouseover, mouseout, mouseenter, mouseleave, mousedown, mouseup, mousemove
// 2. Keyboard events => keydown, keyup, keypress
// 3. Form events => submit, change, focus, blur
// 4. Window events => load, resize, scroll
// 5. Touch events => touchstart, touchmove, touchend

// Event handling
// 1. Inline event handling
// 2. Event listener

// Event Handlers
// (onclick , onmouseover, onmouseout, onkeydown, onkeyup, onkeypress, onsubmit, onchange, onfocus, onblur, onload, onresize, onscroll, ontouchstart, ontouchmove, ontouchend)


function onClickFunct(){
    console.log("Button clicked!");
}

const onKeyPressFunct = () =>{
    console.log("Key pressed!"); 
}


// Event Listener => It is a function that listens for a specific event on a specific element and executes a callback function when that event occurs.

// Syntax => element.addEventListener(event, callbackFunction);

const box1 = document.getElementById("box-1")
box1.addEventListener("click", ()=>{
    console.log("Box-1 click triggered!");
})