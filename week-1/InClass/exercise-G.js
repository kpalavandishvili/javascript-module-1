let numberOfStudents = 15;
let numberOfMentors = 8;
let totalOfStudentsAndMentors = numberOfStudents + numberOfMentors;

let percentageOfStudents = Math.round(numberOfStudents / totalOfStudentsAndMentors * 100);
let percentageOfMentors = Math.round(numberOfMentors / totalOfStudentsAndMentors * 100);

console.log("Percentage students:", percentageOfStudents + "%");
console.log("Percentage mentors:", percentageOfMentors + "%");
