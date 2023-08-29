// o forEach é usado para percorrer arrays, mas usa uma função de modo diferente do laço for

//for each é usado pata iterar sobre os elementos de um array e executar um função de callback dm cada elemento

/* o forEach executa o callBack fornecido uma vez para cada elemento da ordem com um valor atribuido. Ele não é invocado para propriedades de índices que foram devarados ou que não foram inicializados */

// caso de uso típico: alterar o array no final do loop

/*sintaxe: array.forEach(callBack(currentValue [,index [,array]])[,thisArgs]) 

callBack: função para executar em cada elemento, recebendo três argumentos (valor, indice e o array).

currentValue: valor atual do elemento sendo processado no array.

array (opcional): array que o forEach() está sendo aplicado

index (opcional): indice atual do elemento sendo processado no array

thisArgs (opcional): opcional, valor a ser usado como this quando executado
*/

// const array1 = ["x", "Y", "z"];
// array1.forEach((elemento) => console.log(elemento));

// const idade = [12, 65, 2, 3, 19, 34, 20, 17];

function elementosArray(elemento, index, array) {
  console.log("primeiro[ " + index + "] = " + elemento);
}

[3, 4, 6].forEach(elementosArray);

const manga = [
  { titulo: "oshi no ko", autor: "Aka akasaka" },
  { titulo: "One Piece", autor: "Oda" },
  { titulo: "Attack on Titan", autor: "Hajime Isayama" },
];
manga.forEach((nome) => {
  console.log(`titulo: ${nome.titulo} Autor: ${nome.autor} `);
});

const loja = [
  { produto: "copo", preco: 10 },
  { produto: "Tênis", preco: 120 },
  { produto: "Mochila", preco: 80 },
  { produto: "estojo", preco: 15 },
  { produto: "garrafa", preco: 20 },
];
let valorTotal = 0;
loja.forEach((item) => {
  valorTotal += item.preco;
});
console.log(`o total da compra sem desconto foi de: R$ ${valorTotal}`);
if (valorTotal > 100) {
  const desconto = valorTotal * 0.1; //desconto de 10%
  valorTotal -= desconto;
  console.log(`o total da compra com desconto foi de: R$ ${valorTotal}`);
}
