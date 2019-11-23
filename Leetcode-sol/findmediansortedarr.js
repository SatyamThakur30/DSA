const nums1 = [1, 3]
const nums2 = [2,5]

const findMedian=(nums1=[],nums2=[])=>{
    let mergeArr=nums1.concat(nums2)
    
    mergeArr.sort((a,b)=>{
        return a-b
    })
    if(mergeArr.length%2!=0){
         
        return mergeArr[Math.floor(mergeArr.length/2)]
    }
    else{
       let uper=mergeArr.length/2
       let low = mergeArr.length/2-1
       console.log(uper,low);
       return (mergeArr[uper]+mergeArr[low])/2
    }
    
}

console.log(findMedian(nums1,nums2));
