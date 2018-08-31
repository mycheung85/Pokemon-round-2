
class Battle {

constructor (trainer1, trainer2, pokemon1, pokemon2) {
this.trainer1 = trainer1
this.trainer2 = trainer2
}
  pickPokemon  (pick1, pick2) {
    if(pick1 !== undefined) {
      this.trainer1 = this.trainer1.storage[pick1]
    }
    if (pick2 !== undefined) {
      this.trainer2 = this.trainer2.storage[pick2]
    }
}
}

// then they fight
// trainer 1 goes first with its pokemon
// the pokemon of trainer 1 moves first
// the damage points depends on if it's type is stronger than trainer 2's pokemon
// if the trainer 1's pokemon is stronger than trainer 2's pokemon then their points go up and trainer 2's pokemon health points goes down
// Then it will be the turn of trainer 2, if their type is stronger then their attack is stronger and their health goes up and trainer 1's health goes down
// Once each pokemon's health gets below 0 then the game is over

Battle.prototype.fight = function(pokemon1, pokemon2) {
  this.pickPokemon()


const turn = true
if (turn === true) {
  turn = this.trainer1
  // turn = false;
} else {
  turn = this.trainer2
  // turn = true
}


switch (pokemon1, pokemon2) {
  case (pokemon1.type === 'water' && pokemon2.type === 'grass'):
    pokemon1.attackDamage = pokemon1.health * 0.75
    pokeman2.health -= pokemon1.attackDamage
  break;
  case (pokemon1.type === 'grass' && pokemon2.type === 'water'):
    pokemon1.attackDamage = pokemon1.health * 1.25
    pokeman2.health -= pokemon1.attackDamage
    break;
  case (pokemon1.type === 'fire' && pokemon2.type === 'water'):
    pokemon1.attackDamage = pokemon1.health * 1.25
    pokeman2.health -= pokemon1.attackDamage
    break;
  case (pokemon1.type === 'water' && pokemon2.type === 'fire'):
    pokemon1.attackDamage = pokemon1.health * 0.75
    pokeman2.health -= pokemon1.attackDamage
  break;
  }
}

module.exports = Battle
