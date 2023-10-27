let jogador1 = true;
let tabuleiro = [
  ["", "", ""],
  ["", "", ""],
  ["", "", ""],
];

function jogar(linha, coluna) {
  if (tabuleiro[linha][coluna] === "") {
    if (jogador1) {
      tabuleiro[linha][coluna] = "x";
    } else {
      tabuleiro[linha][coluna] = "o";
    }

    jogador1 = !jogador1;
    exibirTabuleiro();
    verificarVencedorEmpate();
  }
}

function exibirTabuleiro() {
  const tabela = document.querySelector("table");
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      tabela.rows[i].cells[j].textContent = tabuleiro[i][j];
    }
  }
}

function verificarEmpate() {
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (tabuleiro[i][j] === "") {
        return false;
      }
    }
  }
  return true;
}

function verificarVencedorEmpate() {
  const vencedor = checarLinhas() || checarColuna() || checarDiagonal();
  if (vencedor) {
    alert(`o jogador: ${vencedor} venceu`);
    reiniciar();
  } else if (verificarEmpate()) {
    alert(`o jogo terminou empatado`);
    reiniciar();
  }
}

function checarLinhas() {
  for (let i = 0; i < 3; i++) {
    if (
      tabuleiro[i][0] === tabuleiro[i][1] &&
      tabuleiro[i][0] === tabuleiro[i][2] &&
      tabuleiro[i][0] !== ""
    ) {
      return tabuleiro[i][0];
    }
  }
  return null;
}

function checarColuna() {
  for (let j = 0; j < 3; j++) {
    if (
      tabuleiro[0][j] === tabuleiro[1][j] &&
      tabuleiro[0][j] === tabuleiro[2][j] &&
      tabuleiro[0][j] !== ""
    ) {
      return tabuleiro[0][j];
    }
  }
  return null;
}

function checarDiagonal() {
  if (
    (tabuleiro[0][0] === tabuleiro[1][1] &&
      tabuleiro[0][0] === tabuleiro[2][2] &&
      tabuleiro[0][0] !== "") ||
    (tabuleiro[0][2] === tabuleiro[1][1] &&
      tabuleiro[0][2] === tabuleiro[2][0] &&
      tabuleiro[0][2] !== "")
  ) {
    return tabuleiro[1][1];
  }
  return null;
}

function reiniciar() {
  tabuleiro = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ];
  jogador1 = true;
  exibirTabuleiro();
}
