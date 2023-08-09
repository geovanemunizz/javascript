//método find() - aula 47
// é usado para buscar um elemento que satisfaça uma condição especifica, retornando o primeiro elemento que corresponder. Se a condição for atendida, retorn a true, caso contrário retorna false

const div_nome = document.getElementById("nomes");
const pesqui = document.getElementById("pesquisar");
const button = document.getElementById("botao");
const result = document.getElementById("resultado");

const elemento_colecao = ["css", "java", "html", "php", "python", "sql"];

div_nome.innerHTML = "(" + elemento_colecao + ")";

button.addEventListener("click", (evt) => {
  result.innerHTML = "valor não encontrado";
  //verifica se o valor no input é completamente igual ao do array:
  const ret = elemento_colecao.find((el, indice) => {
    if (el.toUpperCase() == pesqui.value.toUpperCase()) {
      result.innerHTML = " valor: " + el + " posição: " + (indice + 1);
      return el;
    }
  });
  console.log(ret);
});
