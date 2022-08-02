

// write JS  function to return the sumation between the max and min in an arry 
// wihtout using bulitin functions 
// input: [1, 5, 20, 7, 6, 4]
// output: 22


function calculateSumation (arr){
    max = Math.max(...arr)  
    min = Math.min(...arr)
    counter = 0

    // for (var i=0; i < arr.length; i++) { 
    //     if (arr[i] > max) {
    //         max = arr[i];
    //     }
        
    //     if (arr[i] < min) {
    //         min = arr[i];
    //     }
    // }

    for (i = 0; i < arr.length; i++) {
        if (arr[i] != min && arr[i] != max) {
            counter+=arr[i];
        }
    }
return counter;    

}

console.log('====================================');
console.log(calculateSumation([1, 5, 20, 7, 6, 4])); // 22 
console.log('====================================');