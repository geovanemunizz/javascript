//método every() - aula 48

// o método every vai buscar por equivalência, se todos os elementos do array forem os mesmos que a condição estabelecida.

// ele vai comparar todos os elementos e retorna true caso TODOS os elementos estejam em conformidade

const div_name = document.getElementById("nomes");
const button = document.getElementById("verificar");
const result = document.getElementById("resultado");

const elemento_colecao = [30, 32, 23, 33, 76, 56]; //se tiver um número menor que 18, ele retornará false

div_name.innerHTML = "(" + elemento_colecao + ")";

button.addEventListener("click", () => {
  const comport = elemento_colecao.every((el, indice) => {
    if (el < 18) {
      result.innerHTML = "valor incorreto na posição: " + (indice + 1);
    }
    return el >= 18;
  });
  if (comport) {
    result.innerHTML = "sucesso";
  }
  console.log(comport);
});

// button.addEventListener("click", () => {
//   const ret = elemento_colecao.every((el, indice) => {
//     if (el < 18) {
//       result.innerHTML = "valor incorreto na posição: " + (indice + 1);
//     }
//     return el >= 18
//   });
//   if (ret) {
//     result.innerHTML = "sucesso";
//   }
// });
