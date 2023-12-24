//4. Flattening an Array 
//Try with reduce but the problem is by using reduce it only is going one level deep to deflatten so first trying with loop
let arr = [1, [1,2], [[1,2]], 3]
let fArr = [];
let fArr2 = [];
function flatArr(arr) {
    if (fArr.length = 0) {
    for (let i = 0; i < arr.length; i++) {
       fArr = fArr.concat(arr[i])
     }
    } else{
        for (let i = 0; i < arr.length; i++) {
            fArr2 = fArr2.concat(arr[i])
         }
    }
}

flatArr(arr);

for (let i = 0; i < fArr.length; i++) {
    if (Object.prototype.toString.call(fArr[i]) ==='[object Array]') {
      flatArr(fArr);
    } else{
      continue;
    }
  }
  console.log(fArr)
