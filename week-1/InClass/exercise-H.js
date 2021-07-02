function greetingFcn(name, greetingStart) {
  const greeting = greetingStart + name;
  return greeting;
}

const resultGreeting = greetingFcn("Keti", "Hello, My Name is ");
console.log(resultGreeting);