let color = (data) => {
  const resultado = {
    red: "vermelho",
    yellow: "amarelo",
    blue: "azul",
  };
  return resultado[data] || "não é cor";
};
console.log(color("azul"));
