// Abstract define um conceito ou comportamento geral, mas não os detalhes especificos de sua implementação.

/* pode usar o function para definir a função abstrata, e o this para se referir ao objeto ou contexto dentro da função. Também é possivel usar os métodos apply() e call().*/

/* apply: é usado para chamar uma função com um valor 'this' e um array de argumentos. Ela permite que você execute uma função em um contexto específico, definindo o valor this da função e passando os argumentos como um array. */
// sintaxe: funcao.aplly(thisArgs,[argsArray])

/* call: permite chamar uma funçaõ com um valor 'this' especifico e argumentos passados INDIVIDUALMENTE. È muito semelhante ao apply(), mas em vez de passar os argumentos como array, voce os fornece como uma lista de argumentos separados */
// sintaxe: funcao.call(thisArgs,arg1, arg2,arg3, ...)

function person() {
  console.log(this.property);
}

person.apply({ property: "valor 1" });
person.apply({ property: "valor 2" });
person.call({ property: "valor 3" });
person.call({ property: "valor 4" });

//função abstrata que soma valores:
function soma(a, b) {
  return this.valor + a + b;
}
//aplica a função para diferentes objetos:
console.log(soma.apply({ valor: 12 }, [4, 6]));
console.log(soma.apply({ valor: 35 }, [8, 12]));

//chama a função com argumentos especificos:
console.log(soma.call({ valor: 18 }, 5, 3));
console.log(soma.call({ valor: 21 }, 2, 7));
function add(a, b) {
  return this.valor + a + b;
}
console.log(soma.apply({ valor: 10 }, [5, 5]));
