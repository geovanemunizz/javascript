//calculadora aula 70, 71 e 72
const NumTeclas = [...document.querySelectorAll(".num")];
const operacoes = [...document.querySelectorAll(".operadores")];
const resultado = document.querySelector(".igual");
const tela = document.querySelector(".display");
const clear = document.getElementById("limpar");
const soma = document.getElementById("soma");
const sub = document.getElementById("subtrai");
const divis = document.getElementById("divide");
const multi = document.getElementById("multiplica");
const copy = document.querySelector("#copy");
const apagar = document.querySelector("#delete");
let operacoesBasica = false; //controle do uso das operacoes, para não repetir sinais
let decimal = false;

//evento de click para as teclas da calculadora
NumTeclas.forEach((el) => {
  el.addEventListener("click", (evt) => {
    operacoesBasica = false;
    if (evt.target.textContent == ".") {
      if (!decimal) {
        decimal = true;
        tela.textContent += evt.target.textContent;
      }
    } else {
      if (tela.textContent == "0") {
        tela.textContent = "";
      }
      tela.textContent += evt.target.textContent;
    }
  });
});

//evento de click para as operacoes
operacoes.forEach((el) => {
  el.addEventListener("click", (evt) => {
    if (!operacoesBasica) {
      operacoesBasica = true;
      decimal = false;
      if (tela.innerHTML == "0") {
        tela.textContent = "";
      }
      if (evt.target.innerHTML == "x") {
        tela.innerHTML += "*";
      } else if (evt.target.innerHTML == "÷") {
        tela.textContent += "/";
      } else if (evt.target.innerHTML == "CPY") {
        tela.innerHTML += "";
      } else if (evt.target.innerHTML == "DEL") {
        tela.innerHTML += "";
      } else {
        tela.textContent += evt.target.textContent;
      }
    }
  });
});

//evento para limpar a tela
clear.addEventListener("click", () => {
  decimal = false;
  tela.innerHTML = "0";
});

resultado.addEventListener("click", (evt) => {
  decimal = false;
  operacoesBasica = false;
  const res = eval(tela.innerHTML);
  tela.innerHTML = res;
  console.log("Tá funcionando");
});

/*eval é um funcao que avalia uma string como código js em tempo de execução.  Basicamente, pode passar uma string contendo uma expressão ou um conjunto de instruções js para a função eval, e o js irá executar esse código como se ele tivesse sido definido diretamente no programa */

// clip board - aula 73

//  clip board: copia itens para a área de transferência do sistema.
copy.addEventListener("click", () => {
  navigator.clipboard.writeText(tela.innerHTML);
});
//colar da área de transferência: readText
// copiar para a área de transferência: writeText

apagar.addEventListener("click", () => {
  operacoesBasica = false;
  decimal = false;
  //obtem o conteudo da tela
  let contentTela = tela.textContent;
  //remove o ultimo caractere da tela
  contentTela = contentTela.slice(0, -1);
  //define o ultimo conteudo da tela, sem o ultimo caractere
  tela.textContent = contentTela;
  if (tela.innerHTML == "") {
    tela.innerHTML = "0";
  }
});
