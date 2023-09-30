//promise dentro de função aula 76
const numeros = document.querySelector("#numer");
const BotaoPromessa = document.querySelector("#botao");

const funcaoPromessa = () => {
  let NewPromessa = new Promise((res, rej) => {
    let resultado = true;
    setTimeout(() => {
      if (resultado) {
        res("Tudo certo");
      }
      {
        rej("erro na execução");
      }
    }, 3000);
  });
  console.log(NewPromessa); //sempre que retornar o PromiseState: "fullfiled", é um retorno que ocorreu tudo bem, "pending", o estado é "pendente"
  NewPromessa.then(
    function (value) {
      numeros.innerHTML = value;
      numeros.classList.remove("erro");
      numeros.classList.add("correto");
    },
    function (erro) {
      numeros.innerHTML = erro;
      numeros.classList.remove("correto");
      numeros.classList.add("erro");
    }
  );
};

numeros.innerHTML = "esperando...";

BotaoPromessa.addEventListener("click", () => {
  numeros.innerHTML = "Aguardando...";
  funcaoPromessa();
});
