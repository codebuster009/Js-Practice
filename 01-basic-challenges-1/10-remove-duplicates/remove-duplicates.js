function removeDuplicates(arr) {
  let duplicates = arr;
  let unique = [];
  for (let i = 0; i < duplicates.length; i++) {
      if (unique.includes(duplicates[i])) {
        continue;
      } else {
        unique.push(duplicates[i]);
      }
  }
  return unique;
}
module.exports = removeDuplicates;

//check solution