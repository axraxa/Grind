const hours = document.querySelector(".hours");
const minutes = document.querySelector(".minutes");
const seconds = document.querySelector(".seconds");
const play = document.querySelector(".play-stop");
const reset = document.querySelector(".reset");

// vars for reseting or resume/stopping started interval.
var timerStarted;
let playing = false;

//counters
let count = 0;
let minutesCount = 0;
let hourCount = 0;

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