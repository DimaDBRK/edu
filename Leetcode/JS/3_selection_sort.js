const arr = [1,2,4,6,7,1,2,4,5,7,8,11,12]
let count = 0;

function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let indexMin = i;
    
    for (let j = i+1; j < arr.length; j++) {
      if (arr[j] < arr[indexMin] ) {
        indexMin = j;
      }
      count += 1;
    }

    let temp = arr[i]
    arr[i] = arr[indexMin]
    arr[indexMin] = temp
  }
  
  return arr;
}

console.log(selectionSort(arr));
console.log("O(n)=>", count);