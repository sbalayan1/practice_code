#think => Binary Search

def firstBadVersion(n):
    left = 0
    right = n
    
    while left <= right:
        mid = (left+right)//2
        if isBadVersion(mid) == False:
            left=mid+1
        else:
            right=mid-1
            
    return left
        