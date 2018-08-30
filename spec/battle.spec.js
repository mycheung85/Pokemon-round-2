const {expect} = require('chai');
const Battle = require('../battle.js');
const Trainer = require('../trainer.js');
const Pokemon = require('../pokemon.js')

describe.only('Battle', () => {
  it('check factory function has  new instance', () => {
    const fight = new Battle()
    expect(fight).to.be.an('object');
    expect(fight).to.be.an.instanceOf(Battle)
  });
  // it('battle will call pickPokemon for me', () => {
  //   const test = new Battle()
  //   test.fight()
  // })
});