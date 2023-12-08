function highestScoringWord(str) {
  let alphabets = [
    'a', 'b', 'c', 'd', 'e', 'f',
    'g', 'h', 'i', 'j', 'k', 'l',
    'm', 'n', 'o', 'p', 'q', 'r',
    's', 't', 'u', 'v', 'w', 'x',
    'y', 'z'
  ]
  let wordsArr = str.toLowerCase().split("");
  console.log(wordsArr);
  for (let i = 0; i < wordsArr.length; i++) {
     word = wordsArr[i].join(" ")
     console.log(alphabets.indexOf(word))
  }
}
module.exports = highestScoringWord;
