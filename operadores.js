/* operadores relacionais 
> maior
>= maior igual
< menor
<= menor igual
== igual
!= diferente
=== exatamente igual
*/

let num1 = 25;
let num2 = 6;
let num3 = 25;

console.log(num1 != num3);

// console.log(!(num1 != num3)) num1 NÃO é diferente de num3
let n3 = { cor: "Azul" };
let n2 = { cor: "Azul" };

// let n2=n1 definindo que possui o mesmo espaço na memoria, o resultadi será TRUE

console.log(n3 === n2); //verifica se tem o mesmo valor, mesmo tipo e até o mesmo espço na memoria

let nome = prompt("Digite seu nome");
