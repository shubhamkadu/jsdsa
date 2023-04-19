// we have to find the how many times short string are there in the large string

function naiveSearch(long,short){
    var count = 0
    for(var i=0;i<long.length;i++){
        for(var j=0;j<short.length;j++){
            if(short[j] !== long[i+j]) break
            if(j===short.length-1) count++
        }
    }
    return count
}

naiveSearch("lorie loled","lo") // 2
