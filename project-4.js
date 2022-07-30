// button variables
const startStopBtn = document.querySelector('.startstopbtn');
const resetBtn = document.querySelector('.resetbtn');

// timer variables
let seconds = 0;
let minutes = 0;
let hours = 0;

// zeros
let lSec = 0;
let lMin = 0;
let lHr = 0;
function timeRunner(){
    seconds++;
    if(seconds / 60 === 1){
        seconds = 0;
        minutes++;
        if(minutes / 60 === 1){
            minutes = 0;
            hours++;
            if(hours === 100){
                hours = 0;
            }
        }
    }

    if(seconds < 10){
        lSec = "0" + seconds.toString();
    }
    else{
        lSec = seconds;
    }
    if(minutes < 10){
        lMin = "0" + minutes.toString();
    }
    else{
        lMin = minutes;
    }
    if(hours < 10){
        lHr = "0" + hours.toString();
    }
    else{
        lHr = hours;
    }
    let showTime = document.querySelector('.timer').innerText = lHr + ":" + lMin + ":" + lSec;

}

// window.setInterval(timeRunner, 1); 

let timeinterval = null;
let timeStatus = "stopped";

startStopBtn.addEventListener('click', function(){
    if(timeStatus === "stopped"){
        timeinterval = window.setInterval(timeRunner, 1000);
        document.querySelector('.startstopbtn').innerHTML =
        '<i class="fa-solid fa-pause" id="pause"></i>';
        timeStatus = "running";
    }
    else{
        window.clearInterval(timeinterval);
        document.querySelector('.startstopbtn').innerHTML =
        '<i class="fa-solid fa-play" id="play"></i>';
        timeStatus = "stopped";
    }
})

resetBtn.addEventListener('click', function(){
    window.clearInterval(timeinterval);
    document.querySelector('.startstopbtn').innerHTML =
        '<i class="fa-solid fa-play" id="play"></i>';
    document.querySelector('.timer').innerText = '00:00:00';
    seconds = 0;
    minutes = 0;
    hours = 0;
})