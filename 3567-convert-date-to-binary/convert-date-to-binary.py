class Solution:
    def convertDateToBinary(self, date: str) -> str:
        d = date.split("-")
        
        for id,val in enumerate(d):
            d[id] = bin(int(val))[2:]

        return "-".join(d)
