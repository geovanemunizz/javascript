// aula 105 p1

// Expressões regulares são usadas para corresponder combinações de caracteres em cadeia de caracteres. No js,  Expressões regulares também são objetos.

// Há duas maneiras de construir uma regex: expressão literal ou chamando uma funçao de construtor do objeto RegExp()

// expressão literal, que usa um padrão entre barras:
const express = /ac + n/;
console.log(express);

// as expressões literais fornecem compilação regular quando o script é carregado. Se o regex permanecer constante, o uso disso pode ser melhor.

// chamando a funçaõ do objeto RegExp()
const rege = new RegExp("ab+c");
console.log(rege);

//o uso da função fornece compilação em tempo de execuçaõ do regex. Seu uso é recomendado, quando o padrão da expressão será alterado ou não souber o padrão e obtê-lo de outra fonte.

const texto = "A quick fox";

const regexp = /\w+(?= fox)/;
console.log(texto.match(regexp));

let nome = String("Jon snow");
console.log(nome.search(/SNOW/i)); // output 4
console.log(nome.match(/N/gi)); // output [n,n]
console.log(nome.replace(/n/gi, "m")); // output Jom smow

console.log(nome.split(/o/gi));

//função que conta o número de vogais de uma palavra
function countVogais(el) {
  let vogais = el.match(/[aeiou]/gi); // g = global, i = sem distinção de maiúscula e minúscula
  return vogais ? vogais.length : 0;
}

console.log(countVogais("pedreste"));
