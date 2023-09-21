// three ways to assign values strings;
// 1. double quotes
// 2. single quotes
// 3. back tick -- template literals

let firstname = "john";
let lastname = "doe";
console.log(firstname + " " + lastname);
let fullname = firstname + " " + lastname;
console.log("the first employee's name is: " + fullname);
// escape characters use "\'" for single quote
console.log("the first employee's name is: " + fullname);
// string interpolation using template literals
console.log(`the first employee's name is ${firstname}`);

// length property
let len = firstname.length;
console.log(len);

//methods
console.log(firstname.toUpperCase());
console.log(firstname.toLowerCase());
console.log(firstname.charAt(1));
console.log(firstname.substring(2));
