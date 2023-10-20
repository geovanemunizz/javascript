// arquivo principal, que recebe as exportações do arquivo modulo2.js

import objetoLiteral from "./modulo2.js";

const listaContato = document.getElementById("contactList");
const botao = document.getElementById("botao");

botao.addEventListener("click", (evt) => {
  //impede o recarregamento da página (envio do formulário)
    evt.preventDefault()
  const user = {
    nome: document.querySelector("#inputName").value,
    telefone: document.querySelector("#inputPhone").value,
    email: document.querySelector("#inputEmail").value
  };
  objetoLiteral.addNovosContatos(user, listaContato);
});
