const arr =[0,1,2,3,4,5,6,7,8,9,10,11,12]
let count = 0;

function binarySearch(arr, item) {
  let start = 0;
  let end = arr.length;
  let middle;
  let found = false;
  let index = -1;
  while (!found && start <= end) {
    count += 1;
    middle = Math.floor((start + end) / 2);
    if (arr[middle] === item) {
      found = true;
      index = middle;
      return index;
    }

    if (item < arr[middle]) {
      end = middle -1;
    } else {
      start = middle + 1;
    }
    
  }
  return index;
}


console.log(binarySearch(arr, 6));
console.log("O(n)=>", count);