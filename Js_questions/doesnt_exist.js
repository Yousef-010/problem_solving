// given an array, return and array for the elements 
// that doesnt have agreater elements in the right side of them 
// input: [2, 8, 5, 4]
// output : [8, 5, 4]



function is_exsit (input) {
    let newArr = []
    for(let i = 0; i < input.length; i++) {   
        if (input[i+1] < input[i]) {
            newArr.push(input[i])
        }
    } 
    newArr.push(input.length)
    return newArr
}


console.log('====================================');
console.log(is_exsit([2, 8, 5, 4]));
console.log('====================================');