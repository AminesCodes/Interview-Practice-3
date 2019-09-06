// Given a positive integer number and a target digit, write a function that returns true if the target digit is within the number

const checkForOne = (num, digit) => {
    while (num > 0) {
      if (num % 10 === digit) {
        return true;
      } else {
        num = parseInt(num / 10);
      }
      console.log(num)
    }
    return false;
  }