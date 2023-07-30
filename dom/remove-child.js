//removeChild - aula 41
const caixa = document.querySelector("#caixa1");
const elementos = [
  "css",
  "html",
  "java",
  "javascript",
  "Angular",
  "Php",
  "mySql",
];
const nome = [...document.getElementsByClassName("nome")];

elementos.map((evt, chave) => {
  const elem = document.createElement("div");
  elem.setAttribute("class", "nome c1");
  elem.setAttribute("id", "c" + chave);
  elem.innerHTML = evt;
  elem.addEventListener("click", (evento) => {
    //adiciona um evento de click, para remover o filho do elemento pai (caixa1)
    caixa.removeChild(evento.target);
  });

  const novoElem = document.createElement("img");
  novoElem.setAttribute("class", "foto");
  novoElem.setAttribute(
    "src",
    "https://th.bing.com/th/id/OIF.2VeuRoSlNgpInHY5dBg8KQ?pid=ImgDet&rs=1"
  );
  novoElem.addEventListener("click", (evento) => {
    elem.removeChild(evento.target);
  });

  elem.appendChild(novoElem);
  caixa.appendChild(elem);
});
