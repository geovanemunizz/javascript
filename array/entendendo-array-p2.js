//entendendo array p2 - aula 53
//pode colocar qualquer dado dentro de um array, inclusive funções.


//populando array:
let values = [34, 3];

const elemento = [
  (val) => {
    let res = 0;
    for (i of val) {
      res += i;
    }
    return res;
  },
  (val) => {
    let res = 1;
    for (i of val) {
      res *= i;
    }
    return res;
  },
  (val) => {
    for (i of val) {
        console.log(i);
    }
  },
];
console.log(elemento[1](values)); /*[0](values) chama e executa o comando da primeira função do array. Retorna o resultado da soma.

[1](values) chama e executa o comando da segunda função do array. Retorna o resultado da multiplição

elemento[2](values) chama e executa o comando da terceira função do array. a função já dá o console.log*/
