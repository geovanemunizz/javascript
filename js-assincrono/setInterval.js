// podemos criar ações no software que executam depois de um tempo ou de tempos em tempos.

// um dos argumentos dessa função é uma callback function

// cria um intervalo na execução

//setInterval() chama repetidamente uma função ou executa um trecho do código, com o atraso de tempo definido entre cada chamada

//sintaxe: setInterval(function,miliseconds,param1, param2...)

// function(obrigatório)
// milisecond(obrigatório)
//param1 anda param2 (opcional)

// ao colocar muito código com intervalo pequeno, pode consumir muita memória

//exibe hello world a cada 1000 milisegundos
let intervalo = setInterval(() => {
  console.log("Hello world");
},1000);
clearInterval(intervalo);

//exibe a hora como relogio digital:
const tempo = setInterval(meuTemporizador, 1000);
function meuTemporizador() {
  const data = new Date();
  document.querySelector("#teste").innerHTML = data.toLocaleDateString();
}
//limpa o setInterval()
function stopRelogio() {
  clearInterval(tempo);
}
// stopRelogio()

let inteval = setInterval(mudarCor, 700);
//altera as cores do body a cada 500 milisegundos
function mudarCor() {
  let elemento = document.body;
  elemento.style.backgroundColor =
    elemento.style.backgroundColor === "red" ? "green" : "red";
}

function stopInterval() {
  clearInterval(inteval);
}
stopInterval() //limpa o setInterval()

