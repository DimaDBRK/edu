class Solution(object):
    def isValid(self, s):
      """
      :type s: str
      :rtype: bool
      """
      parent_dict = {
        "(": 1,
        "{": 1,
        "[": 1,
        ")": -1,
        "}": -1,
        "]": -1,
        }
      parent_type = {
        "(": "t1",
        "{": "t2",
        "[": "t3",
        ")": "t1",
        "}": "t2",
        "]": "t3",
      }
    
      res = 0
      
      typeprev = parent_type[s[0]]
      
      for symb in s:
        
        if typeprev != parent_type[symb] and res != 0:
          
          print("wrong",  typeprev, parent_type[symb] )
          return False
        typeprev = parent_type[symb]
        
        res += parent_dict[symb]
        
        if res not in [0,1]:
            return False
        
      return res == 0
# Driver

tst = Solution()
print(tst.isValid("{[]}"))