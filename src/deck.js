"use strict";

import Card from "./card";

var _ = require('lodash');
var shuffle = require('knuth-shuffle').knuthShuffle;

class Deck {
  constructor () {
  	this.name = "blarg";
  	this.cards = _.map(_.range(2,100), function(n) { return new Card(n); });
  	this.shuffle();
  }

  shuffle() {
  	shuffle(this.cards);
  }
}

export default Deck;