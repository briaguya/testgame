"use strict";

import Player from "./player";
var _ = require('lodash');

class Game {
  constructor () {
    this.player = new Player();
    this.deck = _.range(1,100);
  }
}

export default Game;