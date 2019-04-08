/* global Card */

class Stack {  // eslint-disable-line no-unused-vars
  constructor(deckType) {
    this.cards = [];

    if (deckType === 'standard') {
      this.buildStandardDeck();
    }
  }

  buildStandardDeck() {
    Card.SUITS.forEach(suit => {
      Card.FACES.forEach(face => {
        this.cards.push(new Card(face, suit));
      });
    });
  }

  draw() {
    return this.cards.pop();
  }

  add(card) {
    this.cards.push(card);
  }

  peek() {
    return this.cards[this.cards.length - 1];
  }

  /* Randomize this.cards in place */
  shuffle() {
    let currentIndex = this.cards.length;
    let temporaryValue, randomIndex;
  
    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      temporaryValue = this.cards[currentIndex];
      this.cards[currentIndex] = this.cards[randomIndex];
      this.cards[randomIndex] = temporaryValue;
    }
  
    return this.cards;
  }
}
