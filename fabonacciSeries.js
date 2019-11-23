let fabRecursive=(num)=>{
  if(num<=1){
      return num
  }

  return fabRecursive(num-1)+fabRecursive(num-2)
}

//console.log(fabRecursive(40));

let fabIterative =(num)=>{
    let ans=[0,1]
   
    for(i=2;i<=num;i++){
        ans.push(ans[i-1]+ans[i-2])
    }
    return ans[num]

}
console.log(fabIterative(8));


