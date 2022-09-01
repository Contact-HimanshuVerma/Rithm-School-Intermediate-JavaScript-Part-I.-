console.clear()
/*
For each of the exercises below, assume you are starting with the following people array.

let people = ["Greg", "Mary", "Devon", "James"];

Using a loop, iterate through this array and console.log all of the people.
Write the command to remove "Greg" from the array.
Write the command to remove "James" from the array.
Write the command to add "Matt" to the front of the array.
Write the command to add your name to the end of the array.
Using a loop, iterate through this array and after console.log-ing "Mary", exit from the loop.
Write the command to make a copy of the array using slice. The copy should NOT include "Mary" or "Matt".
Write the command that gives the indexOf where "Mary" is located.
Write the command that gives the indexOf where "Foo" is located (this should return -1).
Redefine the people variable with the value you started with. Using the splice command, remove "Devon" from the array and add "Elizabeth" and "Artie". Your array should look like this when you are done ["Greg", "Mary", "Elizabeth", "Artie", "James"].
Create a new variable called withBob and set it equal to the people array concatenated with the string of "Bob".
*/

let people = ["Greg", "Mary", "Devon", "James"];

// 1

for (let i=0; i<people.length;i++) {
  console.log(people[i]);
}

//2
people.shift()
console.log(people);

//3
people.pop()
console.log(people);

//4

people.unshift("Matt");
console.log(people);

//5

people.push("Himanshu")
console.log(people);

//6  Invalid code
// for (let i = 0; i<people.length;i++){
//  if(console.log(people[i])==="Mary") {
//    break
//  } else {
//    console.log(people[i])
//  }
// }

//7
let copyArr = people.slice(2,4);
console.log(copyArr);

//8

console.log(people.indexOf("Mary"));

//9

console.log(people.indexOf("Foo"));

//10 Invalid code

console.log(people);

//11

let withBob = people.concat("Bob");
console.log(withBob);