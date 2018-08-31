
class Battle {

constructor (trainer1, trainer2) {
this.trainer1 = trainer1;
this.trainer2 = trainer2;
this.turn = true;
}
  pickPokemon(pick1, pick2) {
    if(pick1 !== undefined) {
    this.trainer1 = this.trainer1.storage[pick1]
    }
    if (pick2 !== undefined) {
    this.trainer2 = this.trainer2.storage[pick2]
    }
  }
  attack(attacker, defender) {
    if (attacker.storage[0].strength === defender.storage[0].weakness) {
    let attackLevel = attacker.storage[0].attackDamage * 1.25
    defender.storage[0].health -= attackLevel;
    } 
    else if (attacker.storage[0].weakness === defender.storage[0].strength) {
    let smallerAttackLevel = attacker.storage[0].attackDamage * 0.75
    defender.storage[0].health -= smallerAttackLevel;
    }
  }

  fight() {
  
  while(this.trainer1.storage[0].health> 0|| this.trainer2.storage[0].health > 0) {
    if(this.turn === true) {
    this.attack(this.trainer1, this.trainer2)
    // console.log(this.trainer2.storage[0].health)
    this.turn = !this.turn
    } else {
    this.attack(this.trainer2, this.trainer1)
    // console.log(this.trainer1.storage[0].health)
    this.turn = !this.turn
      }
    }
    //console.log('hello')
  }
}

// then they fight
// trainer 1 goes first with its pokemon
// the pokemon of trainer 1 moves first
// the damage points depends on if it's type is stronger than trainer 2's pokemon
// if the trainer 1's pokemon is stronger than trainer 2's pokemon then their points go up and trainer 2's pokemon health points goes down
// Then it will be the turn of trainer 2, if their type is stronger then their attack is stronger and their health goes up and trainer 1's health goes down
// Once each pokemon's health gets below 0 then the game is over

module.exports = {Battle}
