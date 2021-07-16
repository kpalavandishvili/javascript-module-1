const input = "happy";

function moodMessage(moodString) {
  if (moodString === "happy") {
    return "Good job, you are doing great!";

  } else if (moodString === "sad") {
    return "Every cloud has a silver lining";

  } else if (typeof moodString === "number") {
    return "Beep beep boop";
  }
  return "I am sorry, I am still learning about feelings";


}
console.log(moodMessage("happy"));