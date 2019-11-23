//Given an array =[2,5,1,2,3,5,1,2,4]
//It should return 2

//Given an array = [2,1,1,2,3,3,5,1,2,4]
//It should return 1

//Given an array = [2,3,4,5]
//it should return Undefined

const arr=[2,1]
function findFirstRecursive(ar){
    for (let i =0;i<ar.length;i++){
        for(let j=0;j<ar.length;j++){
            if(ar[i]===ar[j]){
                return ar[i]
            }
            
        }
    }
    return undefined
}

console.log(findFirstRecursive(arr));

const findFirstRecursive2 =(arr)=>{
    let map={}
    for(let i=0;i<arr.length;i++){
        if(map[arr[i]] !==undefined){
            return arr[i]
        }
        else{
            map[arr[i]]=i
        }
        
    }
    return undefined
    
    
}


console.log(findFirstRecursive2(arr));
