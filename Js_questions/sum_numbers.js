// The sum of number that falls between
// the smaller and the largest number in that array
// without using built-in methods 
// Input = [2,5,6,7,9,10,11,15] 
// Output = 119 
 

function MaxAndMin (input){
    max = input[0]
    min = input[0]
    for (var i = 1; i < input.length; i++) {
        if (input[i] > max) {
            max = input[i]
        }
        if (input[i] < min) {
            min = input[i]
        }
    }
    return [max, min]
}

function Sumation(input) {
    output = 0
    for (var i = MaxAndMin(input)[1]; i <= MaxAndMin(input)[0]; i++) {
        output += i
    }    
    return output
}

console.log('====================================');
console.log(Sumation([2,5,6,7,9,10,11,15]));
console.log('====================================');



