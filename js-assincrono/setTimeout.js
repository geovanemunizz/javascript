// podemos criar ações no software que executam depois de um tempo ou de tempos em tempos.

// um dos argumentos dessa função é uma callback function

// setTimeout() é uma função assincrona, o que significa que não vai pausar a execução de outras funções.

// setTimeout() define um tempo que executa a função após o tempo acabar.
let first = setTimeout(() => {
  console.log("essa é a primeira execução");
}, 5000); //3
// clearTimeout(first);

setTimeout(() => {
  console.log("essa é a segunda execução");
}, 3000); //2

setTimeout(() => {
  console.log("essa é a terceira execução");
}, 1000); // 1

const arr = ["hiro", "zeroTwo", "ichigo"];
const meuMethod = function (propriedade) {
  console.log(arguments.length > 0 ? this[propriedade] : this);
}.bind(arr);

meuMethod();
meuMethod(2);
setTimeout(meuMethod, 1.0 * 1000);
setTimeout(meuMethod, 1.5 * 1000, "0");

//não usar assim
// setTimeout(console.log("Hello world"),600)

//use assim:
setTimeout(() => {
  console.log("hello World!");
}, 500);
