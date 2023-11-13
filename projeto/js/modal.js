const botaoAbrir = document.querySelector("#btnAbrir");
const botaoFechar = document.querySelector("#btnFechar");
const modal = document.querySelector("#modal");
const fade = document.querySelector("#fade");

const arr = [botaoAbrir, botaoFechar,fade];

function toggleModal() {
  [modal,fade].forEach((el)=> el.classList.toggle("hide"))
}

arr.forEach((el) => {
  el.addEventListener("click", toggleModal);
});

