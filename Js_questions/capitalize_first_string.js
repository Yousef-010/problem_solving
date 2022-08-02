// 8. Write a JavaScript function to capitalize the first letter of each word in a string.
// Test Data :
// console.log(capitalize('js string exercises'));
// "Js String Exercises"


// Solution 1
// function capitalize(str) {
//     return str
//      .split(" ")
//      .map(element=>element[0].toUpperCase() + element.substr(1))
//      .join(" ")
// }


// Solution 2
function capitalize(str) {
    arr=str.split(" ");
    for(let i=0;i<arr.length;i++){
        arr[i]=arr[i][0].toUpperCase() + arr[i].substr(1);
    }
    return arr.join(" ")
}

console.log('====================================');
console.log(capitalize('js string exercises'));
console.log('====================================');
