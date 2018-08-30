const Trainer = function(name) {
this.name = name;
this.storage = {}
}



Trainer.prototype.catch = function (pokemon) {
this.storage[pokemon] = pokemon;
};

module.exports = Trainer;

// Bharat, Man Yee