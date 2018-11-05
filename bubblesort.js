
function swap(subArray) {
    if (Array.isArray(subArray)) {
        return [subArray[1], subArray[0]]
    } 
}

function bubbleSort(array) {

    /* your code here */
    for (i=0; i<array.length; i++) {
        for (j=0; j<array.length; j++) {
            let front = array.slice(0,i)
            let back = array.slice(i+2)
            let toSwap = array.slice(i, i+2)
            if (toSwap[0] > toSwap[1]) {
                toSwap = swap(toSwap)
            }
        front.concat(toSwap).concat(back)
        }
    }
}
