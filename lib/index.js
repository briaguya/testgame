"use strict";

var _game = require("./game");

var _game2 = _interopRequireDefault(_game);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var prompt = require('prompt');
prompt.start();

var game = new _game2.default();

function gameLoop() {
  // First get the command
  prompt.get(['command'], function (err, result) {
    console.log('  command: ' + result.command);
    var command = result.command;
    var response = play(command);

    console.log(game);

    // Then send it to the game
    if (command == 'exit') {
      console.log('exiting');
    } else {
      console.log('  response: ' + response);
      gameLoop();
    }
  });
}

function play(command) {
  //return "blarg";
  return _game2.default.play(game, command);
}

gameLoop();