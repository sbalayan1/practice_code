const mergeArrays = (left, right) => {
    const output = []
    while (left.length > 0 && right.length > 0) {
        const elem = left[0] > right[0] ? right.shift() : left.shift()
        output.push(elem)
    }

    return output.concat(...left, ...right)
}

const mergeSort = (arr) => {
    if (arr.length <= 1) return arr 
    const mid = Math.floor(arr.length/2)
    return mergeArrays(mergeSort(arr.slice(0, mid)), mergeSort(arr.slice(mid, arr.length))) 
}

const arr = [4,3,5,89,10, 1000, 0, 1]
console.log(mergeSort(arr))
console.log(mergeSort(['beg','life','i','to','james brown']))

const worstCase = []
    //Time Complexity: O(nlogn)
    //Space Complexity: O(n)

const averageCase = []
    //Time Complexity: O(nlogn)
    //Space Complexity: O(n)

const bestCase = [1,2,3,4,5] //array comes presorted
    //Time Complexity: O(nlogn)
    //Space Complexity: O(n)

    //is a an out of place, stable algorithm because it requires an extra memory allocation for the output (it does not sort in place) and maintains the order if there are duplicate values in the array



//Thinking through time complexity, in all cases we will need to split an array into subarrays
                [1,2,3,4,5]
               /           \
            [1, 2]         [3,4,5]
            /    \          /     \
          [1]    [2]       [3]    [4,5]
                                  /    \
                                [4]    [5]

    //The height of the tree is n-1

    //what is the time complexity of the merge operation? 
        const mergeExample = (left, right) => {
            let output = []
            while (left.length > 0 && right.length > 0) {
                output.push(left[0] > right[0] ? right.shift() : left.shift())
            }

            return output.concat()
        }

        //well the while loop only runs n times. Left and right have equal lengths so in all cases, the loop will execute n times. Therefore the time complexity of the merge operation is O(n)

    // Binary Search that whenever we divide a number into half in every step, it can be represented using a logarithmic function, which is log n and the number of steps can be represented by log n + 1(at most). Since the time complexity of our divide is (log n + 1) and our merge is O(n) our time complexity then becomes O(n*log n) in all cases.