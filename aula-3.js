"use strict";

var cor = "azul"; // variavel com escopo global, são acessiveis em todo o código
console.log(cor);

let nome = "Geovane"; //variavel com escopo de bloco, são acessiveis apenas no bloco que foram declaradas
nome = "Shibuya";
nome = 10;

const curso = "javascript sem ;"; //variavel contante, seu valor não pode ser reatribuído, também tem escopo de bloco

console.log(nome);
console.log(curso);

function facul() {
  let materia = "Biologia";
  if (true) {
    console.log("Aprovado na matéria:" + materia);
  }
  console.log("aprovado em:" + materia);
}

facul();

console.log("perdeu em:" + materia); // fora do bloco da variavel let materia
