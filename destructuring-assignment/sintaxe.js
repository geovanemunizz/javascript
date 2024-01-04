// 28-12-2023 desestruturação em js

// É uma expresão que possibilita extrair dados de arrays ou objetos em varivaies distintas;

// As expressões de objeto e matriz literais fornecem uma maneira fácil de criar pacotes de dados:

var numeros = [2, 4, 6, 8, 10];

// A atribuição com desestruturação usa sintaxe similar, mas no lado esquerdo são definidos os elementos que devem ser extraidos:

var numeros = [3, 6, 9, 12, 15];
let [num1, num2] = numeros;
console.log(num1);
console.log(num2);

//

let firstName, old, day;

[firstName, old, ...day] = ["Alicent", 26, 1, 2, 3, 4, 5, 6, 7];
console.log(firstName); //Alicent
console.log(old); //26
console.log(day); // 1-7

//

// ignorando valores retornados:
function returnNum() {
  return [10, 20, 30];
}
let [first, , third] = returnNum();
console.log(first); //10
console.log(third); //30

// ou pode ignorar todos os valores retornados: [,,] = returnNum();

//

//atribuição do resto do array para uma váriavel:

var [game, ...darwin] = [32, 45, 15];
console.log(game); // 32
console.log(darwin); // 45,15

//

//extração de valores de uma regex(expressão regular)
let url = "https://developer.mozilla.org/pt-BR/Web/JavaScript";

let request = /^(\w+)\:\/\/([^\/]+)\/(.*)$/.exec(url);
console.log(request);

let [fullname, protocol, fullhost, fullpath] = request;
console.log(fullhost);

let metadata = {
  title: "Arranha-ceu",
  translation: [
    {
      locale: "br",
      localization_tags: [],
      las_edit: "2023-12-31 14T08:45:56",
      url: "/de/docs/Tools/Arranha-ceus",
      title: "Destructuring Javascript",
    },
  ],
  url: "/pt-BR/docs/Tools/Arranha-ceus",
};

var {
  title: braizilianTitle,
  translation: [{title:localetitle}],
} = metadata

console.log(braizilianTitle)
console.log(localetitle)

let pessoa = [
  {
    name: "Daenerys Targaryen",
    family: {
      mother: "Rhaella Targaryen",
      father: "Aerys II",
      sister: "Rhaegar Targaryen",
    },
    age: 24,
  },
  {
    name: "Jon Snow",
    family: {
      mother: "Lyanna Stark",
      father: "Rhaegar Targaryen",
      sister: "Robb Stark",
    },
  },
]

for(let {
  name:n,
  family: {father:f},
} of pessoa){
  console.log("Nome: " + n + ", pai: " + f)
} 

