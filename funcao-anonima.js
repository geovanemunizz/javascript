// funções anônimas

//são funções que não possuem um nome associado. São chamadas em tempo de execução, ou seja, ela só vai ser criada no momento da execução, não está guardada na memória.

//estrutura básica

var obj = (function () {
  // declarações a serem protegidas
  var a, b, c;
  // retornando um objeto construído a partir de a, b e c
  return obj;
})();

let nome = "Daenerys";
let sobrenome = "Targaryen";
let funcao = function () {
  alert("Seja bem vindo, " + nome + sobrenome);
}; // () chamada da função

//fução anônima parametrizada
let fun = function (n1, n2) {
  return n1 + n2;
};
console.log(fun(6, 12)); //chamada da função com o console.log

//função anônima com parametro rest
let car = function (...valor) {
  let res = 0;
  for (n of valor) {
    res += n;
  }
  return res;
};
console.log(car(7, 8, 9, 32, 45, 78));

//construtor dentro de função anônima

//serve para funções mais simples, quando uma função faz uma operação simples é quando pode usar o conceito de função construtura

// ao utilizar o operador new, o Function tem que ser com F maiusculo

const build = new Function("num1", "num2", "n3", "return num1 + num2 + n3"); //função construtora anônima

console.log(build(9, 23, 6));

//
function construtora(nome, sobrenome) {
  this.nome = nome;
  this.sobrenome = sobrenome;
}

let instance = new construtora("Jon", "Snow"); //sem utilizar o operador new, um objeto não será retornado. A chamada simplesmente retornará undefined
console.log(instance);
