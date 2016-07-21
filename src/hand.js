"use strict";

var _ = require('lodash');

class Hand {
  constructor (size) {
  	this.size = size;
  	this.cards = [];
  	this.draw();
  }

  draw() {
  	while(_.size(this.cards) < this.size) {
  		this.cards.push("blarg");
  		console.log(this);
  	}
  }
}

export default Hand;