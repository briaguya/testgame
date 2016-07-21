"use strict";

import Game from "./game";

var prompt = require('prompt');

prompt.start();

var game = new Game();

function gameLoop() {
  prompt.get(['command'], function(err, result) {
    console.log('  command: ' + result.command);
    console.log(game.players);
    var command = result.command;
    play(command);
  });
}

function play(command) {
  switch (command) {
    case "start":
      start();
      break;
    case "exit":
      break;
    default:
      gameLoop();
      break;
  }
}

var startGameSchema = {
  properties: {
    numberOfPlayers: {
        description: 'Number of Players: ',
        type: 'integer',
        default: '1'
    }
  }
};

function start() {
  var numberOfPlayers;
  prompt.get(startGameSchema, function(err, result) {
    numberOfPlayers = result.numberOfPlayers;
    game.start(numberOfPlayers);
    gameLoop();
  });
}

gameLoop();