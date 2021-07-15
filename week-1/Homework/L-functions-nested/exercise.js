var mentor1 = "Daniel";
var mentor2 = "Irina";
var mentor3 = "Mimi";
var mentor4 = "Rob";
var mentor5 = "Yohannes";

function transformName(name) {
  const toUpper = name.toUpperCase();
  return toUpper;
}

function logName(name) {
  const greeting = `HELLO ${name}`
  console.log(greeting);
}

const mentors = [
  mentor1, mentor2, mentor3, mentor4, mentor5
]

function finalGreeting(ofMentors) {
  ofMentors.forEach((mentor) => {
    console.log(mentor);
    const upperName = transformName(mentor);
    logName(upperName);
  })
}
finalGreeting(mentors);
