//Print-Pattern for N=3
// 333222111
// 332211
// 321

let printPattern=(num)=>{
    let arr=[]
    for(let i=num;i>0;i--){
        for(let j=num;j>0;j--){
            for(k=i;k>0;k--){
            
                arr.push(j)
                
                }
                
        }
        if(i!=1){
         arr.push('$')
        }
      //console.log('\n');
      
      
    }
    console.log(arr.toString());
    
}

printPattern(4)   //O(n^3)



let printPattern2=(num)=>{
    let arrFinal=[]
    for(let i=num;i>0;i--){
        let arr=new Array(i)
        for(j=num;j>0;j--){
           arr.fill(j,0,i)
           
           console.log(arr.toString() )
           
        }
       
      
        

    }
    
    // return arr
}

console.log(printPattern2(5));
