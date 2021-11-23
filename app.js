


var min = 00;
var sec = 00;
var msec = 00;
var minHeading =document.getElementById("min");
var secHeading =document.getElementById("sec");
var msecHeading =document.getElementById("msec");
 

function timer(){
    msec++
    msecHeading.innerHTML = msec;
    if (msec >= 100) {
        sec++ 
        secHeading.innerHTML = sec
        msec = 00
    }else if(sec >= 60){
        min++
        minHeading.innerHTML = min
        sec = 00
    }
}


function start(){

    interval = setInterval (timer , 10)
    
}


function stop(){
    clearInterval(interval)
}

function reset(){
    min =00
    sec =00
    msec =00
    minHeading.innerHTML =min
    secHeading.innerHTML = sec
    msecHeading.innerHTML = msec
    stop()
}




































// function start(){
//     var startBtn = document.getElementById("startBtn")
//     interval = setInterval(  timer , 10);
//     startBtn.disabled = true

// }


// function stop(){
//     clearInterval(interval)
    
// }


// function reset(){
//     clearInterval(interval)

// minPara.innerHTML = "00"
// secPara.innerHTML = "00"
// msecPara.innerHTML = "00"
// min = 0
// sec = 0
// msec = 0
// }