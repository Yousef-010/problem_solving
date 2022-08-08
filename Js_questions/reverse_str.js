//  Reverse a sentence
// Input = ' I am lost' 
// Output = ' lost am I '


const RevrseSentence = (input) => {
    input = input.split(' ')
    str = ''
    for (let i = 0; i < input.length; i++) {
        str = input[i] + ' ' + str 
    }
    return str
}

console.log('====================================');
console.log(RevrseSentence('I am lost'));
console.log('====================================');