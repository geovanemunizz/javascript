const display = document.querySelector(".display-img");
const botao = document.querySelector("button");
const thumb = document.querySelector(".thumb-bar");
const overlay = document.querySelector(".overlay");
const images = document.querySelectorAll("img");
const corpo = document.querySelector("body");

const arryImg = [
  "images/pic1.jpg",
  "images/pic2.jpg",
  "images/pic3.jpg",
  "images/pic4.jpg",
  "images/pic5.jpg",
];
function update(evt) {
  const newImg = evt.target.getAttribute("src");
  display.setAttribute("src", newImg);
}
for (const imagem of arryImg) {
  const createImg = document.createElement("img");
  createImg.setAttribute("src", imagem);
  createImg.addEventListener("click", update);
  thumb.appendChild(createImg);
}

botao.addEventListener("click", () => {
  const click = botao.getAttribute("class");
  if (click === "dark") {
    botao.setAttribute("class", "lighten");
    overlay.style.backgroundColor = "rgba(0,0,0,0.5)";
    botao.textContent = "lighten";
  } else {
    botao.setAttribute("class", "dark");
    overlay.style.backgroundColor = "rgba(0,0,0,0)";
    botao.textContent = "Darken";
  }
});

function displayed(el) {
  document.querySelector("#demo").innerHTML = el;
}
let myPromess = new Promise(function (solucao, rejeitado) {
  let fileHtml = new XMLHttpRequest();
  fileHtml.open("GET", "/js-assincrono/mycar.html");
  fileHtml.onload = function () {
    //fileHtml.status == 200 significa que o servidor respondeu à solicitação com sucesso, e que o recurso foi encontrado
    if (fileHtml.status == 200) {
      solucao(fileHtml.response);
    } else {
      rejeitado("File not found");
    }
  };
  fileHtml.send();
});

myPromess.then(
  function (value) {
    displayed(value);
  },
  function (error) {
    displayed(error);
  }
);
