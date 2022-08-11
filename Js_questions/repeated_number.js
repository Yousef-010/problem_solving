// write a function that takes an array of integers
// returns the repested numebr 




const repeated = (arr) => {
    let obj = {}
    for (let i = 0; i < arr.length; i++) {
        if (obj[arr[i]]){
            obj[arr[i]] += 1 
        }
        else{
            obj[arr[i]] = 1 
        }
    }
    // Most repeated number 
    most = 0
    num = 0
    for (i in obj ){
        if (obj[i] > most ){
            most = obj[i];
            num  = i
        }
    }
    return num 

    // First repeated number 
    // first = 0
    // for (i in obj ){
    //     if (obj[i] > 1 ){
    //         return i;
    //     }
    // }

    // All repeated numbers
    // allNum = []
    // for (i in obj ){
    //     if (obj[i] > 1 ){
    //         allNum.push(i);
    //     }
    // }
    // return allNum 

} 


let arr = [1, 2, 4, 3, 5, 6, 7, 8, 7, 9]
console.log('====================================');
console.log(repeated(arr));
console.log('====================================');
