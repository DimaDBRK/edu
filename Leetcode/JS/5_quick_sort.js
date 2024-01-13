// quick sort 
const arr = [1,2,4,6,7,1,2,4,5,7,8,11,12, 132,1,23,45, 77,88]
let count = 0;

function quickSort(arr) {
  if (arr.length <= 1) {
    return arr
  }

  let pivotIndex = Math.floor(arr.length / 2);
  let pivot = arr[pivotIndex];
  let les = [];
  let greater = [];

  for (let i = 0; i < arr.length; i++) {
    count += 1;
    if (i === pivotIndex) {
      continue
    }

    if (arr[i] < pivot) {
      les.push(arr[i]);
    } else {
      greater.push(arr[i]);
    }
  }

  return [...quickSort(les), pivot, ...quickSort(greater)]

}

console.log(quickSort(arr));
console.log("O(n)=>", count);