function selection(arr){
    for(let i=0; i<arr.length;i++){
        var lowest = i
        for(let j=i+1; j<arr.length;i++){
           if(arr[j]<arr[lowest]) lowest = j
        }

        if(i !==lowest){
            var temp = arr[i]
            arr[i] = arr[lowest]
            arr[lowest]=temp
        }
    }
    return arr
}
selection([3,4,74,2,6,7])


// another version

function selectionSort(arr){
    const swap = (arr,idx1,idx2)=>
       ([arr[idx1],arr[idx2]]=[arr[idx2],arr[idx1]])

       for(let i=0; i<arr.length;i++){
        var lowest = i
        for(let j=i+1; j<arr.length;i++){
           if(arr[j]<arr[lowest]) lowest = j
        }

        if(i !==lowest) swap(arr,i,lowest)
           
    }

    return arr 
    
}



