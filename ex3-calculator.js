const maxWorkshop = 60;
const workshopWeight = 20;
const maxScore = 100;
const targetScore = 80;

let workshopRaw = 48;
let attendance = 9;
let project = 17;
let midterm = 15;
let final = 24;

let workshopScore = (workshopRaw / maxWorkshop) * workshopWeight;
let totalScore = workshopScore + attendance + project + midterm + final;
let percentage = (totalScore / maxScore) * 100;
let remaining = targetScore - totalScore;

console.log(`คะแนน Workshop = ${workshopScore.toFixed(2)}`);
console.log(`คะแนนรวม = ${totalScore.toFixed(2)}`);
console.log(`คิดเป็นเปอร์เซ็นต์ = ${percentage.toFixed(2)}%`);
console.log(`ขาดอีก ${remaining.toFixed(2)} คะแนน ถึงจะได้ 80 คะแนน`);