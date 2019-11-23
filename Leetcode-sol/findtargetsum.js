// Given an array of integers, return indices of the two numbers such that they add
//  up to a specific target.

// You may assume that each input would have exactly one solution, and you may not
//  use the same element twice.
const nums= [3,3,7,9]

const targetSum =(array=[],target)=>{
   let map={}
   let sum=0
   let secondEle=null
   for (let i = 0; i < array.length; i++) {
    map[array[i]]=i
       
   }
   console.log(map[3]);
   
  
   for (let j = 0; j < array.length; j++) {
       sum=target-array[j]
       if(sum in map && map[sum]!=j ){
          secondEle=array.lastIndexOf(sum)
          return [j,secondEle]
       }
     
       
   }
  


}
console.log(targetSum(nums,6)) //O(n)
