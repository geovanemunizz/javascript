// funções string e manipulação - aula 101

var nome = new String("Drogo ")
console.log(typeof nome) // object
console.log(nome)

console.log(nome.charAt()) // retorna o caractere da posição(indice) especifica

console.log(nome.charCodeAt()) // retorna um inteiro entre e representando a unidade utf-16

console.log(`${nome.codePointAt()} é igual a: ${nome.charAt()} e a ${nome.charCodeAt()}`)
//codePointAt() retorna um inteiro não negativo que é o valor unicode do caractere no indice fornecido.

let scary = " Dracarys"
nome = nome.concat(scary)
console.log(nome)

const botao = document.querySelector("button").innerHTML
console.log(botao.indexOf("e",6)) // pesquisa e retorna a posição da primeira ocorrencia definida. Também recebe a posição inicial para a pesquisa.

console.log(botao.lastIndexOf("m",13)) // começa a pesquisa do fim da string,  e retorna a última ocorrencia definida. Também recebe a posição inicial para a pesquisa.