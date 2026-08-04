class Solution:
    def findMissingElements(self, nums: List[int]) -> List[int]:
        left = 0
        right = 1
        res=[]
        nums.sort()
        while right < len(nums):
            if nums[right] - nums[left] != 1:
                nums.insert(left+1,nums[left]+1)
                res.append(nums[left]+1)
                left+=1
                right+=1
            else:
                left+=1
                right+=1
        return res