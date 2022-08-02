// Write a JavaScript function to reverse string 

input_name = 'ahmad'
input = input_name.split(''); 
temp = '';

for (i = 0; i < input.length/2  ; i++) {
    
    temp = input[i]
    input[i] = input[input.length - i-1] 
    input[input.length - i-1] = temp 
    
}

console.log('====================================');
console.log(input.join(''));
console.log('====================================');
