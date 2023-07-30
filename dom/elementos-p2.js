//elementos do dom parte 2 - aula 39

const caixa = document.getElementById("caixa1");
const item = [...document.querySelectorAll(".nome")];
const retorna = document.getElementById("c1_2");

console.log(caixa.hasChildNodes()); // verifica se o caixa1 tem algum child e retorna true or false

console.log(item[0].hasChildNodes()); //retorna um valor booleano ( true or false) por isso pode se usar if

// usando o if:

// if(caixa.children.length > 0)  {
//     console.log("possui filhos")
// } else {
//     console.log("não tem filho")
// }

//operação ternária
// console.log(item[0].children.length > 0 ? "possui filho" : "não possui filho");

// console.log(caixa.firstElementChild.innerHTML = "Python é muito bom!")

// caixa.children[1].innerHTML = "java é legal" //muda o innerhtml do segundo filho da div pai (caixa1)

console.log(retorna.parentNode); //retorna o pai de c1_2, que é o c1_1, também poderia usar o parentElement

console.log(retorna.parentNode.parentNode.parentNode); //retorna o "avô" do c1_2, que é a div c1, ou seja, volta dois elementos antes da div c1_2

console.log(retorna.parentNode.parentNode.parentNode.children[2]); //retona a div c3
