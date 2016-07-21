"use strict";

import Player from "./player";
import Deck from "./deck";
var _ = require('lodash');

class Game {
  constructor () {
    this.player = new Player();
    this.deck = new Deck();
  }

  static play(game, command) {
  	return "blarg";
  }
}

export default Game;