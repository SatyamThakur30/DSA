//10-->5-->6

class linkedList{
    constructor(value){
        this.head={
            value:value,
            next:null
        }
        this.tail=this.head
        this.length=1
    }
    append(item){
        const newNode={
            value:item,
            next:null
        }
        this.tail.next=newNode
        this.tail=newNode
        this.length++
        

    }

    prepend(item){
        const newNode={
            value:item,
            next:this.head
        }
        this.head=newNode
        this.length++
    }
    printList(){
        const print =[]
        let currentNode=this.head
        while(currentNode !==null){
            print.push(currentNode.value)
            currentNode=currentNode.next
        }
        return print
    }
    insert(index,value){
        const newNode={
            value:value,
            next:null
        }
        let count=0
        let currentNode=this.head
        if(index>=this.length){
            this.append(value)
        }
        else if(index==0){
            this.prepend(value)
        }
        else{
            while(count<index-1){
                currentNode=currentNode.next
                count++
            }
            let rightNodes = currentNode.next
            newNode.next=rightNodes
            currentNode.next=newNode
          }
        
    }
   deleteNode(index){
     if(index>=this.length){
         console.log("no node exist");
         
     }
     else if(index==0){
      this.head=this.head.next
      this.length--
     }
     else{
        let currentNode=this.head
        let count=0
         while(count<=index-1){
             currentNode=currentNode.next
             count++
         }
         let leftNodes = currentNode
         let nodeToDelete =currentNode.next
         let rightNodes= nodeToDelete.next
         leftNodes.next=rightNodes
         this.length--
      
     }
   }

   reverseLinklist(){
      
   }
}

let linklist= new linkedList(10)
linklist.append(5)
linklist.append(16)
linklist.append(1)
linklist.prepend(9)
linklist.insert(19,900)
linklist.insert(0,700)
linklist.deleteNode(0)
linklist.reverseLinklist()
console.log(linklist.printList());

