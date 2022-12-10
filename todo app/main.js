function addTodo(){
    const input = document.getElementById("userinput");
    const box = document.querySelector(".box");

    //makes first letter uppercase 
    const upperCase = input.value.charAt(0).toUpperCase() + input.value.split("").slice(1).join("");

    //creating div
    const div = document.createElement("div");
    div.setAttribute("class","line");

    // adding radio button to div
    const button = document.createElement("input");
    button.setAttribute('type', 'radio');
    div.appendChild(button);


    //adding text to div
    const text = document.createElement("p");
    text.setAttribute("class","text");
    text.innerText = `${upperCase}`;
    div.appendChild(text);


    //adding div before input in the box
    if(input.value != ""){
        box.insertBefore(div, box.lastElementChild);
    }
}

