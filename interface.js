document.addEventListener("DOMContentLoaded", () => {
  let quadrados = document.querySelectorAll(".quadrado");

  quadrados.forEach((quadrado) => {
    quadrado.addEventListener("click", aposClick);
  });
});

function aposClick(event) {
  let quadrado = event.target;
  let posicao = quadrado.id;

  if (movimentoTabuleiro(posicao)) {
    setTimeout(() => {
      alert(`O jogo acabou - O jogador número ${vezDoJogador} venceu!`);
    }, 10);
  }

  atualizar(posicao);
}

function atualizar(posicao) {
  let quadrados = document.getElementById(posicao.toString());
  let simbolos = tabuleiro[posicao];
  quadrados.innerHTML = `<div class="${simbolos}"></div>`;
}
