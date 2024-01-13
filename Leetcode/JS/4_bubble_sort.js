// bubble sort (пузырьковая = всплытие)
const arr = [1,2,4,6,7,1,2,4,5,7,8,11,12]
let count = 0;

function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[j+1] < arr[j])  {
        let temp = arr[j];
        arr[j] = arr[j+1];
        arr[j+1]= temp;
      }
      count += 1;
    }
  }
  return arr;
}

console.log(bubbleSort(arr));
console.log("O(n)=>", count);