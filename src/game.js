"use strict";

import Player from "./player";
import Deck from "./deck";
var _ = require('lodash');

class Game {
  constructor () {
    this.deck = new Deck();
  }

  get handSize() {
  	if(this.numberOfPlayers == 1) return 8;
  	if(this.numberOfPlayers == 2) return 7;
  	return 6;
  }

  start(numberOfPlayers) {
  	this.numberOfPlayers = numberOfPlayers;
  	var handSize = this.handSize;
  	this.players = _.map(_.range(numberOfPlayers), function(id) { return new Player(id, handSize); });
  }

  static deal(player) {
  }
}

export default Game;