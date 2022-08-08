// Find the count of each character in a string 
// without using any built-in methods. 

const FindCount = (input) => {
    object = {}
    str = ''
    for (let i = 0; i < input.length; i++) {
        if (object[input[i]]){
            object[input[i]] += 1 
        }
        else{
            object[input[i]] = 1
        }
    } 
    for (element in object){
        str += `The Count of ${element} is ${object[element]}`+'\n'
    }
    return str 
}

console.log('====================================');
console.log(FindCount('test data'));
console.log('====================================');