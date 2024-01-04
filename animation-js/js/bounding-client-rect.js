// 23/12/2023 aula 112

// getBoudingClientRect() retorna um objeto que fornece o tamanho e a posição do elemento


const redBox = document.querySelector("#redBox");
let direct = redBox.getBoundingClientRect();

redBox.accessKey = "b";


const posicao_x = document.querySelector("#posicao_x");
const posicao_y = document.querySelector("#posicao_y");
const largura = document.querySelector("#width");
const altura = document.querySelector("#height");

redBox.innerHTML = `posição x: ${direct.x} <br>`;
redBox.innerHTML += `posição y: ${direct.y} <br>`;
redBox.innerHTML += `altura: ${direct.height} <br>`;
redBox.innerHTML += `largura: ${direct.width} <br>`;

function update() {
  const div_display = document.querySelector("#display");
  let direct = redBox.getBoundingClientRect();

  div_display.innerHTML = "";

  for (let key in direct) {
    if (typeof direct[key] !== "function") {
      const paragraph = document.createElement("p");
      paragraph.textContent = `${key} : ${direct[key]}`;
      div_display.appendChild(paragraph);
    }
  }
}

redBox.addEventListener("click",update);

