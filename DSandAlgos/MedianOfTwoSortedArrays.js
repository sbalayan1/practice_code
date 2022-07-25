// Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays. The overall run time complexity should be O(log (m+n)).

var findMedianSortedArrays = function(nums1, nums2) {
    let p1 = 0, p2 = 0, array = []
    while (p1<nums1.length || p2<nums2.length) {
        if (p1 === nums1.length || nums1[p1]>nums2[p2]) {
            array.push(nums2[p2])
            p2++
            continue
        }
        
        if (p2 === nums2.length || nums1[p1]<nums2[p2]) {
            array.push(nums1[p1])
            p1++
            continue
        }


        array.push(nums1[p1],nums2[p2])
        p1++
        p2++
    }
    

    if (array.length % 2 === 0) {
        let left = Math.floor(array.length/2) - 1, right = left + 1
        return (array[left] + array[right])/2
    } 
        
    return array[Math.floor(array.length/2)]
};

 