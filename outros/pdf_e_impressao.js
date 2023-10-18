//Criando e imprimindo conteudo em html aula 89

const botao = document.querySelector("button");

botao.addEventListener("click", () => {
  const table = document.getElementById("tabela").innerHTML;
  console.log(table);

  //para imprimir e adicionar estilos, é melhor incorporar no js ou usar o css inline:

  //css incoporado:

  let estilos = "<style>";
  estilos += "table {width: 100%, font: 25px Calibri;}";
  estilos += "table,th,td {border: 2px solid #888; border-collapse: collapse;";
  estilos += "padding: 4px 8px; text-align: center;}";
  estilos += "</style>";

  //window.open passa três parãmetros: url,target e feature, todos opcionais
  const janela = window.open("", "", "heigth = 700, width = 700");

  janela.document.write("<html><head>");
  janela.document.write(
    "<title>Criando e imprimindo conteudo em html aula 89</title>"
  );
  janela.document.write(estilos);
  janela.document.write("</head>");
  janela.document.write("<body>");
  janela.document.write(table);
  janela.document.write("</body></html>");

  window.print();
});

