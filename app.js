const firstName = 'William';
const lastName = "Johnson";
const age = 36;
const str = "Hello There, My name is Michal and I'd like to meet you better";
const tags = 'web design, web development';

let val;

val = firstName + lastName;

// Concatenation
val = firstName + " " + lastName;
// Appending
val = 'Brad ';
val += 'Traversy';

val = 'Hello, my name is ' + firstName + 'and I am ' + age + ' years old';

// Escaping
val = 'That\'s awensom, I can\'t wait';
val = "That's awensom, I can't wait";

// Lenght 
val = firstName.length;

// concat
val = firstName.concat(' ', lastName);

// to upper/to lower
val = firstName.toUpperCase();
val = firstName.toLowerCase();

val = firstName[2];

// indexof
val = firstName.indexOf('i');
val = firstName.lastIndexOf('l');

// charAt
val = firstName.charAt(6);
val = firstName.charAt('6');

// get last character
val = firstName.charAt(firstName.length - 1);

// get substrings
val = firstName.substr(0, 4);

// slice
val = firstName.slice(0, 4);
val = firstName.slice(-3);

// split()
val = str.split(' ');
val = tags.split(',');

// replace
val = str.replace(' ', '_');

// includes()
val = str.includes(' ');


console.log(val);