// write a function that takes an array of integers and key 
// return an array starting at current index 

function shuffeld(arr,idx){
    let newArr=[];
    arr1=arr.slice(0,idx)
    arr2=arr.slice(idx)
    shortest=arr1.length>arr2.length?arr2.length:arr1.length

    for(let i=0;i<shortest;i++){
        newArr.push(arr[idx++])
        newArr.push(arr[i])
    }
    idx-=shortest
    shortest==arr1.length? newArr=newArr.concat(arr2.slice(idx)):newArr=newArr.concat(arr1.slice(shortest))

    return newArr
}
console.log(shuffeld([1, 2, 3, 4, 5, 6,7,8],3))