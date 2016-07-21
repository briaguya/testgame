"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _card = require("./card");

var _card2 = _interopRequireDefault(_card);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var _ = require('lodash');
var shuffle = require('knuth-shuffle').knuthShuffle;

var Deck = function Deck() {
  _classCallCheck(this, Deck);

  this.name = "blarg";
  this.cards = _.map(_.range(2, 100), function (n) {
    return new _card2.default(n);
  });
};

exports.default = Deck;