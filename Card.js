class Card {   // eslint-disable-line no-unused-vars
  constructor(face, suit) {
    this.face = face;
    this.suit = suit;
    this.facedown = true;
  }
  
  toString() {
    if (this.facedown) {
      return 'Card is face down';
    } else {
      return `${this.face} of ${this.suit}`;
    }
  }

  flip() {
    this.facedown = !this.facedown;
  }
}

// These could be written as static properties in class, but this is 
// not yet a JavaScript standard
Card.SUITS = ['diamonds', 'spades', 'hearts', 'clubs'];
Card.FACES = [2,3,4,5,6,7,8,9,10,'Jack','Queen','King','Ace'];


