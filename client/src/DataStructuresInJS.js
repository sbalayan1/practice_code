// Find Maximum in sliding window 

// The algorithm uses the deque data structure to find the maximum in a window. A deque is a double-ended queue in which push and pop operations work in O(1)O(1) at both ends. 

let findMaxSlidingWindow = (arr, window_size) => {
    let result = []

    if (arr.length === 0 || window_size > arr.length) {
        return result
    }

    // window represents the deque
    // As we can see, the deque stores elements in decreasing order. The front of the deque contains the index for the maximum value in that particular window.

    let window = []

    // find max for first window
    // At the start of the algorithm, we search for the maximum value in the first window. The first element’s index is pushed to the front of the deque
    for (let i = 0; i<window_size; i++) {

        // If an element is smaller than the one at the back of the queue, then the index of this element is pushed in and becomes the new back. If the current element is larger, the back of the queue is popped repeatedly until we can find a higher value, and then we’ll push the index of the current element in as the new back.
        while(window.length > 0 && arr[i] >= arr[window[window.length - 1]]) {
            window.pop()
        }

        window.push(i)
    }

    result.push(arr[window[0]])

    for (let i = window_size; i <arr.length; i++) {
        // remove all numbers that are smaller than current number from the tail of list
        while (window.length > 0 && arr[i] >= arr[window[window.length - 1]]) {
            window.pop()
        }

        //remove first number if it doesn't fall in the window anymore
        if (window.length > 0 && window[0] <= i-window_size) {
            window.shift()
        }

        window.push(i)
        result.push(arr[window[0]])
    }

    return result
}

// Time complexity: O(n) -> every elemnt is pushed and popped from the deque in a single traversal. 
// Space complexity: O(1) -> The memory complexity of this solution is linear, O(w)O(w), where ww is the window size in this case.