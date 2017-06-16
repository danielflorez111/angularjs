const digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

// for
for (let i = 0; i < digits.length; i++) {
  console.log(digits[i]);
}

console.log("");

// for in
for (const index in digits) {
  console.log(digits[index]);
}

console.log("");

// for of
for (const digit of digits) {
  console.log(digit);
}

console.log("");

for (const digit of digits) {
  if (digit % 2 === 0) {
    continue;
  }
  console.log(digit);
}