// if(something) {
//   do something
// } else {
//   do something else
// }

const id = 100;

// equal to
// if (id == 100) {
//   console.log('Correct');
// } else {
//   console.log('Incorrect');
// }

// Not equal to
// if (id != 100) {
//   console.log('Incorrect');
// } else {
//   console.log('Correct');
// }

// equal to value and type
// if (id === 100) {
//   console.log('Correct');
// } else {
//   console.log('Incorrect');
// }

// // not equal to value and type
// if (id !== 100) {
//   console.log('Correct');
// } else {
//   console.log('Incorrect');
// }

// // test if undefined
// if (typeof id !== 'undefined') {
//   console.log(`The id is ${id}`);
// } else {
//   console.log('No id');
// }

// // Greater or equal then
// if (id >= 200) {
//   console.log('Correct');
// }

// // less then or less then
// if (id <= 200) {
//   console.log('Correct');
// }

// If else
// const color = 'yellow';
// if (color === 'red') {
//   console.log('Color is red');
// } else if (color === 'blue') {
//   console.log('Color is blue');
// } else {
//   console.log("It's different color")
// }

// logical operators
const name = 'Steve';
const age = 68;

// AND &&
if (age > 0 && age < 12) {
  console.log(`${name} is a child`);
} else if (age >= 13 && age <= 19) {
  console.log(`${name} is a teenager`)
} else {
  console.log(`${name} is an adult`);
}


// OR ||
if (age <= 16 || age > 65) {
  console.log(`${name} cannot run in race`);
} else {
  console.log(`${name} is registered for the race`);
}

// Ternary operator
console.log(id === 100 ? 'Correct' : 'Incorrect');

// brackets are optional
// without braces
if (id == 100)
  console.log('Correct')
else
  console.log('incorrect');