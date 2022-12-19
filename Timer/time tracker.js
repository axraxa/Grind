
function bigTime() {
    const test = new Date().getTime();
    const test1 = new Date("December 19, 2022 00:00:00").getTime();
    const difference = test - test1;

    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;

    const textHour = Math.floor(difference / hour);
    const textMinute = Math.floor((difference % hour) / minute);
    const textSecond = Math.floor((difference % minute) / second);


    console.log(textHour);
    console.log(textMinute);
    console.log(textSecond);
}

setInterval(() => {
     bigTime();
}, 1000);

