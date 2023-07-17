//funções parametrizadas - aula 22

const value_padrao = 1;

let valor = 0;

console.log(valor);

function add(n) {
  return valor + n;
}
valor = add(10);
console.log(valor);

valor = add(5);
console.log(valor);

function nome(val1 = value_padrao, val2 = value_padrao) {
  let sum;
  sum = val1 + val2;
  return sum;
}

let soma = nome(5);
console.log(soma);

// nome("Number ", "Geovane");
// nome(20134,1);
// nome(2);
// nome(20,10);
