// objetos literais em javascript - aula 61

// objetos literais permite definir um objeto e suas propriedades diretamente, sem a necessidade de usar uma função construtora ou uma classe
// a atribuição é feita com dois pontos (:)

// ao final de uma linha é recomendável colocar a vírula (,)

const nomeDrop = "nome";
const person = {
  [nomeDrop]: "Alice",
  idade: 23,
  profissao: "Programadora",
  add() {
    return `oi ${this.nome} voce tem ${this.idade} anos e trabalha como ${this.profissao}`;
  },
};
let nome1 = person;
nome1["idade"] = 56; // adiciona na propriedade idade com os colchetes
console.log(person.add());

//métodos no objeto no objeto literal
const calc = {
  soma: function (a, b) {
    return a + b;
  },
  subtracao: function (a, b) {
    return a - b;
  },
};
console.log(calc.subtracao(43, 4));

const corrida = {
  carro: "",
};
let car1 = corrida;
let car2 = corrida;
car1.carro = "Nissan 360z"; // pode chamar a propriedade com o :
console.log(corrida.carro);
console.log(car1.carro);
car2["carro"] = "Corvette"; // chamando a propriedade com os colchetes []
console.log(car2.carro);

//

//objeto literal
const animal = "";
const pess = {
  animal: "Leão",
  peso: 223,
  zoe() {
    return `o ${this.animal} tem cerca de: ${this.peso}kg`;
  },
};
console.log(pess.animal);

//objeto com constructor
class jogar {
  constructor(futebol, volei) {
    this.esporte = futebol;
    this.pratica = volei;
  }
}
console.log(new jogar("Basquete", "Golf"));

//instãncia do objeto
const esporte = new Object();
esporte.jogo = "Basquete";
esporte.jogador = "Lebron";
esporte.numero = 6;
console.log(esporte.jogador);
