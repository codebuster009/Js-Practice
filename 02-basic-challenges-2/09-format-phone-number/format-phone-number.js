function formatPhoneNumber(arr) {
  //converting the incoming phone number to an single string
  let numbers = arr.join("");

  let firstPart = numbers.slice(0, 3);
  let secondPart = numbers.slice(3, 6);
  let thirdPart = numbers.slice(6, 10);

  let phoneNo = "(" + firstPart + ")" + " " + secondPart + "-" + thirdPart;

  return phoneNo;
}

module.exports = formatPhoneNumber;
