let tabuleiro = ["", "", "", "", "", "", "", "", ""];
let vezDoJogador = 0;
let simbolos = ["o", "x"];
let fimDeJogo = false;
let posicoesVencedoras = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

function movimentoTabuleiro(posicao) {
  if (fimDeJogo) {
    return;
  }

  if (tabuleiro[posicao] == "") {
    tabuleiro[posicao] = simbolos[vezDoJogador];

    fimDeJogo = vencedor();

    if (fimDeJogo == false) {
      vezDoJogador = vezDoJogador == 0 ? 1 : 0;
    }
  }

  return fimDeJogo;
}

function vencedor() {
  for (let i = 0; i < posicoesVencedoras.length; i++) {
    let sequencia = posicoesVencedoras[i];

    let posicao1 = sequencia[0];
    let posicao2 = sequencia[1];
    let posicao3 = sequencia[2];

    if (
      tabuleiro[posicao1] == tabuleiro[posicao2] &&
      tabuleiro[posicao1] == tabuleiro[posicao3] &&
      tabuleiro[posicao1] != ""
    ) {
      return true;
    }
  }
  return false    
}
