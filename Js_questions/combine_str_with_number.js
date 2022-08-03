// weite a function takes a string and returns 
// a string combined withe the number of characters 
// between the first and the last characters

// input :jack 
// output :j2k 


function combine (input) {  
    counter = 0; 
    for (let i = 1; i < input.length-1; i++) { 
        counter++
    }
    return input[0] + counter + input[input.length - 1];
}

console.log('====================================');
console.log(combine('jack'));
console.log('====================================');