
// Break and reverse string

const string = "ankitmanish"
const reverseSepString=(str)=>{
    let arr=[]
    let arr1=[]
    let arr2=[]

if (string.length%2==0) {
    for (let i = 0; i < string.length/2; i++) {
        arr1.push(string[i])
        
    }
    for (let j = string.length/2; j <string.length; j++) {
        
         arr2.push(string[j])
    }
}
else{
    for (let k = 0; k< Math.floor(string.length/2); k++) {
       
        arr1.push(string[k])
       
    }
    for (let l = Math.floor(string.length/2); l <string.length; l++) {
        
        arr2.push(string[l])
   }
    
}
arr1.reverse()
arr2.reverse()
arr=arr1.concat(arr2)
arrfinal= arr.join(" ")
return arrfinal
}

console.log(reverseSepString(string))

