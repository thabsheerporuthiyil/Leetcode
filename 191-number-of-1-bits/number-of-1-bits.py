class Solution(object):
    def hammingWeight(self, n):
        n=format(n,'b')
        count=0
        for i in n:
            if i=='1':
                count+=1
        return count
        