let arr=[3,5,1,8,99,3,2,4,2]
let length=arr.length

const bubbleSort=(arr)=>{
    for(let i=0;i<arr.length;i++){
        for(let j=0;j<arr.length;j++){
            if(arr[j]>arr[j+1]){
                let temp=arr[j]
                arr[j]=arr[j+1]
                arr[j+1]=temp
            }
            // console.log(arr);
            
        }
        
    }
    return arr
}

console.log(bubbleSort(arr));
