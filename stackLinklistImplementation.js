class node{
    constructor(value){
        this.value=value,
        this.next=null
    }
}

class stack{
    constructor(){
        this.top=null,
        this.bottom=null,
        this.length=0
    }
    push(value){
        let newNode=new node(value)
        if(this.length==0){
            this.top=newNode
            this.bottom=this.top
           }
        else{
            let bottomNodes=this.top
            this.top=newNode;
            this.top.next=bottomNodes
             }
        this.length++
    }


    peek(){
        return this.top
    }


    pop(){
        if(this.length==0){
            alert("stackunderflow")
        }
        else if(this.length==1){
          this.bottom=null
          this.top=null
          this.length--
        }
        else{
        let popedEle=this.top
        this.top=this.top.next

        this.length--
        }

        
    }

}



let myStack=new stack()
myStack.push(10)
myStack.push(1)
myStack.push(4)

myStack.pop()

console.log(myStack);
console.log(myStack.peek());

