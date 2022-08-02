// 13. Write a JavaScript function to concatenates a given string n times (default is 1). Go to the editor
// Test Data :
// console.log(repeat('Ha!'));
// console.log(repeat('Ha!',2));
// console.log(repeat('Ha!',3));
// "Ha!"
// "Ha!Ha!"
// "Ha!Ha!Ha!"

function repeat(str, num = 1 ) {
    temp = str 
    for (var i = 0; i < num-1 ; i++) {
         str += temp 
    }
    return str
}

console.log('====================================');
console.log(repeat('Ha!', 3));
console.log('====================================');