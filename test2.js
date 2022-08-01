function subArr(arr){
    let sum=0
    let current=arr[0]
    let final=arr[0]
    for(let i=1;i<arr.length;i++){
    
        if(current+arr[i]<arr[i]){
          return current
        
        }
        
        else{
           current+=arr[i]
        }
        
        if(final<current){
           final=current
        }
    }
 return final

}

console.log(subArr([1,2,3,-2,5]))