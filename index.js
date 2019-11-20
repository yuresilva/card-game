const readlineSync = require("readline-sync");

const cartas = ["az :1 ", 2, 3, 4, 5, 6, 7, 8, 9, 10, "j: 11", "q: 12", "k:13"];

let carteira = 10000;
let valorAposta = 0;
let resultadoAposta = 0;

let userName = readlineSync.question("Qual seu nome? ");

console.log(userName);

function shuffleCards(cards) {
  return cards[Math.floor(Math.random() * cards.length)];
}
shuffleCards(cartas);

function round(cartas, cartaAnterior) {
  let cardsShuffled = shuffleCards(cartas); // a cada rodada voce precisa embaralhar as cartas
  const card = cardsShuffled[0];
  let perguntaAposta = readlineSync.question(
    "Qual carta vai sair valor alto ou baixa? "
  );
  console.log(perguntaAposta);

  valorAposta = parseFloat(
    readlineSync.question("Quanto vai querer apostar? ")
  );
  console.log(valorAposta);

  let cardsShuffled2 = shuffleCards(cartaAnterior);
  const cartaAnterior = cardsShuffled2[0];

  if (card > cartaAnterior) {
    resultadoAposta = carteira + valorAposta;
  } else {
    resultadoAposta = carteira - valorAposta;
  }
}
