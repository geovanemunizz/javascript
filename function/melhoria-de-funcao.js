//quando a função tiver 3 ou mais parâmetros podemos passar um objeto dentro da função para melhora-lá. Exemplo:

function person(idade, nome, email, senha) {
  return {
    idade,
    nome,
    email,
    senha,
  };
}
console.log(person(58, "Joseph", "joseph58@hotmail.com", 12345));

//agora reescrevendo a função coom o objeto:
function pessoa({ idade, nome, email, senha }) {
  return {
    idade,
    nome,
    email,
    senha,
  };
}
console.log(
  pessoa({
    idade: 34,
    nome: "Ban",
    email: "ban7@gmail.com",
    senha: 12345,
  })
);
