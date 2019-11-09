const helpers = require("./helpers");
const constants = require("./constants");

const { INPUT, PAYBACK_RULES, ITERATIONS } = constants;
const { dice1, dice2 } = helpers;

const runGame = () => {
  const sum = dice1() + dice2();
  const profit = PAYBACK_RULES[sum] * INPUT;
  return profit;
};

const runGameMultipleTimes = times => {
  let totalProfit = 0;
  for (let i = 0; i < times; i++) {
    totalProfit += runGame();
  }
  return totalProfit;
};

const isGameProfitable = () => {
  const totalProfit = runGameMultipleTimes(ITERATIONS);
  if (totalProfit > INPUT) {
    console.log(`
    Total profit after ${ITERATIONS} iterations is ${totalProfit} EUR, 
    which concludes that there is a good chance of winning in this game.`);
  } else {
    console.log(`
    After playing this game ${ITERATIONS} times, the total profit is 
    ${totalProfit} EUR, which concludes that chances of winning are quite less 
    in this game.`);
  }
};

isGameProfitable();
