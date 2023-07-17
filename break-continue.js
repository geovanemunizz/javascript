// break e continue - aula 19

let value = 0;
let steel = 1000;
let parimpar = 0;

// while (value < steel) {
//   console.log(" javascript - " + value);
//   if (value >= 5) {
//     break;
//   }
//   value++;
// }

for (let i = value; i < steel; i++) {
  if (i % 2 != 0) {
    continue;
  }
  parimpar++;
}
console.log(" numero de pares " + parimpar);
console.log("Fim!");

for (let n = 0; n < 10; n++) {
  if (n === 5) {
    break; //interrompe imediatamente a execução do loop e continua o programa
  }
  console.log(" numero - " + n);
}

for (let cont = 0; cont < 10; cont++) {
  if (cont === 0) {
    continue; //é usado para pular uma iteração específica e continuar com o restante do loop.
  }
  console.log("continue - " + cont);
}
