
function bubbleSort2(arr) {

    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - i - 1; j++) {
            if (arr[j + 1] < arr[j]) {
                // ES6 way of swapping array elements
                [arr[j + 1], arr[j]] = [arr[j], arr[j + 1]];
            }
        }
    }
 
    return arr;
}

function bubbleSort(arr) {
    // console.time()
    for (let i = 0; i<arr.length; i++) {
        let j = i + 1
        while(arr[i] > arr[j]) {s
            [arr[i], arr[j]] = [arr[j], arr[i]]
            j++
        }

    }
    // console.timeEnd()
    return arr
}



const arr = [5,4,3,2,1]


console.log(bubbleSort(arr))
// console.log(bubbleSort2(arr))