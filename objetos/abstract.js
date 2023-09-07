//Entendendo Abstract em POO - aula 69
//classes abstratas no js contém um ou mais métodos abstratos, mas não pode instanciar. As classes não podem ser instanciadas, mas podem ser estendidas usando métodos.

// Classes abstract precisam ser herdadas, exigindo classes ou subclasses concretas para estender a classe abstrata com os métodos declarados dentro dela.

// Métodos abstratos são métodos que só podem ser declarados, mas não têm implementação.

// exemplo de classe abstrata:

class carro {
  constructor() {
    if (this.constructor === carro) {
      throw new Error(
        "Class Abstract não pode ser instanciada (mensagem de erro)"
      );
    }
  }
  cor() {
    throw new Error("Método cor() deve ser implementado (mensagem de erro");
  }
  ligar() {
    console.log("Ligando...");
  }
}
//depois de criar a classe abstrata é necessario criar classes concretas. Fazendo elas herdarem todas as funções e comportamentos da função abstract:
class moto extends carro {
  cor() {
    console.log("Azul");
  }
}

class bicicleta extends carro {
  cor() {
    console.log("Amarelo");
  }
}
// com a definição de class abstract e concretas, a abstração e a herança foram alcançadas.
// Quando o contructor tem o mesmo nome que a class abstract, ele lança um erro. Mas ao instanciar as classes concretas, funciona perfeitamente.
new moto().ligar();
new bicicleta().ligar();
new moto().cor();
new bicicleta().cor();

//como as classes abstract não podem ser instanciadas, não podemos chama-lás:

// new carro() // Exibe mensagem de erro 'Class Abstract não pode ser instanciada'

//classe abstrata google:
class google {
  constructor() {
    if (this.constructor === google) {
      throw new TypeError("A classe não pode ser instânciada ");
    }
    if (this.legendasOff === undefined) {
      throw new TypeError("É necessário implementar o método legendasOff");
    }
    if (this.legendasLigadas === undefined) {
      throw new TypeError("É necessário implementar o método legendasLigadas");
    }

    this.NumeroDeContas = 3;
    this.qualidade = "1080p";
    this.legendasOn = false;
  }
}
class youtube extends google {
  constructor(like, NumeroDeInscritos) {
    super();
    this.VimeoInscritos = new vimeo(NumeroDeInscritos);
    switch (like) {
      case 1:
        this.NumeroDeLikes = 132;
        this.QualidadeDoVideo = "Baixo";
        break;
      case 2:
        this.NumeroDeLikes = 360;
        this.QualidadeDoVideo = "Bom";
        break;
      case 3:
        this.NumeroDeLikes = 1200;
        this.QualidadeDoVideo = "Muito bom!";
        break;
    }
    this.NumeroDeLikes += this.VimeoInscritos.inscritos;
  }
  views() {
    console.log(`Vimeo inscritos: ${this.VimeoInscritos.inscritos}`);
    console.log(`Aceitação do vídeo: ${this.QualidadeDoVideo}`);
    console.log(`Qtd de likes: ${this.NumeroDeLikes}`);
    console.log(`Numero de contas: ${this.NumeroDeContas}`);
    console.log(`Qualidade: ${this.qualidade}`);
    console.log(`Legendas Ligadas: ${this.legendasOn ? "Sim" : "Não"}`);
    console.log("----------------------------");
  }
  legendasOff() {
    this.legendasOn = false;
  } //implementação do legendasOff, mesmo que esteja vazio
  legendasLigadas() {
    this.legendasOn = true;
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
        this.inscritos = 1500;
        break;
      case 4:
        this.inscritos = 2000;
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
    this.NumeroDeLikes = 2000 + this.VimeoInscritos.inscritos;
    this.QualidadeDoVideo = "Hype";
  }
  views() {
    console.log(`Vimeo inscritos: ${this.VimeoInscritos.inscritos}`);
    console.log(`Aceitação do vídeo: ${this.QualidadeDoVideo}`);
    console.log(`Qtd de likes: ${this.NumeroDeLikes}`);
    console.log(`Numero de contas: ${this.NumeroDeContas}`);
    console.log(`Qualidade: ${this.qualidade}`);
    console.log(`Legendas Ligadas: ${this.legendasOn ? "Sim" : "Não"}`);
    console.log("----------------------------");
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
// const browser = new google() // instancia da class abstract google
