"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _player = require("./player");

var _player2 = _interopRequireDefault(_player);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var _ = require('lodash');

var Game = function Game() {
  _classCallCheck(this, Game);

  this.player = new _player2.default();
  this.deck = _.range(1, 100);
};

exports.default = Game;