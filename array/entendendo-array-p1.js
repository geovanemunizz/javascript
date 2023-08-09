//entendendo arrays p1 -  aula 52
//array é uma coleção de dados. pode armazenar qualquer tipo de da dados no array, como string, number etc.

// let vazio = [] //pode ser um array vazio

let paleta = ["azul", "amarelo", "red", "green", ["renekton", "kaisa", "rammus"]]

const caixa = document.querySelector(".caixa");
let linguagens = ["css", "typescript", "javascript", paleta];
console.log(linguagens[3][3]) //indica o array paleta e depois a posição do elemento no array paletas. isso é uma matriz, por ter um array dentro de outro array
console.log(linguagens[3][4][0]) //output renekton

linguagens[0] = "php" //alterou o valor do primeiro elemento do array para php

//método push() adiciona um novo elemento ao FINAL do array
linguagens.push("python") 
linguagens.push("java") 

//método pop() remove o último elemento do array
linguagens.pop()
linguagens.pop()

//método unshift() permite adicionar um elemento no INICIO do array
linguagens.unshift("elixir")
linguagens.unshift("ruby")

//método shift() remove o elemento do INICIO do array
linguagens.shift()


// console.log(linguagens[0]); //para indicar um elemento do array, precisa informar o indice(posição) do elemento.
linguagens.map((el) => {
  let paragrafo = document.createElement("p");
  paragrafo.innerHTML = el;
  caixa.appendChild(paragrafo);
});
