//método getElementbyId - aula 30
//é posssivel obter um elemento especifico, utilizando o id

const elem = document.getElementById("c3");
console.log(elem);
console.log(elem.id); //imprime o id do elemento
console.log(elem.innerHTML); //imprime o conteudo do elemento
elem.innerHTML = "Jogo do Bahia"; //altera o valor da propriedade innerHTML

//array dos elementos que estão no html:

const elem1 = document.getElementById("c1");
const elem2 = document.getElementById("c2");
const elem3 = document.getElementById("c3");
const elem4 = document.getElementById("c4");
const elem5 = document.getElementById("c5");
const elem6 = document.getElementById("c6");

const arrayElementos = [elem1, elem2, elem3, elem4, elem5, elem6];

// percorrendo com o for

// for (n of arrayElementos) {
//   //for of para percorrer arrays
//   n.innerHTML = "Fala tino";
// }

// console.log(arrayElementos) //imprime os 6 elementos

//percoreendo com o map
arrayElementos.map((el) => {
  el.innerHTML = "Gear 5";
  console.log(el);
});
