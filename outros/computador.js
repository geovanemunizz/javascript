const computador = {
  processador: "i9",
  ram: "12gb",
  memoria: "1Tb",
  memoriaPrincipal: ["SSD", "HD"],
  informacoes: function(){
    console.log("informações do computador")
  },
};

// console.log(computador)
//clona um objeto existente e cria um novo com as mesmas propriedades

const loja = Object.assign({},computador);
loja.informacoes()
loja.placaVideo = "RTX 3060";
const newItem = {obj: "1"}
const newItem2 = {item: "2"}
const newItem3 = {coisa: "3"}
const novo = Object.assign(newItem,newItem2,newItem3)
console.log(novo);
