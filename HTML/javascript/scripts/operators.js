let n1 = 10;
let n2 = 20;

console.log(n1 + n2); // addition oprerator
console.log(n1 - n2); // Subtraction oprerator
console.log(n1 * n2); // Multiplication oprerator
console.log(n1 / n2); // Division oprerator
console.log(n1 % n2); // Modulus oprerator

// increment operator
console.log("post increment operator");
console.log(n1++);
console.log(n1);
console.log("_____________________________");
console.log("pre increment operator");
console.log(++n1); // same as saying n1= n1+1
console.log(n1);
console.log("_____________________________");
// increment operators
// Decrement operators
console.log("post decrement operator");
console.log(n1--); // same as saying n1= n1+1
console.log(n1);
console.log("_____________________________");
console.log("pre decrement operator");
console.log(--n1); // same as saying n1= n1-1
console.log(n1); // same as saying n1= n1-1
console.log("_____________________________");
// using the toString() on numbers
console.log("Using toString on numbers");
console.log(n1.toString()); // '10' decimal
console.log(n1.toString(2)); // '1010' binary
console.log(n1.toString(8)); // 12 octal
let temp = n1.toString();
console.log(typeof temp);
console.log("_____________________________");
console.log("Assignment Operators");
let a = 10;
a += 5; // same as a=a=5
console.log(a);
// current value of a is 15
a -= 5; // same as a=a-5
console.log(a);
console.log("  Assignment Operators with Strings");
// += can also be used with Strings for concatenation
let str = "Hello";
str += " world";
console.log(str);
console.log("_____________________________");
