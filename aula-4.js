/* 
+ soma
- subtração
/ divisão
* multiplicação
% resto
** exponenciação
++ incremento
-- decremento
+=
-=
*/
let num1 = 0,
  num2 = 0,
  num3 = 0;
/* let num1=10
let num2=10 
let num3=0*/

// num1=num2=num3=45

// soma
num1 = 2;
num2 = 15;
num3 = num2 + num1;

console.log(num3);
// console.log(num1 + num2);

// subtrção
let valor1,
  valor2,
  ult = 0;

valor1 = 7;
valor2 = 26;
ult = valor2 - valor1;
console.log(ult);

// divisão

let div1 = 25;
let div2 = 5;
let resu = div1 / div2;
console.log(resu);

// multiplicação

let mult1 = 10;
let mult2 = 4;
mult2 *= 2;
let resultado = (mult1 + 10) * mult2;

console.log(resultado);

// resto

let rest1,
  rest2,
  rest = 0;

rest1 = 15;
rest2 = 2;
rest = rest1 % rest2; //pega o RESTO da divisão
console.log(rest);

// incremento ++

let inc1 = 10;
inc1++; //a cada incremento aumenta o valor da variavel
inc1 += 6;

// +=1 vai aumentar 1 na variavel, equivalente ao ++

console.log(inc1);

// decremento

let dec1 = 10;
dec1--;
dec1 -= 3;
dec1--; //A cada decremento diminui o valor da variavel

console.log(dec1);
