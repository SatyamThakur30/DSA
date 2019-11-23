let factRecursive=(number)=>{
    let answer=0
     if(number<=2){
        answer= number    
         return answer
     }
     
     return answer=number*factRecursive(number-1)
     


}

let factIterative=(number)=>{
    let answer=1
    if(number<=2){
        answer=number
        return answer
    }
    
    for(i=2;i<=number;i++){
         answer=answer*i
       
    }
    return answer
}
 const num=6
console.log(factRecursive(num));


console.log(factIterative(num));
