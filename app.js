const person = {
  firstName: 'Steve',
  lastName: 'Smith',
  age: 36,
  email: 'silentSteve@gmail.com',
  hobbies: ['music', 'sports'],
  adress: {
    city: 'Miami',
    state: 'FL'
  },
  getBirthYear: function () {
    return new Date().getFullYear() - this.age;
  }
}
let val;

val = person;
// Get the specific value 
val = person.firstName;
val = person['firstName'];
val = person.lastName;
val = person['lastName'];
val = person.age;
val = person.hobbies[1];
val = person.adress['city'];
val = person.adress.state;
val = person.getBirthYear();

console.log(val);

const people = [{
    firstName: 'Steve',
    lastName: 'Smith',
    age: 36,
    email: 'silentSteve@gmail.com',
    hobbies: ['music', 'sports'],
    adress: {
      city: 'Miami',
      state: 'FL'
    },
    getBirthYear: function () {
      return new Date().getFullYear() - this.age;
    }
  },
  {
    firstName: 'Greg',
    lastName: 'McFish',
    age: 36,
    email: 'fisher@gmail.com',
    hobbies: ['music', 'fishing'],
    adress: {
      city: 'Alaska',
      state: 'AL'
    },
    getBirthYear: function () {
      return new Date().getFullYear() - this.age;
    }
  },
  {
    firstName: 'Ian',
    lastName: 'Kowalski',
    age: 36,
    email: 'pinguin@gmail.com',
    hobbies: ['breakdance', 'late night show'],
    adress: {
      city: 'New York',
      state: 'NY'
    },
    getBirthYear: function () {
      return new Date().getFullYear() - this.age;
    }
  },
  {
    firstName: 'Nancy',
    lastName: 'Dreamland',
    age: 36,
    email: 'sexyNancy@gmail.com',
    hobbies: ['loopdance', 'bikini'],
    adress: {
      city: 'Hollywood',
      state: 'CA'
    },
    getBirthYear: function () {
      return new Date().getFullYear() - this.age;
    }
  },
];

// const people = [{
//     name: 'John',
//     age: 30
//   },
//   {
//     name: 'Mike',
//     age: 23
//   }
// ];

for (let i = 0; i < people.length; i++) {
  console.log(`${people[i].firstName} ${[people[i].lastName]} interessted in: 
  ${people[i].hobbies}`);
};