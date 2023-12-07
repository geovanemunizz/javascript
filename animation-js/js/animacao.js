// aula 107

//animação com javaScript

const carro = document.querySelector("#car");
const left = document.querySelector("#btn-left");
const btnright = document.querySelector("#btn-right");

const input = document.querySelector("#input");


//obtém o valor do input, e adiciona esse valor a propriedade left do elemento
function moveInput(){
  const inputValue = input.value;
  carro.style.left = `${inputValue}px`
}


input.addEventListener("input",moveInput)

function move() {
  carro.style.position = "relative";
  carro.style.left = "0px";
  carro.style.right = "0px";
}
// a cada click, diminui em 10 o valor da propriedade left do elemento
left.addEventListener("click", () => {
  carro.style.left = parseInt(carro.style.left) - 10 + "px";
});

// a cada click, incrementa em 10 o valor da propriedade left do elemento
btnright.addEventListener("click", () => {
  let indice = parseInt(carro.style.left);
  indice += 10;
  carro.style.left = `${indice}px`;
});

window.onload = move

// window.addEventListener("load", move);
