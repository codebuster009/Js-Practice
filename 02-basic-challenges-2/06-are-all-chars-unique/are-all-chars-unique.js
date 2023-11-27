function areAllCharactersUnique(str) {
  //return true if empty
  if (str === "") {
    return true;
  }

  //Converting incoming string to an array
  stringArray = str.split("");

  //Removing duplicates from the array using set
  const uniqueLetters = new Set(stringArray);

  //Converting back from set to an Array
  const uniqueLettersArray = Array.from(uniqueLetters);

  //Comparing the length
  if (stringArray.length != uniqueLettersArray.length) {
    return false;
  } else {
    return true;
  }
}

module.exports = areAllCharactersUnique;

// console.log(str.indexOf(i))
// if(str.indexOf(str[i]) === str.indexOf(str[i]) + 1) {
//     return false
// } else {
//     return true
// }

//Mistake

//const letters = new Set([string]);  ----> Wrong
//const letters = new Set(string);  ----> Right
// was unintentionally treating the entire array as a single element because you wrapped it in another array when passing it to the Set constructor.
