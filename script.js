window.onload = function() {

    var seconds = 00;
    var tens = 00;
    var minutes = 00
    var appendMinutes = document.getElementById("minutes")
    var appendTens = document.getElementById("tens")
    var appendSeconds = document.getElementById("seconds")
    var start = document.getElementById("start")
    var stop = document.getElementById("stop")
    var reset = document.getElementById("reset")
    var Interval;

    start.onclick = function(){

        clearInterval(Interval);
        Interval = setInterval(startTimer, 10);
    }

    stop.onclick = function() {

        clearInterval(Interval);
    }
    reset.onclick = function(){
        clearInterval(Interval);
        tens = "00";
        seconds = "00";
        minutes - "00"
        appendTens.innerHTML = tens;
        appendSeconds.innerHTML = seconds;
        appendMinutes.innerHTML = minutes;
    }
    function startTimer(){
        tens++
        if (tens < 9){
            appendTens.innerHTML = "0" + tens;
        }
        if (tens > 9){
            appendTens.innerHTML = tens;
        }
        if (tens>99){
            console.log("start_second")
            seconds++;
            appendSeconds.innerHTML = "0" + seconds;
            tens = 0;
            appendTens.innerHTML = "0" + 0;
        }
        if (seconds > 9){
            appendSeconds.innerHTML = seconds;
        }
        if (seconds > 59){
            console.log("start_minutes")
            minutes++;
            appendMinutes.innerHTML = "0" + minutes;
            seconds = 0;
            appendSeconds.innerHTML = "0" + 0;
        }
    }
}