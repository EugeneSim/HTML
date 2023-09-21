console.log("Working with Arrays");
console.log("--------------------");
// declaration of an array
let names = ["john", "jill", "bill"];
console.log(names); // print the array
console.log(names.length); // get the # of elements
console.log(names[1]); // element at index 1 accessed
console.log(names[3]); // non existing element accessed

var dept = ["sales", "admin", "mktg", "tech"];
console.log(dept);

console.log("Working with Arrays Methods");
console.log("--------------------");
// array methods
//push -- adds elements to the last
names.push("alex");
console.log(names); // print the array after push
//pop() -- removes the last element
let str = names.pop();
console.log(str + " has been removed from the list");
// unshift -- adds an element to the beginning
names.unshift("Jane");
console.log(names);
//shift -- removes the first element
str = names.shift();
console.log(str + " has been removed from the list");
//concat -- joins two arrays
let info = names.concat(dept);
console.log(info);
//Join -- joins the elements with the given seperator
console.log(names.join()); // default seperator is ,
console.log(names.join("-"));
console.log(names.join(" "));
//sort -- sorts the elements in increments fashion
console.log(names.sort());
//reverse
console.log(names.reverse());
// add elements at a given index
let tmp = names.splice(2, 1, "Jane");
console.log(names);
console.log(tmp);
