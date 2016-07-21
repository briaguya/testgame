"use strict";

var _ = require('lodash');

class Deck {
  constructor () {
  	this.name = "blarg";
  	this.cards = _.range(1,100);
  }
}

export default Deck;