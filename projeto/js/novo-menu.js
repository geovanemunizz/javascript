const bodyElement = document.body;
const cabecalho = document.querySelector("#cabecalho");
const menu = document.querySelector("#menu");
const buttonDark = document.querySelector("#button-dark-mode");
const icon = document.querySelector("#icons");

const handleScroll = () => {
  let winTop = window.scrollY || document.documentElement.scrollTop;

  if (winTop >= 30) {
    if (!bodyElement.classList.contains("dark_mode")) {
      bodyElement.classList.add("sticky-header");
    } else {
      bodyElement.classList.add("sticky-header");
    }
  } else {
    bodyElement.classList.remove("sticky-header");
  }

  buttonDark.innerHTML = bodyElement.classList.contains("dark_mode")
    ? "<i class='fa-solid fa-sun'></i>"
    : "<i class='fa-solid fa-moon'></i>";
};

document.addEventListener("DOMContentLoaded", () => {
  window.addEventListener("scroll", handleScroll);
});

buttonDark.addEventListener("click", () => {
  cabecalho.classList.toggle("dark_mode");
  bodyElement.classList.toggle("dark_mode");
  menu.classList.toggle("dark_mode");
  buttonDark.classList.toggle("dark_mode");

  console.log("dark mode toggled");
});
