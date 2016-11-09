function sortArr(arr,type) {

    if(type=='asc')
        return arr.sort((a,b) => a-b);
    return arr.sort((a,b) => -(a-b));
}
console.log(sortArr([14, 7, 17, 6, 8], 'asc'));