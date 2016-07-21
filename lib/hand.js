"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var _ = require('lodash');

var Hand = function Hand(size) {
  _classCallCheck(this, Hand);

  this.size = size;
  this.cards = [];
};

exports.default = Hand;