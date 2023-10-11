const botao = document.querySelector("#botao")
const inputUrl = document.querySelector("#url")

botao.addEventListener("click",()=>{
    window.location = inputUrl.value;
})