// Que:

// Given n 

// Print sum from 1 to n
//wrong way
let n = 10
let sum = 0
function add (num) {
    let prev = num - 1
    console.log(prev)
    sum += num + prev
    console.log(sum)
    if(prev === 0) {
      console.log( "Thats It") 
    } else {
        add(prev)
    }
}
add(10)
console.log(sum)

//way 1
Add(num) {
    If(num === 1) return 1;
 
    return num + Add(num-1)
 }

//way 2
let n = 10;
let sum = 0;

function add(num) {
    sum += num; // Add only the current number to the sum
    console.log(num);
    console.log(sum);

    let prev = num - 1;

    if (prev === 0) {
        console.log("Thats It");
    } else {
        add(prev);
    }
}

add(n);
console.log(sum);
