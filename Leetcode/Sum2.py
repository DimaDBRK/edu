class Solution(object):
    def twoSum(self, nums, target):
        """
        :type nums: List[int]
        :type target: int
        :rtype: List[int]
        """
        seen = {}
        for i in range(len(nums)):
            diff = target - nums[i]
            if diff in seen:
              print(seen)
              return [seen[diff], i]
            else:
              seen[nums[i]] = i

# driver
test = Solution()
print(test.twoSum([1,2,3,4], 4))
