//polimorfismo - aula 68

//polimorfismo define um conjunto de diferentes dados especificados individualmente

// o polimorfismo pode ser alcançado em que cada class tem sua própria funçãoo(uma vez chamada) se comporta adeqadamente para qualquer objeto.




class youtube {
  constructor(like, NumeroDeInscritos) {
    this.VimeoInscritos = new vimeo(NumeroDeInscritos);
    switch (like) {
      case 1:
        this.NumeroDeLikes = 134;
        this.QualidadeDoVideo = "Baixo";
        break;
      case 2:
        this.NumeroDeLikes = 360;
        this.QualidadeDoVideo = "Bom";
        break;
      case 3:
        this.NumeroDeLikes = 1203;
        this.QualidadeDoVideo = "Muito bom";
        break;
    }
    this.NumeroDeLikes += this.VimeoInscritos.inscritos;
  }
  views() {
    console.log(`Inscritos: ${this.VimeoInscritos.inscritos}`);
    console.log(`Aprovação do Vídeo: ${this.QualidadeDoVideo}`);
    console.log(`Número de Likes: ${this.NumeroDeLikes}`);
    console.log("----------------");
  }
}

class vimeo {
  constructor(el) {
    switch (el) {
      case 1:
        this.inscritos = 500;
        break;
      case 2:
        this.inscritos = 850;
        break;
      case 3:
        this.inscritos = 1000;
        break;
      case 4:
        this.inscritos = 1800;
        break;
      default:
        this.inscritos = 0;
        break;
    }
  }
}

class tiktok extends youtube {
  constructor(NumeroDeInscritos) {
    super(4, NumeroDeInscritos);
    // this.NumeroDeLikes = 2000
    this.NumeroDeLikes = 2000 + this.VimeoInscritos.inscritos;
    this.QualidadeDoVideo = "hype";
  }
  //polimorfismo
  views() {
    console.log(this.VimeoInscritos.inscritos);
    console.log(this.QualidadeDoVideo);
    console.log(this.NumeroDeLikes);
    console.log("----------------");
  }
}

const pessoa = new youtube(2, 3);
pessoa.views();
// console.log(pessoa)

const cnn = new youtube(3, 3);
cnn.views();
// console.log(cnn)

const ttk = new tiktok(4);
console.log(ttk);
ttk.views();

//

class people {
  constructor(nome, idade, peso) {
    this.nome = nome;
    this.idade = idade;
    this.peso = peso;
  }
}
people.prototype.getInfo = function () {
  return `olá ${this.nome}, você tem ${this.idade} anos e pesa ${this.peso}Kg`;
};
class empresa extends people {
  constructor(nome, idade, peso, salario) {
    super(nome, idade, peso);
    this.salario = salario;
  }
}
//polimorfismo:
empresa.prototype.getInfo = function () {
  return `${people.prototype.getInfo.call(this)} e ganha: R$${this.salario}`;
};

const person = new people("Jacob", 50, 90);
const employee = new empresa("Jeniffer", 33, 78, 3200);
console.log(person.getInfo());
console.log(employee.getInfo());
//


class option {
  cata(pattern, option) {
    return pattern[option.constructor.name](option.x);
  }
  map(f, opt) {
    return this.cata({ some: (x) => new some(f(x)), none: () => this }, opt);
  }
}

class some extends option {
  constructor(x) {
    super(x);
    this.x = x;
  }
}

class none extends option {
  constructor() {
    super();
  }
}

const map = (f) => (t) => t.map(f, t);

const sqr = (x) => x * x;
const xs = [4, 6, 9];
const x = new some(10);
const y = new none();

console.log(map(sqr)(xs)); // 16,36,81
console.log(map(sqr)(x)); // x: 100
console.log(map(sqr)(y)); // none
