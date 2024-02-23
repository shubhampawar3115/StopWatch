document.addEventListener('DOMContentLoaded', () => {
    let timerdisplay = document.getElementById('timerdisplay');
    let stopBtn = document.getElementById('stopBtn');
    let startBtn = document.getElementById('startBtn');
    let resetBtn = document.getElementById('resetBtn');

    let msec = 0;
    let secs = 0;
    let mins = 0;

    let timerId = null;

    startBtn.addEventListener('click', function() {
        if (timerId != null) {
            clearInterval(timerId);
        }
        timerId = setInterval(startTimer, 10);
        console.log(timerId);
    })
    stopBtn.addEventListener('click', () => {
        clearInterval(timerId) /* This will stop the interval time loop*/
    })
    resetBtn.addEventListener('click', () => {
        clearInterval(timerId);
        timerdisplay.innerHTML = `00 : 00 : 00`;
        msec = secs = mins = 0;

    })

    let startTimer = () => {
        msec++;
        if (msec == 100) {
            msec = 0;
            secs++;
            if (secs == 60) {
                secs = 0;
                mins++;
            }
        }

        let msecString = msec < 10 ? `0${msec}` : msec;
        let secsString = secs < 10 ? `0${secs}` : secs;
        let minsString = mins < 10 ? `0${mins}` : mins;

        timerdisplay.innerText = `${minsString} : ${secsString} : ${msecString}`;
    }
})