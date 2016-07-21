"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var _ = require('lodash');

var Hand = function () {
  function Hand(size) {
    _classCallCheck(this, Hand);

    this.size = size;
    this.cards = [];
    this.draw();
  }

  _createClass(Hand, [{
    key: "draw",
    value: function draw() {
      while (_.size(this.cards) < this.size) {
        this.cards.push("blarg");
        console.log(this);
      }
    }
  }]);

  return Hand;
}();

exports.default = Hand;