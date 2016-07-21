"use strict";

import Hand from "./hand";

var _ = require('lodash');

class Player {
  constructor (id, handSize) {
  	this.id = id;
  	this.name = "Player " + id;
  	this.hand = new Hand(handSize);
  }
}

export default Player;