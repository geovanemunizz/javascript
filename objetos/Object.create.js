//O Método Object.create()  cria um novo objeto, utilizando um outro objeto existente como protótipo para o novo objeto a ser criado.

function PersonObject(nome, idade) {
  const person = Object.create(constructorObject);
  person.nome = nome;
  person.age = idade;
  return person;
}

let constructorObject = {
  falar: function () {
    return `Oi, eu me chamo ${this.nome} e tenho ${this.age} anos`;
  },
};

let pessoa = PersonObject("Jaime", 21);
console.log(pessoa.falar());

function PessoaObject(nome, idade) {
  this.nome = nome;
  this.age = idade;
}
PessoaObject.prototype.falar = function () {
  return `Oi, eu me chamo ${this.nome} e tenho ${this.age} anos`;
};

let silver = new PessoaObject("Silver", 43);
console.log(silver.falar());

//herança teadicional com Object.create()
function shark() {
  this.a = 0;
  this.b = 0;
}

//método de superclass
shark.prototype.nadar = function (a, b) {
  this.a += a;
  this.b += b;
  console.info("O Tubarão está nadando");
};
//console.info()  é usado para registrar informações. É semelhante ao console.log(), mas geralmente é usado para fornecer informações específicas, como mensagens informativas ou de status.

//banhista - subclasse
function banhista() {
  shark.call(this); // chama o constructor pai
}

//subclass extend superclass:
banhista.prototype = Object.create(shark.prototype);
banhista.prototype.constructor = banhista;

let reaction = new banhista();
console.log(
  "reaction é uma instância de banhista?",
  reaction instanceof banhista
); // true
console.log("reaction é uma instância de shark?", reaction instanceof shark); // true
reaction.nadar(2, 4); // O Tubarão está nadando

//herança de multiplos objetos, o uso de 'mixin' é uma possibilidade

// function notebook(){
//     AlphaClass.call(this)
//     BetaClass.call(this)
// }
// notebook.prototype = Object.create(AlphaClass.prototype)
// mixin(notebook.prototype, BetaClass.prototype) // mixin
// notebook.prototype.ntMethod = function(){
//     // algo aqui
// }

/* mixin é uma técnica de programação que permite combinar múltiplos objetos ou classes para herdar propriedades e métodos de cada um deles em um único objeto. Isso é útil para reutilizar código de maneira modular e compor funcionalidades em um objeto ou classe. */
