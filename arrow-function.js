//arow function
//são mecanismo consiso para representar funcões anonimas.
// ao invés de usar o nome function, se usa =>

let exemplo = () => {}; //arrow function

//
const build = (par1, par2 = 2) => {
  return par1 + par2;
};
console.log(build(7));

//

//se for uma função só com um parametro, não precisa colocar os parenteses ()
let s_param = (param) => param; //tirando o return e a chaves ainda assim, retorna o valor da string
console.log(s_param("Hello world!"));

//

//no padrão arrow function, nem precisa do return ou chaves
let add = (num) => num + 23;
console.log(add(12)); //soma 12 ao valor 23

//

//com uma operação mais complexa ai sim é obrigatório usar o return
let soma = (n1, n2, n3 = "oláá") => {
  let res = n1 + n2 + n3;
  return res;
};
console.log(soma("Kaguya ", "Shirogane "));

let nome = (...valores) => {
  let resto = 0;
  for (numero of valores) {
    resto += numero;
  }
  return resto;
};
console.log(nome(10, 20, 40));
