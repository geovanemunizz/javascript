/* Há duas maneiras pelo qual o callback pode ser chamado, assíncrono ou sincrono. os Síncronos são chamados imediatamente  após a invocação da função externa. Enquanto os assincrono são chamados em algum momento posterior, após a conclusão de uma operação asincrona */

/* função que é executada após uma resposta do código, por isso é uma callback. Funçaõ utilizada por meio de argumento. Esta forma é sincrona.*/
function exibir(num) {
  console.log(`operação realizada com sucesso e teve resultado: ${num}`);
}

function soma(a, b, callBack) {
  const somar = a + b;
  callBack(somar);
}
function multiplicacao(a, b, callBack) {
  const mult = a * b;
  callBack(mult);
}
soma(23, 7, exibir);
multiplicacao(5, 5, exibir);

let tela = function (el) {
  document.querySelector("#demo").innerHTML = el;
};

let resultado = function (num1, num2, cb) {
  let res = (num1 * num2) / 2;
  cb(res);
};

// ao usar função como argumento, não usar ()
resultado(34, 2, tela); //34

const meuArray = [4, -65, -4, 9, 19, -21, -5, -23, 9, 8];
let novoItem = removeItem(meuArray, (el) => el >= 0);
document.querySelector("#java").innerHTML = novoItem;

function removeItem(numero, cb) {
  const novoArray = [];
  for (let i of numero) {
    if (cb(i)) {
      novoArray.push(i);
    }
  }
  return novoArray;
}
