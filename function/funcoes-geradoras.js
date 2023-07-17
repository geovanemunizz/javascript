//funções geradoras - aula 27

// tem o seu retorno adiado até o momento que seja necessário esse retorno. No primeiro momento ela retorna um iterador, a partir do segundo, entra na execução e quando encontra o yield, retorna o conteúdo.

//para ser uma função geradora, precisa colocar o function* (com asterisco)
// yield, que indicam os valores que serão retornados pela função quando ela for chamada.

function* gato() {
  yield "amarelo";
  yield "marrom";
  yield "cinza";
}

const iterador = gato(); //primeira chamada e para no yield
console.log(iterador.next().value); //segunda chamada, e retorna o valor amarelo
console.log(iterador.next().value); //terceira chamada, e retorna o valor marrom

//

function* quest() {
  const nome = yield "Qual o seu nome";
  const jogo = yield "Qual seu jogo preferido";
  return "seu nome é " + nome + ", seu jogo preferido é: " + jogo;
}
const int = quest();
console.log(int.next().value);
console.log(int.next("Geovane").value);
console.log(int.next("cod").value);

//A função next() é responsável por retomar a execução da função geradora a partir do ponto onde ela foi pausada

//Cada chamada a next() retorna um objeto com duas propriedades: value, que contém o valor gerado, e done, que indica se a função geradora terminou de executar.

// geradora com loop

function* generator() {
  let i = 0;
  while (true) {
    yield i++;
    if (i > 6) {
      // ao adicionar um if na função, evita o loop infinito
      break;
    }
  }
}
const inter = generator();

// for(let i=0; i<6; i++) {
//     console.log(inter.next().done) //retorna os 6 primeiros valores gerados
// }

for (y of inter) {
  console.log(y); //se torna um loop infinito, caso esteja sem o if na função
}
