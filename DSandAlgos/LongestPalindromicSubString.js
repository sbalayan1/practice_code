"babad"
s = "babad"
    //=> start = "b", end = "d"
    //=> none of the below are true so the string is not a palindrome. make a recursive call and move the start and end index in. 
        //start +1
            //=> start = "a", end ="d"
            //=> none of the below are true so the string is not a palindrome. make a recursive call and move the start and end index in. 
                //start +1
                    //=> start = "b", end ="d"
                    //=> the below continues moving the start point until it completes the string, unable to find a palindrom


        //end -1
            //=> start = "b", end ="a"
            //=> none of the below are true so the string is not a palindrome. make a recursive call and move the start and end index in. 
                //end -1
                    //=> start = "b"/0, end ="b"/2
                        //finding the remaining length. Why do we do end - start - 1
                            //end - start gets us the length of the substring (2). 
                        //=> start and end are the same. The remaining length of this potential palindromic substring is 1. The if evaluates to true and the variable c2 evaluates to 3. 

"bb"
//=> start = "b", end = "b"
    //=> elements are the same. The remaining length is 0. The if evaluates to true because remainingLength is 0 and the recursive call returns 0. Our recursive call returns 2 before needing to use variables c1 and c2. 

                    


let longestPalindromicSubstring = (s) => {
    let recursiveCall = (s, start, end) => {
        if (start>end) return 0 //start and end have crossed
        if (start == end) return 1 //start and end are on the same element within the string. The palindrome's length is then 1. 
        if (s[start] === s[end]) {
            let remainingLength = end - start - 1
            if (remainingLength === recursiveCall(s, start+1, end-1)) {
                return remainingLength + 2
            }
        }

        let c1 = recursiveCall(s, start+1, end) //makes recursive calls to move the start index if none of the above are true
        let c2 = recursiveCall(s, start, end-1) //makes recursive calls to move the end index if none of the above are true

        return Math.max(c1, c2)
    }

    //invokes and returns the recursiveCall
    return recursiveCall(s, 0, s.length-1)
}