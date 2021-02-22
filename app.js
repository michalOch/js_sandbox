// loops and iterations

// FOR
// for (let i = 0; i < 10; i++) {
//   //console.log('Number ' + i);
//   if (i === 2) {
//     console.log("2 is my favourite number");
//     continue;
//   }

//   if (i === 5) {
//     console.log('Stop the loop...')
//     break;
//   }
//   console.log('Number ' + i);
// }

// WHILE LOOP
// let i = 0;
// while (i < 10) {
//   i++;
//   console.log(`Number ${i}`);

//   if (i === 2) {
//     console.log(`${i} is my favourite number`);
//     continue;
//   }

//   if (i > 7) {
//     console.log('Time to break a loop');
//     break;
//   }
// }

// DO WHILE
// let i = 100;
// console.log(i);

// do {
//   console.log('Number ' + i);
//   i++;
// }
// while (i < 10);

// LOOP THROUGH ARRAY
const cars = ['ford', 'audi', 'honda', 'toyota'];

// cars.forEach(function (car, index) {
//   console.log(`${index} : ${car}`);
// });

// console.log('\n');

// cars.forEach(function (car, index, array) {
//   console.log(`${index} : ${car}`);
//   console.log(array);
// });

// for (let i = 0; i < cars.length; i++) {
//   console.log(cars[i]);
// }

// console.log('\n');

// let i = 0;
// while (i < cars.length) {
//   console.log(cars[i]);
//   i++;
// }

// FOREACH
// cars.forEach(function (car) {
//   console.log(car);
// })

// MAP
// const users = [{
//     id: 1,
//     name: 'John'
//   },
//   {
//     id: 2,
//     name: 'Adam'
//   },
//   {
//     id: 3,
//     name: 'Diana'
//   },
//   {
//     id: 4,
//     name: 'Karen'
//   },
//   {
//     id: 5,
//     name: 'Kate'
//   },
//   {
//     id: 6,
//     name: 'Barack'
//   },
//   {
//     id: 7,
//     name: 'Tom'
//   },
//   {
//     id: 8,
//     name: 'Stan'
//   },
//   {
//     id: 9,
//     name: 'Linda'
//   },
//   {
//     id: 10,
//     name: 'Sadam'
//   },
//   {
//     id: 11,
//     name: 'Muhamet'
//   },

// ];

// users.forEach(function (user) {
//   console.log(`User: ${user.id} is ${user.name}`);
// });

// const ids = users.map(function (user) {
//   return user.id;
// });

// console.log(ids);

// FOR IN LOOP
const user = {
  firstName: 'John',
  lastName: 'Doe',
  age: 40
};

for (let x in user) {
  console.log(`${x} : ${user[x]}`);
}