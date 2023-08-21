//colecao map - aula 54

//o método map é usado para percorrer um array, já a coleção map 
// O map é uma coleção de pares chave-valor onde a chave pode ser de qualquer tipo. O map lembra a ordem original em que os elementos foram adicionados a ele, o que significa que os dados podem ser recuperados na mesma ordem em que foram inseridos.

// //o map tem características tanto do objeto quanto do array. 
// Como um objeto, ele suporta a estrutura de pares chave-valor.
// Como um array, ele se lembra da ordem de inserção.

const box = document.getElementsByClassName("caixa")
const nomes = document.getElementById("caixa")
const mapa = new Map([
    ['nome', 'coding'], //nome, tipo, cor são keys(chave)
    ['tipo', 'manha'], //codding, manha, red são values
    ['cor', 'red'],
])
console.log(mapa.keys()) //retorna as keys do map

const newWorld = new Map()
//adiciona valores ao map utilizando o set (keys, values)
newWorld.set("valor", "cinto")
newWorld.set("hora", "minuto")
newWorld.get("valor")
newWorld.set("livro", "autor")
newWorld.set("valor", "qualquer") //se usar a mesma chave para adicionar um valor a um map várias vezes, ele sempre substituirá o valor anterior.
console.log(newWorld)

//obtendo valores com o get(keys)
const chaves = new Map([
    ["psicologia", "cores"],
    ["aula", "ciencia"],
])
console.log(chaves.get("aula"))

//as chaves podem ser de qualquer tipo
const happyMap = new Map()
happyMap.set(369,"toplaner") //number como chave
happyMap.set(true,"joga lpl") //booleano como chave

let obj = {'regular': "marx"}
happyMap.set(obj,true);//objeto como chave
console.log(happyMap)

//um objeto regular do js sempre trata a keys como string.
const objStr = []
objStr[190] = "police number"
console.log(objStr[190] === objStr["190"]) //retorna true, pois 190 foi convertido para string


//propriedades dos map:
console.log("tamanho do mapa: ", mapa.size) //usado para saber quantos elementos estão em um map

//retorna true se o map tiver uma chave 'aula' has(keys)
console.log(chaves.has("aula"))
//retorna false se o map não tiver uma chave 'jarvan' has(keys)
console.log(chaves.has("jarvan")) 

//remove o elemento com a keys 'tipo'
console.log(mapa.delete("tipo"))
console.log(mapa)

happyMap.clear() //limpa o map, removendo todos os elementos
console.log(happyMap.size) //output 0