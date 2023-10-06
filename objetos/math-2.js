//continuação de Math - aula 81

const olhoPrincipal = [...document.getElementsByClassName("olho")];

//posição do mouse
let posicao_x = 0;
let posicao_y = 0;

//obtem a "coordenada" do mouse
window.addEventListener("mousemove", (evt) => {
  posicao_x = evt.clientX;
  posicao_y = evt.clientY;
  //Retorna o arco-tangente do quociente de seus argumentos.
  const rotacao = (Math.atan2(posicao_y, posicao_x) * 180) / Math.PI;
  //obtem o angulo em radiano com o Math.atan2(), mas ainda precisa transformar em graus, por isso mulltiplica por 180 e divide por pi

  olhoPrincipal.forEach((el) => {
    el.style.transform = "rotate(" + rotacao + "deg)";
  });
});
