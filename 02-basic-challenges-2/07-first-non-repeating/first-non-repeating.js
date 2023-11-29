function findFirstNonRepeatingCharacter(str) {
  let repeatedCharacter = [];
  for (let i = 0; i < str.length; i++) {
    if (str[i].charCodeAt() != str[i] + 1 ) {
return str[1]
}
  }
}
module.exports = findFirstNonRepeatingCharacter;
