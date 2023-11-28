function findFirstNonRepeatingCharacter(str) {
  let array = str.split("");
  let uniqueCharacters = [];
  let repeatedCharacter = [];
  for (let i = 0; i < array.length; i++) {
    if (uniqueCharacters.includes(array[i])) {
      repeatedCharacter.push(array[i]);
    } else {
      uniqueCharacters.push(array[i]);
    }
  }
  return uniqueCharacters[0]
}

module.exports = findFirstNonRepeatingCharacter;
