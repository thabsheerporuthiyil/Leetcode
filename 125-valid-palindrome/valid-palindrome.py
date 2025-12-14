import re

class Solution:
    def isPalindrome(self, s: str) -> bool:
        s=s.lower()
        cleaned=re.sub(r'[^a-zA-Z0-9]','',s)
        if cleaned==cleaned[::-1]:
            return True
        return False