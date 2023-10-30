/* o método global clearInterval() cancela uma ação repetida e cronometrada que foi previamente estabelecida por uma setInterval(). */

//sintaxe: clearInterval(idIntervalo)

//idIntervalo: o identificador a açaõ que se deseja cancelar.

//armazena dentro de uma variavel para poder passar no clearInterval como 'parâmetro'

let interval = setInterval(() => {
  console.log("hello world");
}, 500);

setTimeout(() => {
  clearInterval(interval);
  console.log("a execução expirou");
}, 1000);

//setTimeout() cancela um tempo limite estabelecido

let contador = setTimeout(() => {
  console.log("setTimeout funcionando");
}, 1000);

clearTimeout(contador);
