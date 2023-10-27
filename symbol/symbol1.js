// Symbol - aula 98

// A função Symbol() retirna um valor do tipo símbolo(Symbol), tem propriedades estáticas que expõem vários membros de objetos nativos, possuem métodos estáticos que expõem o registro de símbolos globais e se parecem com uma classe de objeto nativo, mas não suportam a sintaxe new Symbol().

// cada valor retornado de Symbol() é único. Um simbolo pode ser usado como o identificador para propriedades de objetos. Esse é o único próposito do uso

// mesmo ao criar símbolos com a mesma descrição, eles não serão estritamente iguais:
let symbol1 = Symbol("AOT");
let symbol2 = Symbol("AOT");
console.log(symbol1 === symbol2); //false

// usando símbolos em objetos, eles são usados como chaves de propriedades em objetos para garatintir que as proprieades sejam únicas:

const Objeto = {
  [Symbol("valorUnico")]: "valor",
};
// acessando uma propriedade com um simbolo como chave:
console.log(Objeto[Object.getOwnPropertySymbols(Objeto)[0]]); //valor

// símbolos predefinidos:

//além de personalizar os símbolos, existe um conjunto de símbolos predefinidos, como por exemplo: 'Symbol.iterator', 'Symbol.toStringTag', 'Symbol.match', etc. São usados em cenários especificos, como em iteração de objetos iteraveis.

//Symbol.iterator é usado para tornar um objetos iteravel, então ele pode ser percorrido usando um loop for...of, forEach():
const novoArray = [25, 77, 12, 65, 32];
const iteracao = novoArray[Symbol.iterator]();
console.log(iteracao.next()); // {value;25, done:false}

//Symbol.toStringTag:

const stringWorld = {
  [Symbol.toStringTag]: "Hello world 10/2023",
};
console.log(stringWorld.toString()); //[object Hello world 10/2023]

// Symbol.match personaliza o comportamento do método 'String.prototype.match()' quando usado com uma expressão regular

// Symbol.toPrimitive, Este símbolo é usado para personalizar como um objeto é convertido em um valor primitivo, como um número, string ou booleano, em operações de coerção.
