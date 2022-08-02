// Write a JavaScript function to split a string and convert it into an array of words. Go to the editor
// without using split function 
// Test Data :
// console.log(string_to_array("Robin Singh"));
// ["Robin", "Singh"]


input_var = 'Robin Singh';
input_var = input_var + ' '
str = '';
arr = [];
for (let i = 0; i < input_var.length; i++) {
    
    if (input_var[i] == ' ' ) {
        arr.push(str);
        str = '';
    }
    else{
        str += input_var[i]
    }
    
}
console.log('====================================');
console.log(arr);
console.log('====================================');