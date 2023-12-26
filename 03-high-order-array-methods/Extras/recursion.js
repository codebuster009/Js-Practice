//Que:

// Given n 

// Print sum from 1 to n
//wrong way

//Que

// function factorial (num) {
//     if (num === 1) return num;
//     else{
//        return num * factorial(num - 1);
//     }
// }
// console.log(factorial(2));
// let sum = 0

function fibonacci (num) {
    if (num <= 0) return num;
    else {
    prev = num - 1
    parentPrev = num - 2
   return sum = prev + parentPrev
    }
}     

fibonacci(3)

// function fibonacci (num) {
//     console.log(num)
//     for(let i = 0 ; i <=num ; i++) {
//         console.log(i)
//         sum = i + 1
//         let a = sum + i
//         console.log(a)
//         console.log(sum)
//     }
//     return sum
//     }
// fibonacci(3)

// 0 + 1 = 1
// 1 + num + 1 = 2
// 2 + num + 1 = 3 
// 3 + num + 1 = 3

Note Always first look for how to put break statement , trick jo hume pta ha vo break statement mein jaaega suppose hume recursion ex mein 0 , 1 , 2 ye pta  tha