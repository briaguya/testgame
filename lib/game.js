"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _player = require("./player");

var _player2 = _interopRequireDefault(_player);

var _deck = require("./deck");

var _deck2 = _interopRequireDefault(_deck);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var _ = require('lodash');

var Game = function () {
  function Game() {
    _classCallCheck(this, Game);

    this.deck = new _deck2.default();
  }

  _createClass(Game, [{
    key: "start",
    value: function start(numberOfPlayers) {
      this.players = _.map(_.range(numberOfPlayers), function (id) {
        return new _player2.default(id);
      });
    }
  }], [{
    key: "play",
    value: function play(game, command) {
      return "blarg";
    }
  }]);

  return Game;
}();

exports.default = Game;