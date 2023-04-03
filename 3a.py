class Solution:
    def lengthOfLongestSubstring(self, s: str) -> int:
        i, j = 0, 0
        length = 0
        hash = {}

        while j < len(s):
            if s[j] in hash:
                i = max(i, hash[s[j]] + 1)
            hash[s[j]] = j
            j += 1
            length = max(length, j - i)

        return length
