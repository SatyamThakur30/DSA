const arr1=[0,3,4,31]
const arr2 =[4,6,30]

const mergeArr=[]
var i=0;
var j=0
arr1Item=arr1[0]
arr2Item=arr2[0]

while(arr1Item || arr2Item){
   if(!arr2Item || arr1Item<arr2Item){
       mergeArr.push(arr1Item)
       
       i++
       arr1Item=arr1[i]
       
   }
   else{
       mergeArr.push(arr2Item)
       
       j++
       arr2Item=arr2[j]
   }
    
  
    
   
    
}
console.log(mergeArr);
