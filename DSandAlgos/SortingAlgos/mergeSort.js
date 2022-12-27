const mergeSort = (arr) => {
    if (arr.length <= 1) return arr
    let mid = Math.floor(arr.length/2)
    return mergeArrays(mergeSort(arr.slice(0, mid)), mergeSort(arr.slice(mid, arr.length)))
}

const mergeArrays = (left, right) => {
    let output = []
    while (left.length > 0 && right.length > 0) {
        let elem = left[0] < right[0] ? left.shift() : right.shift()
        output.push(elem)
    }

    return output.concat(left, right)
}

const arr = [4,3,5,89,10, 1000, 0, 1]
console.log(mergeSort(arr))
console.log(mergeSort(['beg','life','i','to','james brown']))



// function sort(array) {
//     if (array.length <= 1){
//       return array
//     }
  
//     let mid = parseInt(array.length/2, 10)
//     return merge(sort(array.slice(0,mid)), sort(array.slice(mid)))
// }
  
// function merge(array1, array2) {
//     let merged = [], arrayIndex1=0, arrayIndex2=0

//     while (arrayIndex1 < array1.length && arrayIndex2 < array2.length) {
//         if (array1[arrayIndex1].length > array2[arrayIndex2].length) {
//         merged.push(array2[arrayIndex2])
//         arrayIndex2 ++
//         } else {
//         merged.push(array1[arrayIndex1])
//         arrayIndex1 ++
//         }
//     }

//     return merged.concat(array1.slice(arrayIndex1), array2.slice(arrayIndex2))
// }
  
  
//   sort(['beg','life','i','to','james brown'])