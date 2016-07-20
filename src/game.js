'use strict';

class Game {
  constructor () {
    this.deck = Array.from({length: 99}, (v, k) => k+1);
  }
}

export default Game;