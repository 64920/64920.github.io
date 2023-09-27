const lyd = new Audio("DIRT.mp3");
const timeout = setTimeout(stopp, 2000)

function stopp() {
    poengsum = 0;
    document.getElementById("poeng").innerText = poengsum;
    document.getElementById("dirt").src = "dirt.png";
    
}

document.getElementById("dirt").addEventListener("click", klikk);

let poengsum = 0;

function klikk() {
    lyd.play();
    poengsum = poengsum + 1;
document.getElementById("poeng").innerText = poengsum;
document.getElementById("dirt").style.transform = "scale(0.8);"

if (poengsum > 9) {
    document.getElementById("dirt").src = "dirt2.png";
    }
    if (poengsum > 19) {
        document.getElementById("dirt").src = "dirt3.png";
        }
        if (poengsum > 29) {
            document.getElementById("dirt").src = "dirt4.png";
            }
            if (poengsum > 39) {
                document.getElementById("dirt").src = "dirt5.png";
                }

            
            
            
            }


document.getElementById("knapp").addEventListener("click",restart);


function restart() {
poengsum = 0;
document.getElementById("poeng").innerText = poengsum;
document.getElementById("dirt").src = "dirt.png";


}

var started, resetTimeoutHandle, resetTimeout = 1000,
    container = document.getElementById('container'),
    counter = document.getElementById('counter'),
    dirt = document.getElementById('dirt'),
    clicks = 0;

dirt.onseclect = dirt.onselectstart = function() {
    return false;
};

function clicksPerSecond(started, clicks) {
    return clicks / ((new Date()) - started) * 1000;
}

function count() {
    clearTimeout(resetTimeoutHandle);
    clicks++;
    counter.innerText = clicksPerSecond(started, clicks);
    resetTimeoutHandle = setTimeout(reset, resetTimeout);
    return false;
}

function start() {
    started = new Date();
    clicks = 0;
    counter.style.opacity = 1;
    this.onmousedown = count;
    this.onmousedown();
    return false;
}

function reset() {
    dirt.onmousedown = start;
    counter.style.opacity = 0.3;
}

reset();
