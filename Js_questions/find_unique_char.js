//  Find all unique characters in a string . 
// input = 'there are a lot of questions here' 
// output = [l, f, q, u, i, n, ]

const FindUnique = (input) => {
    object = {}
    arr = []
    for (let i = 0; i < input.length; i++) {
        if (object[input[i]]){
            object[input[i]] += 1 
        }
        else{
            object[input[i]] = 1
        }
    } 
    for (element in object){
        if(object[element] == 1 ){
            arr.push(element)
        }
    }
    return arr 
}

console.log('====================================');
console.log(FindUnique('there are a lot of questions here'));
console.log('====================================');