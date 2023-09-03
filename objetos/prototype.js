// entendendo sobre prototype em js - aula 67

// serve para quando seja necessario adicionar uma nova propriedade ou métodos para um objeto. Em propriedade pode adicionar de forma dinâmica, sem precisar do uso de prototype, já os métodos é necessário.

// const televisao = function (canal) {
//   this.canal = canal;
//   this.sinal = 16;
//   this.volume = 45;
// };

// const T1 = new televisao(11);

// televisao.prototype.qualidade = "HD"; //adicionou a propriedade `qualidade' para o objeto 'televisao'
// console.log(televisao);

// //criação de um método:
// televisao.prototype.diminuirVolume = function () {
//   if (this.volume > 0) {
//     this.volume--;
//   }
// };
// televisao.prototype.musica = "Untill i found you"
// T1.diminuirVolume();
// T1.diminuirVolume();
// T1.diminuirVolume();
// console.log(T1.volume); // 42
// //
// console.log(T1);
// console.log(T1.canal);
// console.log(T1.qualidade); // "HD"
// console.log(televisao.prototype);

const botao = document.querySelector("#inscrever");
function youtube(canal, inscritos) {
  this.canal = canal;
  this.inscritos = inscritos;
}

const Yt = new youtube("7Minutoz", 1000);
console.log(Yt);
console.log(Yt.canal);
console.log(Yt.inscritos);
youtube.prototype.qualidade = "1440p"
//evento de click para novos inscritos
youtube.prototype.Btninscrever = function () {
  botao.addEventListener("click", () => {
    this.inscritos++;
    console.log(`Novos inscritos: ${this.inscritos}`);
  });
};
Yt.Btninscrever();
console.log(Yt.qualidade);
console.log(youtube.prototype);
console.log(Yt.inscritos);
