/** identitfy buttons & containers */
const timerContainer = document.querySelector('.timer-container');
const timeDisplay = document.querySelector('.time-display');
const timerOptions = document.querySelector('.timer-options');

const stopwatchBtn = document.querySelector('.stopwatch');
const countdowntimerBtn = document.querySelector('.countdown-timer');
const intervalBtn = document.querySelector('.interval');

/** create the stopwatch timer */

function stopwatch() {
    let sec = 0;
    let minute = 0;
    let timer = setInterval(function(){
        if(sec == 60){
            sec = 0;
            minute++;
        }
        if (minute >= 60) {
            return;
        }
        timeDisplay.innerHTML = minute + ':' + sec;
        sec++;
    }, 1000);
}

window.onload = function() {
    stopwatch();
}





