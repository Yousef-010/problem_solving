//  Get all prim numbers between 1-100  
// 100 
// 


function Prime(input){
    output = []
    for(var i=1; i<=input; i++){
        checker = 0
        for (var j=2; j<i; j++){
            if(i % j == 0){
                checker = 1
                break
            }
        }

        if (checker == 0 && i > 1 ){
            output.push(i)
        }
    }
    return output
}

console.log('====================================');
console.log(Prime(100));
console.log('====================================');