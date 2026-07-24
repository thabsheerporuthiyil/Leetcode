class Solution:
    def alternatingSum(self, nums: List[int]) -> int:
        odd=0
        even=0
        for i in range(0,len(nums)):
            if i % 2 != 0:
                odd+=nums[i]
            else:
                even+=nums[i]
        res = even - odd
        return res
             