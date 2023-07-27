// addEventListerner - aula 34

// pode programar os eventos diretamente nas tags, ou nos arquivos js

/* sintaxe:
 elemento.addEventListerner(evento,funcaoCallback [, useCapture] )

elemento: É o elemento HTML ao qual você deseja vincular o evento. Pode ser selecionado por meio de document.querySelector, document.getElementById, document.getElementsByClassName, etc.

evento: É uma string que representa o nome do evento que você deseja ouvir, como "click", "keydown", "mouseover", "load", etc.

funcaoCallback: É uma função que será executada quando o evento ocorrer. Essa função pode ser definida de forma anônima ou como uma referência a uma função nomeada.

useCapture: opcional): É um valor booleano que indica se o evento deve ser capturado na fase de captura (true) ou na fase de bubbling (false, que é o valor padrão). A fase de bubbling é a mais comum, onde o evento se propaga de dentro para fora do elemento. */

const botao = document.getElementById("button");
let nome = () => {
  console.log("o botão foi clicado");
};
botao.addEventListener("click", nome); //quando clicar no botão, a função será executada e irá exibir "o botão foi clicado" no console

const c1 = document.getElementById("c1");
const alerta = () => {
  alert("clicou");
};
// c1.addEventListener("click", alerta)

// c1.addEventListener("click", (evt) => {
//     const el = evt.target
//     el.classList.add("estrela")

//     // alerta() //chamando a função dentro de uma arrow function

//     // console.log(evt.target) //obtem quem disparou o evento
// })

//obtendo todos os elementos:

const sala = [...document.querySelectorAll("div")];
sala.map((el) => {
  el.addEventListener("click", (evt) => {
    const elemen = evt.target;
    elemen.classList.add("estrela");
    console.log(el.id + " clicado com sucesso");
  });
});
