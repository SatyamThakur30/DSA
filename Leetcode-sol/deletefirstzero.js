//delete zero before non-zero number
const string = "00780000"

const deleteFirstZero=(str)=>{
    let arr=[]
    
    for (let i = 0; i < str.length; i++) {
         arr.push(str[i])
        }
    
    
    for (let j = 0; j< str.length; j++) {
         if(str[j]=='0') {
             arr.shift()
             
         }   
         else{
             return arr.join('')
         }
        
        }
}

console.log(deleteFirstZero(string))