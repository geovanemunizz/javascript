const pessoa = {
  nome: "Aurelio",
  profissao: "Médico",
  idade: [32, 65, 44, 36],
  cidade: "Salvador",
  falar: function () {
    (pessoa.idade[1] = 20),
      console.log(
        `olá, me chamo ${this.nome} e tenho ${this.idade[2]} anos, atualmente trabalho como  ${this.profissao} e resido em ${this.cidade}`
      );
  },
};
pessoa.cidade = "Pernambuco";
pessoa.profissao = "Desenvolvedor";
// pessoa.idade[1] = 20
pessoa.falar();

const carro = {
  marca: "",
  modelo: "Ecosport",
  ano: 2015,
  cor: "branco",
  ligar: function () {
    console.log(`o carro está ligado`);
  },
};
carro.marca = "Ford";
console.log(carro);
carro.ligar();

const calcNotas = {
  nome: "Julia",
  notas: [5, 4, 6],
  calcularMedia: function () {
    const somaNotas = this.notas.reduce((part, nota) => part + nota, 0);
    const media = (somaNotas / this.notas.length).toFixed(1); //limita para uma casa decimal

    // const media = parseFloat(this.notas[0] + this.notas[1] + this.notas[2]) / 3;

    const status = media >= 5 ? "aprovado" : "reprovado";
    console.log(
      `o aluno ${this.nome} ficou com a média: ${media} e foi ${status}`
    );
  },
};
calcNotas.calcularMedia();

const book = {
  titile: "Fire & Blood",
  author: "George R R Martin",
  year: 1996,
  summary: function () {
    console.log(
      "A Game of Thrones is the first novel in A Song of Ice and Fire, a series of fantasy novels by American author George R. R. Martin. It was first published on August 1, 1996."
    );
  },
};
console.log(book.author);
book.summary();
