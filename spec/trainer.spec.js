const {expect} = require('chai');
const Trainer = require('../trainer.js');
const Pokemon = require('../pokemon.js');

describe('Trainer', () => {
  it('Trainer returns an object', () => {
    const bharat = new Trainer('Bharat');
    expect(bharat).to.be.an('object')
    expect(bharat).to.be.an.instanceOf(Trainer)
  });
  it('Trainer storage contains a pokemon character ', () => {
    const bharat = new Trainer('Bharat');
    const pikachu = new Pokemon('Pikachu','Squeak','Jump');
    bharat.catch(pikachu.name);
    bharat.catch(pikachu.move);
    expect(bharat.storage[pikachu.name]).to.equal('Pikachu');
    expect(bharat.storage[pikachu.move]).to.equal('Jump');
  });
});