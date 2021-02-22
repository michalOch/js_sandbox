// FUNCTION DECLARATIONS
/********************************************** */

// before ES6
// function greet(firstName, lastname) {
//   if (typeof firstName === 'undefined') {
//     firstName = 'John';
//   }
//   if (typeof lastname === 'undefined') {
//     lastname = 'Doe';
//   }
//   return `Hello ${firstName} ${lastname}`;
// }

//after ES6
function greet(firstName = 'John', lastname = 'Doe') {
  // console.log('Hello');
  return `Hello ${firstName} ${lastname}`;
}

// console.log(greet('Mark', 'Hamilton'));
// console.log(greet());

// FUNCTION EXPRESSIONS
/********************************************** */
const square = function (x = 1) {
  return x * x;
};

// console.log(square());
// console.log(square(10));

// IMMEDIATELLY INVOKABLE FUNCTION EXPRESSIONS - IIFEs
/********************************************** */

// (function () {
//   console.log('IIFE Ran..');
// })();

// (function (name) {
//   console.log('Hello ' + name);
// })('Patrick');

// PROPERTY METHODS 
/********************************************** */
const todo = {
  add: function () {
    console.log('Add todo...');
  },
  edit: function (id) {
    console.log(`Edit todo ${id}`);
  }
}

todo.delete = function () {
  console.log('Delete todo..');
}

todo.add();
todo.edit(15);
todo.delete();