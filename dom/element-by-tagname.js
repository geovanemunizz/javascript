// getElementByTagName - aula 31

//obtém os elementos pelo nome da tag, ou seja, div, body, li, ul, h1, h2 etc.

const elem1 = document.getElementById("c1");
const elem2 = document.getElementById("c2");
const elem3 = document.getElementById("c3");
const elem4 = document.getElementById("c4");
const elem5 = document.getElementById("c5");
const elem6 = document.getElementById("c6");

const arrayElementos = [elem1, elem2, elem3, elem4, elem5, elem6];

// const colecaoHTML = document.getElementsByTagName("div")
// console.log(colecaoHTML)
// colecaoHTML.map ((el) => {
//     console.log(el)
// })

// console.log(arrayElementos)
// console.log(colecaoHTML)  // o htmlColecion não possui muitos métodos, diferente do array

//transformação de htmlCollection para array:

const colectorHTML = [...document.getElementsByTagName("div")]; // com o spread, espalhou os elementos e deixou de ser htmlCollection
console.log(colectorHTML);

colectorHTML.map((el) => {
  console.log(el);
});
