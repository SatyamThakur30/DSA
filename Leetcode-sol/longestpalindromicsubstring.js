// Given a string s, find the longest palindromic subsing in s.
//  You may assume that the maximum length of s is 1000.
const s="abb"
// console.log(s.slice(0,2),s.length);


const palindrom=(s="")=>{
    let temp=""
    let result=""
    let count=0
    if (s.length<=1) {
        return s
    }
    for (let i = 0; i <=s.length; i++) {
        for (let j = s.length; j >i+1; j--) {
             temp=s.substr(i,j)
             if(temp==temp.split('').reverse().join('') && count<(temp.length)){
                result= temp
                count=result.length
             }
           
          
             }
             
         
    }
    if(count==0){
        return s[0]
    }
    return result 
    
}

console.log(palindrom(s));





