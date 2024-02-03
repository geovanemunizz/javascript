//  webStorage js 22/01/2024; aula 121

// sessionStorage (Window.sessionStorage): Mantém uma área de armazenamento separada para cada origem específica que está disponível durante a sessão da página(desde que o browser esteja aberto);

// armazena dados apenas para uma sessão, significa que os dados são armazenados até que o navegador ou guia seja fechado.

// os dados são transferidos para o servidor;
// o limite de armazenamento é maior do que um cookie (máximo 5MB);

// localStorage (Window.localStorage): faz a mesma coisa, mas mantém os dados quando o navegador é fechado e reaberto

// Armazena os dados sem data de expiração e é limpo apenas por meio de JavaScript ou limpando o cache do navegados/ dados armazenados localmente.

//  o limite de armazenamento é o máximo entre os dois

const htmlElem = document.querySelector("html");
const pElem = document.querySelector("p");
const imageElem = document.querySelector("img");

const bgcolor = document.querySelector("#bgcolor");
const fontForm = document.querySelector("#font");
const imageForm = document.querySelector("#image");

if (!sessionStorage.getItem("font")) {
  populate();
} else {
  setStyles();
}

function populate() {
  sessionStorage.setItem("bgcolor", document.querySelector("#bgcolor").value);
  sessionStorage.setItem("font", document.querySelector("#font").value);
  sessionStorage.setItem("image", document.querySelector("#image").value);

  setStyles();
}

function setStyles() {
  let currentColor = sessionStorage.getItem("bgcolor");
  let currentFont = sessionStorage.getItem("font");
  let currentImage = sessionStorage.getItem("image");

  document.querySelector("#bgcolor").value = currentColor;
  document.querySelector("#font").value = currentFont;
  document.querySelector("#image").value = currentImage;

  htmlElem.style.backgroundColor = currentColor;
  pElem.style.fontFamily = currentFont;
  imageElem.setAttribute("src", currentImage);
}

bgcolor.onchange = populate;
fontForm.onchange = populate;
imageForm.onchange = populate;
