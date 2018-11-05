function split(wholeArray) {
    /* your code here to define the firstHalf and secondHalf arrays */
    console.log('wholeArray', wholeArray)
    let arrLength = wholeArray.length
    let firstHalf = wholeArray.slice(0,arrLength/2)
    let secondHalf = wholeArray.slice(arrLength/2)

    return [firstHalf, secondHalf];
}

function merge(arr1, arr2) {
    newArr = []
    while (arr1.length !== 0 && arr2.length !== 0) {
        if (arr1[0] < arr2[0]) {
            newArr.push(arr1.shift())
            console.log('left<right', newArr)
        } else {
            newArr.push(arr2.shift())
            console.log('right<left',newArr)
        }
    }
    while (arr1.length === 0 && arr2.length !== 0) {
        newArr.push(arr2.shift())
        console.log('left empty', newArr)
    }
    while (arr2.length === 0 && arr1.length !== 0) {
        newArr.push(arr1.shift())
        console.log('right empty', newArr)
    }
    console.log('done', newArr)
    return newArr
}

function mergeSort(array) {
    /* your code here */
    merge(split(array))
    // for (let i = 0; i < array.length; i++) {
    // }
}