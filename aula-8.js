// operadores bitwise ( bit a bit )

let n1 = 20;
let n2 = 14;

let num = n1 & n2; // pela equivalência de bit 1, ele retorna 1
let num1 = n1 | n2; // onde tiver o bit 1, independente da equivalência de bit ele retorna 1

let nm3 = n1 ^ n2; // retorna somente o bit 1, se tiver equivalência retorna 0, mas se for somente o 1, retorna 1

console.log(num);
console.log(num1);
console.log(nm3);

//operações de deslocamento

let left = n1 << 2 // está deslocando um bit para  a esquerda, um deslocamento em 1 bit pra esquerda é como se estivesse DOBRANDO o valor

let right = n1 >> 2;// ao deslocar o valor para a direita, está diminuindo pela metade

console.log(left);
console.log(right);

