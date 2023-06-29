//operador spread

let jogador1 = { nome: "Geovane", energia: 100, saude: 70, velocidade: 100 };
let jogador2 = { nome: "Giovan", energia: 100, saude: 70, forca: 80 };
const jog3 = { ...jogador1, ...jogador2 };

console.log(jog3);

const soma = (v1, v2, v3) => {
  return v1 + v2 + v3;
};

let value = [4, 7, 9];
console.log(soma(...value));

const objeto1 = document.getElementsByTagName("div"); //html collection
const objeto2 = [...document.getElementsByTagName("div")]; //html collection


objeto2.forEach(element => {
    console.log(element)
    element.innerHTML="programação"
});

console.log(objeto1);
console.log(objeto2);
