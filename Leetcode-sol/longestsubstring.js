// Longest Substring Without Repeating Characters

const string="abcb"
const fun=(s=String)=>{
    let map={}
    let length=0
    let tempLen=0
    

  if(s.length==0){
      length=0
      return length
  }
//    if(s.length==2 &&(s[0]!=s[1])){
//       return 2
//   }

  else
  {
      
    for (let i = 0; i< s.length; i++) {
         map[s[i]]=i
    for (let j = i+1; j < s.length; j++) {
         
          if(s[j] in map ){
              console.log(map);
              
              if(length<tempLen){
                  length=tempLen
              }
              map={}
              tempLen=0
            break; 
          }
          else 
          {
              map[s[j]]=j
              
              tempLen=tempLen+1
             }

         if(j==s.length-1 && tempLen>length){
             length=tempLen
         }
        
        
    }
     
  }
  return length+1
}
}

console.log(fun(string));
