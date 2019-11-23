let arr=[3,5,1,8,99,3,2,4,2]
let length=arr.length

const selectSort=(arr)=>{
  
for(let i=0;i<arr.length;i++){
    let min=i
    let temp =arr[i]
    for(j=i+1;j<arr.length;j++){
      if(arr[j]<arr[min]){
          min=j
      }
    }
    arr[i]=arr[min]
    arr[min]=temp
    

}
return arr
}
console.log(selectSort(arr));

