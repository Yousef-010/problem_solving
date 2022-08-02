// write a function that takes an array of integers and return unique elements in it 
// input: [1, 3, 7, 8, 3, 1, 8, 11]
// output: [7, 11]


function unique(arr) {
    let newArr = []
    let obj = {}
    for (let i = 0; i < arr.length; i++) {
        if (obj[arr[i]]){
            obj[arr[i]] +=1 
        }
        else {
        obj[arr[i]] = 1
        }
    }

    for ( i in obj ) {
        if (obj[i] == 1){
            newArr.push(Number(i));
        }
    }
    
    return newArr
}

console.log('====================================');
console.log(unique([1, 3, 7, 8, 3, 1, 8, 11]));
console.log('====================================');
