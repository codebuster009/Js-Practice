function findMissingLetter(arr) {
  let completeLetters = [];
  let missingLetters = [];
  for (let i = "a".charCodeAt(); i <= "z".charCodeAt(); i++) {
    completeLetters.push(String.fromCharCode(i));
  }
  for (let i = 0; i < completeLetters.length; i++) {
    if (arr.includes(completeLetters[i])) {
      continue;
    } else {
      missingLetters.push(completeLetters[i]);
    }
  }
  return missingLetters;
}

module.exports = findMissingLetter;


//  let array = arr.map((letter) => letter.toLowerCase());// Converting a array of letters to lowercase using map