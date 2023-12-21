// aula 107

//animação com javaScript

const carro = document.querySelector("#car");
const startButton = document.querySelector("#btn-left");
const stopButton = document.querySelector("#btn-right");

const entrada = document.querySelector("#input");
const reloadButton = document.querySelector("#reloadAnimation");

let animation;

//limite de área, variavel de controle:
let maxWidth;
let larguraMax;
let direction;

//funções:

function moveInput() {
  const inputValue = entrada.value;
  if (!isNaN(entrada.value)) {
    carro.style.left = `${inputValue}px`;
  }
}

function moveCar() {
  carro.style.position = "relative";
  carro.style.left = "0px";
  carro.style.right = "0px";
  carro.style.width = "100px";
  carro.style.height = "40px";

  larguraMax = parseInt(carro.style.width);
  maxWidth = window.innerWidth - larguraMax;
}

function directionCar() {
  if (parseInt(carro.style.left) >= maxWidth) {
    direction = -1;
  } else if (parseInt(carro.style.left) <= 0) {
    direction = 1;
  }
  carro.style.left = parseInt(carro.style.left) + 10 * direction + "px";
  animation = requestAnimationFrame(() => directionCar());
}

function stopAnimation() {
  cancelAnimationFrame(animation);
}

//eventos:

entrada.addEventListener("input", moveInput);

startButton.addEventListener("click", () => {
  stopAnimation();
  directionCar();
});

stopButton.addEventListener("click", () => {
  stopAnimation();
});

reloadButton.addEventListener("click", () => {
  stopAnimation();
  carro.style.left = "0px";
  entrada.value = "";
});

// data: 18-12-2023

//limite da área da animação:
window.addEventListener("resize", () => {
  maxWidth = window.innerWidth - parseInt(carro.style.width);
});

window.addEventListener("load", moveCar); //adiciona a function moveCar toda vez que a tela for recarregada

document.addEventListener("keydown", (el) => {
  if (el.code === "ArrowUp") {
    carro.style.width = parseInt(carro.style.width) + 10 + "px";
    carro.style.height = parseInt(carro.style.height) + 10 + "px";
  } else if (el.code === "ArrowDown") {
    carro.style.width = parseInt(carro.style.width) - 10 + "px";
    carro.style.height = parseInt(carro.style.height) - 10 + "px";
  }
});
