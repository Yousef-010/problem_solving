// "1.Repeated letters in a string without using built-in methods 
// Input = weeyoooz 
// Output = ee - 2 , o-3  


function fillObj(input){
    obj = {}
    for (var i = 0; i < input.length; i++) {
        if (obj[input[i]]){
            obj[input[i]] += 1
        }
        else {  
            obj[input[i]] = 1
        }
    }
    return obj 
}

function calculateRepeatedLetter(input) {
    output = ''
    object = fillObj(input)
    for ( i in object){
        if (object[i] > 1 ){
            output += i + '-' + object[i] + ' '
        }
    }
    return output
}

console.log('====================================');
console.log(calculateRepeatedLetter('weeyoooz'));
console.log('====================================');