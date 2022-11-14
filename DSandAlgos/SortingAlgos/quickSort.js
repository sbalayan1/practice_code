function partition(arr, start, end) {
    let pivot = arr[start]
    let swapIdx = start

    for (let i = start+1; i<=end; i++) {
        if (arr[i] > pivot) {
            swapIdx ++
            [arr[swapIdx], arr[i]] = [arr[i], arr[swapIdx]]
        }
    }

    [arr[start], arr[swapIdx]] = [arr[swapIdx], arr[start]]

    return swapIdx
}

function quickSort(arr, left, right) {
    if (left < right) {
        let pivotIndex = partition(arr, left, right)
        quickSort(arr, left, pivotIndex - 1)
        quickSort(arr, pivotIndex+1, right)
    }

    return arr
}

let arr = [5,4,3,2,1]

console.log(quickSort(arr, 0, arr.length-1))