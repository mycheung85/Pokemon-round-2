class Pokemon {
  constructor(name, sound, move) {
    this.name = name;
    this.health = 100;
    this.attackDamage = 50;
    this.sound = sound;
    this.move = move;
  }
    sound() {
    this.sound;
  }
    move() {
    this.move;
  }
}

class Fire extends Pokemon {
constructor(name, sound, move) {
  super(name, sound, move);
  this.weakness = 'water';
  this.strength = 'grass'
} 
}

class Grass extends Pokemon {
  constructor(name, sound, move) {
  super(name, sound, move);
  this.weakness = 'fire';
  this.strength = 'water'
  } 
}
class Water extends Pokemon {
  constructor(name, sound, move) {
  super(name, sound, move);
  this.weakness = 'grass';
  this.strength = 'fire'
  } 
}
module.exports = {Pokemon, Fire, Grass, Water}

// Pikachu, Charamnder, Squirtle, Chiazard