// Create some arrays
const numbers = [43, 56, 33, 23, 44, 35, 5];
const numbers2 = new Array(1, 2, 3, 4, 5, 6, 7, 7);
const fruits = ['Apple', 'Banana', 'Orange', 'Pearl'];
const mixed = [22, 'Hello', true, {
  a: 1,
  b: 2
}, null, undefined, new Date(), 'everything'];

let val;
// Get array lemght
val = numbers.length;

// Check if is array
val = Array.isArray(numbers);
val = Array.isArray('Hello');

// Get a single value
// Array is 0 based ordered (index start with 0)
val = numbers[0];

// Get last element
val = numbers[numbers.length - 1];

// Inser into Array
numbers[2] = 100;

// Find index of value
val = numbers.indexOf(35);

// MUTATING ARRAYS
// Add on to end
// numbers.push(250);
// // Add on to front
// numbers.unshift(120);
// // Take off from end
// val = numbers.pop();
// // Take off from the from
// val = numbers.shift();
// // Splice values 
// val = numbers.splice(1, 3);
// // Reverse
//numbers.reverse();

// CONCATENATE ARRAYS
val = numbers.concat(numbers2);

// Sort
val = fruits.sort();
val = numbers.sort();

// Use the 'compare' func
val = numbers.sort(function (x, y) {
  return x - y;
})

// Reverse sort
val = numbers.sort(function (x, y) {
  return y - x;
})

// Find
function under50(num) {
  return num < 50
}

function over50(num) {
  return num > 50
}

val = numbers.find(under50);
val = numbers.find(over50);

console.log(numbers);
console.log(val);