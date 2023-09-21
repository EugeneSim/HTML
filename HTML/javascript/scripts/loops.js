console.log("Loop  Statements");
console.log("-----------------------");

// for loop
// while loop
// do while loop

// three req's of a any given loop
/*
loop variable
exit condition
loop variable inrement / decrement
*/

console.log("--------For Loops---------------");
// for loop
for (let i = 0; i < 11; i++) {
  //document.write("<h4>" + i + "</h4>");
  console.log(i);
}
console.log("--------While Loops---------------");
// while loop
let loopvar = 0;
while (loopvar < 11) {
  console.log(loopvar);
  loopvar++;
}

console.log("-------- Do While Loops---------------");
// dowhile loop
loopvar = 0;
do {
  console.log(loopvar);
  loopvar++;
} while (loopvar < 11);

console.log("-------- Break---------------");
// break  keyword
for (let i = 0; i < 11; i++) {
  //document.write("<h4>" + i + "</h4>");
  if (i == 5) break;
  console.log(i);
}

console.log("-------- Continue---------------");
// break  keyword
for (let i = 0; i < 11; i++) {
  //document.write("<h4>" + i + "</h4>");
  if (i == 5) continue;
  console.log(i);
}
