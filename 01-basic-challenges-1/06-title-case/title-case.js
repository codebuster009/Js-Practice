function titleCase(str) {
    const words = str.toLowerCase().split(' ');
  
    for (let i = 0; i < words.length; i++) {
      words[i] = words[i][0].toUpperCase() + words[i].slice(1);
    }
  
    return words.join(' ');
  }

// function titleCase (str) {
// const remainingLetters = str.slice(1)
// const firstLetter = str.charAt(0).toUpperCase()
// const capitalized = firstLetter + remainingLetters
// return capitalized
// }
module.exports = titleCase;
