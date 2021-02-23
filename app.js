// Window object
// Window methods object and properties

// Alert
//window.alert('Hello World');

// Prompt
// const input = prompt();
// alert(input);

// let name = prompt();
// alert(`Hello ${name}`);

// Confirm
// window.confirm("Do you want to delete object?");
// if (confirm("Are you sure?")) {
//   alert("Object deleted");
// } else {
//   alert("Object not deleted");
// }

let val;

// Outer height and width
val = window.outerHeight;
val = window.outerWidth;

// Inner height and width
val = window.innerHeight;
val = window.innerWidth;

// Scrol points
val = window.scrollY;
val = window.scrollX;

// Location Object
val = window.location;
val = window.location.hostname;
val = window.location.port;
val = window.location.href;
val = window.location.search;

// Redirect
//window.location.href = 'http://google.com';
//window.location.reload();

// History Object
//val = window.history.go();
//val = window.history.length;

// Navigator Object
val = window.navigator;
val = window.navigator.geolocation;
val = window.navigator.appCodeName;
val = window.navigator.appVersion;
val = window.navigator.userAgent;
val = window.navigator.platform;
val = window.navigator.vendor;
val = window.navigator.language;

console.log(val);