class Node{
    constructor(data){
      this.data=data
      this.next=null
    }
  }
  
  class LinkList{
      constructor(){
        this.head=null
        this.tail=null
      }
    
    addval(ele){
    
      var newnode=new Node(ele)
      if(this.head==null){
      this.head=newnode
      this.tail=newnode
      }
      else{
        this.tail.next=newnode
        this.tail=newnode
      
      }
      
      
      
    }
    
    printval(){
       let temp=this.head
       
       while(temp){
         console.log(temp.data)
         temp=temp.next
       }
    }
    
    reverse(){
      let curr=this.head
      let prev=null
      let next=null
      
      while(curr!=null){
         next=curr.next
         curr.next=prev
         prev=curr
         curr=next
      }
    return this.head=prev
    
    }
    
    
  }
  var ll=new LinkList()
  ll.addval(9)
  ll.addval(2)
  ll.addval(3)
  ll.addval(3)
  ll.addval(2)
  ll.addval(9)
  let b=ll.tail
  
   
  let a= ll.reverse()
  
   
   if(a==b){
     console.log(true)
   }
    else{
    console.log(false)
    }   
   
   
   
    
  //ll.printval()