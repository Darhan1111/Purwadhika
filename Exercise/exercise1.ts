//Exercise 1//

/*1. Write a code to find area of rectangle
    a. Example : length = 5, width = 3
    b. Output : 15*/
let rectangleLength1: number = 5;
let rectangleWidth1: number = 3;
const rectangleArea1: number = rectangleLength1 * rectangleWidth1;
console.log(rectangleArea1);

/*2. Write a code to find perimeter of rectangle
    a. Example : length = 5, width = 3
    b. Output : 16 */
let rectangleLength2: number = 5;
let rectangleWidth2: number = 3;
const rectangleArea2: number = 2 * (rectangleLength2 + rectangleWidth2);
console.log(rectangleArea2);

/*3. Write a code to find diameter, circumference and area of a circle
    a. Example : radius = 5
    b. Output : diameter = 10, circumference = 31.4159, area = 78.539*/
const circleRadius: number = 5;
let circleDiameter: number = circleRadius * 2;
let circleCircumference: number = 2 * Math.PI * circleRadius;
let circumArea: number = circleRadius ** 2 * Math.PI;

console.log(circleDiameter);
console.log(circleCircumference);
console.log(circumArea);
/*4. Write a code to find angles of triangle if two angles are given
    a. Example : a = 80, b = 65
    b. Output : 35*/
const triangleAngle1: number = 80;
const triangleAngle2: number = 65;
const triangleAngle3: number = 180 - (triangleAngle1 + triangleAngle2);
console.log(triangleAngle3);

/*5. Write a code to convert days to years, months and days (Notes: 1 year : 365 days, 1 months : 30 days)
    a. Example : 400 days --> 1 year, 1 month, 5 days
    b. Example : 366 days --> 1 year, 0 month, 1 day*/
const days: number = 400;
const years: number = Math.floor(days / 365);
const months: number = Math.floor((days % 365) / 30);
const dayRemaining: number = Math.floor((days % 365) % 30);
console.log(`${years} year, ${months} month, ${dayRemaining} days`);

/*6. Write a code to get difference between dates in days
    a. Example : date1 = 2022-01-20, date2 = 2022-01-22
    b. Output : 2*/
const date1: any = new Date("2022-01-20");
const date2: any = new Date("2022-01-22");
const differenceDates: any = (date2 - date1) / (24 * 60 * 60 * 1000);
console.log(differenceDates);
