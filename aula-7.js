// operadores lógicos
// &&  -> and, e
// || -> or, ou
// ! -> not, não

let n1, n2, n3, n4;
n1 = 5;
n2 = 10;
n3 = 8;
n4 = 2;

// and

console.log(n2 > n1 && n1 > n4); // os dois são TRUE por isso, o resultado será verdadeiro

console.log(n2 > n1 && n1 > n3); // n2 é maior que n1 então é TRUE, mas n1 não é maior que n3 ou seja, FALSE, por isso TRUE e FALSE é igual a FALSE

console.log(n4 > n3 && n3 > n1); // n4 não é maior que n3, logo é FALSE, e n3 é maior que n1, mas o resultado será FALSE

console.log(n3 > n2 && n4 > n1); // os dois são FALSE, logo o resultado será FALSE

// or ( ou )

console.log(n2 > n1 || n1 > n4); // verdadeiro OU verdadeiro, é verdadeiro

console.log(n2 > n1 || n4 > n3); // true OU false é true

console.log(n2 > n1 || n3 > n1); // false OU true é true

console.log(n1 > n2 || n4 > n1); // false OU false é false

// ! not, não

console.log(!(n2 > n1 || n1 > n4)); // o resultado é TRUE mas o ! (not) inverte para FALSE

if ( !(n2 > n1) && (n3 > n4)){
  console.log(` é true `);
} else {
  console.log( ` é false `);
}
