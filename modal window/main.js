const modal = document.querySelector(".modal");
const box = document.querySelector(".box");

function pressedYes() {
    alert("Yo , I've heard that you pressed yes.");
    modal.style.display = "none";
    box.style.display = "flex";
}

function pressedNo() {
    alert("Yo , why did you press no?");
    modal.style.display = "none";
    box.style.display = "flex";
}

document.addEventListener("click", function (e) {
    const target = e.target;
    const parent = target.parentNode;

    if (target.className === "box") {
        modal.style.display = "flex";
        box.style.display = "none";
    }else if (parent.tagName !== "BODY" && parent.className !== "modal"){
        modal.style.display = "none";
        box.style.display = "flex";
    }
})