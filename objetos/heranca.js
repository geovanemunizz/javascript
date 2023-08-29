// herançca em javacript - aula 62

// é quando existe uma classe que herda outra classe, a classe "pai" vai ceder métodos e propriedades para a classe "filho"

//tudo que está implementado na classe pai, vale para classe filho


class manga {
  //classe pai
  constructor(nome, capitulo) {
    this.personagem = "";
    this.nome = nome;
    this.capitulo = capitulo;
    this.AdaptacaoAnime = false;
    this.NumeroPaginas = 122;
  }
  adaptado = function () {
    this.AdaptacaoAnime = true;
  };
  encerrado = function () {
    this.adaptado = false;
  };
  setPersonagem = function (personagem) {
    this.personagem = personagem;
  };
}

//normal
const m1 = new manga("kaguya sama", 253);
m1.adaptado();
m1.setPersonagem("shirogane"); //alterado o nome do personagem

console.log(`nome: ${m1.nome}`);
console.log(`capitulo ${m1.capitulo}`);
console.log(`Adaptação:  ${m1.AdaptacaoAnime ? "Sim" : "Não"}`); // operador térnário
console.log(`Número de paginas ${m1.NumeroPaginas}`);
console.log(`Personagem ${m1.personagem}`);

// classe filho e uso da herança
class manhwa extends manga {
  /*define que a classe manhwa vai herdar a classe manga, automaticamente, manhwa tem todos as propriedades e métodos da class manga */
  constructor(nome, capitulo, autor, visitas) {
    //autor e visitas são própios de manhwa e não pertecemm ao pai (manga)
    super(nome, capitulo); //chama os elementos diretamente da class pai
    this.autor = autor;
    this.visitas = visitas;
    this.setPersonagem("Jin woo"); //define o padrão para o nome do personagem
  }
  VisualNovel = function () {
    if (this.visitas >= 0) {
      this.visitas--;
    }
  };
}

const man = new manhwa("solo Leveling", 180, "Chugong", 4);
man.setPersonagem("cha hae"); //alterado o nome do personagem
console.log(man);
// console.log(`nome: ${man.nome}`); //undefined, o constructor da primeira class possui dois paramentos, já na segunda não tem
// console.log(`capitulo ${man.capitulo}`); //undefined

console.log(`Adaptação:  ${man.AdaptacaoAnime ? "Sim" : "Não"}`); // operador térnário
console.log(`Número de paginas ${man.NumeroPaginas}`);
console.log(`Personagem ${man.personagem}`);
man.VisualNovel() // 3
man.VisualNovel() // 2
man.VisualNovel() // 1
man.VisualNovel() // 0
console.log(man.visitas)
