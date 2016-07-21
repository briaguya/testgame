"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _card = require("./card");

var _card2 = _interopRequireDefault(_card);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var _ = require('lodash');
var _shuffle = require('knuth-shuffle').knuthShuffle;

var Deck = function () {
  function Deck() {
    _classCallCheck(this, Deck);

    this.name = "blarg";
    this.cards = _.map(_.range(2, 100), function (n) {
      return new _card2.default(n);
    });
    this.shuffle();
  }

  _createClass(Deck, [{
    key: "shuffle",
    value: function shuffle() {
      _shuffle(this.cards);
    }
  }]);

  return Deck;
}();

exports.default = Deck;