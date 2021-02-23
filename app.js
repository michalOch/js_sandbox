// Scope

// Global scope
var a = 1;
let b = 2;
const c = 3;

// function test() {
//   var a = 4;
//   let b = 5;
//   const c = 6;
//   console.log('Function Scope ', a, b, c);
// }
// test();

// Block level scope
// if (true) {
//   // Block scope
//   var a = 4;
//   let b = 5;
//   const c = 6;
//   console.log('Block(if) Scope ', a, b, c);
// }

for (var a = 0; a < 10; a++) {
  console.log(`loop: ${a}`);
}

console.log('Global Scope ', a, b, c);