/*
  This program should check if the array `group` contains only students
*/

var students = ["Omar", "Austine", "Dany", "Swathi", "Lesley", "Rukmini"];
var group = ["Austine", "Dany", "Swathi", "Daniel"];


// var groupIsOnlyStudents = arr => arr.every(v => v.some(v === arr[0])) ;
// console.log(groupIsOnlyStudents); // complete this statement

var groupIsOnlyStudents = group.every(function (groupName) {
  return students.some(function (studentName) {

    return groupName === studentName;

  })
   
})

if (groupIsOnlyStudents) {
  console.log("The group contains only students");
} else {
  console.log("The group does not contain only students");
}

/* EXPECTED RESULT */

// The group does not contain only students
