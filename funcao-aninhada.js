// funções aninhadas (funções deentro de funções)

const somar = (valores) => {
  let resto = 0;
  for (i of valores) resto += i;
  return resto;
};

const sum = (...valor) => {
  /* const somar = (valores) => {
    let resto = 0;
    for (i of valores) resto += i;
    return resto;
  };
  */
  return somar(valor);
};
value = [3, 7]; 
console.log(sum(...value)); //passando um array para dentro da função sum


const nome = (...alfa) => {
  const sobrenome = (beta) => {
    let music = 0;
    for (n of beta) music += n;
    return music;
  };
  return sobrenome(alfa);
};
imagem = [9, 8, 64, 45];
console.log(nome(...imagem));
 

const cores = (...cor) => {
  const itsColor = (color) => {
    let palet =0;
    for (re of color) palet += re;
    return palet
  }
  return itsColor(cor)
}
console.log(cores(9,3))//os dois valores passam para o parametro COR, e depois retorna para o itsColor, que soma o valor de res + o primeiro valor (9) e depois soma 9 ao segunda valor(3), acabando os valores ele retorna o valor de PALET (12),  para quem chamou a função cores
