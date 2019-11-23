let arr = ["a","b","c","d"]
let arr2=[3,5,2,7,6]
arr.push("e")
console.log(arr);

arr.unshift("s")
console.log(arr);

arr.pop()
console.log(arr);


arr.splice(2,0,"inserted")
console.log(arr);

arr=arr.slice(2,4)
console.log(arr);


arr2=arr2.sort((a,b)=>{
    return b-a
})
console.log(arr2);

const kthlargest =(k)=>{
    if(k>arr2.length){
        console.log("out of bound!");
        
    }
    return arr2[k-1]  
}

console.log(kthlargest(5));   //o(1)
