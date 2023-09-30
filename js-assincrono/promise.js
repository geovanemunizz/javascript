//promise aula 75

let minhaPromessa = new Promise(function (mySolucao, myerror) {
  mySolucao(); //quando for correto
  myerror(); // quando der erro
});
//minhaPromessa.then() leva dois argumentos, um para sucesso e outro para erro, ambos são opcionais.
minhaPromessa.then(
  function (value) {
    /*deu certo */
  },
  function (error) {
    /*deu errado*/
  }
);

function display(soma) {
  document.getElementById("demo").innerHTML = soma;
}
let myPromess = new Promise(function (MyResolve, MyReject) {
  let num = 0;
  if (num == 0) {
    MyResolve("Tudo bem");
  }
  {
    MyReject("Erro");
  }
});
myPromess.then(
  function (value) {
    display(value);
  },
  function (error) {
    display(error);
  }
);

/* um objeto promise pode ser: pendente, cumprido ou rejeitado.

o objeto promise fornece suporte a duas propriedades: estado e resultado

enquanto promise está pendente(funcionando): o resultado é indefinido 

Quando o promise é "cumprido", o resultado é um value

Quando o promise é "rejeitado", o resultado é um error object.
*/

// Não é possivel acessar o estado e o resultado das properiedades promise. Deve-se usar um método para lidar com o promise

//exemplo aguardando um tempo limite:

// exemplo usando retorno de chamada:
setTimeout(function () {
  minhaFuncao("Gojo satoru killed");
}, 2000);
function minhaFuncao(value) {
  document.getElementById("call").innerHTML = value;
}
//exemplo usando o promise:
let promessa = new Promise(function (solucao, rejeicao) {
  setTimeout(function () {
    solucao("Sukuna win");
  }, 3000);
});
promessa.then(function (value) {
  document.getElementById("callPromise").innerHTML = value;
});

//exemplos aguardando um arquivo:

// uso de callback
function obterAquivo(minhaChamada) {
  let obt = new XMLHttpRequest();
  obt.open("GET", "mycar.html");
  obt.onload = function () {
    if (obt.status == 200) {
      minhaChamada(obt.responseText);
    } else {
      minhaChamada("Erro: " + obt.status);
    }
  };
  obt.send();
}
obterAquivo(display);

let funcaoPromesa = new Promise(function(solucao, rejejeitado){
  let dadosHtml =  new XMLHttpRequest()
  dadosHtml.open('GET', "mycar.html")
  dadosHtml.onload = function(){
    if(dadosHtml.status == 200){
      solucao(dadosHtml.response)
    } else{
      rejejeitado('file not found')
    }
  }
  dadosHtml.send()
})

funcaoPromesa.then(
  function(value){
    display(value)
  },
  function(error){
    display(error)
  }

)

// XMLHttpRequest() é um objeto que fornece funcionalidade ao cliente para tranferir dados entre client e server. Uma maneira fácil de recuperar dados de um URL sem ter que fazer uma atualização de página inteira.

//uso do promise:
let promisseFile = new Promise(function (resolve, reject) {
  let req = new XMLHttpRequest();
  req.open("GET", "mycar.html");
  req.onload = function () {
    if (req.status == 200) {
      resolve(req.response);
    } else {
      reject("Arquivo não encontrado");
    }
  };
  req.send();
});
promisseFile.then(
  function (value) {
    display(value);
  },
  function (error) {
    display(error);
  }
);

//prommise aula 75

const item = document.querySelector("#numer");
let NewPromessa = new Promise((res, rej) => {
  let resultado = false;
  setTimeout(() => {
    if (resultado) {
      res("Tudo certo");
    }
    {
      rej("erro na execução");
    }
  }, 3000);
});

NewPromessa.then(
  function (value) {
    item.innerHTML = value;
    item.classList.remove("erro");
    item.classList.add("correto");
  },
  function (erro) {
    item.innerHTML = erro;
    item.classList.remove("correto");
    item.classList.add("erro");
  }
);
item.innerHTML = "Loading...";
