// Write a program to print the first non-repeated character from a string?
function firstNonRepstr(input) {
  input = input.split("");
  for (let i = 0; i < input.length; i++) {
    let cnt = 0;
    for (let j = 0; j < input.length; j++) {
      if (input[i] === input[j]) {
        cnt++;
      }
    }
    if (cnt === 1) {
      return input[i];
    }
  }
}
console.log(firstNonRepstr("baaccbd"));
