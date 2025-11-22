class Solution(object):
    def maximumWealth(self, accounts):
        max_val=0
        for n in accounts:
            total=sum(n)
            if(total>max_val):
                max_val=total
        return max_val
        