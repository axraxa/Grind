const hours = document.querySelector(".hours");
const minutes = document.querySelector(".minutes");
const seconds = document.querySelector(".seconds");
const play = document.querySelector(".play-stop");
const reset = document.querySelector(".reset");
const container = document.querySelector(".container");

const sound = document.querySelector(".time-is-up")

const submit = document.querySelector(".submit-btn");
const inputed = document.querySelector(".user-input");
const userContainer = document.querySelector(".question");
// vars for reseting or resume/stopping started interval.
var timerStarted;
let playing = false;

//counters
let count = 0;
let minutesCount = 0;
let hourCount = 0;

let pomodoroSession;

// storing pomodoro session duration

submit.addEventListener("click", function (e) {
    if (inputed.value == "") {
        alert("Pomodoro session duration set to default 25min value.")
        pomodoroSession = 25;
        container.style.display = "flex";
        userContainer.style.display = "none";
    } else if (parseInt(inputed.value) > 60 || parseInt(inputed.value) < 25) {
        alert("Each Pomodoro session is no longer than 60 minute and no shorter than 25min.");
        inputed.value = 25;
    } else if (parseInt(inputed.value) <= 60) {
        pomodoroSession = parseInt(inputed.value);
        container.style.display = "flex";
        userContainer.style.display = "none";
    }
})

// 👇 finished timer logic
function timer() {
    const secondsToMin = 60;
    count++;

    //turns into hours 
    if (minutesCount != 0 && minutesCount % secondsToMin == 0) {
        minutesCount = 0;
        minutes.innerText = "00";
        hourCount++;
        if (Number(hours.innerText) < 9) {
            hours.innerText = "0" + hourCount;
        } else {
            hours.innerText = hourCount;
        }
    }

    //turns into minutes
    if (count % secondsToMin == 0) {
        count = 0;
        minutesCount++;
        if (Number(minutes.innerText) < 9) {
            minutes.innerText = "0" + minutesCount;
        } else {
            minutes.innerText = minutesCount;
        }
    }
    //turns into seconds
    if (count % secondsToMin < 10) {
        seconds.innerText = "0" + count;
    } else {
        seconds.innerText = `${count}`;
    }

    if(pomodoroSession === 60 && hourCount === 1){
        sound.play();
        setTimeout(() => {
            sound.stop();
            sound.play();
        },3000)
        restart();
    }else if(pomodoroSession == minutesCount){
        sound.play();
        setTimeout(() => {
            sound.stop();
            sound.play();
        },3000)
        restart();
    }
}

function timerStart() {
    if (playing == false) {
        play.src = "pause.svg";
        timerStarted = setInterval(() => {
            timer();
        }, 1000);
        playing = true;
    } else {
        playing = false;
        play.src = "stopwatch.svg";
        clearInterval(timerStarted);
    }
}

function restart() {
    //stopping timer.
    clearInterval(timerStarted);

    //reseting play button
    play.src = "stopwatch.svg";
    playing = false;

    //reseting timer
    count = 0;
    minutesCount = 0;
    hourCount = 0;

    //reseting inner texts 
    hours.innerText = "00";
    minutes.innerText = "00";
    seconds.innerText = "00";
}