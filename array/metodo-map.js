//metodo map - aula 28

// é um método para percorrrer arrays

// quando precisar trabalhar elemento por elemento de uma coleção é possivel usar o map

// diferente do loop for e while, o map vai iterar (repetir) toda a coleção. Não tem opçaõ de parar no meio

/*  
curso. map(elemento,ar) pode passar 1 ou 2 parametros, até 3 pode também. o primeiro parametro indica o elemento da coleção, segundo indica o indice, o 3° é o próprio array que vai  iterar */

const curso = ["css", "angular", "vue", "html", "python"];
curso.map((elemento, indice) => {
  //   console.log("curso: " + elemento + " - posição do elemento: " + indice);
});

const teste = ["node", "react", "typescript", "java", "php"];
let storage = teste.map((element, indi) => {
  return "<div>" + element + "</div>";
});
// console.log(storage);

//duas maneiras de operar com o DOM:
//1°

// let aula_28 = document.getElementsByTagName("div")
// aula_28=[...aula_28]
// console.log(aula_28)
// aula_28.map((e,i)=>{
//     e.innerHTML= "Daenerys Targaryen"
// })

// 2°

// const elem = document.getElementsByTagName("div");
// const valor = Array.prototype.map.call(elem, ({ innerHTML }) => innerHTML);
// console.log(valor);

//outra forma

const converter = (el) => parseInt(el);
const dobro = (el) => el * 2;
let num = ["5", "8", "12", "1", "23"].map(converter);
console.log(num);
