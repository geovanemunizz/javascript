const minutes = document.querySelector("#minutes");
const seconds = document.querySelector("#seconds");
const miliseconds = document.querySelector("#miliseconds");

const startBtn = document.querySelector("#startBtn");
const pauseBtn = document.querySelector("#pauseBtn");
const resetBtn = document.querySelector("#resetBtn");
const resumetBtn = document.querySelector("#resumeBtn");

let intervalo;
let minutos = 0;
let segundos = 0;
let milisegundos = 0;
let isPaused = false;

startBtn.addEventListener("click", startTimer);
pauseBtn.addEventListener("click", stopResumeTimer);
resumetBtn.addEventListener("click", stopResumeTimer);
resetBtn.addEventListener("click", resetTimer);

function startTimer() {
  intervalo = setInterval(() => {
    if (!isPaused) {
      milisegundos += 10;

      if (milisegundos === 1000) {
        segundos++;
        milisegundos = 0;
      }
      if (segundos === 60) {
        minutos++;
        segundos = 0;
      }

      minutes.textContent = formaterTimer(minutos);
      seconds.textContent = formaterTimer(segundos);

      miliseconds.textContent = formaterMiliseconds(milisegundos);
    }
  }, 10);
  startBtn.style.display = "none";
  pauseBtn.style.display = "block";
}

function resetTimer() {
  clearInterval(intervalo);
  isPaused = false;
  minutos = 0;
  segundos = 0;
  milisegundos = 0;

  minutes.textContent = "00";
  seconds.textContent = "00";
  miliseconds.textContent = "000";

  startBtn.style.display = "block";
  resumetBtn.style.display = "none";
  pauseBtn.style.display = "none";
}

function stopResumeTimer() {
  isPaused = !isPaused;
  if (isPaused) {
    pauseBtn.style.display = "none";
    resumetBtn.style.display = "block";
  } else {
    pauseBtn.style.display = "block";
    resumetBtn.style.display = "none";
  }
}

function formaterTimer(time) {
  return time < 10 ? `0${time}` : time;
}

function formaterMiliseconds(time) {
  return time < 100 ? `${time}`.padStart(3, "0") : time; // padstart é um método de string, por isso precisamos transformar o parametro em string. A maneira mais rápida é colocando aspas: `${time}`
}
