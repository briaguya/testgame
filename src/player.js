"use strict";

import Hand from "./hand";

class Player {
  constructor (id, handSize) {
  	this.id = id;
  	this.name = "Player " + id;
  	this.hand = new Hand(handSize);
  }
}

export default Player;