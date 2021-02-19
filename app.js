let val;

// Number to string
val = String(555);
val = String(4 + 41);
// Bool to string
val = String(true);
// Date to string
val = String(new Date());
// Array to string
val = String([1, 2, 3, 4, 5, 6]);
// toString()
val = (5).toString();
val = (true).toString();

// String to number
val = Number('5');
val = Number(true);
val = Number(false);
val - Number(null);
val = Number('hello');
val = Number([1, 2, 3]);
// parseInt
val = parseInt('120');
val = parseFloat('120.53');


// Output
// console.log(val);
// console.log(typeof val);
// only works on strings
// console.log(val.length); 
// only works on number
// console.log(val.toFixed(2));

const val1 = '5';
const val2 = 6;
const sum = parseInt(val1) + val2;
console.log(sum);
console.log(typeof sum);