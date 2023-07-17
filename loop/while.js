//loop while (enquanto) -aula 17
/* sintaxe: 
while (condicao) {
   bloco de comando
}
*/

let obj = 0;

while (obj <= 2) {
  console.log(obj);
  obj++;
}

//fatorial

let n = 10;
let fatorial = 1;

while (n >= 1) {
  fatorial *= n;
  n--;
}

console.log(fatorial);
