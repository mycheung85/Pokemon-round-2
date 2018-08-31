const {expect} = require('chai');
const {Battle} = require('../battle.js');
const {Trainer} = require('../trainer.js');
const {Pokemon, Fire, Grass, Water} = require('../pokemon.js')

describe.only('Battle', () => {
  it('check factory function has  new instance', () => {
    const fight = new Battle()
    expect(fight).to.be.an('object');
    expect(fight).to.be.an.instanceOf(Battle);
  });
  it ('check firstMove method return true if flag is true', () => {
    const bharat = new Trainer('bharat');
    const manyee  = new Trainer ('Manyee')
    const pikachu = new Fire('Pikachu','Squeak','Jump');
    const squirtle = new Grass('squirtle','bubba','growl');
    bharat.catch(pikachu);
    manyee.catch(squirtle);
    const battle = new Battle (bharat, manyee);
    console.log(battle.fight)
    battle.fight()
    expect (battle.fight()).to.equal();
  });
});