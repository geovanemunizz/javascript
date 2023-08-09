//calculadora simples - aula 53
//array com funcoes:

const resultado = document.getElementById("result");
// const botaoSoma = document.querySelector("#soma");
const botaoSoma = document.getElementById("soma");
const botaoSub = document.querySelector("#subtract");
const botaoMult = document.querySelector("#multiply");
const botaoDivi = document.querySelector("#divisao");

const res = [
  () => {
    const val = [
      document.getElementById("value1").value,
      document.getElementById("value2").value,
    ];
    resultado.value = Number(val[0]) + Number(val[1]);
  },
  () => {
    const val = [
      document.getElementById("value1").value,
      document.getElementById("value2").value,
    ];
    resultado.value = Number(val[0]) - Number(val[1]);
  },
  () => {
    const val = [
      document.getElementById("value1").value,
      document.getElementById("value2").value,
    ];
    resultado.value = Number(val[0]) * Number(val[1]);
  },
  () => {
    const val = [
      document.getElementById("value1").value,
      document.getElementById("value2").value,
    ];
    resultado.value = Number(val[0]) / Number(val[1]);
  },
];

botaoSoma.addEventListener("click", res[0]); //evento de click para a função de soma no array
botaoSub.addEventListener("click", res[1]); //evento de click para a função de subtracao no array
botaoMult.addEventListener("click", res[2]); //evento de click para a função de multiplicação no array
botaoDivi.addEventListener("click", res[3]); //evento de click para a função de divisão no array
