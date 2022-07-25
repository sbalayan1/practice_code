def twoSum(self, nums: List[int], target: int) -> List[int]:
    hash = {}
    for index, element in enumerate(nums):
        diff = target - element
        if diff in hash and hash[diff] != index: return [index, hash[diff]]
        hash[element] = index
