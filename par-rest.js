//parâmetros REST

//é uma forma de passagem de parametro onde não precisa especificar repetidamente a quantidade de paramentro que vai ser enviado para a function

function nome(par1 = 1, par2 = 2) {
  return par1 + par2;
}
console.log(nome());
// console.log(nome(8, 2));

// function rest

//com for padrão
function soma(...valor) {
  let tamanho = valor.length; //dá o comprimento do array, a quantidadede parametros
  let res = 0;
  for (let i = 0; i < tamanho; i++) {
    res += valor[i];
  }
  return res;
}
console.log(soma(9, 8, 3, 5, 20, 34, 56, 48));

//com for in
function nume(...valores) {
  let resto = 0;
  for (let n in valores) {
    resto += valores[n];
  }
  return resto;
}

console.log(nume(3, 5));

//com for of
function tela(...display) {
  let value = 0;
  for (let num of display) {
    value += num;
  }
  return value;
}
console.log(tela(44, 12, 32, 10));
