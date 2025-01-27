/*1. Write a code to check whether the number is odd or even
    a. Example: 25 --> odd number, 2 --> even number*/
const n1: number = 10;

if (n1 % 2 === 0) {
  console.log("genap");
} else {
  console.log("ganjil");
}
/*2. Write a code to check whether the number is prime number or not
    a. Example : 7 --> 7 is a prime number
    b. Example : 6 --> 6 is not a prime number*/
const n2: number = 7;
let isPrime: boolean = true;

for (let i = 2; i < n2; i++) {
  if (n2 % i === 0) {
    isPrime = false;
    break;
  }
}
console.log(isPrime ? "bilangan prima" : "bukan bilangan prima");

/*3. Write a code to find the sum of the numbers 1 to N
    a. Example : 5 --> 1 + 2 + 3 + 4 + 5 = 15
    b. Example : 3 --> 1 + 2 + 3 = 6 */
let n3: number = 5;
let sum: number = 0;

for (let i = 1; i <= n3; i++) {
  sum += i;
}
console.log(sum);
/* 4. Write a code to find factorial of a number
    a. Example : 4! --> 4 x 3 x 2 x 1 = 24
    b. Example : 6! --> 6 x 5 x 4 x 3 x 2 x 1 = 720 */
let n4: number = 4;
let factorial: number = 1;

for (let i = n4; i > 0; i--) {
  factorial *= i;
}
console.log(factorial);

/* 5. Write a code to print the first N fibonacci numbers
    a. Example : 15 --> 610 */
let n: number = 15;
let a: number = 0;
let b: number = 1;
let i: number = 0;
let fibonacciNumber: number[] = [];

if (n <= 0) {
  console.log("Masukkan angka");
} else {
  while (i <= n) {
    fibonacciNumber.push(a);
    let temp: number = a;
    a = b;
    b = temp + b;
    i++;
  }
}
console.log(fibonacciNumber);
