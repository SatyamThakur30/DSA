class node{
    constructor(value){
      this.value=value
      this.next=null 
    }
}

class myQueue{
    constructor(){
        this.first=null
        this.last=null
        this.length=0
    }

    enqueue(value){
        let newNode=new node(value)
        if(this.length===0){
            this.first=newNode
            this.last=this.first
        
        }
        else{
            this.last.next=newNode
            this.last=newNode
        }
        this.length++
    }

    dequeue(){

        if(this.length===0){
            console.log("Queue is empty");
            
        }
        else if (this.length==1){
            return this.first
        }
        else{
            let dequeueEle= this.first
            let firstToUpdate= this.first.next
            this.first=firstToUpdate
            return dequeueEle.value

        }
        this.length--

    }

    printQueue(){
        let currentNode=this.first
        let Queue=[]
        while(currentNode!=null){
           Queue.push(currentNode.value)
           currentNode=currentNode.next
        }
        return Queue
    }

    peek(){
        return this.first.value
    }
}


let queue = new myQueue()
queue.enqueue(10)
queue.enqueue(1)
queue.enqueue(11)
queue.enqueue(13)
queue.enqueue(17)
queue.dequeue()
console.log(`Peek value is ${queue.peek()}`);
console.log(queue.printQueue());




