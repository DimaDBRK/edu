const isPalindrome = (number) => {
  if (isNaN(number)) {
    return "Input value is not a number!";
  }

  if (number < 0) {
    return false;
  }

  let copy = number;
  let revers = 0;

  while (copy > 0) {
    const digit = copy % 10;
    revers = revers * 10 + digit;
    copy = Math.floor(copy/10);

  };

  return number === revers;
}

// Driver
console.log("125=>",isPalindrome(125));
console.log("121=>",isPalindrome(121));
console.log("0=>",isPalindrome(0));