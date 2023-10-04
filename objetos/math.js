//entendendo sobre Math - aula 80

//math é um objeto que tem propriedades e métodos para constantes funções matemáticas. Não é um objeto de função

// Math naao é um construtor. Todas as propriedades e métodos são estáticos. Você pode referenciar a constante PI como Math.PI e você pode chamar a função de seno como Math.sin(x), onde x é o argumento do método. Constantes são definidas com a precisão total de números reais em JavaScript.

/* propriedades: 
Math.E : constante de Euler, aprox 2.718

Math.LN2: logaritomo natural de 2, aprox 0.693
Math.LN:10 logaritomo natural de 2, aprox 2.303

Math.LOG2E: logaritmo de E na base 2, aproximadamente 1.443.

Math.LOG10E: logaritmo de E na base 10, aproximadamente 3.14159.

Math.PI: relação entre a circunferência de um círculo e o seu diâmetro, aprox 3.14

Math.SQRT1_2 : Raíz quaadrada de 1/2, equivale a 1 dividido pela raíx quadrada de 2, aprox 0.707

Math.SQRT2: raíz quadrada de 2, aprox 1.1414

pode ver os todos os métodos no link: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math

*/

//Math.round() retorna o valor arredondado, para o valor inteiro próximo. 
let arredondado = Math.round(5.4)
// Math.random() retorna um pseudo numero aleatório entre 0 e 1 
let aleatorio =  Math.random() 
console.log(`número arredondado: ${arredondado} número aleatorio: ${aleatorio}`)

//gera um número aleatório entre 0 e 10 e arredonda 
let around = Math.floor(Math.random() * 10 + 1);
console.log(`número aleatório arredondado: ${around}`)
//Math.floor() retorna o maior inteiro que é menor ou igual a um número

let maximo = [3,8,45,68,12,32,56,19302,34,69]
//retorna maior dentre os parâmetros recebidos
console.log(`immpressão do maior número ${Math.max(...maximo)}`)
//retorna o menor dentre os parâmetros recebidos
console.log(`o menor número do array: ${Math.min(...maximo)}`)

//se nenhum argumento for passado, o resultado de Math.max() sempre será infinity.
let infinito = Math.max() //infinity
let zero = 324
console.log(`valor infinito: ${(zero) / infinito}`)
//todo número positivo multiplicado por infinity é infinity, e qualquer coisa dividida por infinity é zero

// raíz quadrada
let root = 16
let square = Math.sqrt(root)
console.log(`a raíz quadrada de ${root} é igual a: ${square}`)

//potenciação
//Math.pow(x,y) retorna a base x elevada à potência y do expoente
console.log("potenciação: " + Math.pow(5,6))


//Math.trunc(x) retorna a parte inteira de x, removendo quaisquer dígitos fracionários
let inteiro = Math.trunc(Math.PI)
console.log(`valor inteiro de PI: ${inteiro}`)

//multiplicação
let mult = 54
console.log(`multiplicacao: ${Math.imul(mult,5)}`)