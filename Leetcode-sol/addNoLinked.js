// You are given two non-empty linked lists representing two non-negative integers.
//  The digits are stored in reverse order and each of their nodes contain a single digit.
//  Add the two numbers and return it as a linked list.

// You may assume the two numbers do not contain any leading zero, except the number 0 
// itself.

class linklist{
    constructor(){
        this.head={
            data:null,
            link:null
        }
        this.tail=this.head
        this.length=0
       
    }
    append(value){
        const newNode={
            data:value  ,
            link:null
        }
        if(this.length==0){
            this.head=newNode
        }
        this.tail.link=newNode;
        this.tail=newNode
        this.length++
    }

    print(){
       let currentNode= this.head;
        while(currentNode){
          let ele=currentNode.data
          console.log(ele);
          
          currentNode=currentNode.link  
        }
    }
}

const l1= new linklist()

l1.append(5)
// l1.append(8)

l1.print()

console.log("******************************");

const l2= new linklist()

l2.append(5)

l2.print()


//console.log(l2);
const findSum =(l1,l2)=>{
    let currentNodel1=l1.head
    let currentNodel2=l2.head
    let carry =0
    let data1=0
    let data2=0
    let l3= new linklist()
    while (currentNodel1 || currentNodel2) {
        
        data1=currentNodel1?currentNodel1.data:0
        data2=currentNodel2?currentNodel2.data:0
       let value= data1+data2+carry
       carry=parseInt(value/10)
       value=value%10
       l3.append(value)
       currentNodel1=currentNodel1.link?currentNodel1.link:0
       currentNodel2=currentNodel2.link?currentNodel2.link:0
    }
    if(carry)
      l3.append(carry)
    
   return l3
    
}

console.log(findSum(l1,l2));