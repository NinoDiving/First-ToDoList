let ms = 0;
let sec = 0;
let min = 0;
let heur = 0;
let span;
let startBtn;
let stopBtn;
let resetBtn;
let timer;

window.onload = function () {
  span = document.getElementsByTagName("span");
  startBtn = document.getElementById("start");
  stopBtn = document.getElementById("stop");
  timer;
  (ms = 0), (sec = 0), (min = 0), (heur = 0);
};

function updateChrono() {
  ms += 1;
  if (ms == 10) {
    ms = 0;
    sec += 1;
  }
  if (sec == 60) {
    sec = 0;
    min += 1;
  }
  if (min == 60) {
    min = 0;
    heur += 1;
  }
  span[0].innerHTML = heur + "h";
  span[1].innerHTML = min + "min";
  span[2].innerHTML = sec + "s";
  span[3].innerHTML = ms + "ms";
}

function start() {
  timer = setInterval(updateChrono, 100);
  startBtn.disabled = true;
}

function stop() {
  clearInterval(timer);
}

function reset() {
  clearInterval(timer);
  startBtn.disabled = false;
  (ms = 0), (sec = 0), (min = 0), (heur = 0);
  span[0].innerHTML = heur + "h";
  span[1].innerHTML = min + "min";
  span[2].innerHTML = sec + "s";
  span[3].innerHTML = ms + "ms";
}
