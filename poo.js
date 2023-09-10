const person = {
  isHuman: false,
  printIntroduction: function () {
    console.log(
      `Meu nome é ${this.nome}. E sou humano? ${this.isHuman ? "Sim" : "Não"}`
    );
  },
};

const pessoa = Object.create(person);
pessoa.nome = "James da salada de Frutas"; // 'nome' é uma propriedades setada em 'pessoa', mas não em 'person'
pessoa.isHuman = true; // 'pessoa' herdou as propriedades e métodos de 'person', por isso também é possivel muda-lás
pessoa.printIntroduction();
