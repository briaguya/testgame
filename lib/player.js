"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _hand = require("./hand");

var _hand2 = _interopRequireDefault(_hand);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Player = function Player(id, handSize) {
  _classCallCheck(this, Player);

  this.id = id;
  this.name = "Player " + id;
  this.hand = new _hand2.default(handSize);
};

exports.default = Player;