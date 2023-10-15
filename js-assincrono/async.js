//funções assincronas funcionam como Promises, mas com sintaxe mais simples

//  Precisamos declarar a função com a palavra async

//  Quando precisar aguardar por algo, a instrução precisa de await

//  pode-se aplicar o recurso de funções anônimas e métodos de class

// tentar usar o await sem o async gera um erro

// Exemplo de uso: inserção de dado no banco

//async:

function resolverDepoisDe25Seg(el) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(el);
    }, 2000);
  });
}

var AsyncFunction = Object.getPrototypeOf(async function () {}).constructor;

var letra = new AsyncFunction(
  "a",
  "b",
  "return await resolverDepoisDe25Seg(a) + await resolverDepoisDe25Seg(b)"
);

letra(10, 20).then((value) => {
  console.log(value);
});

// Await

// o Operador await é utilizado para esperar por uma Promise. Ele pode ser usado apenas dentro de uma async function.

//sintaxe:  [rv] = await expressao
// expressao: uma Promise ou qualquer valor para esperar uma resolução
// rv: retorna um valor final da promise, ou o próprio valor se ele não for uma Promise.

// A expressão await faz a execução de uma funçao async pausar, para esperar pelo retorno da Promise, e resume a execução da funçaõ async quando o valor da Promise é resolvido. então ele retorna o valor final da Promise. Se esse valor não for uma Promise, ele é convertido para uma Promise resolvida

//exemplo: Se uma Promise é passada para uma expressão await, ele espera pela sefinalização da Promise e retorna seu valor final.
function resolve20sec(el) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(el);
    }, 2000);
  });
}
async function formula1() {
  var elemento = await resolve20sec(10);
  console.log(elemento);
}
formula1();

//Se o valor não for uma Promise, ele converte o valor para uma Promise resolvida, e espera por ele
async function f2() {
  var y = await 40;
  console.log(y);
}
f2();

//Se a Promise for rejeitada, o valor rejeitado é invocado em uma Exception.
let f3 = async function () {
  try {
    var last = await Promise.reject(60);
  } catch (el) {
    console.log(el);
  }
};
f3();

// mais exemplos

// function primeiraFunction() {
//   return new Promise((resolucao) => {
//     setTimeout(() => {
//       console.log("Esperou 1 segundo");
//       resolucao();
//     }, 1000);
//   });
// }

// async function segundaFunction() {
//   console.log("Começou");
//   await primeiraFunction();
//   console.log("Acabou");
// }
// segundaFunction();

// prático com async e await
function getUsers(id) {
  return fetch(`https://reqres.in/api/users?id=${id}`)
    .then((data) => data.json())
    .catch((error) => console.log(error));
}
//precisa do await para aguardar a requisição da api e executar a funçaõ async
async function mostrarUsers(id) {
  //tratamento de erro em async function, se usa try catch
  try {
    const user = await getUsers(id);
    console.log(`nome de usuário é: ${user.data.first_name}`);
  } catch (error) {
    console.log(`erro: ${error}`);
  }
}
mostrarUsers(8);
