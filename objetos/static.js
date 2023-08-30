// entendendo sobre membros Static em js - aula 66

//static define um método estático para a classe. Métodos estáticos não são chamados na instâncias da classe, são chamados na própria classe

// sintaxe: static nomeDoMetodo(){...}

//Métodos estáticos não são diretamente acessíveis utilizando-se this a partir de métodos não estáticos. É necessário chamá-los usando o nome da classe: nomeDaClasse.nomeDoMetodoeEstatico() ou chamando o método como uma propriedade do constutor: this.constructor.nomeDoMetodoEstatico

class CallMethodStatic {
  static staticMethod() {
    return "Método estatico foi chamado";
  }
  static otherMethod() {
    return this.staticMethod() + " por outro método estático";
  }
}

// console.log(CallMethodStatic.staticMethod());
// console.log(CallMethodStatic.otherMethod());

//static com construtor:
class ChamadaDeStatic {
  constructor() {
    console.log(ChamadaDeStatic.staticMethod());
    console.log(this.constructor.staticMethod()); //chamado com o this
  }
  static staticMethod() {
    return "Método estatico foi chamado";
  }
}
console.log(new ChamadaDeStatic());

class triplo {
  static trap(el) {
    el = el | 1;
    return el * 3;
  }
}
class dobroTres extends triplo {
  static trap(el) {
    return super.trap(el) * super.trap(el);
  }
}

console.log(triplo.trap()); //3
console.log(triplo.trap(6)); //21
console.log(dobroTres.trap(3)); // 81
let draw = new triplo();
// console.log(draw.trap()) //output draw não é função

class dlc {
  static atualizacao = false
  constructor(versao) {
    this.versao = versao;
    // this.atualizacao = false;
  }
  info = function () {
    console.log(`versão: ${this.versao}`);
    console.log(`Atualização: ${dlc.atualizacao ? "sim" : "não"}`);
  };
  static setVersao = function(){
    dlc.atualizacao = true
  }
}

const v1 = new dlc(1.1);
const v2 = new dlc(3.4);
const v3 = new dlc(4.4);
dlc.setVersao() //sim
v1.info();
v2.info();
v3.info();