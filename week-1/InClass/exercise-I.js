function birthYear(age) {
  return 2021 - age;

}
function personBorn(name, age) {
  const text = name + " " + "was born in" + " " + birthYear(age);
  return text;
}
const ageName = personBorn("Keti", 33)
console.log(ageName);