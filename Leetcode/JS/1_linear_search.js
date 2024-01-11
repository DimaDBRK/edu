const arr = [1,2,4,6,7,1,2,4,5,7,8,11,12]
let count = 0;
function linearSearch(arr, item) {
  for (let i = 0; i < arr.length; i++) {
    count += 1;
    if (arr[i] === item) {
      return i;
    }
  }
  return null;
}

console.log(linearSearch(arr, -1));
console.log("O(n)=>", count);