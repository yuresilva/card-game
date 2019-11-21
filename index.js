const readlineSync = require("readline-sync");

let userName = readlineSync.question("Qual seu nome? ");

console.log(userName);

function shuffleCards(cards) {
  return cards[Math.floor(Math.random() * cards.length)];
}

function createCartas(name, value) {
  let cartas = [
    { name: "A", value: 1 },
    { name: "2", value: 2 },
    { name: "3", value: 3 },
    { name: "4", value: 4 },
    { name: "5", value: 5 },
    { name: "6", value: 6 },
    { name: "7", value: 7 },
    { name: "8", value: 8 },
    { name: "9", value: 9 },
    { name: "10", value: 10 },
    { name: "J", value: 11 },
    { name: "Q", value: 12 },
    { name: "K", value: 13 }
  ];
}

function round(cartas, cartaAnterior) {
  let carteira = 10000;
  let valorAposta = 0;
  let resultadoAposta = 0;

  let cardsShuffled = shuffleCards(cartas); // a cada rodada voce precisa embaralhar as cartas
  const card = cardsShuffled[0].value;
  let perguntaAposta = readlineSync.question(
    "Qual carta vai sair valor alto ou baixa? "
  );
  console.log(perguntaAposta);

  if (pergunta == alto || pergunta > card) {
    resultadoAposta = carteira + valorAposta;
  } else {
    resultadoAposta = carteira - valorAposta;
  }

  if (pergunta == baixo || pergunta < card) {
    resultadoAposta = carteira + valorAposta;
  } else {
    resultadoAposta = carteira - valorAposta;
  }

  valorAposta = parseFloat(
    readlineSync.question("Quanto vai querer apostar? ")
  );
  console.log(valorAposta);

  let cardsShuffled2 = shuffleCards(cartaAnterior);
  const cartaAnterior = cardsShuffled2[0];

  if (card > cartaAnterior) {
  } else {
    resultadoAposta = carteira - valorAposta;
  }
}
