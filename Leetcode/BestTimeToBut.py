class Solution(object):
    def maxProfit(self, prices):
        """
        :type prices: List[int]
        :rtype: int
        """
        profit = 0
        left = 0
      
        for right in range(len(prices)):
            
            if prices[right] - prices[left] < 0:
                left = right
            profit = max(profit, prices[right] - prices[left])
        return profit

# Driver
tst = Solution()
print(tst.maxProfit)