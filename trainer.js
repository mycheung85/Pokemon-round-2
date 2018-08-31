class Trainer {
  constructor(name) {
    this.name = name;
    this.storage = {}
  }
  catch(pokemon) {
  this.storage[pokemon] = pokemon;
  };
}




module.exports = Trainer;

// Bharat, Man Yee