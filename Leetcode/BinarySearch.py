class Solution(object):
    def search(self, nums, target):
        """
        :type nums: List[int]
        :type target: int
        :rtype: int
        """
        l = 0
        r = len(nums)-1
        
        while l <= r:
          mid = l + (r -l)//2
          # Check if target is present at mid
          if nums[mid]== target:
            return mid
          
          # If target is greater, ignore left half
          if nums[mid] < target:
            l = mid + 1
          
          # If target is greater, ignore left half
          else:
            r = mid -1
        
        # If we reach here, then the element
        return -1     
        