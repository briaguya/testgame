"use strict";

import Player from "./player";
import Deck from "./deck";
var _ = require('lodash');

class Game {
  constructor () {
    this.deck = new Deck();
  }

  start(numberOfPlayers) {
  	this.players = _.map(_.range(numberOfPlayers), function(id) { return new Player(id); });
  }

  static play(game, command) {
  	return "blarg";
  }
}

export default Game;