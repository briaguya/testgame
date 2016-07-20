'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Game = function Game() {
  _classCallCheck(this, Game);

  this.deck = Array.from({ length: 99 }, function (v, k) {
    return k + 1;
  });
};

exports.default = Game;