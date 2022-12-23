const card = document.querySelector(".card");
const credit = document.querySelector(".credit");

// inputs
const Name = document.getElementById("name");
const number = document.getElementById("number");
const month = document.getElementById("mm");
const year = document.getElementById("yy");
const cvc = document.getElementById("cvc");
const button = document.querySelector(".confirm-button");


//credits
const nameText = document.querySelector(".Name");
const numberText = document.querySelector(".numbers");
const dateText = document.querySelector(".Date");
const cvcText = document.querySelector(".CVC");

// alerts

const nameAlert = document.querySelector(".nameAlert");
const numberAlert = document.querySelector(".numberAlert");
const yearAlert = document.querySelector(".yearAlert");
const monthAlert = document.querySelector(".monthAlert");
const cvcAlert = document.querySelector(".cvcAlert");

// checked appearance
const checked = document.querySelector(".checked");

// /////////////////////////////////////////////

// loads saved inputs (not localstoraged ones);
window.onload = () => {
    initials();
    changingNumbers();
    dateDeclare();
    cvcDeclare();
}
// name input function
function initials() {
    const upped = Name.value.split(" ").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");
    if (Name.value == "") {
        nameText.innerText = "Your Name";
    } else if (Name.value.length > 35) {
        Name.value = `${Name.value.slice(0,35)}`;
    } else {
        nameText.innerText = `${upped}`;
    }
}

// creates space on every 4th character
let regex = /(.{4})/g;
// credit card number
function changingNumbers() {
    let test = number.value.replace(regex, "$1 ");
    if (number.value == "") {
        numberText.innerText = "0000 0000 0000 0000"
    } else if (number.value.length > 16) {
        // does not allow user to write more than 16characters inside input.
        number.value = `${number.value.slice(0,16)}`;
        // have to add alert
    } else {
        numberText.innerText = `${test}`
    }
}


// month and year
function dateDeclare() {
    if (month.value == "") {
        dateText.innerText = "00/00";
    } else if (month.value.length > 2) {
        month.value = `${month.value.slice(0,2)}`;
    } else if (year.value.length > 2) {
        year.value = `${year.value.slice(0,2)}`;
    } else {
        dateText.innerText = `${month.value}/${year.value}`;
    }
}

// cvc 
function cvcDeclare() {
    if (cvc.value == "") {
        cvcText.innerText = "000";
    } else if (cvc.value.length > 3) {
        cvc.value = `${cvc.value.slice(0,3)}`;
    } else {
        cvcText.innerText = `${cvc.value}`;
    }
}


// containing numbers function;
function containsNumbers(str) {
    if (str.length > 0) {
        return /[0-9]/.test(str);
    }
    // this function checks if there is any numbers in string.
}
// containing letters function 
function containsOnlyNumbers(string) {
    return /^\d+$/.test(string);
}
// needs to be added display new checked element and dats all.
// checking information
let checkCount = 0;
button.addEventListener("click", function (e) {
    e.preventDefault();
    //checking 

    // checks name input.
    if (containsNumbers(Name.value)) {
        nameAlert.innerText = "You can't use digits in name!";
        nameAlert.style.translate = "0 0"
    } else if (Name.value == "") {
        nameAlert.innerText = "You need to fill this!"
        nameAlert.style.translate = "0 0"
    } else {
        nameAlert.style.translate = "5000px 0"
        checkCount++;
    }

    const test = containsOnlyNumbers(number.value);
    // checks card number input.
    if (test == false) {
        numberAlert.innerText = "Fill with only numbers here!";
        numberAlert.style.translate = "0 0";
    } else if (number.value.length == 16) {
        checkCount++;
        numberAlert.style.translate = "5000px 0";
    } else if (number.value.length < 16) {
        numberAlert.innerText = "Credit card number contains 16digits!";
        numberAlert.style.translate = "0 0";
    }

    //checks card mm/yy
    //mm
    if (Number(month.value) == 0) {
        monthAlert.innerText = "2 Digits!";
        monthAlert.style.translate = "0 0";
    } else if (month.value.length <= 2) {
        checkCount++;
        monthAlert.style.translate = "5000px 0";
    }

    //yy
    if (Number(year.value) == 0) {
        yearAlert.innerText = "2 Digits!";
        yearAlert.style.translate = "0 0";
    } else if (year.value.length <= 2) {
        checkCount++;
        yearAlert.style.translate = "5000px 0";
    }

    //checks cvc
    if (Number(cvc.value) == 0) {
        cvcAlert.innerText = "3 Digits!";
        cvcAlert.style.translate = "0 0";
    } else if (cvc.value.length <= 2) {
        cvcAlert.innerText = "3 Digits!";
        cvcAlert.style.translate = "0 0";
    } else if (cvc.value.length == 3) {
        checkCount++;
        cvcAlert.style.translate = "5000px 0";
    }

    if (checkCount == 5) {
        credit.style.display = "none";
        checked.style.display = "flex";

        // reseting values
        checkCount = 0;
        Name.value = "";
        month.value = "";
        year.value = "";
        cvc.value = "";
        number.value = "";
        dateText.innerText ="00/00";
        cvcText.innerText ="000";
        numberText.innerText ="0000 0000 0000 0000";
        nameText.innerText ="Your Name";

    } else if (checkCount != 5) {
        checkCount = 0;
    }
});


// reappearing credit card inputs after checking
function continueBtn() {
    credit.style.display = "flex";
    checked.style.display = "none";
}