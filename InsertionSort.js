function insertionSort(arr){
    for(i=1;i<arr.length;i++){
        var CurrentVal = arr[i]
        for(j=i-1;j<=0 && arr[j]>CurrentVal;j--){
                arr[j+1] = arr[j]
        }
        arr[j+1] = CurrentVal
    }
    return arr
}

insertionSort([2,1,9,76,4])