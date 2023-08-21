//estudando objetos parte 3 - aula 59

class pessoa {
  constructor(Parnome, Paridade) {
    this.nome = Parnome;
    this.idade = Paridade;
  }
  getNome() {
    return this.nome;
  }
  getIdade() {
    return this.idade;
  }
  setNome(Parnome) {
    this.nome = Parnome;
  }
  setIdade(Paridade) {
    this.idade = Paridade;
  }
  carteira() {
    console.log(`nome: ${this.nome}`);
    console.log(`idade: ${this.idade}`);
  }
}

let sistema = [];
const exibicao = document.querySelector("#box");
const button = document.getElementById("botao");

const adicionar = () => {
  exibicao.innerHTML = ""; //limpa o elemento antes de adicionar um novo
  sistema.map((el) => {
    const div = document.createElement("div");
    div.setAttribute("class", "system");
    div.innerHTML = `Nome: ${el.getNome()} <br> Idade: ${el.getIdade()}`;
    exibicao.appendChild(div);
  });
};

button.addEventListener("click", (args) => {
  const name = document.querySelector("#nome");
  const old = document.querySelector("#Idade");

  const initi = new pessoa(name.value, old.value);
  sistema.push(initi);
  name.value = "";
  old.value = "";
  name.focus(); //usado para dar foco a um elemento HTML iterativo
  adicionar();
});
