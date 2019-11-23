// reverse string
let str='i luv to code'

let reverseString=(string)=>{
    let arr= str.split(" ")
    let arrReverse=[]
    
    for(let i=arr.length-1;i>=0;i--){
     arrReverse.push(arr[i])
    }
    str= arrReverse.join(" ")
   return str
}

console.log(reverseString(str));

