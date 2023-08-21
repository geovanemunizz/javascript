//colecao set - aula 55

////o objeto set permite armazenar valores únicos de qualquer tipo, desde valores primitivos (String, Number, Boolean, Null, undefined e Symbol) até a referências a objetos.

//objetos set são coleções de valores nas quauis é possivel iterar os elementos em ordem de inserção. o valor no set  PODE OCORRER APENAS UMA VEZ, ele é único na coleção set.

//sintaxe: new Set([iteravel])

const box = document.getElementById("caixa");
const nova = new Set();
nova.add(1);
nova.add(12);
nova.add(12);
nova.add("frase");
var item = { b: 2, c: 3 };
nova.add(item);
nova.add({ b: 2, c: 3 }); // 'item' está referenciando outro objeto

nova.has(1); //true
console.log(nova.has(4)); //false, 4 não foi adicionado
nova.has(12); //true
nova.has(item); //true
nova.has("Frase".toUpperCase()); //true

console.log(nova.size); //5
nova.delete(12); //remove 12 do set
console.log(nova.has(12)); //false, já foi removido

console.log(nova.size); // 4, um valor já foi removido

console.log(nova);

const letras = new Set(["onde", "anda", "pai", "filho","pai","pai"]); //continua retornando size 4, pois "pai" está repetido
letras.add("excecao");
console.log(letras.has("anda"));
letras.delete("filho");
console.log(letras.entries());
console.log(letras.size);

//o método for each é usado pata iterar sobre os elementos de um array e executar um função de callback dm cada elemento
letras.forEach((el)=> {
    box.innerHTML += el + "</br>"
})

for(i of letras) {
    box.innerHTML += i + "</br>"
}