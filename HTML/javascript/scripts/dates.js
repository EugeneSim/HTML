console.log("Working with Dates");
console.log("--------------------");
let today = new Date();
console.log(today);
console.log(today.getDate());
console.log(today.getDay());
console.log(today.getMonth() + 1);
console.log(today.getFullYear());
console.log(today.getHours());
console.log(today.getMinutes());
console.log(today.getSeconds());

console.log("Working with custom Dates");
console.log("--------------------");

let b = new Date(1984, 4);
let c = new Date(1985, 1, 31);
console.log(c);
//let d = new Date(1985, 5, 31,);
