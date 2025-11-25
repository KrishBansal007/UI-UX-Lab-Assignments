function processArray(numbers) {
  const evenNumbers = numbers.filter(number => number % 2 === 0);
  const doubledNumbers = evenNumbers.map(number => number * 2);
  const sum = doubledNumbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
  return sum;
}

const numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const finalSum = processArray(numbersArray);

console.log(`Original array: [${numbersArray}]`);
console.log(`The sum of the processed numbers is: ${finalSum}`);
