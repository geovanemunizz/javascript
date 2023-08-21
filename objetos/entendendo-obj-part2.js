//objetos em js parte 2 - aula 58

const box = document.querySelector(".caixa");
//uso de condicional dentro de objetos
class pseudo {
  constructor(elemento, pseuEl) {
    this.nome = elemento;
    if (pseuEl == 1) this.pseudoEl = "artista";
    else this.pseudoEl = "famoso";
  }
}
const atributo = new pseudo("lenda", 1);
console.log(atributo);

class formula1 {
  constructor(escuderia, marcha) {
    this.escuderia = escuderia;
    if (marcha == 1) {
      this.marcha = "muito lento";
      this.velMax = 235;
    } else if (marcha == 2) {
      this.marcha = "lento";
      this.velMax = 254;
    } else if (marcha == 3) {
      this.marcha = "rápido";
      this.velMax = 288;
    } else {
      this.marcha = "muito rápido";
      this.velMax = 300;
    }
  }
  radar() {
    console.log("escuderia " + this.escuderia);
    console.log("carro " + this.marcha);
    console.log("velocidade " + this.velMax);
  }
}

let car1 = new formula1("ferrari", 1);
let car2 = new formula1("mercedez", 2);
let car3 = new formula1("red bull", 3);
let car4 = new formula1("aston Martin", 4);
car4.radar();

class pessoa {
  linguagem = "javaScript"
  constructor(nome,genero,idade) {
    this.nome = nome;
    this.linguagem = "Python"
    this.genero = genero
    if (idade >= 18) this.idade = "Maior de idade";
    else this.idade = "Menor de idade";
  }
  getNome() {
    return this.nome
  }
  getGenero() {
    return this.genero
  }
  getIdade() {
    return this.idade
  }
  getArray() {
    return [this.nome, this.genero,this.idade]
  }
  setNome(nome) {
    this.nome = nome
  }
  propy() {
    //uso de template string
    console.log(`nome   ${this.nome}`);
    console.log(`Genero: ${this.genero}`)
    console.log(`linguagem: ${this.linguagem}`)
    console.log(`idade:   ${this.idade}`); 
  }
}

let nome1 = new pessoa("Van gogh","Masc", 28);
let nome2 = new pessoa("Marie","Fem", 32);
let nome3 = new pessoa("sheldon", "Masc",10);
nome2.propy() //output nome: marie, genero: fem, idade: 32
console.log(nome2.getGenero()) //obtem output Fem
console.log(nome3.getNome()) // obtemoutput: sheldon
console.log(nome1.getIdade())

// output array com os elementos
console.log(nome1.getArray())
console.log(nome3.getArray())

nome1.setNome("Gilmar") //adicionou um novo valor, alterando "Van gogh"
nome1.propy()

