const myPromessa = new Promise((solucao, erro) => {
  const nome = "Geovane";

  if (nome === "Geovane") {
    solucao("Usuário foi encontrado com sucesso");
  } else {
    erro("Não foi possivel localizar o usuário");
  }
});
myPromessa.then((data) => {
  console.log(data);
});

// uso de then

const newPromessa = new Promise(function (resolve, reject) {
  const novoNome = "JULIA";

  if (novoNome === "JULIA") {
    resolve(`usuário ${novoNome} encontrado com sucesso`);
  } else {
    reject("não foi possivel encontrar o usuário");
  }
});

// executa a promessa com o then, e modifica o dado com o toLowerCase().
newPromessa
  .then((el) => {
    return el.toLowerCase();
  })
  .then((stringMod) => {
    console.log(stringMod);
  });

// newPromessa
//   .then(function (el) {
//     return el.toUpperCase();
//   })
//   .then(function (error) {
//     console.log(error);
//   });

const catchPromessa = new Promise((solucao, erro) => {
  const pessoa = "Gordon";
  if (pessoa === "Etevaldo") {
    solucao("Pessoa  desaparecida encontrada");
  } else {
    erro("Não é a pessoa desaparecida");
  }
});

catchPromessa
  .then((dados) => {
    console.log(dados);
  })
  .catch((error) => {
    console.log("error na página, " + error);
  });

// o O método Promise.all(iterable) retorna uma única Promise que resolve quando todas as promises no argumento iterável forem resolvidas ou quando o iterável passado como argumento não contém promises. É rejeitado com o motivo da primeira promise que foi rejeitada.

//resolvendo várias promises com all()

const parte1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("part1 está em timeout!");
  }, 2000);
});
const parte2 = new Promise((resolve, reject) => {
  resolve("part2 tá tudo certo!");
});
const parte3 = new Promise((resolve, reject) => {
  resolve("part3 tá tudo certo!");
});

//todas as promessas acabam recebendo o parametro dados
const resolveAll = Promise.all([parte1, parte2, parte3]).then((dados) => {
  console.log(dados);
});

console.log("após o all()");

//O método estático Promise.race(iterable) usa um iterável de promessas como entrada e retorna uma única Promessa. Essa promessa devolvida se ajusta com o estado final da primeira promessa que se estabelece.

//iterable (array) de promise

//várias promises com race():


const carro1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("carro está em primeiro!");
  }, 2000);
});
const carro2 = new Promise((resolve, reject) => {
  resolve("carro2 tá tudo certo!");
});
const carro3 = new Promise((resolve, reject) => {
  resolve("carro3 tá tudo certo!");
});

const corrida = Promise.race([carro1, carro2, carro3]).then((dados) => {
  console.log(dados);
});

console.log("Carro liderando");




// Promise.any():
//Promise.any(iterable) cumpre com a primeira promessa a cumprir, mesmo que uma promessa rejeite primeiro. Isso contrasta com Promise.race(), que cumpre ou rejeita com a primeira promessa de liquidação.

//iterable (array) de promise


//O método Promise.any() é um dos métodos de simultaneidade de promessa. Este método é útil para devolver a primeira promessa que cumpre. Ele entra em curto-circuito depois que uma promessa é cumprida, então não espera que as outras promessas sejam concluídas quando encontrar uma.Promise.any()


const promise1 = Promise.reject(0);
const promise2 = new Promise((resolve) => setTimeout(resolve, 100, "quick"));
const promise3 = new Promise((resolve) => setTimeout(resolve, 500, "slow"));

const promise = [promise1, promise2, promise3];
Promise.any(promise).then((value) => {
  console.log(value);
}); //executa primeiro o 'quick'


const person = new Promise((resolve, reject) => {
  reject("Caminho errado");
});

const ficture = new Promise((resolve, reject) => {
  setTimeout(resolve, 500, "Done Eventual");
});

const paragrafo = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, "Done quick");
});

Promise.any([person, ficture, paragrafo]).then((value) => {
  console.log(value);
});
//output 'Done quick

