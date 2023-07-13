// funções com retorno

function alterate() {
  let nome = document.getElementById("nome");
  let ensino = document.getElementById("ensino");
  let curso = document.getElementById("curso");
  nome.innerHTML = "curso de javascript onegai";
  ensino.innerHTML = "curso de javascript onegai";
  curso.innerHTML = "curso de javascript onegai";
}

function canal() {
  let n1 = 11;
  let n2 = 3;
  let res = n1 * n2;
  if (res % 2 == 0) {
    return "par";
  } else {
    return "ímpar";
  }
}
let res = canal();

console.log(res);
