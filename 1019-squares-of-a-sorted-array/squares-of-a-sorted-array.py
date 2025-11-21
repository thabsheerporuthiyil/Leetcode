class Solution(object):
    def sortedSquares(self, nums):
        res=[]
        for n in nums:
            res.append(n**2)
            res.sort()
        return res
        