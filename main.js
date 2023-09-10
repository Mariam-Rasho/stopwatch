var time = document.querySelector('.timer'),
    start = document.getElementById('start'),
    pause = document.getElementById('pause'),
    reset = document.getElementById('reset'),
    seconds = 0, minutes = 0, hours = 0,
    t;

function add() {
    seconds++;
    if (seconds >= 60) {
        seconds = 0;
        minutes++;
        if (minutes >= 60) {
            minutes = 0;
            hours++;
        }
    }

    time.innerHTML = (hours ? (hours > 9 ? hours : "0" + hours) : "00") + " : " + (minutes ? (minutes > 9 ? minutes : "0" + minutes) : "00") + " : " + (seconds > 9 ? seconds : "0" + seconds);

    timer();
}

function timer() {
    t = setTimeout(add, 1000);
}
timer();


/* Start button */
start.onclick = timer;

/* Stop button */
pause.onclick = function () {
    clearTimeout(t);
}

/* reset button */
reset.onclick = function () {
    time.innerHTML = "00 : 00 : 00";
    seconds = 0; minutes = 0; hours = 0;
}