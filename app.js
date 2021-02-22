const color = 'red';

switch (color) {
  case 'red':
    console.log('Its red');
    break;
  case 'blue':
    console.log('Its blue');
    break;
  case 'blue':
    console.log('Its blue');
    break;
  default:
    console.log("Other color");
    break;
}

let day;
switch (new Date().getDay()) {
  case 0:
    day = 'Sunday';
    break;
  case 1:
    day = 'Monday';
    break;
  case 2:
    day = 'Tuesday';
    break;
  case 3:
    day = 'Wednesday';
    break;
  case 4:
    day = 'Thursday';
    break;
  case 5:
    day = 'Friday';
    break;
  case 6:
    day = 'Saturday';
    break;
  default:
    day = 'Undefined';
    break;
}

console.log(`Today is ${day}`);