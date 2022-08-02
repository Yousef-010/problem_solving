// [1, [2, [ [3, 4], 5], 6]]
// [1, 2, 3, 4, 5, 6]

arr=[1, [2, [ [3, 4], 5], 6]]
newArr=[]
x=arr.join(',')
for(let i=0;i<x.length;i++){
    if(x[i]!=","){
        newArr.push(Number(x[i]))
    }
}


console.log(newArr)