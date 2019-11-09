const random = require("lodash/random");

module.exports = {
  dice1: () => random(1, 6),
  dice2: () => random(1, 6)
};
