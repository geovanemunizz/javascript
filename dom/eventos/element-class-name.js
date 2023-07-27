//getElementByClassName - aula 32
//obtem os elemmentos pelo nome da classe

const clas = [...document.getElementsByClassName("nome")]; //transformação de htmlCollection para array
const nome1 = [...document.getElementsByClassName("c1")]; //só possui os elementos que usam as classes c1
const nome2 = [...document.getElementsByClassName("c2")]; //só possui os elementos que usam as classes c2
const nome_especial = document.getElementsByClassName("nome")[9]; // retorna o elemento de uma posição especifica O array começa em zero

console.log(clas);
console.log(nome1);
console.log(nome2);
console.log(nome_especial);

nome2.map((elemento) => {
  elemento.classList.add("estrela"); //adiciona uma classe aos elementos
});
