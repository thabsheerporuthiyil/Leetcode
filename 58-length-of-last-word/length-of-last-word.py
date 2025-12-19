class Solution:
    def lengthOfLastWord(self, s: str) -> int:
        words = s.split()
        wordLength = len(words[-1])
        return wordLength