/* 1. Write a code to display the multiplication table of a given integer
    a. Example : Number --> 9
    b. Output : 9 x 1
                9 x 2 */
const q1: number = 9;

for (let i: number = 1; i <= 10; i++) {
  console.log(`${q1} x ${i} = ${q1 * i}`);
}
/* 2. Write a code to check whether a string is a palindrome or not
    a. Exmaple : 'madam' --> palindrome */

/* 3. Write a code to convert centimeter to kilometer
    a. Example : 100.000 --> "1 km" */
const q3: number = 100000;
const km: number = q3 / 100000;
const convert: string = `${q3} cm sama dengan ${km} km`;
console.log(convert);

/* 4. Write a code to format number as currency (IDR)
    a. Example : 1000 --> "Rp.1000,00" */
const q4: number = 1000;
const rupiah: string = q4.toLocaleString();
const format: string = `Rp.${q4},00`;
console.log(format);

/* 5. Write a code to remove the first occurence of a given "search string" from a string
    a. Example : string = "Hello world", search string = "ell" --> "Ho world" */
const q5: string = "Hello World";
const search: string = "ell";
const string: string = q5.replace(search, "");
console.log(string);

/* 6. Write a code to capitalize the first letter of each word in a string
    a. Example : "hello world" --> "Hello World"*/
const q6: string = "hello world";
const capital: string = q6.replace(/\b\w/g, (match) => match.toUpperCase());
console.log(capital);

/* 7. Write a code to swap the case of each character from string
    a. Example : 'The QuiCK BrOwN Fox' --> 'tHE qUIck bRoWn fOX' */
const q7: string = "The QuiCK BrOwN Fox";
const swap: string = q7
  .split("")
  .map((letter) =>
    letter === letter.toUpperCase()
      ? letter.toLowerCase()
      : letter.toUpperCase()
  )
  .join("");
console.log(swap);
/* 8. Write a code to find the largest of two given integers
    a. Example ; num1= 42, num2= 27 --> 42 */
let num1: number = 42;
let num2: number = 27;
let hasil: string;
if (num1 > num2) {
  console.log(`${num1} lebih besar dari ${num2}`);
  hasil = `${num1} lebih besar dari ${num2}`; // Tetapkan nilai ke 'hasil' di dalam blok if
} else {
  console.log(`${num1} lebih kecil atau sama dengan ${num2}`); // Lebih tepat: lebih kecil atau sama dengan
  hasil = `${num1} lebih kecil atau sama dengan ${num2}`; // Tetapkan nilai ke 'hasil' di dalam blok else
}
console.log(hasil);
/* 9. Write a conditional statement to sort three numbers
    a. Example : num1 = 42, num2 = 27, num3 = 18 → 18, 27, 42 */
let num01: number = 42;
let num02: number = 27;
let num03: number = 18;

if (num01 > num02) {
  let sort = num01;
  num01 = num02;
  num02 = sort;
}

if (num01 > num03) {
  let sort = num01;
  num01 = num03;
  num03 = sort;
}

if (num02 > num03) {
  let sort = num02;
  num02 = num03;
  num03 = sort;
}
console.log(num01, num02, num03);

/* 10. Write a code that shows 1 if the input is a string, 2 if the input is a number, and 3 for others data type.
    a. Example : “hello” → 1 */
const q9: any = "hello";
let result: any;
if (typeof q9 === "string") {
  result = 1;
} else if (typeof q9 === "number") {
  result = 2;
} else {
  result = 3;
}
console.log(`Input: ${q9}, Result: ${result}`);
/* 11. Write a code to change every letter a into * from a string of input
    a. Example : ‘An apple a day keeps the doctor away’ -> `*n *pple * d*y keeps the doctor *w*y` */
const q10: string = "An apple a day keeps the doctor away";
const replace10: string = q10.replace(/a/gi, "*");

console.log(replace10);
