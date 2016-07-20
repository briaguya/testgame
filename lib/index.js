'use strict';

var _game = require('./game');

var _game2 = _interopRequireDefault(_game);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  'use strict';

  var shuffle = require('knuth-shuffle').knuthShuffle,
      a = [2, 11, 37, 42],
      b;

  var game = new _game2.default();

  // The shuffle modifies the original array
  // calling a.slice(0) creates a copy, which is assigned to b
  shuffle(game.deck);
  console.log(game.deck);
})();