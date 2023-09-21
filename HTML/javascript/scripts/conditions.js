console.log("Conditional Flow Statements");
console.log("-----------------------");
let sal = 3000;
let age = 15;

// if then -- else
if (age >= 18) {
  console.log("you can vote");
} else {
  console.log("you cannot vote");
}

// ternary operator
let vote_status = age >= 18 ? "Can Vote" : "Cannot Vote";
console.log(vote_status);

// If then -- else if -- else
if (sal > 5000) {
  console.log("above avg ");
} else if (sal >= 2000 || sal <= 1000) {
  console.log(" avg ");
} else {
  console.log("below avg ");
}

// Switch case
let day = 8;

switch (day) {
  case 1:
    console.log("monday");
    break;
  case 2:
    console.log("tuesday");
    break;
  // implement for other week days
  default:
    console.log("good day");
    break;
}
