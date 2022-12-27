
const mergeSort = (arr) => {
    if (arr.length <= 1) return arr
    let mid = Math.floor(arr.length/2)
    return mergeArrays(mergeSort(arr.slice(0, mid)), mergeSort(arr.slice(mid, arr.length)))
}

const mergeArrays = (left, right) => {

}

const arr = [5,4,3]
mergeSort(arr)

mid = 1
    //left mergeSort
        arr = [5]
        returns [5]

    //right mergeSort
        arr = [4,3]
        mid = 1

        //left mergeSort
            arr = [4]
            returns [4]
        
        //right mergeSort
            arr = [3]
            returns [3]








 












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