function highestScoringWord(str) {
  let alphabets = "abcdefghijklmnopqrstuvwxyz";
  let wordScore = 0
  let scores = [];
  let alphabetArray = alphabets.split("");
  let wordsArr = str.split(" ");
  console.log(wordsArr);
  for (let i = 0; i < wordsArr.length; i++) {
    eachChar = wordsArr[i].toLowerCase().split("");
    let index = alphabetArray.indexOf(eachChar[i]);
    scores.push(index)
  }

  return scores;
}
module.exports = highestScoringWord;
