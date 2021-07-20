/*
  Write a function that receives an array of string, and console.log all strings that start with letter 'T'
  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/startsWith
*/


const daysOfWeek = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];
function startingWith(letterT) {
  for (let i = 0; i < letterT.length; i++) {
    let days = letterT[i];
    if (days[0] === "T") {
      console.log(letterT[i]);
    }
  }
}
startingWith(daysOfWeek)
