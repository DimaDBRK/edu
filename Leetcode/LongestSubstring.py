class Solution(object):
  def lengthOfLongestSubstring(self, s):
    """
    :type s: str
    :rtype: int
    """
    n = len(s)
    maxLength = 0
    charSet = set()
    left = 0
    
    for right in range(n):
        print(right, charSet)
        if s[right] in charSet:
          while s[right] in charSet:
            charSet.remove(s[left])
            left += 1
        charSet.add(s[right])  
        maxLength = max(maxLength, (right - left + 1))
    return maxLength
    
            

# Driver

tst = Solution()

print(tst.lengthOfLongestSubstring("babbbb"))