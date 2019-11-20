const cartas = ["az", 2, 3, 4, 5, 6, 7, 8, 9, 10, "j", "q", "k"];

const readline = require("readline-sync");

const usuario = {
  carteira: 10000
};

var rand = cartas[Math.floor(Math.random() * cartas.length)];
console.log(rand);

function start() {
  const content = {};
  content.usuario = nomeUsuario();
  function nomeUsuario() {
    return readline.question("digite seu nome: ");
  }
  console.log(content);
}

start();
