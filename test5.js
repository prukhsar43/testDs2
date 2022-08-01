function isomorphic(str1,str2){
    let strind=''
    let strind2=''
    for(let i=0;i<str1.length&&i<str2.length;i++){
         
         strind+=str1.indexOf(str1[i]) 
         strind2+=str2.indexOf(str2[i])
       
    }
 
    
   
   if(strind==strind2){
     return true 
   }
   
   else{
     return false
   }
 }
 
 console.log(isomorphic('aab','xby'))