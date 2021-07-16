function usernameCheck(username, userType) {
  if (userType === "admin" || userType === "manager") {
    return "Username valid (1)";
  }
  if (username.length > 5 && username.length < 10) {
    return "Username valid (2)";
  } else {
    return "Username invalid"

  }

}
console.log(usernameCheck("Sandro", "guest"));