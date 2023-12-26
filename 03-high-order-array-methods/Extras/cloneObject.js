let cloneObj = {};
let obj = {
  Name: "Kartavya",
  Age: 45,
  Salary: 50000,
  Books: {
    Name: "Harry Potter",
    BookId: 45,
    SubBook: {
      Name: "Dark Phoenix",
      BookId: {
        Name: "Harry Potter",
        BookId: 45,
      },
    },
  },
};
function merge(obj) {
    cloneObj[key] = obj[key];
    if(obj[key] === 'object')
    merge(obj[key])
}
merge(obj);
console.log(cloneObj);
