/* global Stack */

class Game {  // eslint-disable-line no-unused-vars
  constructor() {
    this._generateInitialDecks();
    this.highScore = 0;
  }

  _generateInitialDecks() {
    this.drawDeck = new Stack('standard');
    this.drawDeck.shuffle();

    this.discardPile = new Stack;
    this.activeStack = new Stack;
  }

  drawNew() {
    const drawnCard = this.drawDeck.draw();
    drawnCard.flip();
    this.activeStack.add(drawnCard);
    console.log('New card drawn to active stack:', this.activeStack.peek().toString());
  }

  reset() {
    this._generateInitialDecks();
  }
}