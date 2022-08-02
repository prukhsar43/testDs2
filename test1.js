function sort(arr){
 
      for(let i=0;i<arr.length;i++){
          
         for(let j=i+1;j<arr.length;j++){
           if (arr[i]>arr[j])
          { 
            let temp=arr[i]
            arr[i]=arr[j]
             arr[j]=temp
              
          }
         }
        
      }
 console.log(`min is ${arr[0]}`)
 console.log(`max is ${arr[arr.length-1]}`)
 
 }
 
 sort([9,2,1,5,3,8])
 
