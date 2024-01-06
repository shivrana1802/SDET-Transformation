// JavaScript Basics - If/else statements

// Problem - Solve the grading problem, Available grades - below 35 = fail, >90 =A, >70=B, >60=C, >35-D

// Solution 

const marks = 99;
console.log(marks);

let grade;
if (marks >= 90 && marks <= 100){
    grade = 'Grade A';
}
else if (marks >= 70 && marks < 90 ){
    grade = 'Grade B';
}
else if (marks >= 60 && marks < 70){
    grade = 'Grade C';
}
else if (marks >= 35 && marks < 60){
    grade = 'Grade D';
}
else if (marks < 35){
    grade = 'Failed';
}
else {
    console.log(`You have entered wrong marks`);
}

console.log(`marks is ${marks} and grade is ${grade}`);