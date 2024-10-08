//Write your solutions in this file, don't forget to test your functions.

// Question 1

const countFromOne = (num) => {
  for (let i = 1; i <= num; i++) {
    console.log(i);
  }
};
countFromOne(50);

// Question 2

const countEveryOdd = (num) => {
  for (let i = 1; i <= num; i++) {
    if (i % 2 === 1) {
      console.log(i);
    }
  }
  return "done";
};
console.log(countEveryOdd(11));

// Question 3

const isNegative = (num) => {
  if (num < 0) {
    return true;
  } else {
    return false;
  }
};
console.log(isNegative(-8)); // we have to console.log to see what it will return

// Question 4

const betweenFiveAndTwenty = (num) => {
  if (num >= 5 && num <= 20) {
    return true;
  } else {
    return false;
  }
};
console.log(betweenFiveAndTwenty(3)); // return false

// Question 5

const sumOfThreeOrFive = () => {};

// Question 6

const isAllLowerCase = () => {};

// Question 7 *Bonus*

const countMultiplesOfFive = () => {};
