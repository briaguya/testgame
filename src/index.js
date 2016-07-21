"use strict";

import Game from "./game";

(function () {
  var shuffle = require('knuth-shuffle').knuthShuffle
    , a = [2,11,37,42]
    , b
    ;

  var game = new Game();

  // The shuffle modifies the original array
  // calling a.slice(0) creates a copy, which is assigned to b
  shuffle(game.deck);
  console.log(game.deck);
  console.log(game.player.name);
}());