//entendendo sobe objetos parte 1 - aula 57

// objetos são estruturas de dados fundamentais que permitem armazenar e organizar informaçoes de várias maneiras. São usados para representar entidades, coleções e propriedades.

// é uma coleção de pares chave-valor, onde cada chave é uma string ou símbolo, e o valor pode ser de qualquer tipo de dado, incluido outros objetos.

//pode ser construido de maneira literal ou usando função construtora `object ou através de classes

const box = document.querySelector("#caixa");

//função construtora `object`
const album = new Object();
album.diretor = "NwZ";
album.estilo = "pop";
console.log(album);

//utilizando uma classe
class filme {
  constructor(diretor, ator, visao) {
    this.direct = diretor;
    this.perse = ator;
    this.wanda = visao;
  }
}
const cinema = new filme("Cristopher Nolan", "Cilian Murphy", "WandaVision");
console.log(cinema);
box.innerHTML = cinema.perse;

class pessoa {
  constructor() {
    this.nome = "geovane";
    this.sobrenome = "ramos";
  }
}
const eu = new pessoa(); // este () faz referência ao () do constructor. Se o constructor não recebe nenhum parâmetro, ao instanciar a classe também nao se passa nenhum parâmetro.
console.log(eu);

class zoologico {
  constructor(P_tigre, P_hipopotamo, P_urso) {
    this.P_tigre = P_tigre;
    this.hipo = P_hipopotamo;
    this.urso = P_urso;
  }
}
//ao passar um parametro no constructor, é obrigatório passar um valor para a instancia da classe
const animais = new zoologico("Tigrinho", "gloria", 4); //o valor pode ser de qualquer tipo
console.log(animais);
