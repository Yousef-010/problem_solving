function perfectly(num){
    let temp = 0 

    for (let i=1; i < num; i++) {
        if (num % i == 0) {
            temp += i 
        }}

    if (temp == num) {
        if (temp != 0) {
            return true
    }}

    return false
}

function between(num){
    arr = []

    for (var i = 1; i < num; i++) { 
        if (perfectly(i)){
            arr.push(i)
        }}

    return arr
}

console.log('====================================');
console.log(between(500));
console.log('====================================');

