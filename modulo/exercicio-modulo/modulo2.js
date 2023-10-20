// estudos de módulo em js aula 96

import { contatos } from "./arquivo-modulo1.js";

let objetoLiteral = {
  getAllContacts: function () {
    return contatos;
  },
  getContato: function (indice) {
    return contatos[indice];
  },
  addNovosContatos: function (novoContato, destino) {
    const div = document.createElement("div");
    div.setAttribute("class", "contato");

    const nomeProprio = document.createElement("p");
    nomeProprio.innerHTML = novoContato.nome;

    const telefone = document.createElement("p");
    telefone.innerHTML = novoContato.telefone;

    const email = document.createElement("p");
    email.innerHTML = novoContato.email;

    div.appendChild(nomeProprio);
    div.appendChild(telefone);
    div.appendChild(email);

    destino.appendChild(div);
  },
};

export default objetoLiteral;
