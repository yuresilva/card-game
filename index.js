/*

1) Inicia o jogo
2) Pergunta o nome do participante e salva na variavel X
3) Tira a primeira carta do deck
4) Embaralha o deck
5) Pergunta se a proxima carta vai ser mais alta ou baixa
6) Pergunta quanto dinheiro aposta
7) Tira primeira carta do deck embaralhado
8) Verifica se ele acertou (se sim, aumenta a carteira dele, se não, diminui)
9) Inicia uma nova rodada

*/
const readlineSync = require("readline-sync");

function createCards() {
  const deck = [
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

  return deck;
}

function round(balance, lastCard, deck) {
  let afterHint = 0;
  do {
    // Embaralhar o deck
    const deckShuffled = shuffleDeck(deck);
    // Remover a primeira carta
    const card = getFirstCard(deckShuffled);
    // Perguntar alta ou baixa

    const optCard = readlineSync.question(
      "A próxima carta vai ser mais alta ou baixa? (A/B) > "
    );
    // Perguntar qual valor da aposta
    const optBet = parseFloat(
      readlineSync.question(
        `Quanto vai querer apostar? No máximo ${balance} > `
      )
    );
    //Primeira carta printada
    console.log(`Virou a carta: ${card} `);

    // Verifica se acertou ou errou
    if (
      (optCard == "A" && card > lastCard) ||
      (optCard == "B" && card < lastCard)
    ) {
      afterHint = balance + optBet * 2;
      console.log(`Parabens voce ganhou! sua carteira agora é ${afterHint}`);
    } else {
      afterHint = balance - optBet;
      console.log(
        `Infelizmente voce perdeu! sua carteira agora é ${afterHint}`
      );
    }
  } while (afterHint > 0);

  console.log(`Você esta devendo ${afterHint}`);

  return afterHint;
}

function initGame() {
  console.log("Iniciou o jogo! ");
  const deck = createCards();
  let balance = 10000;
  let name = readlineSync.question("Qual seu nome? > ");
  console.log(`Virou a carta número 5 senhor ${name}!`);
  round(balance, 5, deck);
}

function getFirstCard(deck) {
  return deck[0].value;
}

function shuffleDeck(deck) {
  var currentIndex = deck.length,
    temporaryValue,
    randomIndex;
  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    // And swap it with the current element.
    temporaryValue = deck[currentIndex];
    deck[currentIndex] = deck[randomIndex];
    deck[randomIndex] = temporaryValue;
  }
  return deck;
}

initGame();

// Jogar mais rodadas até que o dinheiro acabe.
// do... while
// Tirar uma carta na sorte na primeira rodada ao invés do 5.

// Hard
// Fazer ranking de jogadores.
// Jogar rodadas até um certo limite. (15 rodadas)
// Deixar o console mais bonito com cores e sons (quando perde: barulho de buzina, quando ganha: barulho de torcida)
// Transformar em uma executável pra download.
