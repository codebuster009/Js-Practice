function diceGameSimulation(numSimulations) {
  let gameResults = [];

  //Running a loop based on the number of simulations given
  for (let i = 0; i < numSimulations; i++) {

 // Generating Random numbers between 1-12 for both the dices
    dice1 = Math.floor(Math.random() * 13);
    dice2 = Math.floor(Math.random() * 13);

    sum = dice1 + dice2;

 // Setting Game Rules
    if(sum === 7 || sum === 11) {
      result = "win"
    } else if(sum === 2 || sum === 3 || sum === 12) {
        result = "lose"
    } else {
        result = "roll again"
    }

 //Pushing the final results
    gameResults.push(
      { dice1: dice1, dice2: dice2, sum: sum, result: result }
    );
  }
  return gameResults;
}

module.exports = diceGameSimulation;
