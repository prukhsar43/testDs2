function closestSum(arr,target){
    let sum=0
  
    let newArr=[]
     for(let i=0;i<arr.length;i++){
        for(let j=i+1;j<arr.length;j++){
          
             sum=arr[i]+arr[j]
             console.log(sum)
             
             if(sum<=target){
               newArr.push(sum)
             }
        }
     }
  newArr.sort()
 console.log(newArr[newArr.length-1])
 }
 
 closestSum([2, 2, 7, 1, 5],10)