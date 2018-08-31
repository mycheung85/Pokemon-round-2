const {expect} = require('chai');
const {Pokemon, Fire, Grass, Water} = require('../pokemon.js')

describe('Pokemon', () => {
  it('Pokemon constructor returns a new object and the name of the pokemon each time', () => {
    const pikachu = new Pokemon('Pikachu');
    expect(pikachu).to.be.an('object');
    expect(pikachu.name).to.equal('Pikachu');
  });
  it('tests a new instance of Pokemon', () => {
    const pikachu = new Pokemon()
    expect(pikachu).to.be.an.instanceOf(Pokemon);
  });
  it('the sound method returns a sound', () => {
    const pikachu = new Pokemon('Pikachu','Squeak','Jump');
    expect(pikachu.sound).to.equal('Squeak');
  });
  it('the move method returns a move', () => {
    const pikachu = new Pokemon('Pikachu','Squeak','Jump');
    expect(pikachu.move).to.equal('Jump');
  });
  it('the health of the pikachu should be 100', () => {
    const pikachu = new Pokemon('Pikachu','Squeak','Jump');
    expect(pikachu.health).to.equal(100);
  });
  it('check weekness and strengths of fire', () => {
    const pikachu = new Fire('Pikachu','Squeak','Jump');
    expect(pikachu.weekness).to.eql('water');
    expect(pikachu.strength).to.eql('grass');
  });
});
