function isPalindrome(str) {
reversedString = str.toLowerCase().split('').reverse().join('')
let originalString = str.toLowerCase().split('').join('')
if (reversedString === originalString) {
   return "It is an Palindrome"
} else {
    return "It is not Palindrome"
}

}
module.exports = isPalindrome;