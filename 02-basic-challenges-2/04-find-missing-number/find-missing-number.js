function findMissingNumber(arr) {
  let max = 0;
  let min = 1;
  let completeNumbersList = [];
  let missingNumber = [];
  //Finding Max and Minimum to find the range

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    } else if (arr[i] < min) {
      min = arr[i];
    }
  }

  //Getting the Complete Numbers ranging from min to max
  for (let i = min; i < max; i++) {
    completeNumbersList.push(i);
  }

  //Now checking and comaparing the incoming arr with Complete List of Numbers
  //If arr includes the number already than continue if not than add in missingNumbers array
  for (let i = 0; i < completeNumbersList.length; i++) {
    if (arr.includes(completeNumbersList[i])) {
      continue;
    } else {
      missingNumber.push(completeNumbersList[i]);
    }
  }
  return missingNumber;
}

module.exports = findMissingNumber;
