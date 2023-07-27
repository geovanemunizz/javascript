//stop propagation - aula 37

//é um método usado para interromper a propagação de eventos através da hierarquia de elementos no DOM.

//Quando chamado em um objeto de evento, como em event.stopPropagation(), ele impede que o evento continue se propagando para outros elementos.

const caixa = document.querySelector("#caixa1");
const elem1 = document.getElementById("c1");
const curso = [...document.getElementsByClassName("nome")];

caixa.addEventListener("click", (evento) => {
  //adiciona evento de click para o id caixa1
  console.log("clicado com sucesso!");
  console.log(evento);
});

// elem1.addEventListener("click", (evt) => {
//     evt.stopPropagation() //o evento deixa de ser propagado para quem tem o id "C1"
// })

curso.map((el) => {
  el.addEventListener("click", (evt) => {
    evt.stopPropagation(); //o evento deixa de ser propagado para todos com a classe nome
  });
});
