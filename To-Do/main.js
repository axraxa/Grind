const input = document.getElementById("userinput");
const box = document.querySelector(".box");
const sum = document.querySelector(".another");
const alerted = document.querySelector(".alert");

const upperCase = input.value.split(" ").map(word =>
    word.charAt(0).toUpperCase() + word.slice(1)).join(" ");

let todos = JSON.parse(localStorage.getItem("To-Do")) || [];


//showing todos on refresh.
renderTodo();



function todoMaker() {
    addTodo();
    renderTodo();
    input.value = null;
}


// adds user input value in object and pushes into line 7
function addTodo() {
    const upperCase = input.value.split(" ").map(word =>
        word.charAt(0).toUpperCase() + word.slice(1)).join(" ");


    const duplicate = todos.some(todo => todo.name.toUpperCase() === input.value.toUpperCase());

    if (input.value == "") {
        alerting("You have to input your To-Do.");
    } else if (duplicate == false) {
        const todo = {
            name: upperCase,
            done: false
        }

        todos.push(todo);

        document.querySelector("#sound1").play();
        localStorage.setItem("To-Do", JSON.stringify(todos));
    } else if (duplicate) {
        alerting("You already have the same To-Do.");
    }

}

function alerting(text){
    document.querySelector("#sound3").play();
    alerted.innerHTML = `<p style="font-size:1rem">${text}</p>`;
    alerted.classList.add("popup");



    setTimeout(() => {
        alerted.classList.remove("popup");
    },1500);
}

//  uses object values from each defined object and makes div out of it. (loops through them);
function renderTodo() {
    const upperCase = input.value.split(" ").map(word =>
        word.charAt(0).toUpperCase() + word.slice(1)).join(" ");

    sum.innerHTML = null;

    if (todos.length == 0) {
        sum.innerHTML += `<center style="margin-top: 20px;">Add Something To Do!</center>`
    }

    todos.forEach((todo, index) => {
        if(index >0){
        sum.innerHTML += `<div class="line" id="${index}">
        <input type="radio" id="${index}" data-action="check" ${todo.done ? "checked" : ""}>
        <p data-action="check" style="cursor:pointer;"> ${todo.name} <p>
        <div id="cross" data-action="delete"></div>
        </div>
        `;
        }else{
            sum.innerHTML += `<div class="line" id="${index}" style="border-top: none;">
        <input type="radio" id="${index}" data-action="check" ${todo.done ? "checked" : ""}>
        <p data-action="check" style="cursor:pointer;"> ${todo.name} <p>
        <div id="cross" data-action="delete"></div>
        </div>
        `;
        }
    });
    localStorage.setItem("To-Do", JSON.stringify(todos));
}


//container event listener added.
sum.addEventListener("click", function (e) {
    const target = e.target;

    const parent = target.parentNode;
    if (parent.className !== "line") return;

    const todoId = parent.id;

    //target action
    const action = target.dataset.action;

    action === "check" && checkTodo(todoId);
    action === "delete" && deleteTodo(todoId);

});


//loops through existing objects inside todos array and changes value of element that is being clicked.
function checkTodo(id) {
    todos = todos.map((todo, index) => {
        return {
            name: todo.name,
            done: index == id ? !todo.done : todo.done
        }
    });
    localStorage.setItem("To-Do", JSON.stringify(todos));
    renderTodo();
};

// filters through todo array and deletes clicked element by index.
function deleteTodo(id) {
    todos = todos.filter((todo, index) => index != id);
    document.querySelector("#sound").play();
    localStorage.setItem("To-Do", JSON.stringify(todos));
    renderTodo();
}


//clearing local storage and div .
function clearTodo() {
    if (todos.length > 0) {
        document.querySelector("#sound2").play();
        todos = []
        localStorage.clear();
        console.clear();
        console.log("Entire To-Do input history deleted.");
        renderTodo();
    }
}