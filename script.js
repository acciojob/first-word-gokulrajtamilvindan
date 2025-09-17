function firstWord(s) {
  // your code here
  let trimmedString = s.trim();
  let firstWord = trimmedString.split(" ");
  return firstWord[0];
}

// Do not change the code below

const s = prompt("Enter String:");
alert(firstWord(s));