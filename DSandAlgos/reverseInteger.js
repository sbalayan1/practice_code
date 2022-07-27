//handles cases where the number is negative or when the reversed goes beyond the 32bit integer range

let reverseInteger = (x) => {
    let reversed = 0, absX = Math.abs(x)
    while(absX>0) {
        reversed = (reversed*10) + (absX%10)
        absX = Math.floor(absX/10)
    }

    if (reversed > 2**31-1 || -reversed < -(2**31)) return 0
    return x<0 ? -reversed : reversed
}