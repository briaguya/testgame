"use strict";

import Game from "./game";

var prompt = require('prompt');
prompt.start();

var game = new Game();

function gameLoop() {
  // First get the command
  prompt.get(['command'], function(err, result) {
    console.log('  command: ' + result.command);
    var command = result.command;
    var response = play(command);

    console.log(game);

    // Then send it to the game
    if(command == 'exit') {
      console.log('exiting');
    } else {      
      console.log('  response: ' + response);
      gameLoop();
    }
  });
}

function play(command) {
  return Game.play(game, command);
}

gameLoop();