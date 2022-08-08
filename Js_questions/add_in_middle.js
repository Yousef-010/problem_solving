//  Add a number to the middle of a numbers array. 
// input -> arr = [1, 2, 3, 4, 5, 6] , num = 10
// output = [1, 2, 3, 10, 4, 5, 6]

const AddInMiddle = (arr, num) => {
    mid = arr.length / 2 
    // num = [num]
    // left = arr.slice(0, mid).concat(num)
    // right = arr.slice(mid, arr.length)
    // output = left.concat(right)
    
    output = []
    for (let left = 0; left < mid; left++) {
        output.push(arr.shift())
    }

    output.push(num)
    console.log(arr);

    for (let right = 0; right < mid; right++) {
        console.log(right)
        output.push(arr.shift())
    }
    
    return output
}

console.log('====================================');
console.log(AddInMiddle([1, 2, 3, 4, 5, 6], 10));
console.log('====================================');