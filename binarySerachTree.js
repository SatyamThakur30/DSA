class node{
    constructor(value){
        this.left=null 
        this.value=value
        this.right=null
    }
}

class BST{
    constructor(){
        this.root=null
    }

    insert(value){
        let newNode=new node(value)
        if(this.root===null){
            this.root=newNode
        }
        else{
            let currentNode=this.root
            if(newNode.value>this.root.value){
                
                 while(currentNode.right!=null){
                     currentNode=currentNode.right
                 }
                 currentNode.right=newNode
            }
            else{
                while(currentNode.left!=null){
                    currentNode=currentNode.left
                }
                currentNode.left=newNode

            }
        }
    }

breathSearch(){
    let currentNode= this.root;
    let list =[];
    let queue=[];
    queue.push(currentNode)
    while(queue.length>0){
        currentNode=queue.shift();
        list.push(currentNode.value)
        if(currentNode.left){
          queue.push(currentNode.left)
        }
        if(currentNode.right){
            queue.push(currentNode.right)

        }
    }
   return list   
}
}

let binarySearchTree = new BST()

binarySearchTree.insert(9)
binarySearchTree.insert(4)
binarySearchTree.insert(6)
binarySearchTree.insert(20)
binarySearchTree.insert(170)
binarySearchTree.insert(15)
binarySearchTree.insert(1)
console.log(JSON.stringify(binarySearchTree));
console.log(binarySearchTree.breathSearch());

