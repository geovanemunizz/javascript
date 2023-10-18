const cartaoVisitas = {
  cartoes: [],

  adicionarCartao(nome, empresa, funcao) {
    const novoCartao = {
      nome,
      empresa,
      funcao,
    };
    this.cartoes.push(novoCartao);
  },
  listaCartoes() {
    console.log("Cartões de visita:");
    this.cartoes.forEach((cartao, index) => {
      console.log(
        `${index + 1}. Nome: ${cartao.nome}, empresa: ${
          cartao.empresa
        }, função: ${cartao.funcao}`
      );
    });
  },
};
cartaoVisitas.adicionarCartao(
  "Aurelio",
  "Empresa de UltraProcessados",
  "Gerente"
);
cartaoVisitas.adicionarCartao("Maria", "Empresa de produção", "Designer");
cartaoVisitas.listaCartoes();
