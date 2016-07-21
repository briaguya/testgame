"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var _ = require('lodash');

var Deck = function Deck() {
  _classCallCheck(this, Deck);

  this.name = "blarg";
  this.cards = _.range(1, 100);
};

exports.default = Deck;