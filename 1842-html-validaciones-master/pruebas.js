document.body.onload = addInput("input");

function addInput() {
    // create a new div element
    const newDiv = document.createElement("input");

    // and give it some content
    //const newContent = document.createTextNode("Hi there and greetings!");

    // add the text node to the newly created div
    //newDiv.appendChild(newContent);

    // add the newly created element and its content into the DOM
    const currentDiv = document.getElementById("input");
    document.body.insertBefore(newDiv, currentDiv);
}


function addButton(button) {
    // create a new div element
    const newDiv = document.createElement(element);

    // and give it some content
    const newContent = document.createTextNode("Hi there and greetings!");

    // add the text node to the newly created div
    //newDiv.appendChild(newContent);

    // add the newly created element and its content into the DOM
    const currentDiv = document.getElementById(element);
    document.body.insertBefore(newDiv, currentDiv);
}

var botonInput = document.querySelector(".crear__input");
botonInput.addEventListener("click", addInput);