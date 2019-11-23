class myArray{
    constructor(){
        this.length=0,
        this.data={}
    }
    get(index){
        this.data=this.data[index]
    }

    push(item){
        this.data[this.length]=item
        this.length++
    }

    pop(){
        const item = this.data[this.length-1]
        delete this.data[this.length-1]
        this.length--
     }
     delete(index){
         for(let i=index;i<this.length;i++){
             this.data[i]=this.data[i+1]
         }
         delete this.data[this.length-1]
     }
}


arr=new myArray()
arr.push('hi')
arr.push('there')
arr.push('satyam')
arr.pop()
arr.delete(1)
arr.push('this')
arr.push("is")
arr.push('myArray')
arr.push('shivam is here')
arr.pop()
console.log(arr);

