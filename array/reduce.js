//método reduce() - aula 50
//arquivo no every.html

//é uma função de array que permite reduzir todos os elementos de um array a um único valor, aplicando uma função acumuladora a cada elemento da lista

const div_name = document.getElementById("nomes");
const result = document.getElementById("resultado");
const button = document.getElementById("verificar");

const elemento_colecao = [45, 44, 43, 77, 20];

div_name.innerHTML = elemento_colecao;

button.addEventListener("click", () => {
  const reduce = elemento_colecao.reduce((acumulador, valorAtual) => {
    return acumulador + valorAtual;
  }, 0); /* valor inicial do acumulador é '0', e a função soma o acumulador + valor atual a cada iteração. por isso o resultado será a soma de todos os valores.
   o acumulador poderia ser 1, 2, 3, etc.

   É possivel utilizar outras operações como subtração, divisão e multiplicação.*/
  console.log(reduce);
});

button.addEventListener("click", () => {
  const anterior = [];
  const atual = [];
  const dobro = [];
  const total = elemento_colecao.reduce((acum, valTotal) => {
    anterior.push(acum);
    atual.push(valTotal);
    dobro.push(valTotal * 2);
    return acum + valTotal;
  }, 0);
  console.log(total);
  result.innerHTML =
    "Total: " +
    total +
    "<br>anterior: " +
    anterior +
    "<br>Atuais: " +
    atual +
    "<br>dobro: " +
    dobro;
});

//push() é usado para adicionar um ou mais elementos ao final de um array. Ele modifica o próprio array e retorna o novo comprimento do array após a inserção dos elementos.
