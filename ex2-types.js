const name = "สวัสดี";
const age = 20;
const isStudent = true;
let score;
const emptyValue = null;
const colors = ["แดง", "เขียว", "น้ำเงิน"];

console.log(name, "| ชนิด:", typeof name);
console.log(age, "| ชนิด:", typeof age);
console.log(isStudent, "| ชนิด:", typeof isStudent);
console.log(score, "| ชนิด:", typeof score);
console.log(emptyValue, "| ชนิด:", typeof emptyValue);
console.log(colors, "| ชนิด:", typeof colors);

console.log(typeof null);

let myVariable;
console.log(typeof myVariable);

const nanValue = Number("abc");
console.log(typeof nanValue);
console.log(Number.isNaN(nanValue));

const inputAge = "20";
const inputScore = "85.5";

const newAge = Number(inputAge) + 5;
console.log(newAge);

const newScore = Number(inputScore);
console.log(newScore.toFixed(1));

console.log(inputAge == 20);
console.log(inputAge === 20);