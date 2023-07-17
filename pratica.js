//loop for, in e of - prática

//com for padrao
function soma(...valor) {
  let qtd = valor.length;
  let res = 0;
  for (i = 0; i < qtd; i++) {
    res += valor[i];
  }
  return res;
}
console.log(soma(93, 27, 10));

//com for of
function tela(...display) {
  let value = 0;
  for (let num of display) {
    value += num;
  }
  return value;
}
console.log(tela(44, 12, 32));

let nome = (...tela) => {
  let sobra = 0;
  for (n in tela) {
    sobra += tela[n];
  }
  return sobra;
};
console.log(nome(6, 15, 54));
