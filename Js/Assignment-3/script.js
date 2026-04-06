function greetUser() {
    let name = document.getElementById("nameInput").value;
    let header = document.getElementById("greeting");

    if (name.trim() === "") {
        header.innerText = "Hello";
    } else {
        header.innerText = "Hello, " + name;
    }
}

let boxes = document.querySelectorAll(".box");

boxes.forEach(box => {
    box.addEventListener("click", function () {
        let color = box.innerText;
        box.style.backgroundColor = color;
        box.style.color = "wheat";
    });
});