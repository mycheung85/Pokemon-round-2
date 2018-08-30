const Pokemon = function(name, sound, move) {
this.name = name;
this.health = 100;
this.attackDamage = 0;
this.sound = sound;
this.move = move;
this.type = type;
}

Pokemon.prototype.sound = function() {
  this.sound;
}

Pokemon.prototype.move = function() {
  this.move;
}

Pokemon.prototype.weakness = function() {
  if(this.type === 'fire') {
    this.weakness = 'water'
  } else {
    if(this.type === 'grass') {
      this.weakness = 'fire'
    } else {
      if(this.type === 'water') {
        this.weakness = 'grass'
      }
    }
  }

}
module.exports = Pokemon

// Pikachu, Charamnder, Squirtle, Chiazard