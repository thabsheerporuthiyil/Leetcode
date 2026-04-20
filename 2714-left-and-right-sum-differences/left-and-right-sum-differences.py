class Solution:
    def leftRightDifference(self, nums: List[int]) -> List[int]:
        total = sum(nums)
        leftSum = 0
        result = []

        for num in nums:
            rightSum = total - leftSum - num
            result.append(abs(leftSum - rightSum))
            leftSum += num

        return result