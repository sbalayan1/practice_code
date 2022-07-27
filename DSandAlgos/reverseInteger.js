//handles cases where the number is negative or when the reversed goes beyond the 32bit integer range

//Things to think about!
    //is the number greater than a 32 bit integer?
    //what if x is -321? The inverse or reversed integer should be -123

let reverseInteger = (x) => {
    let reversed = 0, absX = Math.abs(x)
    while(absX>0) {
        reversed = (reversed*10) + (absX%10)
        absX = Math.floor(absX/10)
    }

    if (reversed > 2**31-1 || -reversed < -(2**31)) return 0
    return x<0 ? -reversed : reversed
}