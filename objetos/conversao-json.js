//Aprendendo sobre conversões de json e objetos - aula 65

//Json é um formato de dados baseado em texto, seguindo a sintaxe de objetos em js

//existe como uma string, útil para transmitir dados por uma rede. Ele precisa ser convertido em um objeto JavaScript nativo quando quiser acessar dados.

//estrutura: se parece muito com o formato literal de objeto em js, podendo incluir diferentes dados, string, number,matriz,booleanos e outros literais

//comentarios não são permitidos em json
//json é puramente um formato de dados, contém apenas propriedades, sem métodos
// requer aspas DUPLAS para serem usadas em torno de strings e nome de propriedades. Aspas simples não são válidas

TeensTitans = {
  squadName: "Super hero squad",
  homeTown: "Metro City",
  formed: 2016,
  secretBase: "Super tower",
  active: true,
  members: [
    {
      name: "Robin",
      age: 19,
      secretIdentity: "Dan Jukes",
      powers: ["Radiation resistance", "Turning tiny", "Radiation blast"],
    },
    {
      name: "Starfire",
      age: 39,
      secretIdentity: "Jane Wilson",
      powers: [
        "Million tonne punch",
        "Damage resistance",
        "Superhuman reflexes",
      ],
    },
    {
      name: "Cyborg",
      age: 1000000,
      secretIdentity: "Unknown",
      powers: [
        "Immortality",
        "Heat Immunity",
        "Inferno",
        "Teleportation",
        "Interdimensional travel",
      ],
    },
    {
      name: "Mutano",
      age: "19",
      secretIdentity: "Greg",
      powers: ["Mutação", "Transformaçaõ", "Animals"],
    },
    {
      name: "Raven",
      age: 100,
      secretIdentity: "Nina",
      powers: [
        "Telecinese",
        "Umbracinese",
        "campos de força",
        "Teletransporte",
      ],
    },
  ],
};

console.log(TeensTitans.homeTown);
console.log(TeensTitans["members"][0]["name"]);

const StringHeroes = JSON.stringify(TeensTitans) // converteu para string
const ParseHeroi = JSON.parse(StringHeroes) // converteu para object
console.log(ParseHeroi)


const carro = {
  marca: "Audi",
  portas: 2,
  ano: 2012,
  modelo: [
    "Esportivo",
    "Suv",
    "sedan",
  ]
}

//transformando para string json
const StringJson = JSON.stringify(carro)//serve para converter o objeto literal para json

// const StringJson = JSON.parse() converte o json para objeto literal

console.log(carro)//object 
console.log(StringJson) //string


const stringCarro = {"marca":"Audi","portas":2,"ano":2012,"modelo":["Esportivo","Suv","sedan"]} 

const parseCarro = JSON.parse(StringJson)
console.log(parseCarro.modelo[1])


const pessoa = {
  nome: "Kenpachi Zaraki",
  idade: 28,
  estado: [
    "MG",
    "SP",
    "RJ",
    "BA"
  ]
}

const person = JSON.stringify(pessoa) //conversão para json
const person2 = JSON.parse(person) //conversão para objeto literal
console.log(person2.estado[1])

