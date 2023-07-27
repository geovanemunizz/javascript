// addEventListener - aula 35
//trabalhando com a manipulação dos elementos html

const caixa = document.getElementById("caixa1");
const box = document.getElementById("caixa2");
const button = document.getElementById("botao");
const voltar = document.getElementById("voltar");

const selector = [...document.querySelectorAll(".nome")];

selector.map((param) => {
  param.addEventListener("click", (evento) => {
    const clik = evento.target;
    clik.classList.toggle("estrela"); //toggle: pode ser adicionada ou removida, dependendo do estado atual do elemento.
  });
});

//forma completa:

// button.addEventListener("click", () => {
//   const elem_selecionados = [...document.getElementsByClassName("estrela")];
//   elem_selecionados.map((el) => {
//     box.appendChild(el); //vai anexar o filho (el) ao box
//   });
// });

// forma reduzida:
button.addEventListener("click", () => {
  const elem_selecionados = document.getElementsByClassName("estrela");
  box.append(...elem_selecionados);
});

//forma completa usando um botão para voltar:

// voltar.addEventListener("click", () => {
//   const retorno = [...document.getElementsByClassName("estrela")];
//   retorno.map((elem) => {
//     caixa.appendChild(elem); //faz os elementos retornarem para a caixa 1
//   });
// // });

//forma reduzida usando um botão para voltar:
voltar.addEventListener("click", () => { //adicionado evento de click ao botão voltar
  const retorno = document.getElementsByClassName("estrela");
  caixa.append(...retorno); // faz os elementos retornarem para a caixa 1
});


// usando o :not - aula 36:

//usando o not e movendo os items no mesmo botão de forma completa:

// button.addEventListener("click", () => {
//   const retorno = [...document.querySelectorAll(".estrela")];
//   const volt = [...document.querySelectorAll(".nome:not(.estrela)")];
//   console.log(volt);
//   retorno.map((el) => {
//     box.appendChild(el);
//   });
//   volt.map((el) => {
//     caixa.appendChild(el);
//   });
// });


//usando o not e movendo os items no mesmo botão de forma reduzida:

// button.addEventListener("click", () => {
//   const estrelas = document.querySelectorAll(".estrela");
//   const nomes = document.querySelectorAll(".nome:not(.estrela)");

//   estrelas.forEach((el) => {
//     box.appendChild(el);
//   });

//   nomes.forEach((el) => {
//     caixa.appendChild(el);
//   });
// });
