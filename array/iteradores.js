// iteradores - aula 51

/* existe uma séria de coleções em js que são iteráveis, como por exemplo: arrays, strings, map,Sets */
// ela permite trabalhar com iterador, que torna fácil trabalhar com os elementos da coleção

const palavras = "pequenas"; //iterando com strings
const peq_palavras = palavras[Symbol.iterator]();

console.log(palavras);
console.log(peq_palavras.next());
console.log(peq_palavras.next());
console.log(peq_palavras.next());
console.log(peq_palavras.next());
console.log(peq_palavras.next());
console.log(peq_palavras.next());
console.log(peq_palavras.next());
console.log(peq_palavras.next());
console.log(peq_palavras.next());

//

const valores = [1, 32, 4, 15];
const itera = valores[Symbol.iterator](); //iterador para o array valores

console.log(valores);
console.log(itera.next()); //retorna o value (primeiro elemento do array) e o done: false, indicando que não chegou ao final
console.log(itera.next().value); //output 32
console.log(itera.next().value); //output 4
console.log(itera.next().value); //output 15
console.log(itera.next()); //retorna value: undefined e done true, indicando que chegou ao final da coleção
