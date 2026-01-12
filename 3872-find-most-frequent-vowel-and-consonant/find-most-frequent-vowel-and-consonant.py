class Solution:
    def maxFreqSum(self, s: str) -> int:
        vowels = "aeiou"
        
        max_vowel = 0
        max_consonant = 0

        for ch in s:
            count = 0
            for c in s:
                if c == ch:
                    count += 1

            if ch in vowels:
                if count > max_vowel:
                    max_vowel = count
            else:
                if count > max_consonant:
                    max_consonant = count

        return max_vowel + max_consonant
