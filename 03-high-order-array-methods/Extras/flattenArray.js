//4. Flattening an Array
//Try with reduce but the problem is by using reduce it only is going one level deep to deflatten so first trying with loop
let arr = [1, [2,3], [[[[4]], 5]], 6]
let fArr = [];

function flatArr(arr) {
  for(let i = 0; i < arr.length; i++) {
    if(Object.prototype.toString.call(arr[i]) !== "[object Array]") {
    console.log(arr[i])
    fArr.push(arr[i])
    } else {
     flatArr(arr[i])
    }
  }
}
flatArr(arr)
console.log(fArr);
