class Solution(object):
  def reverse(self, x):
    """
    :type x: int
    :rtype: int
    """
    type = 1 if x >= 0 else -1
    res = int(str( x * type)[::-1]) * type
    if -2147483648 <= res <= (2147483648 - 1):
      return res

# Driver
tst = Solution()
print(tst.reverse(1534236469))