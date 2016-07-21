"use strict";

var _ = require('lodash');

class Hand {
  constructor (size) {
  	this.size = size;
  	this.cards = [];
  }
}

export default Hand;