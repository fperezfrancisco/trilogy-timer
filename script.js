/** identitfy buttons & containers */
const timerContainer = document.querySelector('.timer-container');
const timeDisplay = document.querySelector('.time-display');
const timerOptions = document.querySelector('.timer-options');

const stopwatchBtn = document.querySelector('.stopwatch');
const countdowntimerBtn = document.querySelector('.countdown-timer');
const intervalBtn = document.querySelector('.interval');

const startBtn = document.querySelector('.startBtn');
const pauseBtn = document.querySelector('.pauseBtn');
const resetBtn = document.querySelector('.resetBtn');

/** create the stopwatch timer */
let sec = 0;
let minute = 0;
let mili = 0;
let secondString = '';
let minuteString = '';
let miliString = '';
var timeX;

function startTimer() {
    pauseBtn.classList.remove('hidden');
    startBtn.classList.add('hidden');
    timeX = setInterval(stopwatch, 10);
}

function stopwatch() {
    /*
    let sec = 0;
    let minute = 0;
    let mili = 0;
    let secondString = '';
    let minuteString = '';
    let miliString = '';
    */
    if(mili == 100) {
        mili = 0;
        sec++;
    }
    if(sec == 60){
        sec = 0;            
        minute++;
    }
    if (minute >= 60) {
        return;
    }
    if (mili < 10) {
        miliString = '0' + mili;
    } else {
        miliString = mili;
    }

    if (sec < 10) {
        secondString = '0' + sec;
    } else {
        secondString = sec;
    }

    if (minute < 10) {
        minuteString = '0' + minute;
    } else {
        minuteString = minute;
    }
    timeDisplay.innerHTML = minuteString + ':' + secondString + ':' + miliString;
    mili++;   
}

function pauseTime() {
    pauseBtn.classList.add('hidden');
    startBtn.classList.remove('hidden');
    clearInterval(timeX);
}

function resetTime() {
    pauseTime();
    sec = 0;
    minute = 0;
    mili = 0;
    timeDisplay.innerHTML = '00:00:00';
}

/*
window.onload = function() {

}*/
startBtn.addEventListener("click", startTimer);
pauseBtn.addEventListener("click", pauseTime);
resetBtn.addEventListener("click", resetTime);









