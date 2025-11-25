const numbers = [12, 45, 6, 89, 23];
let largest = numbers[0];
let smallest = numbers[0];
for (let i = 1; i < numbers.length; i++) {
if (numbers[i] > largest) {
largest = numbers[i];
}
if (numbers[i] < smallest) {
smallest = numbers[i];
}
}
console.log(`Original Array: [${numbers}]`);
console.log(`Largest Number: ${largest}`);
console.log(`Smallest Number: ${smallest}`);