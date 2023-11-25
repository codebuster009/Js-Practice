function titleCase(str) {
  let capitalized = ""
  string = str.split(' ')
  console.log(string)
for(let i = 0 ; i < string.length ; i++) {
  string[i] = string[i][0].toUpperCase() + string[i].slice(1)
}
return string.join(' ')
}
module.exports = titleCase;
