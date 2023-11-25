function reverseString(str) {
  string = str.split(' ');
  let reversed = ""
  console.log(string);
  for (let i = string.length - 1 ; i >= 0 ; i--) {
    reversed += string[i]
  }
  return reversed
}
module.exports = reverseString;
