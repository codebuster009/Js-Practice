function reverseString(str) {
   let words = str.split('').reverse().join('')
   console.log(words)
}

module.exports = reverseString;
