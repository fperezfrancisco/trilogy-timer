/** identitfy buttons & containers */
const timerContainer = document.querySelector('.timer-container');
const timeDisplay = document.querySelector('.time-display');
const timerOptions = document.querySelector('.timer-options');
const currentWatchTitle = document.querySelector('.current-watch');

const stopwatchBtn = document.querySelector('.stopwatch');
const countdowntimerBtn = document.querySelector('.countdown-timer');
const intervalBtn = document.querySelector('.interval');

const startBtn = document.querySelector('.startBtn');
const pauseBtn = document.querySelector('.pauseBtn');
const resetBtn = document.querySelector('.resetBtn');

let sec = 0;
let minute = 0;
let mili = 0;
let secondString = '';
let minuteString = '';
let miliString = '';

let startMin = 0;
let startSec = 10;

var timeX;

/** KEEP TRACK OF WHICH WATCH IS CURRENT ONE */

let currentType = 'stopwatch'; // stopwatch is default starting watch

/** create the stopwatch timer */

function setUpStopwatch() {
    currentType = 'stopwatch';

    countdowntimerBtn.classList.remove('hidden');
    stopwatchBtn.classList.add('hidden');

    /*
    startBtn.removeEventListener("click", startCountdownTimer);
    startBtn.addEventListener("click", startTimer);
    */
    sec = 0;
    minute = 0;
    mili = 0;

    timeDisplay.textContent = "00:00:00";
    currentWatchTitle.textContent = "Stopwatch";
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
/** create TIMER */

function setUpTimer() {
    currentType = 'timer';

    countdowntimerBtn.classList.add('hidden');
    stopwatchBtn.classList.remove('hidden');
    
    /*
    startBtn.removeEventListener("click", startTimer);
    startBtn.addEventListener("click", startCountdownTimer);

    resetBtn.removeEventListener('click', resetTime);
    resetBtn.addEventListener('click', resetCountdownTimer);
    */

    sec = startSec;
    minute = startMin;
    if (sec < 0 || minute < 0) {
        throw console.error("invalid entries please try again");
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

    timeDisplay.textContent = minuteString + ':' + secondString;
    currentWatchTitle.textContent = "Timer";
}

function countdownTimer() {
    /**default timer time */
    sec--;
    if (sec <= 0) {
        /** create alert that timer is done */
        if (minute <= 0) {
            /** timer done */         
            minuteString = '0' + minute;
            secondString = '0' + sec;
            timeDisplay.innerHTML = minuteString + ':' + secondString;
            currentWatchTitle.textContent = 'TIMER DONE!!';
            currentWatchTitle.style.fontSize = '3rem'; 
            pauseTime();
            return setTimeout(resetCountdownTimer, 5000);
        } else {
            minute--;
            sec = 59;
        }
    } 
    
    if (minute < 10) {
        minuteString = '0' + minute;
    } else {
        minuteString = minute;
    }

    if (sec < 10) {
        secondString = '0' + sec;
    } else {
        secondString = sec;
    }
    timeDisplay.innerHTML = minuteString + ':' + secondString;
}

/** play, pause, and reset functionality */

function startTimer() {
    pauseBtn.classList.remove('hidden');
    startBtn.classList.add('hidden');

    if (currentType === 'stopwatch') {
        timeX = setInterval(stopwatch, 10);
    } else if (currentType === 'timer') {
        timeX = setInterval(countdownTimer, 1000); 
    }
}

function pauseTime() {
    pauseBtn.classList.add('hidden');
    startBtn.classList.remove('hidden');
    clearInterval(timeX);
}

function resetTime() {
    pauseTime();
    if (currentType === 'stopwatch') {
       setUpStopwatch();
    } else if (currentType === 'timer') {
        setUpTimer();
    }
}

/** Button even listeners below */

startBtn.addEventListener("click", startTimer);
pauseBtn.addEventListener("click", pauseTime);
resetBtn.addEventListener("click", resetTime);

/** FINISHED watch items */

countdowntimerBtn.addEventListener('click', setUpTimer);
stopwatchBtn.addEventListener('click', setUpStopwatch);














