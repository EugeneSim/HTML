// Comparision operators
/*
1. equals (== and ===)
2. not equals
3. greater than (and equals to)
4. less than (and equals to)

output as a boolean value
*/
console.log("Conditional Operators");
console.log("_____________________________");
console.log(5 == 5); // true equals operator
console.log("5" == 5); // true equals operator
console.log("5" === 5); // false equals operator with type check

console.log(5 != 5); // false not equals operator
console.log("5" != 5); // false not equals operator

console.log(5 > 6); // false greater than operator
console.log(5 < 6); // true less than operator
console.log(5 >= 6); // false greater than equals operator
console.log(5 <= 6); // true less than equals operator

console.log("Logical Operators");
console.log("_____________________________");
// AND OR NOT

let dep = "sales";
let sal = 1500;

//AND operator
let incr = dep == "sales" && sal > 1500;
console.log(incr);

// OR operator
incr = dep == "sales" || sal < 1500;
console.log(incr);

// NOT operator
console.log(!incr);
