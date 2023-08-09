//método some() - aula 49
//arquivo no every.html

// verifica se pelo menos um elemento do array satisfaz uma determinada condição, retornando true ou false de acordo com o resultado da verificação.

const div_name = document.getElementById("nomes");
const button = document.getElementById("verificar");
const result = document.getElementById("resultado");

const elemento_colecao = [5, 2, 3, 32, 6, 8]; //32 corresponde a condição >= 18
div_name.innerHTML = elemento_colecao;

button.addEventListener("click", () => {
  const retorno = elemento_colecao.some((el, indice) => {
    if (el < 18) {
      result.innerHTML = "valor incorreto na posição: " + (indice + 1);
    }
    return el >= 18;
  });
  if (retorno) {
    result.innerHTML = "sucesso";
  }
});
