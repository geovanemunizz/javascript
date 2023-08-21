//entendendo objetos parte 4 - aula 60
// substituindo a class por uma function

const unboxing = document.getElementById("box");
const button = document.getElementById("botao");
let ArrayPessoa = [];

function pessoa(Elnome, Elidade) {
  //os parametros do constructor passam a ser os da função
  (this.nome = Elnome),
    (this.idade = Elidade),
    //os métodos passam a ser function anônima
    (this.getNome = function () {
      return this.nome;
    }),
    (this.getIdade = function () {
      return this.idade;
    });
}

const add = () => {
  unboxing.innerHTML = "";
  ArrayPessoa.map((el) => {
    const div = document.createElement("div");
    div.setAttribute("class", "system");
    div.innerHTML = `nome: ${el.getNome()} <br> idade: ${el.getIdade()}`;
    unboxing.appendChild(div);
  });
};

button.addEventListener("click", () => {
  const nome = document.getElementById("nome");
  const year = document.getElementById("Idade");
  const inicio = new pessoa(nome.value, year.value);
  ArrayPessoa.push(inicio);
  nome.value = "";
  year.value = "";
  add();
});
