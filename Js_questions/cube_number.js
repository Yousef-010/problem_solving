// Check if the the cube of each number in a given 
// is the same to that number 
// Input = 153, 1^3 + 5^3 + 3^3 = 153 
// Output = true 



function cube (input){

    strInput = input.toString()
    len = strInput.length
    output = 0

    for (var i = 0; i < len; i++) {
        output += Math.pow(strInput[i], 3)
    } 
    return output==input? true :false
}


console.log('====================================');
console.log(cube(153));
console.log('====================================');