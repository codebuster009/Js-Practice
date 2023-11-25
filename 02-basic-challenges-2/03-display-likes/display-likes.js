function displayLikes(arr) {
    console.log(arr.length)
   switch(arr.length) {
    case 0 : {
        console.log("No one Likes the Post") 
    }
    break;
    case 1 : {
        console.log(`${arr[0]} has liked your post`)
    }
    break;
    case 2 : {
        console.log(`${arr[0]} and ${arr[1]} have liked your post`)
    }
    break;
    case 3 : {
        console.log(`${arr[0]}, ${arr[1]} and 1 other liked your post`)
    }
    break;
    default: {
        console.log(`${arr[0]}, ${arr[1]} and ${arr.length - 2} other liked your post`)
    }
   }
}

module.exports = displayLikes;
