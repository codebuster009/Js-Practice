function highestScoringWord(str) {
  let arrayOfScores = [];
  let sum = 0
  let alphabets = [
    'a', 'b', 'c', 'd', 'e', 'f',
    'g', 'h', 'i', 'j', 'k', 'l',
    'm', 'n', 'o', 'p', 'q', 'r',
    's', 't', 'u', 'v', 'w', 'x',
    'y', 'z'
  ]
  let wordsArr = str.toLowerCase().split(" ");
  console.log(wordsArr);
  for (let i = 0; i < wordsArr.length; i++) {
    char = wordsArr[i].split("") 
    console.log(char)
    for(let char1 of wordsArr[i])
    for(let j = i ; j < char.length ; j++){
    sum+= alphabets.indexOf(char[i])
    console.log(sum)
    }
  }
}
module.exports = highestScoringWord;


// function highestScoringWord(str) {
//   let arrayOfScores = [];
//   let sum = 0
//   let alphabets = [
//     'a', 'b', 'c', 'd', 'e', 'f',
//     'g', 'h', 'i', 'j', 'k', 'l',
//     'm', 'n', 'o', 'p', 'q', 'r',
//     's', 't', 'u', 'v', 'w', 'x',
//     'y', 'z'
//   ]
//   let wordsArr = str.toLowerCase().split(" ");
//   console.log(wordsArr);
//   for (let i = 0; i < wordsArr.length; i++) {
//     char = wordsArr[i].split("")
//     console.log(char)
//    for(let j = i ; j < char.length ; j++){
//    sum+= alphabets.indexOf(char[i]) 
//  let obj = {Score : sum}
//  arrayOfScores.push(obj)
//     console.log(sum)
//     }
//   }
//   console.log(arrayOfScores)
// }
// module.exports = highestScoringWord;
