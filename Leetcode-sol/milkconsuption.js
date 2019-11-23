const countryPop =[40,60,19,18,98]
const milkCon =[120,160,60,80,500]

const calculate =(arr1=[],arr2=[])=>{
    let arrTemp=[]
    let track=[]
    let tempArr=[]
    let map={}
    for(let i=0;i<arr1.length;i++){
        let result= arr1[i]/arr2[i]
        arrTemp.push(result)
    }
    tempArr=arrTemp
    //console.log(tempArr);
    
   for (let j = 0; j < arrTemp.length; j++) {
        if(arrTemp[j] in map){
          track.push(j)
        }
        else{
            map[arrTemp]=j
        }
       
   }
  
   let finalResult= arrTemp.sort((a,b)=>b-a)[0]
   console.log(tempArr);
   
   return tempArr.indexOf(finalResult)
}

console.log(calculate(milkCon,countryPop));
