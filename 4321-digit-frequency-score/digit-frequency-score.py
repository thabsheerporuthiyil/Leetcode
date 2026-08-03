class Solution:
    def digitFrequencyScore(self, n: int) -> int:
        freq={}
        s=str(n)
        res=0
        for i in s:
            if i in freq:
                freq[i]+=1
            else:
                freq[i]=1
        for key,val in freq.items():
            res=res+int(key)*val
        return res