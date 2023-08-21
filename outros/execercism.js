const caixa = document.getElementById("box");
const button = document.getElementById("botao");

const pessoa = {
  nome: "Geovane",
  idade: 23,

  getNome: function () {
    return this.nome;
  },
  getIdade: function () {
    return this.idade;
  },
  setNome: function (nome) {
    this.nome = nome;
  },
  setIdade: function (idade) {
    this.idade = idade;
  },
};

const adicionar = () => {
  const div = document.createElement("div");
  div.setAttribute("class", "system");
  div.innerHTML = `nome: ${pessoa.nome} <br> idade: ${pessoa.idade}`;
  caixa.appendChild(div);
};

button.addEventListener("click", () => {
  const nome = document.getElementById("nome").value;
  const years = document.getElementById("idade").value;
  if (nome && years) {
    pessoa.setNome(nome);
    pessoa.setIdade(years);
  } else {
    alert("digite um valor correto");
  }
  adicionar();
});
