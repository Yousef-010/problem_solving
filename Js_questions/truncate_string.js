// Write a JavaScript function to extract a specified number of characters from a string. Go to the editor
// without using bulit in functiona
// Test Data :
// console.log(truncate_string("Robin Singh",4));
// "Robi"


function truncate_string(str, num) {
    new_str = '';
    for (var i = 0; i < num; i++) {
        new_str += str[i];
    }
    console.log(new_str);

}
truncate_string("Robi",4);