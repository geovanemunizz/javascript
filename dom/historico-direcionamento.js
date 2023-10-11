// window.location aula 87

//window.location é uma propriedade de leitura que retorna um objeto location. Com informações do documento atual




/* sintaxe :
var antigaLocation = location
location = novaLocation
*/
// alert(location) // exibie a url: http://127.0.0.1:3000/js-assincrono/historico-direcionamento.html

/*
principal diferenca entre window.location e window.location.href, window.location contém todas as informações do local atual do documento (host,port,href,protocol, etc.).  

window.location.href é apenas uma string com o url completo do site atual. Mas as duas agem da mesma forma quando atribui uma url a eles.
*/

//navegando para outra página
const botao = document.getElementById("botao");
botao.addEventListener("click", () => {
  window.location = "teste.html";

  // window.location.replace("https://www.google.com.br/"); //tem a funçaõ de redirecionar e fazer a remoção da url atual do histórico.

  // window.location.assign("https://www.google.com.br/") //o window.location.assign() tem a mesma função do replace, mas não remove do histórico.

  // window.location.reload() //recarrega a página
  
});

//outro exemplo de navegação:
// location.assign("https://www.google.com.br/") //ou
// location = "https://www.google.com.br/"

//forçando o recarregamento da página atual:
// location.reload(true)


//exibindo as propriedades a url atual:
//onclick no button no html
function mostrarPropiedade() {
  let LocationZero = location,
    log = [
      "Property (typeof): value",
      "location (" + typeof LocationZero + "): " + LocationZero,
    ];
  for (let prop in LocationZero) {
    log.push(
      prop +
        "(" +
        typeof LocationZero[prop] +
        "): " +
        (LocationZero[prop] || "n/a")
    );
  }
  alert(log.join("\n"));
}

//enviando dados para o servidor modificar a propriedde search
function sendFile(dados) {
  location.search = dados; //resultado "hello%20world"
}
console.log(location.search);


