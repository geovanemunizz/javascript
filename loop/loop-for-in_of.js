// lopp for in e for of - aula 16
//varições de for, in e of

const objeto = document.getElementsByTagName("div");

let num = [20, 12, 30, 46, 55];

for (let indice = 0; indice < num.length; indice++) {
  console.log(num[indice]);
}

// for in
for (o in objeto) {
  console.log(objeto[o].innerHTML);
}

/* O for...in é usado para percorrer propriedades enumeráveis de um objeto. Ele itera sobre as chaves (ou propriedades) de um objeto */

//for of

for (n of objeto) {
  console.log((n.innerHTML = "programa"));
}

/* O for...of é usado para iterar sobre elementos iteráveis, como arrays, strings, mapas, conjuntos, etc. Ele retorna os valores dos elementos, em vez das chaves. o for of não funciona com objetos diretamente. Ele é projetado para percorrer elementos em uma ordem específica e é mais adequado para estruturas de dados iteráveis. */
