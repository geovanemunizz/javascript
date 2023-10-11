// A propriedade só de leitua window.history retorna uma referência oa objeto History, que fornece uma interface para manipular o histórico de sessão do navegador(páginas visitadas  na guia ou quadro em que a página atual é carregada).

//histórico:
// window.history.forward(); //avança para a próxima página do historico

// window.history.back(); //retorna para a página anterior do historico

// window.history.go(1); //define o quanto quer avançar para proxima página do histórico. o valor também pode ser negativo, tendo a mesma função do history.back().

// console.log(window.history.length) //exibe o tamanho do histórico

//   exemplos
const botao = document.getElementById("botao");
botao.addEventListener("click", () => {
  window.location.href = "teste.html"
//   window.history.go(1);
  // window.history.forward()
});

