console.log("Working with Arrays");
console.log("--------------------");

let nums = [10, 20, 30, 40, 50];

for (const key in nums) {
  console.log(key); // index of each element
}

for (const key of nums) {
  console.log(key); // values of the elements
}
